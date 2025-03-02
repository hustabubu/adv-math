<script setup lang="ts">

const props = defineProps(['title', 'admonitionType'])

</script>

<template>
    <div class="admonition" :class="admonitionType">
        <p v-katex-auto:value="title" class="admonition-title"></p>
        <!-- <p v-katex-auto:value="content" class="latex-view"></p> -->
        <!-- 内容还是以插槽的方式，用起来更方便些 -->
        <slot></slot>
    </div>
</template>