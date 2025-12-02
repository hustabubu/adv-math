# 1.极限与连续

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>

---
layout: two-cols
layoutClass: gap-10
---

## 1.1.映射与函数

这节简要复习高中内容

---
layout: two-cols
layoutClass: gap-10
---

### 1.1.1.反函数

<Admonition title='反函数的运算' admonitionType='warning'>

- $f^{-1}\left[f(x)\right]=x$
- $f\left[f^{-1}(x)\right]=x$

</Admonition>

**例如**

$\mathrm{e}^{\ln x}= x$

$\ln \mathrm{e}^x =x$

$\arcsin(\sin x)=x$

$\sin(\arcsin x)=x$

---
layout: two-cols
layoutClass: gap-10
---

## 1.2.数列的极限

---
layout: two-cols
layoutClass: gap-10
---

## 1.3.函数的极限

---
layout: two-cols
layoutClass: gap-10
---

## 1.4.无穷小与无穷大

---
layout: two-cols
layoutClass: gap-10
---

## 1.5.极限的运算法则


---
layout: two-cols
layoutClass: gap-10
---

## 1.6.极限存在准则和重要极限

---
layout: two-cols
layoutClass: gap-10
---

### 1.6.1.夹逼准则

---
layout: two-cols
layoutClass: gap-10
---

### 1.6.2.重要极限 I

---
layout: two-cols
layoutClass: gap-10
---

**重要极限 I 补充例子**

**例 1**  $\displaystyle \lim_{x\to \pi}\frac{\sin x}{\pi-x}$
$$\lim_{x\to \pi}\frac{\sin x}{\pi-x}=\lim_{x\to \pi}\frac{\sin(\pi-x)}{\pi-x}=1.$$

**例 2** $\displaystyle \lim_{x\to\infty}x\sin\frac{1}{x}$
$$\lim\limits_{x\to\infty}x\sin\frac{1}{x}=\lim\limits_{x\to\infty}\frac{\sin\frac{1}{x}}{\frac{1}{x}}=1.$$


---
layout: two-cols
layoutClass: gap-10
---

### 1.6.3.单调有界准则

**例子**: 求 $\sqrt{3+\sqrt{3+\sqrt{3+\cdots}}}$.

<v-click at='1'>

**分析**：
$$
\begin{align*}
&a_1=\sqrt{3},\\
&a_2=\sqrt{3+{\sqrt{3}}},\\
&a_3=\sqrt{3+\sqrt{3+{\sqrt{3}}}},\\
&\cdots,\\
&a_n=\underbrace{\sqrt{3+\sqrt{3+\cdots+{\sqrt{3}}}}}_{n},\\
&\cdots
\end{align*}
$$

</v-click>

<v-click at='2'>

题目所要求的是 $\lim\limits_{n\to\infty}a_n$.

</v-click>

::right::

<v-click at='3'>

递归规律：$a_{n+1}=\sqrt{3+a_n}\,(n=1,2,\cdots)$，

</v-click>

<v-click at='4'>

记 $f(x)=\sqrt{3+x}$，

从而 $a_{n+1}=f(a_n)$.

</v-click>

<Admonition title='求递归数列的极限常用的方法' admonitionType='info' v-click='5'>

**单调有界准则**
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例子**: 求 $\sqrt{3+\sqrt{3+\sqrt{3+\cdots}}}$.

<v-click at='1'>

**解：** 
记 $f(x)=\sqrt{3+x}$，则有

$$a_{n+1}=f(a_n)\,(n=1,2,\cdots)$$

</v-click>

<span v-click='2'>(I) **证明单调性** </span>
<v-click at='7'>

(i) 因为 $0<\sqrt{3}$，且 $f(x)$ 单调增加，则

$f(0)<f(\sqrt{3})$，即 $\sqrt{3}<\sqrt{3+\sqrt{3}}$，即

$a_1<a_2$；

</v-click>

<v-click at='9'>

(ii) 假设 $a_{k-1}<a_k$ 成立，由 $f(x)$ 单调增加，则

