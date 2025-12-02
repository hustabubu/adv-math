<!--
# 贝塞尔曲线箭头组件
使用示例：三个控制点分别为 (x0, y0), (x1, y1), (x2, y2) 的 2 阶贝塞尔曲线，描边宽度为 2，颜色为 red，是否双向动画为 true，动画时长为 0.5s，
是否显示箭头为 true，箭头文字为 "text"，文字字体大小为 1.1rem，字体为 Arial。
  <LuArrow 
    :points="[x0, y0, x1, y1, x2, y2]" 
    strokeWidth="2" 
    strokeColor="red" 
    :twoWay="true" 
    duration="0.5" 
    :isAnimate="true" 
    text="text" 
    textFontSize="1.1rem" 
  />

几个问题：
1. <marker> 没办法随着描边动画运动，且也没有办法指定具体位置（只能start、mid、end）

解决办法：
1. 另外画一个箭头，通过 <aninmateMotion> 来做路径移动移动

细节：
1. 路径移动的动画点是 (0,0) 点，在画箭头时，使得
  - 箭头的中心点在路径的起点（不能用slidev内置的箭头形状，调整 (0,0)点位置）
  - 保持箭头与内置箭头各种样式要一致，比如让箭头放缩为 scale(${strokeWidth})
  - 箭头的各项动画参数要与描边动画一致
2. 文字路径：为了降低逻辑复杂性、降低心智负担，以及维护成本，就不借用描边动画的 path，而是重新画一个透明的 path 单独供文字路径使用。
3. 文本放置于相对于路径往外凸出位置（法向量偏移量）：dy = props.dy || (y0 - 2 * y1 + y2) >= 0 ? '-0.6rem' : '1.5rem'
  - chrome 的默认 font-size 为 16px，
  - slidev 的 css 的 font-size 的单位是 rem（比如我能看到的基本的都是 1.1 rem，貌似 slidev 都是对默认字体font-size放大了1.1倍），
  - 这里采取的策略是：
    * 如果组件的使用者没有传入 fontSize，则用继承而来的默认 font-size (长度单位：rem)来计算 dy，
    * 如果组件的使用者传入 fontSize，则用传入的 fontSize 计算 dy，
    * 同时也留有个属性 dy，让使用者可以自定义 dy 值（如果组件自动计算的 dy 不满足需求的情况）。
-->

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { makeId } from '@slidev/client/logic/utils.ts'

interface ArrowProps {
  points: [number, number, number, number, number, number]
  strokeWidth?: number | string
  strokeColor?: string
  twoWay?: boolean
  duration?: number | string
  isAnimate?: boolean
  text?: string
  textFontSize?: number | string
  fontFamily?: string
  dy?: number | string
}

const props = withDefaults(defineProps<ArrowProps>(), {
  strokeColor: '#953',
  strokeWidth: 2,
  twoWay: false,
  duration: 0.5,
  isAnimate: true,
  text: '文字',
})

const ArrowPoint = "1 0, -9 3.5, -9 -3.5"
const [x0, y0, x1, y1, x2, y2] = props.points
const GAP=0

const xMin = Math.min(x0, x1, x2)
const svgweight = Math.max(Math.abs(x0 - x1), Math.abs(x1 - x2), Math.abs(x2 - x0))+20
// yMin = Math.min(y0, y1, y2) 


/*  
  处理 fontSize 的单位，先处理传来的 textFontSize。
  - 如果没有传入 textFontSize，则用默认值 1.1 rem（好像 slidev 默认是 1.1 rem）；
  - 如果传入的 css 单位是 rem，则放缩为 1.1 倍；
  - 如果传入 css 单位是 px，则用 rem 单位。
*/
function handleFontSize(fontSize: number | string | undefined) {
  if (!fontSize) {
    return '1.1rem'
  } else if (typeof fontSize === 'number') {
    return `${fontSize * 1.1}rem`
  } else if (fontSize.endsWith('px')) {
    const num = parseFloat(fontSize.slice(0, -2))
    return `${num / 16 * 1.1}rem`
  } else {
    return `${parseFloat(fontSize) * 1.1}rem`
  }
}
const fontSize = handleFontSize(props.textFontSize);

