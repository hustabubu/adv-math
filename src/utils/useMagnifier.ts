import { defineComponent, ref, onMounted, onUnmounted, watch, createApp, h, App } from 'vue';
import { domToPng } from 'modern-screenshot';
import { throttle, debounce } from './utils';

const MASK_OPACITY = 0.2;
const GRADIENT_INNER_THICKNESS = 15;
const DEFAULT_RADIUS = 100;
const DEFAULT_SCALE = 2;
const WHEEL_RADIUS_INCREMENT = 10;
const DURATION = 100;

const Magnifier = defineComponent({
  props: {
    slidevScale: {
      type: Number,
      default: 1,
    },
    radius: {
      type: Number,
      default: DEFAULT_RADIUS,
    },
    scale: {
      type: Number,
      default: DEFAULT_SCALE,
    },
  },
  emits: ['before-leave'],
  setup(props, { emit }) {
    const targetEl = ref<HTMLElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const ctx = ref<CanvasRenderingContext2D | null>(null);
    const img = ref<HTMLImageElement | null>(null);
    let frameId: number | null = null;
    const rect = ref<DOMRect | null>(null);

    let throttleHandleMouseMove: ((e: MouseEvent) => void) | null = null;
    let debounceHandleWheel: ((e: WheelEvent) => void) | null = null;

    const init = async () => {
      if (!targetEl.value) return;

      rect.value = targetEl.value.getBoundingClientRect();
      try {
        const dataUrl = await domToPng(targetEl.value);
        if (!dataUrl) {
          throw new Error('生成图片数据失败');
        }
        img.value = new Image();
        img.value.src = dataUrl;
        img.value.onload = () => {
          if (!targetEl.value || !rect.value) return;
          canvas.value = document.createElement('canvas');
          ctx.value = canvas.value.getContext('2d');
          if (!ctx.value) {
            throw new Error('无法获取CanvasRenderingContext2D');
          }
          canvas.value.width = rect.value.width / props.slidevScale;
          canvas.value.height = rect.value.height / props.slidevScale;
          canvas.value.classList.add("absolute", "top-0", "left-0");
          targetEl.value.appendChild(canvas.value);
          setupEventListeners();
        };
        img.value.onerror = () => {
          throw new Error('加载图片失败');
        };
      } catch (error) {
        console.error('初始化时发生错误:', error);
        cleanup();
      }
    };

    const setupEventListeners = () => {
      if (!targetEl.value) return;
      throttleHandleMouseMove = throttle(handleMouseMove, DURATION);
      targetEl.value.addEventListener('mousemove', throttleHandleMouseMove);
      debounceHandleWheel = debounce(handleWheel, DURATION / 10);
      document.addEventListener('wheel', debounceHandleWheel, { passive: true });
      document.addEventListener('keyup', handleKeyupEsc);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!rect.value) return;

      const delta = e.deltaY;
      let newRadius = props.radius;
      if (delta < 0) {
        newRadius = Math.min(newRadius + WHEEL_RADIUS_INCREMENT, rect.value.width);
      } else if (newRadius > DEFAULT_RADIUS) {
        newRadius = Math.max(newRadius - WHEEL_RADIUS_INCREMENT, DEFAULT_RADIUS);
      }

      if (newRadius !== props.radius) {
        updateRadius(newRadius);
      }
    };

    const updateRadius = (newRadius: number) => {
      props.radius = newRadius;
      if (rect.value) {
        updateDraw({ x: rect.value.width / 2, y: rect.value.height / 2 }, newRadius);
      }
    };

    const handleKeyupEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('按下esc键');
        cleanup();
      }
    };

    const cleanup = () => {
      if (throttleHandleMouseMove && targetEl.value) {
        targetEl.value.removeEventListener('mousemove', throttleHandleMouseMove);
      }
      if (debounceHandleWheel) {
        document.removeEventListener('wheel', debounceHandleWheel);
      }
      document.removeEventListener('keyup', handleKeyupEsc);
      if (canvas.value && targetEl.value) {
        targetEl.value.removeChild(canvas.value);
      }
      canvas.value = null;
      ctx.value = null;
      img.value = null;
      frameId = null;

      emit('before-leave');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!rect.value) return;
      const x = (e.clientX - rect.value.left) / props.slidevScale;
      const y = (e.clientY - rect.value.top) / props.slidevScale;
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(() => updateDraw({ x, y }, props.radius));
    };

    const updateDraw = (mousePosition: { x: number, y: number }, radius: number) => {
      if (!ctx.value || !canvas.value || !img.value) {
        console.error('Canvas、Context 或 Image 未初始化');
        return;
      }
      const { x, y } = mousePosition;
      const clipRadius = radius / props.scale;
      const clipX = Math.max(x - clipRadius, 0);
      const clipY = Math.max(y - clipRadius, 0);
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
      ctx.value.save();
      drawMask();
      ctx.value.beginPath();
      ctx.value.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.value.clip();
      const grad = ctx.value.createRadialGradient(x, y, radius - GRADIENT_INNER_THICKNESS, x, y, radius);
      grad.addColorStop(0, 'white');
      grad.addColorStop(1, `rgba(162, 153, 153, ${MASK_OPACITY})`);
      ctx.value.fillStyle = grad;
      ctx.value.fill();
      ctx.value.drawImage(img.value, clipX, clipY, 2 * clipRadius, 2 * clipRadius, x - radius, y - radius, 2 * radius, 2 * radius);
      ctx.value.restore();
    };

    const drawMask = () => {
      if (!ctx.value || !canvas.value) return;
      ctx.value.fillStyle = `rgba(0, 0, 0, ${MASK_OPACITY})`;
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);
    };

    onMounted(init);
    onUnmounted(cleanup);

    watch(() => props.radius, (newRadius) => {
      if (rect.value) {
        updateDraw({ x: rect.value.width / 2, y: rect.value.height / 2 }, newRadius);
      }
    });

    watch(() => props.scale, (newScale) => {
      if (rect.value) {
        updateDraw({ x: rect.value.width / 2, y: rect.value.height / 2 }, props.radius);
      }
    });

    return {
      targetEl,
      canvas,
      ctx,
      img,
      setupEventListeners,
      handleWheel,
      handleKeyupEsc,
      cleanup,
      handleMouseMove,
      updateDraw,
      drawMask,
    };
  },
  template: `
    <div ref="targetEl" class="relative">
      <canvas v-if="canvas" ref="canvasRef" class="absolute top-0 left-0" />
    </div>
  `,
});

export function createMagnifier(el: HTMLElement, beforeLeave: () => void, options: { radius?: number; scale?: number; slidevScale?: number } = {}) {
  const { radius = DEFAULT_RADIUS, scale = DEFAULT_SCALE, slidevScale = 1 } = options;

  const app: App = createApp({
    setup() {
      return () => h(Magnifier, {
        slidevScale,
        radius,
        scale,
        onBeforeLeave: beforeLeave,
      });
    },
  });

  const magnifierContainer = document.createElement('div');
  magnifierContainer.style.position = 'relative';
  magnifierContainer.style.width = '100%';
  magnifierContainer.style.height = '100%';

  el.appendChild(magnifierContainer);
  app.mount(magnifierContainer);
}