$f(a_{k-1})<f(a_k)$，即 $a_k<a_{k+1}$.
</v-click>

<v-click at='10'>

由数学归纳法可知，数列 $\{a_n\}$ 单调增加。
</v-click>

::right::

<v-click at='8'>

$f(x)$ 单调增加，则

$$x_1<x_2\Rightarrow f(x_1)<f(x_2).$$
<hr>
</v-click>

<v-switch>
  <template #3>
  <Admonition title='数学归纳法证明命题的步骤' admonitionType='info'>
  <v-click at='4'>

  （i）**“触发器”:** 当 $n=1$ 时，命题成立；
  </v-click>

  <v-click at='5'>

  （ii）**“联动机制”：** 假设 $n=k$ 时命题成立，推出 $n=k+1$ 时命题成立；
  </v-click>

  <v-click at='6'>

  得到结论：$\forall \, n\in \mathbb{N}$，命题都成立。
  </v-click>
  </Admonition>
  </template>

  <template #11>

  (II) **证明有界性**

  (i) 易得 $a_1=\sqrt{3}<3$；

  (ii) 假设 $a_k<3$，由 $f(x)$ 单调增加，故

  $f(a_k)<f(3)=\sqrt{3+3}<3$，

  即 $a_{k+1}<3$.

  由数学归纳法知，数列 $a_n<3\,(n=1,2,\cdots)$，即有上界。

  综上所述，数列 $a_n$ 单调有界，根据单调有界准则可知，数列 $a_n$ 极限存在。
  </template>
</v-switch>

---
layout: two-cols
layoutClass: gap-10
---

(III) **求极限**

不妨记 $A=\lim\limits_{n\to\infty}a_n$.

<span v-click='1'>在等式 $a_{n+1}=\sqrt{3+a_n}$ 两边，令 $n\to\infty$，得</span>

<v-click at='2'>

$$A=\sqrt{3+A}.$$
</v-click>

<v-click at='3'>

解得 $\displaystyle A=\frac{1+\sqrt{13}}{2}$ 或 $\displaystyle A=\frac{1-\sqrt{13}}{2}$ （舍弃），

</v-click>

<v-click at='4'>

所以 $\displaystyle \lim_{n\to\infty}a_n=\frac{1+\sqrt{13}}{2}$.
</v-click>

::right::

<v-click at='5'>

**问题：** 如果极限不存在，能否在等式两边取极限？

</v-click>

<v-click at='6'>

**反例：** $a_n=2^n$，则有 $a_{n+1}=2a_n$，

如果记 $A=\lim\limits_{n\to\infty}a_n$，并等式两边取极限，得 $A=2A$，从而 $A=0$，这是荒谬的。
</v-click>

<v-click at='7'>

而实际上在这里，$\lim\limits_{n\to\infty}a_n=\infty$，并等式两边取极限，得 $\infty=2\infty$。

$\infty$ 能当成普通的数来运算吗？
</v-click>

<Admonition title='如果极限不存在，不能在等式两边取极限' admonitionType='warning' v-click='8'>

因为极限不存在，令其为普通的数，是不合理的；对其进行运算，就更不合理了。

</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

### 1.6.4.重要极限 II

<Admonition title='重要极限 II' admonitionType='info'>

$$\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^{x}=\mathrm{e}\tag{1}$$

- **极限类型： $1^{\infty}$ 或理解为 $(1+0)^{\infty}$**。

</Admonition>

<v-click at='1'>

$$\Uparrow{u=f(x)}$$

$$\boxed{\lim_{f(x)\to\infty}\left(1+\frac{1}{f(x)}\right)^{f(x)}=\mathrm{e}}\tag{2}$$
</v-click>

::right::

<v-click at='2'>

$$\xLeftarrow{u=\frac{1}{x}} \boxed{\lim_{x\to 0}\left(1+x\right)^{\frac{1}{x}}=\mathrm{e}}\tag{3}$$
</v-click>

