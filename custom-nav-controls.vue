<!-- custom-nav-controls -->
<template>
  <VerticalDivider />
  <IconButton title="magnifier" @click="toggleMagnifier">
    <div class="i-carbon:zoom-in" />
  </IconButton>
    <IconButton title="go to toc" @click="go(2)">
    <div class="i-carbon:table-of-contents" />
  </IconButton>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNav, useSlideContext } from '@slidev/client'
import { useMagnifierDom } from './src/utils/useMagnifierDom';
import { onBeforeRouteUpdate } from 'vue-router'
import VerticalDivider from '@slidev/client/internals/VerticalDivider.vue'
import IconButton from '@slidev/client/internals/IconButton.vue'


const { currentPage, go } = useNav()

const allowedToChangeRoute = ref(true);
// 路由更新前的钩子，用于控制是否允许路由跳转
onBeforeRouteUpdate((_from, _to, next) => {
  if (allowedToChangeRoute.value) next();
})

// 组件离开前的处理函数，重置允许路由跳转的标志
const beforeLeave = () => {
  allowedToChangeRoute.value = true;
}

const scale = useSlideContext().$scale;
// 触发放大镜功能的方法
const toggleMagnifier = () => {

  const targetEl: HTMLElement | null = document.querySelector(`.slidev-page-${currentPage.value}`);
  if (!targetEl) {
    throw new Error("Element not found");
  };
  allowedToChangeRoute.value = false;
  useMagnifierDom(targetEl, beforeLeave, { slidevScale: scale.value });
};

// 组件挂载后的初始化处理
onMounted(() => {
  // console.log('custom-nav-controls onMouted');
});
</script>