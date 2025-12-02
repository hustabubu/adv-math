# 12.无穷级数

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>


---
layout: two-cols
layoutClass: gap-10
---

**引入**

等比数列 $\{q^n\}\,(|q|\neq 1)$，前 $n$ 项和为
$$
1+q+q^2+\cdots+q^{n-1}=\frac{1-q^n}{1-q}\quad(q\neq 1).
$$


<v-click at='1'>

令 $n\to\infty$，得
$$
\begin{align*}
& 1+q+q^2+\cdots+q^{n-1}+\cdots \\
= & \lim_{n\to\infty}\frac{1-q^n}{1-q} =
\begin{cases}
 \frac{1}{1-q},& |q|<1,\\
 \infty,&|q|>1.
\end{cases}
\end{align*}
$$
</v-click>

<span v-click='2'>这个式子对我们有什么启发？</span>

::right::

$${hide|1}{at:3}
1+x+x^2+\cdots+x^{n-1}+\cdots =\frac{1}{1-x}\quad (|x|<1).
$$



<div class="grid grid-cols-3 text-center">
  <div v-click='4' class="rounded b border-black  m-auto px-2">幂级数</div>
  <div>
    <div class="grid grid-rows-3">
        <div v-click='6' class="rounded bg-yellow m-auto px-2"> 1</div>
        <div class="h-10">2</div>
        <div v-click='7' class="rounded bg-red-400 m-auto px-2"> 3</div>
    </div>
  </div>
  <div v-click='5' class="rounded b border-black m-auto px-2">函数</div>
</div>

<lu-curve v-if="$clicks >= 5"  :points=[610,165,220,0,105,-65] :isAnimate="true" :twoWay="true" text="研究" />

<!-- <lu-arrow v-if="$clicks >= 6"  :points=[610,195,715,255,830,195] :isAnimate="true" :twoWay="true" text="表@@示" /> -->

<!-- <lu-arrow v-if="$clicks >= 5"  :points=[610,165,715,100,830,165] :isAnimate="true" text="研究" /> -->


<!-- <ArrowTemp/> -->

<!-- <Magnifier></Magnifier> -->


---
layout: two-cols
layoutClass: gap-10
---

**本章核心问题：**

1. 求幂级数和函数
2. 函数展开成幂级数

---
layout: two-cols
layoutClass: gap-10
---

## 12.1.常数项级数的概念与性质

---
layout: two-cols
layoutClass: gap-10
---

**本章核心问题：**

1. 求幂级数和函数
2. 函数展开成幂级数

---

### 12.1.1.常数项级数的概念
                           |
---
layout: two-cols
layoutClass: gap-10
---

### 12.1.2.收敛级数的基本性质

---
layout: two-cols
layoutClass: gap-10
---

## 12.2.级数的敛散性

---
layout: two-cols
layoutClass: gap-10
---

### 12.2.1.正项级数的敛散性


---
layout: two-cols
layoutClass: gap-10
---

### 12.2.2.任意项级数的敛散性

---
layout: two-cols
layoutClass: gap-10
---

#### 12.2.2.1.交错级数的敛散性

---
layout: two-cols
layoutClass: gap-10
---

#### 12.2.2.2.绝对收敛和条件收敛

---
layout: two-cols
layoutClass: gap-10
---

## 12.3.幂级数

---
layout: two-cols
layoutClass: gap-10
---

### 12.3.1.求幂级数的收敛域


---
layout: two-cols
layoutClass: gap-10
---

### 12.3.2.幂级数的运算

---
layout: two-cols
layoutClass: gap-10
---


## 12.4.函数展开成幂级数

---
layout: two-cols
layoutClass: gap-10
---

## 12.5.傅里叶级数