<v-click at='3'>

$$\Uparrow{u=f(x)}$$

$$\boxed{\lim_{f(x)\to 0}\left(1+f(x)\right)^{\frac{1}{f(x)}}=\mathrm{e}}\tag{4}$$
</v-click>

<Admonition title='只需记住' admonitionType='info' v-click='4'>

$$\lim_{ {\color{red}\square}\to 0}\bigg(1+{\color{red}\square}\bigg)^{\dfrac{1}{ {\color{red}\square}}}=\mathrm{e}\tag{*}$$

- **极限类型： $1^{\infty}$ 或理解为 <mark>$(1+0)^{\infty}$</mark>**；
- **要领： <mark>“凑”</mark>**

</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 
$\displaystyle \lim_{x\to \infty}\left(1+\frac{a}{x}\right)^x\,(a\neq 0)$

<v-click at='1'>

**解：**
$$
\begin{align*}
\lim_{x\to \infty}\left(1+\frac{a}{x}\right)^x
&=\lim_{x\to \infty}\left(1+\frac{a}{x}\right)^{\frac{x}{a}\cdot a}\\
&=\lim_{x\to \infty}\left[\left(1+\frac{a}{x}\right)^{\frac{x}{a}}\right]^a\\
&=\mathrm{e}^a.
\end{align*}
$$
</v-click>

::right::

<v-click at='2'>

**例 2**   $\displaystyle \lim_{x\to 0}(1-2x)^{\frac{1}{x}}$

</v-click>

<v-click at='3'>

**解：**
$$
\begin{align*}
\lim_{x\to 0}(1-2x)^{\frac{1}{x}}
&=\lim_{x\to 0}(1-2x)^{\frac{1}{-2x}\cdot (-2)}\\
&=\lim_{x\to 0}\left[(1-2x)^{\frac{1}{-2x}}\right]^{-2}\\
&=\mathrm{e}^{-2}.
\end{align*}
$$
</v-click>

---

**例 3** 
$\displaystyle \lim_{x\to \infty}\left(\frac{x+2}{x-1}\right)^{x+4}$

<v-click at='1'>

**解：** （常规解法：<mark>凑</mark>）
</v-click>

$${hide|1|1-2|all|1,3}{at:2}
\begin{align*}
\text{原式}&=\lim_{x\to \infty}\left(1+\frac{x+2}{x-1}-1\right)^{x+4}
=\lim_{x\to \infty}\left(1+\frac{3}{x-1}\right)^{\frac{x-1}{3}\cdot\frac{3(x+4)}{x-1}}\\
&=\lim_{x\to \infty}\left[\left(1+\frac{3}{x-1}\right)^{\frac{x-1}{3}}\right]^{\frac{3(x+4)}{x-1}}=\left[\lim_{x\to \infty}\left(1+\frac{3}{x-1}\right)^{\frac{x-1}{3}}\right]^{\lim\limits_{x\to\infty}\frac{3(x+4)}{x-1}}\\
&=\mathrm{e}^{\lim\limits_{x\to\infty}\frac{3(x+4)}{x-1}}=\mathrm{e}^3.
\end{align*}
$$


---
layout: two-cols
layoutClass: gap-10
---

### 1.6.5.补充幂指函数的极限

求 $\lim u(x)^{v(x)}$，其中 $u(x)>0，u(x)\not\equiv 1$.

<Admonition title='常用来处理幂指函数的手段' admonitionType='info' v-click='1'>

**<mark>化成以 $\mathrm{e}$ 为底的指数函数来处理</mark>**。
$$u^v=\mathrm{e}^{v\ln u}$$
</Admonition>

<v-click at='2'>

**情形一：（不是未定式）** 若 $\lim u=A>0$，$\lim v=B$（极限都要存在），则
$$\boxed{\lim u^v=\left(\lim u\right)^{\lim v}}$$
</v-click>

<v-click at='4'>

