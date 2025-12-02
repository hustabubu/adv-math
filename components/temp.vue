<template>
  <div class="magnifier-wrapper">
    <div 
      class="target-area"
      ref="targetArea"
      @mousemove="handleMouseMove"
      @mouseenter="isActive = true"
      @mouseleave="isActive = false"
    >
      <slot></slot>
      <div 
        v-show="isActive"
        class="magnifier-view"
        :style="magnifierStyle"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  zoomLevel: {
    type: Number,
    default: 2
  },
  size: {
    type: Number,
    default: 200
  }
});

const targetArea = ref(null);
const isActive = ref(false);
const cursorX = ref(0);
const cursorY = ref(0);
const capturedImage = ref('');

const offsetX = computed(() => cursorX.value - (targetArea.value?.offsetLeft ?? 0));
const offsetY = computed(() => cursorY.value - (targetArea.value?.offsetTop ?? 0));

const magnifierStyle = computed(() => ({
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`,
  backgroundImage: `url(${capturedImage.value})`,
  backgroundPosition: `${-offsetX.value * props.zoomLevel}px ${-offsetY.value * props.zoomLevel}px`
}));

const captureArea = () => {
  try {
    if (!targetArea.value) return;
    const rect = targetArea.value.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    // 注意：ctx.drawWindow() 方法并不常用，且在某些浏览器中可能不可用，这里使用ImageData作为替代
    // ctx.drawWindow(window, rect.left, rect.top, rect.width, rect.height, 'white');
    const targetElement = targetArea.value;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
    capturedImage.value = canvas.toDataURL();
  } catch (error) {
    console.error('捕获目标区域图像时出错:', error);
    capturedImage.value = ''; // 设置为空，避免显示错误图像
  }
};

const handleMouseMove = (e) => {
  if (!targetArea.value) return;
  const rect = targetArea.value.getBoundingClientRect();
  cursorX.value = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
  cursorY.value = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
};

onMounted(() => {
  captureArea();
  window.addEventListener('resize', captureArea);
});

onUnmounted(() => {
  window.removeEventListener('resize', captureArea);
});
</script>

<style scoped>
.magnifier-wrapper {
  position: relative;
  display: inline-block;
}

.target-area {
  position: relative;
  overflow: hidden;
}

.magnifier-view {
  position: absolute;
  width: v-bind('size + "px"');
  height: v-bind('size + "px"');
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  pointer-events: none;
  transform: translate(-50%, -50%);
  background-size: calc(100% * v-bind('zoomLevel')) calc(100% * v-bind('zoomLevel'));
  background-repeat: no-repeat;
  z-index: 100;
}
</style>
