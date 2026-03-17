// geo-gebra-api.d.ts
declare namespace GeoGebra {
  // 基础类型定义
  type JSFunction = (arg?: any) => void;
  
  // 事件监听器函数类型
  type AddListener = (objName: string) => void;
  type RemoveListener = (objName: string) => void;
  type UpdateListener = (objName: string) => void;
  type RenameListener = (oldName: string, newName: string) => void;
  type ClearListener = () => void;
  type ClientListener = (event: ClientEvent) => void;
  type StoreUndoListener = () => void;
  type ClickListener = (objName: string) => void;
  type ObjectUpdateListener = () => void;
  type ObjectClickListener = () => void;

  // 客户端事件类型
  interface ClientEvent {
    type: string;
    target?: string;
    argument?: any;
    [key: string]: any;
  }

  // 特定客户端事件接口
  interface ClientEventTypes {
    addMacro: { argument: string };
    addPolygon: Record<string, never>;
    addPolygonComplete: { target: string };
    algebraPanelSelected: Record<string, never>;
    deleteGeos: Record<string, never>;
    deselect: { target: string | null };
    dragEnd: Record<string, never>;
    dropdownClosed: { target: string; index: number };
    dropdownItemFocused: { target: string; index: number };
    dropdownOpened: { target: string };
    editorKeyTyped: Record<string, never>;
    editorStart: { target?: string };
    editorStop: { target?: string };
    export: { argument: string };
    mouseDown: { x: number; y: number };
    movedGeos: { argument: string };
    movingGeos: { argument: string };
    openDialog: { argument: string };
    openMenu: { argument: string };
    pasteElms: { argument: string };
    pasteElmsComplete: Record<string, never>;
    perspectiveChange: Record<string, never>;
    redo: Record<string, never>;
    relationTool: { argument: string };
    removeMacro: { argument: string };
    renameComplete: Record<string, never>;
    renameMacro: { argument: [string, string] };
    select: { target: string };
    setMode: { argument: number };
    showNavigationBar: { argument: 'true' | 'false' };
    showStyleBar: { argument: 'true' | 'false' };
    sidePanelClosed: Record<string, never>;
    sidePanelOpened: Record<string, never>;
    tablePanelSelected: Record<string, never>;
    toolsPanelSelected: Record<string, never>;
    undo: Record<string, never>;
    updateStyle: { target: string };
    viewChanged2D: {
      xZero: number;
      yZero: number;
      xscale: number;
      yscale: number;
      viewNo: 1 | 2;
    };
    viewChanged3D: {
      xZero: number;
      yZero: number;
      scale: number;
      yscale: number;
      viewNo: number;
      zZero: number;
      zscale: number;
      xAngle: number;
      zAngle: number;
    };
  }

  // 创建对象相关方法
  interface CreationMethods {
    evalCommand(cmdString: string): boolean;
    evalLaTex(input: string): boolean;
    evalCommandGetLabels(cmdString: string): string;
    evalCommandCAS(string: string): string;
    insertEmbed(type: string, uri: string): void;
  }

  // 设置对象状态方法
  interface StateSettingMethods {
    deleteObject(objName: string): void;
    setAuxiliary(geo: string, flag: boolean): void;
    setValue(objName: string, value: number): void;
    setTextValue(objName: string, value: string): void;
    setListValue(objName: string, i: number, value: number): void;
    setCoords(objName: string, x: number, y: number): void;
    setCoords(objName: string, x: number, y: number, z: number): void;
    setCaption(objName: string, caption: string): void;
    setColor(objName: string, red: number, green: number, blue: number): void;
    setVisible(objName: string, visible: boolean): void;
    setLabelVisible(objName: string, visible: boolean): void;
    setLabelStyle(objName: string, style: 0 | 1 | 2 | 3): void;
    setFixed(objName: string, fixed: boolean, selectionAllowed: boolean): void;
    setTrace(objName: string, flag: boolean): void;
    renameObject(oldObjName: string, newObjName: string): boolean;
    setLayer(objName: string, layer: number): void;
    setLayerVisible(layer: number, visible: boolean): void;
    setLineStyle(objName: string, style: number): void;
    setLineThickness(objName: string, thickness: number): void;
    setPointStyle(objName: string, style: number): void;
    setPointSize(objName: string, size: number): void;
    setDisplayStyle(objName: string, style: 'parametric' | 'explicit' | 'implicit' | 'specific'): void;
    setFilling(objName: string, filling: number): void;
    
    getPNGBase64(exportScale: number, transparent: boolean, DPI?: number): string;
    exportSVG(filename: string): void;
    exportSVG(callback: (svg: string) => void): void;
    exportPDF(scale: number, filename: string, sliderLabel?: string): void;
    exportPDF(scale: number, callback: (pdf: string) => void, sliderLabel?: string): void;
    getScreenshotBase64(callback: (url: string) => void): void;
    writePNGtoFile(filename: string, exportScale: number, transparent: boolean, DPI?: number): boolean;
    isIndependent(objName: string): boolean;
    isMoveable(objName: string): boolean;
    showAllObjects(): void;
    registerEmbedResolver(type: string, callback: (id: string) => Promise<string>): void;
    