**情形二：（未定式）**  **化成以 $\mathrm{e}$ 为底的指数函数来处理**，并逐步化成基本的未定式 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$.
</v-click>

::right::

<v-click at='3'>

**情形一** 的证明

若 $\lim u=A>0$，$\lim v=B$（极限都要存在），则
$$
\begin{align*}
\lim u^v&=\lim\mathrm{e}^{v\ln u}=\mathrm{e}^{\lim (v\ln u)}
=\mathrm{e}^{\lim v \cdot\lim(\ln u)}\\
&=\mathrm{e}^{\lim v \cdot \ln \lim u}=\mathrm{e}^{B \ln A}=A^B\\
&=\left(\lim u\right)^{\lim v}
\end{align*}
$$
</v-click>

<v-click at='5'>

**如果实在是判断不清楚是否不是未定式，就直接<mark>化成以 $\mathrm{e}$ 为底的指数函数来处理</mark>**。

</v-click>

---

**例 3** 
$\displaystyle \lim_{x\to \infty}\left(\frac{x+2}{x-1}\right)^{x+4}$

<v-click at='1'>

**解：** （技巧）
</v-click>

$${hide|1|1-2|all}{at:1}
\begin{align*}
\text{原式}&=\lim_{x\to \infty}\left(\frac{1+\frac{2}{x}}{1-\frac{1}{x}}\right)^{x+4}
=\frac{\lim\limits_{x\to\infty}\left(1+\frac{2}{x}\right)^{x+4}}{\lim\limits_{x\to\infty}\left(1-\frac{1}{x}\right)^{x+4}}\\
&=\frac{\lim\limits_{x\to\infty}\left(1+\frac{2}{x}\right)^{\frac{x}{2}\cdot\frac{2(x+4)}{x}}}{\lim\limits_{x\to\infty}\left(1-\frac{1}{x}\right)^{(-x)\cdot\frac{x+4}{-x}}}
=\frac{\mathrm{e}^{\lim\limits_{x\to\infty}\frac{2(x+4)}{x}}}{\mathrm{e}^{\lim\limits_{x\to\infty}\frac{x+4}{-x}}}\\
&==\frac{\mathrm{e}^2}{\mathrm{e}^{-1}}=\mathrm{e}^3.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

## 1.7.无穷小量的比较

<v-click at='1'>

**为什么要考察无穷小量？**

关心 $f(x)\to A\,(x\to x_0)$ 的快慢程度（“速度”），之前求极限的例子已经看到。

</v-click>

<v-click at='2'>

因为 $\displaystyle \lim_{x\to x_0}(f(x)-A)=0$

问题转化为 **无穷小量 $\to 0$ 的“速度”**。
<hr>
</v-click>

<v-click at='3'>

**无穷小量 $\to 0$ 的“速度”有何用？**

</v-click>

<v-click at='3'>

- 深入**理解**并**预判**函数的**变化趋势**；
- 用来**求极限**、**判断级数和积分的敛散性**、……

</v-click>

::right::

<v-click at='4'>

**掌握什么？**

- <mark>无穷小量的比较</mark>
- <mark>利用等价无穷小量求极限</mark>
- <mark>熟练使用常用的等价无穷小</mark>

</v-click>

---

### 1.7.1.无穷小的比较的定义

设 $\alpha$，$\beta$ 是在<span v-mark.red='[2]'>同一个变化过程</span>中的无穷小量，常数 $C\neq 0$，

<v-clicks>

