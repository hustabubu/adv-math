// 要拿到内置缩放值 useSlideContext().$scale.value，从外面传入，定义为 slidevScale
// 【值是 1 时，鼠标位置正确，否则需要调整代码】从而才能计算出**鼠标的正确位置**！！！！
// 【这是计算属性，只在 slide 内的组件（包括自定义的vue组件）的 setup() 顶层作用域内才能正确拿到，其它地方拿不到或不正确】
// 解决方案一：在 vue 组件调用 useMagnifierDom(el,slidevScale,radius,scale) 时，把 $scale.value传入进来。OK
// 解决方案二：考虑重构此组件，使用 Vue 组件而非直接操作 DOM，以提高可维护性和代码质量。
import { domToPng } from 'modern-screenshot';
import { throttle, debounce } from './utils.ts';

const MASK_OPACITY = 0.2;
const GRADIENT_INNER_THICKNESS = 15;
const DEFAULT_RADIUS = 100;
const DEFAULT_SCALE = 2;
const WHEEL_RADIUS_INCREMENT = 10;
const DURATION = 100;

/**
 * 生成放大镜组件
 * @param {HTMLElement} el 放大镜组件的目标元素
 * @param {Function} beforeLeave 离开放大镜组件的回调函数
 * @param {object} options 配置对象
 * @param {number} options.radius 放大镜半径，默认为 DEFAULT_RADIUS (100)
 * @param {number} options.scale 放大镜缩放比例，默认为 DEFAULT_SCALE (2)
 * @param {number} options.slidevScale 调用放大镜所在的界面的缩放值，默认为 1
 * @returns 没有返回值
 */

export function useMagnifierDom(el: HTMLElement, beforeLeave: () => void, { radius = DEFAULT_RADIUS, scale = DEFAULT_SCALE, slidevScale = 1 }) {
    let canvas: HTMLCanvasElement | null;
    let ctx: CanvasRenderingContext2D | null;
    let img: HTMLImageElement | null;
    let frameId: number;
    const rect = el.getBoundingClientRect();
    let throttleHandleMouseMove: (e: MouseEvent) => void;
    let debounceHandleWheel: (e: WheelEvent) => void;

    async function init() {
        try {
            const dataUrl = await domToPng(el);
            if (!dataUrl) {
                throw new Error('生成图片数据失败');
            }
            img = new Image();
            img.src = dataUrl;
            img.onload = () => {
                canvas = document.createElement('canvas');
                ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('无法获取CanvasRenderingContext2D');
                }
                canvas.width = rect.width / slidevScale;
                canvas.height = rect.height / slidevScale;
                canvas.setAttribute("class", "absolute top-0 left-0");
                el.appendChild(canvas);
                setupEventListeners();
            };
            img.onerror = () => {
                throw new Error('加载图片失败');
            };

        } catch (error) {
            console.error('初始化时发生错误:', error);
            cleanup();
        }
    };

    function setupEventListeners() {
        throttleHandleMouseMove = throttle(handleMouseMove, DURATION);
        el.addEventListener('mousemove', throttleHandleMouseMove);
        debounceHandleWheel = debounce(handleWheel, DURATION / 10);
        document.addEventListener('wheel', debounceHandleWheel, { passive: true });
        document.addEventListener("keyup", handleKeyupEsc);
    };

    function handleWheel(e: WheelEvent) {
        const delta = e.deltaY;
        if (delta < 0) {
             radius = Math.min(radius + WHEEL_RADIUS_INCREMENT, rect.width);
            // radius += WHEEL_RADIUS_INCREMENT;
        } else if (radius > DEFAULT_RADIUS) {
            radius = Math.max(radius - WHEEL_RADIUS_INCREMENT, DEFAULT_RADIUS);
            //radius -= WHEEL_RADIUS_INCREMENT;
        }
        updateDraw({ x: e.clientX - rect.left, y: e.clientY - rect.top }, radius);
    };

    function handleKeyupEsc(e: KeyboardEvent) {
        if (e.key === "Escape") {
            console.log('按下esc键');
            cleanup();
        }
    };

    function cleanup() {
        if (throttleHandleMouseMove) {
            el.removeEventListener('mousemove', throttleHandleMouseMove);
        };
        if (debounceHandleWheel) {
            document.removeEventListener('wheel', debounceHandleWheel);
        };
        document.removeEventListener('keyup', handleKeyupEsc);
        if (canvas) {
            el.removeChild(canvas);
            canvas = null;
            ctx = null;
            img = null;
            frameId = 0;
        };
        beforeLeave();
    };

    function handleMouseMove(e: MouseEvent) {
        const x = (e.clientX - rect.left) / slidevScale;
        const y = (e.clientY - rect.top) / slidevScale;
        frameId && cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => updateDraw({ x, y }, radius));
    };

    function updateDraw(mousePositon: { x: number, y: number }, radius: number) {
        if (!ctx || !canvas) {
            console.error('Canvas 或 Context 未初始化');
            return;
        }
        const { x, y } = mousePositon;
        const clipRadius = radius / scale;
        const clipX = Math.max(x - clipRadius, 0);
        const clipY = Math.max(y - clipRadius, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        drawMask();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.clip();
        // 放大镜镜像渐变效果
        const grad = ctx.createRadialGradient(x, y, radius - GRADIENT_INNER_THICKNESS, x, y, radius);
        grad.addColorStop(0, 'white');
        grad.addColorStop(1, `rgba(162, 153, 153, ${MASK_OPACITY})`);
        ctx.fillStyle = grad;
        ctx.fill();
        // ctx.globalCompositeOperation = 'copy';
        ctx.drawImage(img!, clipX, clipY, 2 * clipRadius, 2 * clipRadius, x - radius, y - radius, 2 * radius, 2 * radius);
        ctx.restore();
    };

    function drawMask() {
        ctx!.fillStyle = `rgba(0, 0, 0, ${MASK_OPACITY})`;
        ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
    };

    init();
}
