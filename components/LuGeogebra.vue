<!-- GeoGebraApplet.vue -->
<template>
  <div ref="appletContainer" class="geogebra-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

// 定义组件接收的属性
interface Props {
  width?: number | string;
  height?: number | string;
  showToolBar?: boolean;
  showAlgebraInput?: boolean;
  showMenuBar?: boolean;
  materialId?: string;
  appName?: string;
  autoLoad?: boolean; // 是否自动加载（默认true）
  // 其他GeoGebra参数可以按需添加
}

const props = withDefaults(defineProps<Props>(), {
  width: 800,
  height: 600,
  showToolBar: false,
  showAlgebraInput: false,
  showMenuBar: false,
  autoLoad: true,
});

// 定义组件事件
const emit = defineEmits<{
  (e: 'load', api: GeoGebra.Applet): void;
  (e: 'error', error: Error): void;
}>();

// 容器元素的引用
const appletContainer = ref<HTMLDivElement | null>(null);

// 存储applet API实例
const appletApi = ref<GeoGebra.Applet | null>(null);

// 动态加载GeoGebra脚本（如果尚未加载）
const loadScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.GGBApplet !== 'undefined') {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.geogebra.org/apps/deployggb.js'; // 官方部署脚本
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load GeoGebra script'));
    document.head.appendChild(script);
  });
};

// 初始化GeoGebra applet
const initApplet = async () => {
  if (!appletContainer.value) return;

  try {
    await loadScript();

    // 构建参数
    const parameters: GeoGebra.AppletParameters = {
      width: props.width,
      height: props.height,
      showToolBar: props.showToolBar,
      showAlgebraInput: props.showAlgebraInput,
      showMenuBar: props.showMenuBar,
      appletOnLoad: (api: GeoGebra.Applet) => {
        appletApi.value = api;
        emit('load', api);
      },
      ...(props.materialId && { material_id: props.materialId }),
      ...(props.appName && { appName: props.appName }),
    };

    // 创建applet实例
    const applet = new GGBApplet(parameters);
    applet.inject(appletContainer.value);
  } catch (error) {
    emit('error', error as Error);
    console.error('GeoGebra initialization failed:', error);
  }
};

// 如果autoLoad为true，则在组件挂载时自动初始化
onMounted(() => {
  console.log("Geogebra 组件已经加载");  
  if (props.autoLoad) {
    initApplet();
  }
});

// 清理资源
onUnmounted(() => {
  console.log("Geogebra 组件已经卸载");  
  if (appletApi.value && appletApi.value.remove) {
    appletApi.value.remove();
  }
});

// 监听属性变化（按需重新初始化，简单实现可销毁后重新创建）
watch(
  () => [props.width, props.height, props.materialId],
  async () => {
    if (!appletContainer.value) return;
    // 简单处理：销毁旧实例并重新创建
    if (appletApi.value && appletApi.value.remove) {
      appletApi.value.remove();
      appletApi.value = null;
    }
    await initApplet();
  },
  { deep: false }
);

// 暴露方法给父组件
defineExpose({
  /**
   * 获取GeoGebra API实例（如果已加载）
   */
  getApi: () => appletApi.value,

  /**
   * 执行一个命令（包装）
   */
  evalCommand: (cmd: string) => {
    if (appletApi.value) {
      return appletApi.value.evalCommand(cmd);
    } else {
      console.warn('GeoGebra applet not loaded yet');
      return false;
    }
  },

  /**
   * 重新加载/初始化applet
   */
  reload: () => initApplet(),
});
</script>

<style scoped>
.geogebra-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: 1px solid #ccc;
}
</style>