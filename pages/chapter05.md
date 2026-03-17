# 5.定积分

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>

---
layout: two-cols
layoutClass: gap-10
---

## 5.1.定积分的概念与性质

---
layout: two-cols
layoutClass: gap-10
---

### 5.1.1.定积分的概念

---
layout: two-cols
layoutClass: gap-10
---

**曲边梯形的面积**

“直”的图形的面积：

::right::

<div class="flex flex-justify-center" >
<svg version="1.1" baseProfile="full" width="300" height="140" xmlns="http://www.w3.org/2000/svg" style="stroke:#000000; stroke-width:1">

  <polygon points="210,10 210,120 10,120" stroke="black" fill="none" stroke-width="2"/>
  <path d="M 50 120 A 20 20 0 0 0 45 100" stroke="black" fill="none" stroke-width="1"/>
  <path d="M 210 105 L 195 105 L 195 120" stroke="black" fill="none" stroke-width="1"/>

  <foreignObject x="60" y="90" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize t$' />
    </span>
  </foreignObject>

  <foreignObject x="220" y="50" width="75" height="20" >
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize \sqrt{x^2-a^2}$' />
    </span>
  </foreignObject>
  <foreignObject x="110" y="30" width="140" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize x$' />
    </span>
  </foreignObject>
    <foreignObject x="110" y="119" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize a$' />
    </span>
  </foreignObject>
</svg>
</div>


---
layout: two-cols
layoutClass: gap-10
---

### 5.1.2.定积分的性质


---
layout: two-cols
layoutClass: gap-10
---

## 5.2.微积分基本公式

---
layout: two-cols
layoutClass: gap-10
---

### 5.2.1.N-L 公式

---
layout: two-cols
layoutClass: gap-10
---

### 5.2.1.变限积分函数

---
layout: two-cols
layoutClass: gap-10
---

## 5.3.定积分的换元和分部积分

---
layout: two-cols
layoutClass: gap-10
---

### 5.3.1.定积分的换元法

---
layout: two-cols
layoutClass: gap-10
---

### 5.3.1.定积分的分部法

---
layout: two-cols
layoutClass: gap-10
---

## 5.4.广义积分

在定积分的定义中，

$$
\int_a^b f(x)\,\mathrm{d}x \triangleq \lim_{\lambda \to 0}\sum_{i=1}^n f(\xi_i)\Delta x_i,
$$
其中 $\lambda=\max_i{|\Delta x_i|}$，要求

- 且 **积分区间 $[a,b]$ 有限**；
- 被积函数 $f(x)$ 在积分区间 $[a,b]$ 上是**有界函数**。

**如果上面两条要求不满足，定积分的定义不再适用，**
**这节内容要解决：**
- **怎么定义？**
- **怎么计算？**

::right::

<!-- <button @click="awesome = !awesome">Toggle</button>
<counter v-if="awesome"/>

<script setup lang="ts">
import { ref } from 'vue'

const awesome=ref(true)
</script> -->

<!-- <v-switch :unmount=true>
  <template #1> 点击 1 时显示，点击 2 时隐藏。 </template>
  <template #2> 
    <counter />
  </template>
  <template #5-7> 点击 5 时显示，点击 7 时隐藏。 </template>
</v-switch> -->

<RenderWhen context="visible">
  如果可见则渲染内容。
  <counter />
</RenderWhen>

---
layout: two-cols
layoutClass: gap-10
---

### 5.4.1.无穷限的广义积分

---
layout: two-cols
layoutClass: gap-10
---

### 5.4.2.无界函数的广义积分

---
layout: two-cols
layoutClass: gap-10
---

## 5.5.广义积分的敛散性与 $\Gamma$ 函数

---
layout: two-cols
layoutClass: gap-10
---

### 5.5.1.无穷限广义积分的敛散性判别

---
layout: two-cols
layoutClass: gap-10
---

### 5.5.2.无界函数广义积分的敛散性判别

---
layout: two-cols
layoutClass: gap-10
---

### 5.5.3.$\Gamma$ 函数