- 若 <mark>$\lim\limits_{x\to x_0}\frac{\beta}{\alpha}=0$</mark>，则称 $\beta$ 比 $\alpha$ **<mark>高阶</mark>无穷小**，记为 <mark>$\beta=o(\alpha)$</mark> *（$\beta$ 比 $\alpha$ 趋于 $0$ 的“速度” <mark>快</mark>很多）*；
- 若 <mark>$\lim\limits_{x\to x_0}\frac{\beta}{\alpha}=\infty$</mark>，则称 $\beta$ 比 $\alpha$ **<mark>低阶</mark>无穷小** *（$\beta$ 比 $\alpha$ 趋于 $0$ 的“速度” <mark>慢</mark>很多）*；
- 若 <mark>$\lim\limits_{x\to x_0}\frac{\beta}{\alpha}=C$</mark>，则称 $\beta$ 和 $\alpha$ **<mark>同阶</mark>无穷小** *（$\beta$ 和 $\alpha$ 趋于 $0$ 的“速度” 成<mark>倍数</mark>关系）*；
- 若 <mark>$\lim\limits_{x\to x_0}\frac{\beta}{\alpha}=1$</mark>，则称 $\beta$ 和 $\alpha$ **<mark>等价</mark>无穷小**，记为 <mark>$\alpha\sim \beta$</mark> *（$\beta$ 和 $\alpha$ 趋于 $0$ 的“速度” <mark>相同</mark>）*；
- 若 <mark>$\lim\limits_{x\to x_0}\frac{\beta}{\alpha^k}=C$</mark>，则称 $\beta$ 关于 $\alpha$ 的 **<mark> $k$ 阶</mark>无穷小** *（$\beta$ 以 $C\alpha^k$ 的“速度” 趋于 $0$）*。
</v-clicks>

---

**无穷小量的“度量”**

常以<mark>幂函数</mark>为 “<span style='color:red'>尺子</span>” 来 <mark>“度量”</mark> 趋于 $0$ 的“速度”。

<v-click at='1'>

**比如**：当 $x\to 0$ 时，$f(x)\to 0$，$x^k\to 0\,(k>0)$,
</v-click>

<v-clicks>

- 若 <mark>$\lim\limits_{x\to 0}\frac{f(x)}{x^k}=C$</mark>，则称 $f(x)$ 关于 $x$ 的 **<mark> $k$ 阶</mark>无穷小** *（$f(x)$ 以 $C x^k$ 的“速度” 趋于 $0$）*。
- 若 <mark>$\lim\limits_{x\to 0}\frac{f(x)}{x^k}=0$</mark>，则称 $f(x)$ 比 $x^k$ 的 **<mark> 高阶</mark>无穷小**，记为 <mark>$f(x)=o(x^k)\,(x\to 0)$</mark> *（$f(x)$ 比 $x^k$ 趋于 $0$ 的“速度”快很多）*。
</v-clicks>

---

**等价的性质**

- （自返性）$A\sim A$；
- （对称性）$A\sim B\implies B\sim A$;
- （传递性）$A\sim B,B\sim C \implies A\sim C$.

---

### 1.7.2.无穷小量的比较方法

1. **相除，求极限**，根据极限的结果来判定；
2. 利用**等价的传递性**和**常用的等价无穷小**来计算。

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 比较下列无穷小

<v-click at="1">

(1) 当 $x\to 0$ 时，$x^3+x^2$ 与 $x^3+x$；
</v-click>

<v-click at="2">
解：因为
$$ {hide|hide|1|2|3|all}
\begin{align*}
  &\lim_{x\to 0}\frac{x^3+x^2}{x^3+x}\\
  =&\lim_{x\to 0}\frac{x^2(x+1)}{x(x^2+1)}\\
  =&\lim_{x\to 0}\frac{x(x+1)}{x^2+1}\\
  =&0,
\end{align*}
$$
</v-click>

<v-click at="6">

所以 $x^3+x^2=o(x^3+x)\,(x\to 0)$.
</v-click>
::right::

<v-click at="7">

(2) 当 $x\to 1$ 时，$x^5-1$ 与 $x^3-1$；
</v-click>

<v-click at="8">
解：因为
$$ {hide|hide|hide|1|2|3|all}
\begin{align*}
&\lim_{x\to 1}\frac{x^5-1}{x^3-1}\\
=&\lim_{x\to 1}\frac{(x-1)(1+x+x^2+x^3+x^4)}{(x-1)(1+x+x^2)}\\
=&\lim_{x\to 1}\frac{1+x+x^2+x^3+x^4}{1+x+x^2}\\
=&\frac{5}{3},
\end{align*}
$$
</v-click>

