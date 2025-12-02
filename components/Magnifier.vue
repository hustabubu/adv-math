<template>
  <div class="absolute top-0 left-0">
    <div class="target-area" ref="targetArea">
      放大镜组件
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'
import { ref, onMounted, onUnmounted } from 'vue';
import { domToPng } from 'modern-screenshot'
import { throttle } from '../src/utils/utils';

const { currentPage } = useNav()
console.log('currentPage', currentPage.value);

// let targetEl = ref<HTMLElement | null>(null)
let targetEl: HTMLElement | null
// let captureTop = ref<number>(0)
// let captureLeft = ref<number>(0)
// let captureWidth = ref<number>(0)
// let captureHeight = ref<number>(0)

const throttledShowXY = throttle(showXY, 500);

const init = () => {
  targetEl = document.querySelector(`.slidev-page-${currentPage.value}`);
  if (!targetEl) {
    console.log('未找到元素');
    return
  }
  console.log(`offsetWidth:${targetEl.offsetWidth},clientWidth:${targetEl.clientWidth}`);
  console.log(`offsetHeight:${targetEl.offsetHeight},clientHeight:${targetEl.clientHeight}`);
  
  targetEl.addEventListener("mousemove", throttledShowXY);

  const dpr = window.devicePixelRatio || 1;
  console.log("dpr", dpr);

  // 截图得到的尺寸是 计算尺寸（getBoundingClientRect()）
  domToPng(targetEl).then(dataUrl => {
    // console.log("domToSvg 的dataUrl",dataUrl);

    const img = new Image();
    img.src = dataUrl;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      // console.log("this",this.width,this.height);

      console.log("img", img.width, img.height);

      // canvas.width = parseFloat(img.width);
      // canvas.height = parseFloat(img.height);
      // const ctx = canvas.getContext('2d');
      // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // canvas.setAttribute("class", "absolute top-0 left-0")
      // canvas.setAttribute("style", "transform: scale(1)")
      // targetEl.value.appendChild(canvas);
    }

    // const link = document.createElement('a');
    // link.download = "screenshot.png";
    // canvas.setAttribute("class", "absolute top-0 left-0")
    // canvas.setAttribute("style","transform: scale(1)")


    // const link = document.createElement('a');
    // link.download = "screenshot.png";
    // link.href = dataUrl;
    // link.click();
  })
}

function showXY(e) {
  const rect = targetEl.getBoundingClientRect();
  console.log(`鼠标相对于当前元素的位置：x=${e.clientX - rect.left},y=${e.clientY - rect.top}`);
}


onMounted(() => {
  init();
  console.log('放大镜组件 onMouted');

});

onUnmounted(() => {
  console.log('移除放大镜组件');
  if (targetEl) {
    targetEl.removeEventListener("mousemove", throttledShowXY);
    targetEl = null
  }
});


</script>

<style scoped></style>