// 如果传入 dy，则用 dy，如果没有，则计算。凸取负，凹取正
const dy = props.dy || ((y0 - 2 * y1 + y2) >= 0 ? `${-parseFloat(fontSize) * 0.6}rem` : `${parseFloat(fontSize) * 1.5}rem`);

const pathDataForward = `M ${x0} ${y0} Q ${x1} ${y1} ${x2} ${y2}`
// 是否双向动画
const twoWayAnimate = (props.twoWay && props.isAnimate)
const pathDataReverse = `M ${x2} ${y2} Q ${x1} ${y1} ${x0} ${y0}`
const id = makeId()

const markerAttrs = {
  markerUnits: 'strokeWidth',
  markerHeight: 7,
  refY: 3.5,
  orient: 'auto',
}

const pathLength = ref(0)
const svgPath = ref<SVGPathElement>()

onMounted(() => {
  if (svgPath.value) {
    pathLength.value = svgPath.value.getTotalLength()
  }
})
</script>

<template>
  <svg :class="`absolute left-0 top-0 b b-red`" :width="Math.max(x0, x1, x2) + GAP" :height="Math.max(y0, y1, y2) + GAP"
    xmlns="http://www.w3.org/2000/svg">
  <!-- <svg :class="`absolute left-0 top-0`" :width="svgweight" :height="Math.max(y0, y1, y2) + GAP"
    xmlns="http://www.w3.org/2000/svg"> -->
    <defs>
      <marker :id="id" markerWidth="10" refX="9" v-bind="markerAttrs">
        <polygon points="0 0, 10 3.5, 0 7" :fill="strokeColor || 'currentColor'" />
      </marker>
      <marker v-if="twoWay" :id="`${id}_rev`" markerWidth="20" refX="11" v-bind="markerAttrs">
        <polygon points="20 0, 10 3.5, 20 7" :fill="strokeColor || 'currentColor'" />
      </marker>
    </defs>
    <!-- 描边动画 -->
    <g :stroke="strokeColor" :stroke-width="strokeWidth" :stroke-dasharray="isAnimate ? pathLength : 0"
      :stroke-dashoffset="0" fill="transparent">
      <path ref="svgPath" :id="`${id}_pathForward`" :d="pathDataForward" :marker-end="isAnimate ? 'none' : `url(#${id})`"
        :marker-start="twoWay && !isAnimate ? `url(#${id}_rev)` : 'none'">
        <animate v-if="isAnimate" attributeName="stroke-dashoffset" :from="pathLength" to="0" :dur="duration" :id="`${id}_animateForward`"
          fill="freeze" :begin="`0s;${id}_animateArrowF.begin`" />
      </path>
      <path v-if="twoWayAnimate" :id="`${id}_pathReverse`" :d="pathDataReverse">
        <animate attributeName="stroke-dashoffset" :from="pathLength" to="0" :dur="duration" fill="freeze" :begin="`0s;${id}_animateArrowF.begin`"/>
      </path>
    </g>
    <!-- 箭头随路径移动动画 -->
    <g :fill="strokeColor || 'currentColor'">
      <polygon  :points="ArrowPoint" :transform="`scale(${strokeWidth})`">
        <animateMotion v-if="isAnimate" :dur="duration" rotate="auto" fill="freeze" :id="`${id}_animateArrowF`" :begin="`0s;click;${id}_animateArrowR.click`">
          <mpath :href="`#${id}_pathForward`" />
        </animateMotion>
      </polygon>
      <polygon v-if="twoWayAnimate" :points="ArrowPoint" :transform="`scale(${strokeWidth})`">
        <animateMotion :dur="duration" rotate="auto" fill="freeze" :id="`${id}_animateArrowR`" :begin="`0s;click;${id}_animateArrowF.begin`">
          <mpath :href="`#${id}_pathReverse`" />
        </animateMotion>
      </polygon>
    </g>
    <!-- 文本路径 -->
    <path v-if="props.text" :id="`${id}_tPath`" :d="x0 <= x2 ? pathDataForward : pathDataReverse" fill="transparent">
    </path>
    <text :dy="dy" text-anchor="middle" :font-size="fontSize" :font-family="props?.fontFamily" :stroke="strokeColor"
      :fill="strokeColor">
      <textPath :href="`#${id}_tPath`" startOffset="50%">
        {{ text }}
      </textPath>
    </text>
  </svg>
</template>

<style scoped></style>