<v-click at="12">

所以当 $x\to 1$ 时，$x^5-1$ 与 $x^3-1$ 是同阶无穷小。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**特殊情况**

(3) 当 $x\to 0$ 时，$x^2+x$ 与 $x^2+1$；

<v-click at="1">

解：因为 $\lim\limits_{x\to 0}(x^2+1)\neq 0$，所以没有可比性。

</v-click>


::right::

<v-click at="2">

(4) 当 $x\to 0$ 时，$\displaystyle x\sin\frac{1}{x}$ 与 $x$；
</v-click>

<v-click at="3">

解：因为
$$
\lim_{x\to 0}\frac{x\sin\frac{1}{x}}{x}=\lim_{x\to 0}\sin\frac{1}{x},
$$

</v-click>

<v-click at="4">

极限不存在（振荡），不**属于无穷小量比较定义的任何一种情况**，所以比较不出来。

</v-click>

---

### 1.7.3.常用的等价无穷小
<Admonition title='常用的等价无穷小' admonitionType='info' v-click='1'>

当 $x\to 0$ 时，
- $x \sim \sin x \sim \tan x \sim \arcsin x \sim \arctan x \sim \ln(1+x) \sim \mathrm{e}^x-1$;
- $\alpha x \sim (1+x)^{\alpha}-1$;
- $\frac{x^2}{2} \sim 1-\cos x$.
</Admonition>

<Admonition title='实际使用等价无穷小' admonitionType='info' v-click='2'>

当 ${\color{red}\square}\to 0$ 时，
- ${\color{red}\square} \sim \sin {\color{red}\square} \sim \tan {\color{red}\square} \sim \arcsin {\color{red}\square} \sim \arctan {\color{red}\square} \sim \ln(1+{\color{red}\square}) \sim \mathrm{e}^{\color{red}\square}-1$;
- $\alpha {\color{red}\square} \sim (1+{\color{red}\square})^{\alpha}-1$;
- $\frac{ {\color{red}\square}^2}{2} \sim 1-\cos {\color{red}\square}$.
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**常用等价无穷小量的补充证明**

<v-clicks>

1. $\arcsin x \sim x\,(x\to 0)$
$$\lim_{x\to 0}\frac{\arcsin x}{x}\xlongequal{u=\arcsin x}\lim_{u\to 0}\frac{u}{\sin u}=1.$$

2. $\arctan x \sim x\,(x\to 0)$
$$\lim_{x\to 0}\frac{\arctan x}{x}\xlongequal{u=\arctan x}\lim_{u\to 0}\frac{u}{\tan u}=1.$$

3. $\ln(1+x) \sim x\,(x\to 0)$
$$\lim_{x\to 0}\frac{\ln(1+x)}{x}=\lim_{x\to 0}\ln(1+x)^{\frac{1}{x}}=\ln \mathrm{e}=1.$$

</v-clicks>

::right::

<v-clicks>

4. $\mathrm{e}^x-1 \sim x\,(x\to 0)$
$$\lim_{x\to 0}\frac{\mathrm{e}^x-1}{x}\xlongequal{u=\mathrm{e}^x-1}\lim_{u\to 0}\frac{u}{\ln(1+u)}=1.$$

5. $(1+x)^{\alpha}-1 \sim \alpha x\,(x\to 0)$
$$
\begin{align*}
\lim_{x\to 0}\frac{(1+x)^{\alpha}-1}{\alpha x}&=\lim_{x\to 0}\frac{\mathrm{e}^{\alpha\ln(1+x)}-1}{\alpha x}\\
&=\lim_{x\to 0}\frac{\alpha\ln(1+x)}{\alpha x}\\
&=1.
\end{align*}
$$
</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**无穷小量的阶数相关**

**例 1** 设 

$a_1=x(\cos\sqrt{x}-1)$，

$a_2=\sqrt{x}\ln(1+\sqrt[3]x)$，

