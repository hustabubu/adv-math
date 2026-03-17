# 9.多元函数微分学

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>


---
layout: two-cols
layoutClass: gap-10
---

## 7.1.多元函数的极限与连续

**知识点：**

1. 多元函数极限的定义（理解）
2. **求二元函数的极限（掌握）**
3. 判断二元函数的极限不存在（理解）
4. 二重极限 VS 路径极限 VS 累次极限（了解）
5. 连续性的定义（掌握）
6. 闭区域上连续函数的性质（理解）

---


### 7.1.1.二元函数的极限

**理解多元函数的极限、连续、偏导数、可微的<span v-mark.box.red='1'>关键</span>：** <span v-mark.box.red='1'>**变量的维度**</span>

|                                                 | 一元函数的极限                  | 二元函数的极限                    |
| ----------------------------------------------- | ------------------------------- | --------------------------------- |
| 极限变量:                                       | $1$ 个（$1$ 维）<br> 直线上的点 | $2$ 个（$2$ 维）<br> 平面上的点 |
| 趋向：<br> $P\to P_0$ <br> $\|PP_0\|\to 0$ |    $\|x-x_0\|\to 0$   |    $\sqrt{(x-x_0)^2-(y-y_0)^2}\to 0$                               |

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.1.1.二元函数的极限定义

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.1.2.求二元函数的极限

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.1.3.判断二元函数的极限不存在

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.1.4.二重极限 VS 路径极限 VS 累次极限

---
layout: two-cols
layoutClass: gap-10
---

### 7.1.2.二元函数的连续性

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.2.1.连续的定义

---
layout: two-cols
layoutClass: gap-10
---

#### 7.1.2.2.闭区域上连续函数的性质

---
layout: two-cols
layoutClass: gap-10
---

## 7.2.偏导数

---
layout: two-cols
layoutClass: gap-10
---

### 7.2.1.偏导数的定义及其计算


---
layout: two-cols
layoutClass: gap-10
---

### 7.2.2.高阶偏导数

---
layout: two-cols
layoutClass: gap-10
---

## 7.3.全微分

---
layout: two-cols
layoutClass: gap-10
---

### 7.3.1.全微分的定义


---
layout: two-cols
layoutClass: gap-10
---

### 7.3.2.可微的充分必要条件

---
layout: two-cols
layoutClass: gap-10
---


### 7.3.3.全微分的几何意义

---
layout: two-cols
layoutClass: gap-10
---

### 7.3.4.全微分的计算


---
layout: two-cols
layoutClass: gap-10
---

## 7.4.多元复合函数求导法则

---
layout: two-cols
layoutClass: gap-10
---

### 7.4.1.普通的复合函数求导法则

---
layout: two-cols
layoutClass: gap-10
---

### 7.4.2.抽象复合函数求导法则

---
layout: two-cols
layoutClass: gap-10
---

### 7.4.3.一阶微分形式不变性


---
layout: two-cols
layoutClass: gap-10
---

## 7.5.隐函数函数求导法则

---
layout: two-cols
layoutClass: gap-10
---

### 7.5.1.一个方程

---
layout: two-cols
layoutClass: gap-10
---

### 7.5.1.方程组

---
layout: two-cols
layoutClass: gap-10
---

## 7.6.多元函数微分学的几何应用

---
layout: two-cols
layoutClass: gap-10
---

### 7.6.1.一元向量值函数及其导数


---
layout: two-cols
layoutClass: gap-10
---

### 7.6.2.空间曲线的切线与法平面

---
layout: two-cols
layoutClass: gap-10
---

### 7.6.3.空间曲面的切平面与法线

---
layout: section
routeAlias: gradient
---

## 7.7.方向导数与梯度

**方向导数：沿着指定方向的函数变化率**

**梯度（gradient）：最“陡”的"坡度"**

---
layout: two-cols
layoutClass: gap-10
---

**梯度无处不在！不可不知！**

<v-clicks at="1">

- **[风的形成](https://bkimg.cdn.bcebos.com/pic/4a36acaf2edda3cc6402d11f05e93901213f922e?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080)：** 水平**气压梯度**驱动大气的水平运动，形成风；
风的方向：**高**气压 → **低**气压

- **物质的扩散：** **浓度梯度** 是物质从高浓度区域向低浓度区域自发移动的驱动力；
扩散方向：**高**浓度 → **低**浓度

- **温度梯度、电势梯度、磁场梯度……**

</v-clicks>

::right::

<span v-click="4">**注意：**</span>

<v-clicks at="4">

1. **“势能”** → **“其它能量”**；
2. 实际问题梯度的正方向：**高 → 低**，**"势能"减少最快的方向**;
3. 数学上的梯度正方向：**低 → 高**；**函数增加最快的方向**。

</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**问题：**

<v-clicks at="1">

1. 山上的一块石头，怎么滚落到山下？
2. 如何上山？
3. 如何证明你在山顶？
4. ...
</v-clicks>

<span v-click='5'>总而言之，是二元函数**变化（率）的问题**。</span>

<span v-click='6'>所以，先考虑接下来两个问题：</span>

<v-clicks at="7">

1. 导数是否需要有方向？
2. 如何给导数赋予方向？
</v-clicks>

<v-click at="9">

[一元函数导数赋予方向]()
</v-click>

<v-click at="10">

给导数赋予方向：**（使得）函数增加的方向为正向**
</v-click>

::right::

<RenderWhen context="visible">

![山与等高线](https://ts3.tc.mm.bing.net/th/id/OIP-C.imxhNKI6BZ_crs_9gH8LLgHaGM?rs=1&pid=ImgDetMain&o=7&rm=3)

</RenderWhen>

<v-click at="11">

**“箭头汇聚的地方”**：极大值点；

**“箭头远离的地方”**：极小值点。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 7.7.1.梯度

[二元函数偏导数赋予方向]()

---
layout: two-cols
layoutClass: gap-10
---

### 7.7.2.方向导数


---
layout: two-cols
layoutClass: gap-10
---

## 7.8.多元函数的极值

要搞清楚函数的极值，首先得搞清楚**函数是如何随着自变量的变化而变化**。

<Link to="gradient" title="跳转到梯度"/>

---
layout: two-cols
layoutClass: gap-10
---

### 7.8.1.自由极值



---
layout: two-cols
layoutClass: gap-10
---

### 7.8.2.条件极值

---
layout: two-cols
layoutClass: gap-10
---


