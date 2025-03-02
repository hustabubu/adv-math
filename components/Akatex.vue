<script setup lang="ts">
const props = defineProps(['inline', 'content'])
</script>

<template>
    <span v-if="inline" v-katex-auto:value="content" class="latex-view"></span>
    <div v-else v-katex-auto:value="content" class="latex-view"></div>
</template>
