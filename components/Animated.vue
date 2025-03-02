<template>
    <div class="outer">
        <div class="left-box" text-center>
            <div v-for="(item, index) in data" :key="item.id" class="l-item">
                <Transition name="slide-fade">
                    <Akatex @click="toggleTransition(index)" v-if="item.show" class="item-text item-ab" :inline='true'
                        :content='item.inputText' />
                </Transition>
                <Akatex @click="toggleTransition(index)" class="item-text" :inline='true' :content='item.inputText' />
                <Transition name="line-bloom">
                    <div v-if="!item.show" class="c-line"></div>
                </Transition>
            </div>
        </div>
        <div class="center-box">
            <!-- 先设置底层（一样的），当 toggle 是 false，也就是离开时，仍然有一样的显示 -->
            <h1 text-center class="sh-box">
                <Akatex :inline='true' content='$L$' />
            </h1>
            <Transition name="animate_beat" enter-active-class="animate__animated animate__heartBeat animate__delay-1s"
                leave-active-class="animate__animated animate__heartBeat animate__delay-1s">
                <h1 v-show="toggle" text-center class="sh-box">
                    <Akatex :inline='true' content='$L$' />
                </h1>
            </Transition>
        </div>
        <div class="right-box" text-center>
            <div v-for="item in data" :key="item.id" class="l-item">
                <Transition name="slide-bloom">
                    <div v-if="!item.show" class="l-item">
                        <div class="c-line"></div>
                        <Akatex class="item-text" :inline='true' :content='item.outputText' />
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
// 引入 css 动画库 Animate.css
import 'animate.css';
import { ref, reactive } from 'vue';
// 要展示的数据，其中 show: true|false ：是否展示当前行的数据。
const data = reactive([{ id: 1, show: true, inputText: '齐次解 $\\tilde{y}$', outputText: '$0$' },
{ id: 2, show: true, inputText: '非齐次解 $y^*$', outputText: '$f(x)$' },
{ id: 3, show: true, inputText: '$\\tilde{y}+y^*$', outputText: '$f(x)$' }]);
// 用于触发中间动画的变量
const toggle = ref(true);
// 在内置组件 </Transition> 中过渡动画的触发条件，不是看触发变量的具体的 true 或 false，
// 而是由 v-if 等所触发的**切换而触发**！！！！！
// 比如在有些地方只想在进入时触发，而离开时不触发，则在 enter 设置类，在 leave 不设置类。
const toggleTransition = (index: number) => {
    // 当要展示当前行数据（即data[index].show == true）时，切换 当前行的 与 中间框的 v-show，从而一整套动画，
    // 否则就是重置此行的几个 div ，（中间框不存在重置说法），不触发任何的动画【实现方法，不设置相应的类】
    if (data[index].show == true) {
        toggle.value = !toggle.value
    }
    data[index].show = !data[index].show
}
</script>

<style scoped>
.outer {
    width: 420px;
    height: 160px;
    padding: 5px;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, .1);
    border-radius: .3rem;
    display: flex;
    justify-content: center;
}

.left-box {
    width: 150px;
    height: 100%;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.right-box {
    width: 150px;
    height: 100%;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* .slide-fade-enter-active {
    transition: all 0.3s ease-out;
} */

.slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

/* .slide-fade-enter-from, */
.slide-fade-leave-to {
    transform: translateX(150px);
    /* opacity: 0; */
}

.line-bloom-enter-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.line-bloom-enter-from {
    width: 0;
    height: 0%;
    border: 1px solid rgba(78, 197, 212, 0.5);
}

.line-bloom-enter-to {
    width: 50px;
    height: 0%;
    border: 5px solid rgba(78, 197, 212, 0.5);
}

.slide-bloom-enter-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1) 2s;
}

.slide-bloom-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-bloom-enter-to {
    transform: translateX(0);
}


.l-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    /* border: 1px solid rgb(180, 29, 29); */
}

.item-text {
    width: 100px;
    padding: 2px;
    background-color: rgba(81, 133, 168, 0.5);
    border-radius: 10px;
}

.item-ab {
    position: absolute;
}

.c-line {
    width: 50px;
    height: 0%;
    border: 5px solid rgba(78, 197, 212, 0.5);
}

.center-box {
    width: 110px;
    height: 100%;
    /* border: 1px solid red; */
    position: relative;
}

.sh-box {
    width: 100%;
    height: 100%;
    background-color: rgba(66, 79, 88, 1);
    color: rgb(255, 255, 255);
    padding: 1em;
    position: absolute;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, .1);
    border-radius: .3rem;
    z-index: 1;
}
</style>