    setAnimating(objName: string, animate: boolean): void;
    setAnimationSpeed(objName: string, speed: number): void;
    startAnimation(): void;
    stopAnimation(): void;
    isAnimationRunning(): boolean;
  }

  // 获取对象状态方法
  interface StateGettingMethods {
    getXcoord(objName: string): number;
    getYcoord(objName: string): number;
    getZcoord(objName: string): number;
    getValue(objName: string): number;
    getListValue(objName: string, index: number): number;
    getColor(objName: string): string;
    getVisible(objName: string): boolean;
    getVisible(objName: string, view: number): boolean;
    getValueString(objName: string, useLocalizedInput?: boolean): string;
    getDefinitionString(objName: string): string;
    getCommandString(objName: string, useLocalizedInput?: boolean): string;
    getLaTeXString(objName: string): string;
    getLaTeXBase64(objName: string, value: boolean): string;
    getObjectType(objName: string): string;
    exists(objName: string): boolean;
    isDefined(objName: string): boolean;
    getAllObjectNames(type?: string): string[];
    getObjectNumber(): number;
    getCASObjectNumber(): number;
    getObjectName(i: number): string;
    getLayer(objName: string): string;
    getLineStyle(objName: string): number;
    getLineThickness(objName: string): number;
    getPointStyle(objName: string): number;
    getPointSize(objName: string): number;
    getFilling(objName: string): number;
    getCaption(objectName: string, substitutePlaceholders: boolean): string;
    getLabelStyle(objectName: string): number;
    getLabelVisible(): boolean;
    isInteractive(objName: string): boolean;
  }

  // 构造/用户界面方法
  interface ConstructionAndUIMethods {
    setMode(mode: number): void;
    getMode(): number;
    openFile(strURL: string): void;
    reset(): void;
    newConstruction(): void;
    refreshViews(): void;
    setOnTheFlyPointCreationActive(flag: boolean): void;
    setPointCapture(view: number, mode: number): void;
    setRounding(round: string): void;
    hideCursorWhenDragging(flag: boolean): void;
    setRepaintingActive(flag: boolean): void;
    setErrorDialogsActive(flag: boolean): void;
    setCoordSystem(xmin: number, xmax: number, ymin: number, ymax: number): void;
    setCoordSystem(xmin: number, xmax: number, ymin: number, ymax: number, zmin: number, zmax: number, yVertical: boolean): void;
    setAxesVisible(xAxis: boolean, yAxis: boolean): void;
    setAxesVisible(viewNumber: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
    setUndoPoint(): void;
    setAxisLabels(viewNumber: number, xAxis: string, yAxis: string, zAxis: string): void;
    setAxisSteps(viewNumber: number, xAxis: number, yAxis: number, zAxis: number): void;
    setAxisUnits(viewNumber: number, xAxis: string, yAxis: string, zAxis: string): void;
    setGridVisible(flag: boolean): void;
    setGridVisible(viewNumber: number, flag: boolean): void;
    getGridVisible(viewNumber?: number): boolean;
    getPerspectiveXML(): string;
    undo(): void;
    redo(): void;
    showToolBar(show: boolean): void;
    setCustomToolBar(toolbar: string): void;
    addCustomTool(iconURL: string, name: string, category: 'upload' | 'link' | 'more', callback: () => void): void;
    showMenuBar(show: boolean): void;
    showAlgebraInput(show: boolean): void;
    showResetIcon(show: boolean): void;
    enableRightClick(enable: boolean): void;
    enableLabelDrags(enable: boolean): void;
    enableShiftDragZoom(enable: boolean): void;
    enableCAS(enable: boolean): void;
    enable3D(enable: boolean): void;
    setPerspective(perspective: string): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    setSize(width: number, height: number): void;
    recalculateEnvironments(): void;
    
    getEditorState(): {
      content: string;
      caret?: number;
      eval?: any;
      latex?: string;
    };
    
    setEditorState(state: { content: string; caret?: number } | string): void;
    
    getGraphicsOptions(viewId: number): {
      rightAngleStyle?: any;
      pointCapturing?: any;
      grid?: any;
      gridIsBold?: boolean;
      gridType?: any;
      bgColor?: string;
      gridColor?: string;
      axesColor?: string;
      axes?: any;
      gridDistance?: any;
    };
    
    setGraphicsOptions(viewId: number, options: any): void;
    
    setAlgebraOptions(options: { sortBy: string }): void;
    
    getViewProperties(viewID: number): {
      invXscale: number;
      invYscale: number;
      xMin: number;
      yMin: number;
      width: number;
      height: number;
      left: number;
      top: number;
    };
  }

