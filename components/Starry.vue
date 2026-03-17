<template>
  <div class="starfield" :class="{ 'starfield-fullscreen': fullscreen }" :style="customStyle">
    <!-- 三层星群：小冷星、中暖星、大亮星（带光晕） -->
    <div class="stars stars-1"></div>
    <div class="stars stars-2"></div>
    <div class="stars stars-3"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  /**
   * 是否全屏固定定位 (fixed)
   */
  fullscreen: {
    type: Boolean,
    default: false
  },
  /**
   * 自定义样式对象，可覆盖背景色、z-index等
   */
  customStyle: {
    type: Object,
    default: () => ({})
  }
})

// 背景渐变使用内联样式（或可在此处计算，但已通过CSS类实现，故无需额外处理）
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:list";

// 配置星星数量
$stars1-count: 400; // 第一层小冷星
$stars2-count: 200; // 第二层中等暖星
$stars3-count: 100; // 第三层大亮星

// 颜色池
$cold-colors: (
  #fff,
  #f0f8ff,
  #e6f0ff,
  #b0e0ff,
  #cae9ff,
  #e0f0ff,
  #b7d9ff,
  #d4eaff,
  #cce7ff,
  #eef5ff
);
$warm-colors: (
  #ffe9cf,
  #fff5e6,
  #ffefd0,
  #fff0d8,
  #ffe6c0,
  #fff2e0,
  #ffebc2,
  #fff9ed,
  #ffe3b0,
  #fff6e3
);
$bright-colors: (
  #fff6d0,
  #ffebbb,
  #fbe9b1,
  #fff2c0,
  #ffdd99,
  #fff0c5,
  #ffdfaa,
  #fff7d0,
  #ffeab3,
  #fff5cf
);

// 星空容器
.starfield {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #0a0c10 80%);
  overflow: hidden;
  z-index: -1;

  // 全屏模式
  &-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  // 星星层公共样式
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      background: transparent;
    }
  }

  // 第一层：极小冷白色星星 (直径2px)
  .stars-1::before {
    width: 2px;
    height: 2px;
    $shadow: ();
    @for $i from 1 through $stars1-count {
      $x: math.div(math.random(1000), 10) * 1vw;
      $y: math.div(math.random(1000), 10) * 1vh;
      $color: list.nth($cold-colors, math.random(list.length($cold-colors)));
      $shadow: list.append($shadow, #{$x} #{$y} 0 $color, comma);
    }
    box-shadow: $shadow;
  }

  // 第二层：中等暖白色星星 (直径3px)
  .stars-2::before {
    width: 3px;
    height: 3px;
    $shadow: ();
    @for $i from 1 through $stars2-count {
      $x: math.div(math.random(1000), 10) * 1vw;
      $y: math.div(math.random(1000), 10) * 1vh;
      $color: list.nth($warm-colors, math.random(list.length($warm-colors)));
      $shadow: list.append($shadow, #{$x} #{$y} 0 $color, comma);
    }
    box-shadow: $shadow;
  }

  // 第三层：大亮星 (直径5px, 带模糊光晕)
  .stars-3::before {
    width: 5px;
    height: 5px;
    $shadow: ();
    @for $i from 1 through $stars3-count {
      $x: math.div(math.random(1000), 10) * 1vw;
      $y: math.div(math.random(1000), 10) * 1vh;
      $blur: math.random(2) * 1px; // 随机1px或2px模糊
      $color: list.nth($bright-colors, math.random(list.length($bright-colors)));
      $shadow: list.append($shadow, #{$x} #{$y} $blur $color, comma);
    }
    box-shadow: $shadow;
  }
}

// 动画定义
@keyframes driftSlow {
  0% {
    transform: translate(-3px, -2px);
  }

  100% {
    transform: translate(3px, 2px);
  }
}

@keyframes driftMedium {
  0% {
    transform: translate(-4px, -3px);
  }

  100% {
    transform: translate(4px, 3px);
  }
}

@keyframes driftFast {
  0% {
    transform: translate(-6px, -4px);
  }

  100% {
    transform: translate(6px, 4px);
  }
}

@keyframes gentleBreath {
  0% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

@keyframes subtleTwinkle {
  0% {
    opacity: 0.9;
  }

  100% {
    opacity: 1;
  }
}

// 应用动画
.stars-1 {
  animation: driftSlow 24s infinite alternate ease-in-out;
}

.stars-2 {
  animation: driftMedium 18s infinite alternate ease-in-out,
    gentleBreath 8s infinite alternate ease-in-out;
}

.stars-3 {
  animation: driftFast 12s infinite alternate ease-in-out,
    subtleTwinkle 5s infinite alternate ease-in-out;
}
</style>