$a_3=\sqrt[3]{x+1}-1$，

当 $x\to 0^+$ 时，以上 $3$ 个无穷小量关于 $x$ 的阶数按照从低到高的排序是_________。

<v-click at="1">

**解：** 因为当 $x\to 0$ 时，
$$a_1\sim -\frac{1}{2}x^2，a_2\sim x^{\frac{5}{6}}，a_3\sim \frac{1}{3}x,$$

</v-click>

<v-click at="2">

所以 排序是 $a_2,a_3,a_1$.

</v-click>

::right::

<v-click at="3">

**例 2** 当 $x\to 0$ 时。求 $\tan x-\sin x$ 是关于 $x$ 的几阶无穷小？

</v-click>

<v-click at="4">

解：因为 $\tan x-\sin x=\tan x(1-\cos x)$，

</v-click>

<v-click at="5">

而当 $x\to 0$ 时，
$$\tan x \sim x，1-\cos x\sim \frac{x^2}{2},$$

</v-click>

<v-click at="6">

所以 $\tan x-\sin x$ 是关于 $x$ 的 $3$ 阶无穷小。

</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 1.7.4.利用等价无穷小代换求极限

**引例** 求极限 $\displaystyle \lim_{x\to 0}\frac{\sin 3x}{\tan 5x}$.

<v-click at='1'>

$$
\begin{align*}
\lim_{x\to 0}\frac{\sin 3x}{\tan 5x}&=\lim_{x\to 0}\frac{\sin 3x}{3x}\cdot\frac{5x}{\tan 5x}\cdot\frac{3x}{5x}\\
&=\lim_{x\to 0}\frac{3x}{5x}\\
&=\frac{3}{5},
\end{align*}
$$
注意：当 $x\to 0$ 时，$\sin 3x \sim 3x$，$\tan 5x \sim 5x$.
</v-click>

<v-click at='2'>

其实这里的计算过程就是等价无穷小代换定理的证明过程。
</v-click>

::right::

等价无穷小替换定理占位

---
layout: two-cols
layoutClass: gap-10
---

**例子 2** 求下列极限：

(1) $\lim\limits_{x\to 0}\frac{\sqrt{1+\sin 2x}-1}{\ln(1+3x)}$

<v-click at='1'>

**解：**
</v-click>

$${hide|1|all}{at:1}
\begin{align*}
&\lim_{x\to 0}\frac{\sqrt{1+\sin 2x}-1}{\ln(1+3x)}=\lim_{x\to 0}\frac{\frac{1}{2}\sin 2x}{3x}\\
&\lim_{x\to 0}\frac{\frac{1}{2}\cdot 2x}{3x}=\frac{1}{3}
\end{align*}
$$


<v-click at='3'>
<div v-mark.cross.red="4">

**解：**
$${|1|all}
\begin{align*}
&\lim_{x\to 0}\frac{\sqrt{1+\sin 2x}-1}{\ln(1+3x)}=\lim_{x\to 0}\frac{\sqrt{1+2x}-1}{3x}\\
&\lim_{x\to 0}\frac{\frac{1}{2}\cdot 2x}{3x}=\frac{1}{3}
\end{align*}
$$
</div>
</v-click>

::right::

<Admonition title='复合函数内不能用等价无穷小替换' admonitionType='error' v-click='5'>
等价无穷小替换定理只允许在<mark>相除</mark>的时候用。
</Admonition>

---

## 1.8.连续与间断

---

### 1.8.1.连续定义
两个等价的定义
- 极限值等于函数值：$\lim\limits_{x\to x_0}f(x)=f(x_0)$
- 当自变量的增量趋于 $0$ 时，函数的增量趋于 $0$：$\lim\limits_{\Delta x\to 0}\Delta y=0$

---

### 1.8.2.间断点分类

---

## 1.9.连续函数的运算

---

## 1.10.闭区间上连续函数的性质

1. 最值定理
2. 零点定理
3. 界值定理