  // 事件监听器方法
  interface EventListenerMethods {
    registerAddListener(fn: AddListener): void;
    unregisterAddListener(fn: AddListener): void;
    registerRemoveListener(fn: RemoveListener): void;
    unregisterRemoveListener(fn: RemoveListener): void;
    registerUpdateListener(fn: UpdateListener): void;
    unregisterUpdateListener(fn: UpdateListener): void;
    registerClickListener(fn: ClickListener): void;
    unregisterClickListener(fn: ClickListener): void;
    registerObjectUpdateListener(objName: string, fn: ObjectUpdateListener): void;
    unregisterObjectUpdateListener(objName: string): void;
    registerObjectClickListener(objName: string, fn: ObjectClickListener): void;
    unregisterObjectClickListener(objName: string): void;
    registerRenameListener(fn: RenameListener): void;
    unregisterRenameListener(objName: string): void;
    registerClearListener(fn: ClearListener): void;
    unregisterClearListener(fn: ClearListener): void;
    registerStoreUndoListener(fn: StoreUndoListener): void;
    unregisterStoreUndoListener(fn: StoreUndoListener): void;
    registerClientListener(fn: ClientListener): void;
    unregisterClientListener(fn: ClientListener): void;
  }

  // 文件格式方法
  interface FileFormatMethods {
    evalXML(xmlString: string): void;
    setXML(xmlString: string): void;
    getXML(): string;
    getXML(objName: string): string;
    getAlgorithmXML(objName: string): string;
    getFileJSON(): string;
    setFileJSON(content: any): string;
    getBase64(): string;
    getBase64(callback: (base64: string) => void): void;
    setBase64(base64: string, callback?: () => void): void;
  }

  // 杂项方法
  interface MiscellaneousMethods {
    debug(string: string): void;
    getVersion(): string;
    remove(): void;
  }

  // 主Applet接口
  interface Applet extends 
    CreationMethods,
    StateSettingMethods,
    StateGettingMethods,
    ConstructionAndUIMethods,
    EventListenerMethods,
    FileFormatMethods,
    MiscellaneousMethods {}

  // Applet参数接口
  interface AppletParameters {
    width?: number | string;
    height?: number | string;
    appletOnLoad?: (api: Applet) => void;
    showToolBar?: boolean | string;
    showMenuBar?: boolean | string;
    showAlgebraInput?: boolean | string;
    showResetIcon?: boolean | string;
    enableLabelDrags?: boolean | string;
    enableShiftDragZoom?: boolean | string;
    enableRightClick?: boolean | string;
    capturingThreshold?: number;
    showToolBarHelp?: boolean | string;
    errorDialogsActive?: boolean | string;
    showTutorialLink?: boolean | string;
    showLogging?: boolean | string;
    useBrowserForJS?: boolean | string;
    allowStyleBar?: boolean | string;
    preventFocus?: boolean | string;
    language?: string;
    country?: string;
    ggbBase64?: string;
    material_id?: string;
    filename?: string;
    borderColor?: string;
    id?: string;
    appName?: string;
    customToolBar?: string;
    scaleContainerClass?: string;
    rounding?: string;
    autoHeight?: boolean;
    allowUpscale?: boolean;
    clickToLoad?: boolean;
    playButton?: boolean;
    showAnimationButton?: boolean;
    showFullscreenButton?: boolean;
    prerelease?: boolean;
  }

  // GGBApplet实例接口
  interface GGBAppletInstance {
    inject(container: string | HTMLElement, callback?: () => void): void;
    getApi?: () => Promise<Applet>;
  }

  // GGBApplet构造函数接口
  interface GGBAppletConstructor {
    new (parameters: AppletParameters): GGBAppletInstance;
    version: string;
  }
}

// 全局声明
declare const GGBApplet: GeoGebra.GGBAppletConstructor;
declare const ggbApplet: GeoGebra.Applet;

// 数学应用模块（ES6方式）
declare module 'https://www.geogebra.org/apps/web3d/web3d.nocache.mjs' {
  export const mathApps: {
    create(parameters: GeoGebra.AppletParameters): {
      inject(container: string | HTMLElement): {
        getAPI(): Promise<GeoGebra.Applet>;
      };
    };
  };
}

// 如果通过deployggb.js加载
declare interface Window {
  GGBApplet: typeof GGBApplet;
  ggbApplet?: GeoGebra.Applet;
}

// 修正后的模块声明 - 使用从命名空间导出的类型
declare module 'geogebra' {
  // 直接从全局命名空间引用类型，而不是通过typeof GGBApplet
  export const GGBApplet: GeoGebra.GGBAppletConstructor;
  export type Applet = GeoGebra.Applet;
  export type AppletParameters = GeoGebra.AppletParameters;
  export type GGBAppletInstance = GeoGebra.GGBAppletInstance;
  export type GGBAppletConstructor = GeoGebra.GGBAppletConstructor;
}