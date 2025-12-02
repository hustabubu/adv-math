<script setup lang="ts">
import { ref } from 'vue'
import { domToCanvas } from 'modern-screenshot'

const curNode = ref<HTMLDivElement | null>(null)
const screenshot = ref<HTMLImageElement | null>(null)

const handleScreenshot = () => {
  // const targetNode = curNode.value?.parentNode?.parentNode
  // if (!targetNode) {
  //   console.error('目标节点未找到')
  //   return
  // }

  // domToPng(targetNode)
  //   .then((dataUrl) => {
  //     if (screenshot.value) {
  //       screenshot.value.src = dataUrl
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('截屏失败', error)
  //   })
  domToCanvas(document.querySelector('#app')).then(can => {
    console.log(can);
    // const link = document.createElement('a');
    // link.download = "screenshot.png";
    // link.href = dataUrl;
    // link.click();
  })
    .catch((error) => {
      console.error('截屏失败', error)
    })
}
</script>

<template>
  <button @click="handleScreenshot">开始截屏</button>
  <div ref="curNode">测试截屏</div>
  <img ref="screenshot" src="" alt="截图">
</template>
