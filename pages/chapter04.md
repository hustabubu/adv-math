# 4.不定积分

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>

---
layout: two-cols
layoutClass: gap-10
---

## 4.1.不定积分的概念与性质
|              **运算**               | 式子                                                                                             |
| :---------------------------------: | :----------------------------------------------------------------------------------------------- |
| <span v-click='1'>**求导：**</span> | <span v-click='1'>$(f(x))'=({\color{red}{}?})$</span>                                            |
| <span v-click='9'>**积分：**</span> | <span v-click='2'>$(\,$<span v-mark.circle.red='3'>$\,{\color{red}?}\,$</span>$\,)'=f(x)$</span> |

<Arrow x1="225" y1="220" x2="225" y2="245" color="#953" width="1.5" v-click='3'/>

<div text-center v-click='3'>

<span v-mark.box.red='3'>$f(x)$ 的原函数</span>
</div>

<span v-click='8'>$f(x)$ 的**不定积分：**$\triangleq\,$ </span><span v-click='7' v-mark.box.red='7'>$f(x)$ 的所有原函数</span>

<span v-click='9'>**积分运算：** 求原函数的运算</span>

::right::

<span v-click='4'>$2x=(\,{\color{red}?}\,)'$</span>

<span v-click='5'>$x^2,x^2+1,x^2+3,\dots$</span>

<span class="text-blue" v-click='6'>原函数**不唯一**!</span>

<Admonition title='求导和积分互为“逆”运算' admonitionType='info' text-center v-click='10'>

求导 $\xleftrightarrow{互为{\large “{\color{red} 逆}”}运算}$ 积分
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**原函数的定义**

设 $f(x)$ 是定义在区间 $I$ 上的函数，若存在函数 $F(x)$，使得对 $\forall x \in I$ 都有
<div text-center>

<span v-mark.box.red='0'>$F'(x)=f(x)$</span> 或 <span v-mark.box.red='0'>$\mathrm{d}F(x)=f(x)\mathrm{d}x$</span>，
</div>

则称函数 $F(x)$ 为 $f(x)$ 在区间 $I$ 上的**原函数**。

<span v-click='1'>**问题：**</span>

<v-clicks at='1'>

1. 给定一个函数，其原函数是否**存在**？
  ><span class="text-blue">连续函数一定存在原函数。</span>
1. $f(x)$ 的所有原函数长什么样？
  ><span v-mark.highlight.yellow='4'>$=$ 其中一个原函数 $+$ 任意常数 $C$。</span><br>
   比如：$2x$ 的所有原函数 $=x^2+C$
</v-clicks>

::right::

<span v-click='5'>**原因：** 若 $F(x)$ 和 $G(x)$ 都是 $f(x)$ 的原函数，</span>
<span v-click='6'>即</span>
<v-click at='6'>

$$F'(x)\equiv f(x)\equiv G'(x),$$
</v-click>

<v-click at='7'>

故 
$$F(x)\equiv G(x)+C.$$
</v-click>

<v-click at='8'>

><span class='text-blue'>同一个函数的任意两个原函数相差一个常数</span>。
</v-click>

<span v-click='9'>若 $F(x)$ 是 $f(x)$ 的其中一个原函数，则</span>

<div class='text-center' v-click='10'>

<span v-mark.highlight.yellow='10'>$f(x)$ 的所有原函数 $=F(x)+C$</span>. 

</div>

<span v-click='11'>一旦求出一个原函数，也就同时求出了其所有原函数。</span>

---
layout: two-cols
layoutClass: gap-10
---

**不定积分的定义**

<span v-mark.red='1'>求 $f(x)$ 的所有原函数</span>，也就是<span v-mark.red='1'>求导的逆运算</span>

|                      |          |
| :-------------------: | :------: |
|       原函数的<span v-mark.highlight.yellow='2'>“载体”</span>： | 不定积分 |
| 求原函数的运算<span v-mark.highlight.yellow='2'>“载体”</span>： | 积分运算 |

::right::

<v-click at='3'>
<hr>

**定义：** 在区间 $I$ 上，把 **$f(x)$ 的所有原函数**称为 $f(x)$ 的**不定积分**，记为
$$\int f(x)\mathrm{d}x,$$
</v-click>

<v-click at='4'>

其中称 $f(x)$ 为**被积函数**（积分的运算对象），称 $x$ 为积分变量。
<hr> 
</v-click>



<v-click at='5'>

若已求得 $f(x)$ 的一个原函数 $F(x)$，则
</v-click>

<v-click at='6'>

$$\int f(x)\mathrm{d}x=F(x)+C$$
就表示了 $f(x)$ 的所有原函数。
</v-click>

<v-click at='7'>

- 不定积分是 <span v-mark.highlight.yellow='7'>一簇函数</span>。
</v-click>

---

**求导和积分都是映射**

| 运算  |                 映射法则                 |              |           |                                        |
| :---: | :--------------------------------------: | :----------: | :-------: | :------------------------------------: |
| 求导  | $\displaystyle\frac{\mathrm{d}}{\mathrm{d}x}(\cdot):$ | 可导函数集合 | $\mapsto$ |                函数集合                |
|       | $\displaystyle\frac{\mathrm{d}}{\mathrm{d}x}(\cdot):$ |    $f(x)$    | $\mapsto$ | $\displaystyle\frac{\mathrm{d}}{\mathrm{d}x}(f(x))$ |
| 积分  |        $\displaystyle\int(\cdot)\mathrm{d}x:$         | 可积函数集合 | $\mapsto$ |                函数集合                |
|       |        $\displaystyle\int(\cdot)\mathrm{d}x:$         |    $f(x)$    | $\mapsto$ |         $\displaystyle\int f(x)\mathrm{d}x$         |

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 求不定积分 (1) $\displaystyle\int 3x^2\mathrm{d}x$， (2) $\displaystyle \int \frac{1}{x}\mathrm{d}x$.

<span v-click='1'>**解：** (1) 因为 $(x^3)'=3x^2$，</span>
<span v-click='2'>所以 $x^3$ 是 $3x^2$ 的一个原函数，</span>
<span v-click='3'>因此</span>

<v-click at='3'>

$$\int 3x^2\mathrm{d}x=x^3+C.$$
</v-click>

<span v-click='4'>(2) 因为 $(\ln|x|)'=\frac{1}{x}$，</span>
<span v-click='5'>所以 $\ln|x|$ 是 $\frac{1}{x}$ 的一个原函数，</span>
<span v-click='6'>因此</span>

<v-click at='6'>

$$\int \frac{1}{x}\mathrm{d}x=\ln|x|+C.$$
</v-click>

::right::

<span v-click='7'>**例 2** 设曲线过点 $(1,2)$，且其上任意一点处的切线斜率等于这点横坐标的两倍，求此曲线方程。</span>

<v-click at='8'>

**解：** 设曲线方程为 $y=f(x)$，则
$$\frac{\mathrm{d}y}{\mathrm{d}x}=2x.$$
</v-click>

<span v-click='9'>故 $f(x)=x^2+C$，</span>
<span v-click='10'>又因为曲线过点 $(1,2)$，故 $2=1^2+C$，即 $C=1$，</span>

<v-click at='11'>

所以所求曲线方程为
$$y=x^2+1.$$
</v-click>

<v-click at='12'>

函数 $f(x)$ 的原函数的图像称为 $f(x)$ 的**积分曲线**，是一簇平行曲线。
><span class='text-blue'>同一个函数的任意两个原函数相差一个常数</span>。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

<div text-center>

**求导的运算法则** $\xrightarrow{\large \color{red}传递}$ **积分运算法则**
</div>

<Admonition title='原函数的等价描述' admonitionType='warning' v-click='1'>

<v-clicks at='1'>

$(1)$ $F(x)$ 是 $f(x)$ 的其中一个原函数；

$\iff$ $(2)$ $f(x)=F'(x)$;

$\iff$ $(3)$ $\displaystyle\int f(x)\mathrm{d}x=F(x)+C$;
</v-clicks>
</Admonition>

<Admonition title='求导与积分的关系 I' admonitionType='warning' v-click='4'>

$$\left[\int f(x)\mathrm{d}x\right]'=f(x).\tag{4}$$

<span v-mark.red='6' v-click='6'>1. 常用于<mark>检验不定积分的正确性</mark>，**非常重要**；</span>

<span v-mark.red='7' v-click='7'>2. 证明积分运算的重要工具。</span>
</Admonition>

::right::

<v-click at='5'>

$$f(x)\xrightarrow{积分}\int f(x)\mathrm{d}x\xrightarrow{求导} f(x).$$
</v-click>

<Admonition title='求导与积分的关系 II' admonitionType='warning' v-click='8'>

$$\int f'(x)\mathrm{d}x=f(x)+C.\tag{5}$$
</Admonition>

<v-click at='9'>

$$f(x)\xrightarrow{求导}f'(x)\xrightarrow{积分} f(x)+C.$$
</v-click>

<Admonition title='微分和积分的关系' admonitionType='warning' v-click='10'>

$$\mathrm{d}\left[\int f(x)\mathrm{d}x\right]=f(x)\mathrm{d}x,$$
$$\int \mathrm{d}f(x)=f(x)+C.$$
</Admonition>

---

**检验不定积分的正确性：** 若 积分的导数 $=$ 被积函数

**例 3** 检验下列不定积分正确与否

(1) $\displaystyle\int x\cos x\,\mathrm{d}x=x\sin x+C$,

(2) $\displaystyle\int x\cos x\,\mathrm{d}x=x\sin x+\cos x+C$.

<v-click at='1'>

**解：** (1) 错误，因为
$$(x\sin x)'=\sin x+x\cos x \neq x\cos x;$$
</v-click>

<v-click at='2'>

(2) 正确，因为

$$(x\sin x+\cos x)'=\sin x+x\cos x-\sin x=x\cos x.$$
</v-click>

---

**不定积分满足线性运算**

若 $f(x)$ 和 $g(x)$ 都是可积的，则
1. $\displaystyle\int[f(x)+g(x)]\mathrm{d}x=\int f(x)\mathrm{d}x+\int g(x)\mathrm{d}x$,
2. $\displaystyle\int k f(x)\mathrm{d}x=k\int f(x)\mathrm{d}x$.

<span v-click='1'>**证：**</span>
$${hide|1|1-2}{at:1}
\begin{align*}
\left[\int f(x)\mathrm{d}x+\int g(x)\mathrm{d}x\right]'&=\left[\int f(x)\mathrm{d}x\right]'+\left[\int g(x)\mathrm{d}x\right]'\\
&=f(x)+g(x).
\end{align*}
$$

$${hide|1|1-2}{at:3}
\begin{align*}
\left[k\int f(x)\mathrm{d}x\right]'&=k\left[\int f(x)\mathrm{d}x\right]'\\
&=k f(x).
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**基本积分表**

<v-clicks>

1. $\displaystyle\int k \,\mathrm{d}x=kx+C$ （$k$ 是常数）,
2. $\displaystyle\int x^{\mu} \,\mathrm{d}x=\frac{1}{\mu+1}x^{\mu+1}+C \,(\mu\neq -1)$,
3. $\displaystyle\int \frac{\mathrm{d}x}{x}=\ln|x|+C$,
4. $\displaystyle\int \mathrm{e}^x\,\mathrm{d}x=\mathrm{e}^x+C$,
5. $\displaystyle\int a^x\,\mathrm{d}x=\frac{a^x}{\ln a}+C\,(a>0,a\neq 1)$,
6. $\displaystyle\int \cos x \,\mathrm{d}x=\sin x+C$,
7. $\displaystyle\int \sin x \,\mathrm{d}x=-\cos x+C$,
</v-clicks>

::right::
<v-clicks>

8. $\displaystyle\int \frac{\mathrm{d}x}{\cos^2 x}=\int \sec^2 x\,\mathrm{d}x=\tan x+C$,
9. $\displaystyle\int \frac{\mathrm{d}x}{\sin^2 x}=\int \csc^2 x\,\mathrm{d}x=-\cot x+C$,
10. $\displaystyle\int \sec x \tan x \,\mathrm{d}x=\sec x+C$,
11. $\displaystyle\int \csc x\cot x\,\mathrm{d}x=-\csc x+C$,
12. $\displaystyle\int \frac{\mathrm{d}x}{1+x^2}=\arctan x+C$ 或 $-\mathrm{arccot} x+C$
13. $\displaystyle\int \frac{\mathrm{d}x}{\sqrt{1-x^2}}=\arcsin x+C$ 或 $-\arccos x+C$.
</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**直接积分法：** 恒等变形（化成<span v-mark.red='1'>和积分公式一样</span>），套公式.

<span v-click='1'>**例 4** 求 $\displaystyle\int(2^x\mathrm{e}^x-\cos x)\mathrm{d}x$.</span>

<span v-click='2'>$\displaystyle\int(2^x\mathrm{e}^x-\cos x)\mathrm{d}x=\int(2\mathrm{e})^x\mathrm{d}x-\int\cos x\mathrm{d}x$</span>

<span v-click='3' v-mark.crossed.red='4'>$\displaystyle=\frac{(2\mathrm{e})^x}{\ln(2\mathrm{e})}+C-(\sin x+C)=\frac{(2\mathrm{e})^x}{\ln(2\mathrm{e})}-\sin x$.</span>

<Admonition title='不同积分的任意常数是不同的' admonitionType='error' v-click='4'>
</Admonition>

<v-click at='5'>

$=\frac{(2\mathrm{e})^x}{\ln(2\mathrm{e})}+C_1-(\sin x+C_2)$

$=\frac{(2\mathrm{e})^x}{\ln(2\mathrm{e})}-\sin x+(C_1-C_2)$
</v-click>

<span v-click='6'>$=\frac{(2\mathrm{e})^x}{\ln(2\mathrm{e})}-\sin x+C$.</span>

::right::

<span v-click='7'>**例 5** 求 $\displaystyle\int \sqrt{x}(x^2-5)\mathrm{d}x$.</span>

$${hide|1|1-2|1-3}{at:8}
\begin{align*}
&\int \sqrt{x}(x^2-5)\mathrm{d}x\\
=&\int\left(x^{\frac{5}{2}}-5x^{\frac{1}{2}}\right)\mathrm{d}x=\int x^{\frac{5}{2}}\,\mathrm{d}x-5\int x^{\frac{1}{2}}\,\mathrm{d}x \\
=&\frac{2}{7}x^{\frac{7}{2}}-\frac{10}{3}x^{\frac{3}{2}}+C.
\end{align*}
$$

<Admonition title='不定积分的任意常数' admonitionType='info' v-click='11'>

<span v-mark.red='12'>简单处理：后面加上 $C$</span>，
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 6** $\displaystyle\int \frac{1}{\sin^2 x\cos^2 x}\mathrm{d}x$.

$${hide|1|1-2|1-3|1-4}{at:1}
\begin{align*}
&\int \frac{1}{\sin^2 x\cos^2 x}\mathrm{d}x\\
=&\int \frac{\sin^2 x+\cos^2 x}{\sin^2 x\cos^2 x}\mathrm{d}x\\
=&\int \left(\frac{1}{\cos^2 x}+\frac{1}{\sin^2 x}\right)\mathrm{d}x\\
=&\tan x+\cot x+C.
\end{align*}
$$

::right::

---
layout: section
---

## 4.2.换元积分法

---
layout: two-cols
layoutClass: gap-10
---

### 4.2.1.凑微分

**引例：** $\displaystyle\int \sin 5x \,\mathrm{d}x$. <span class='text-blue' v-click='8'>（复合函数的积分）</span>

<span v-click='1'>公式：$\displaystyle\int \sin x \,\mathrm{d}x=-\cos x +C$.</span>

<span v-click='3'>换元 $x={\color{blue}\blacksquare}$,</span>

<span v-click='2'>希望有：$\displaystyle\int \sin {\color{blue}\blacksquare} \,\mathrm{d}{\color{blue}\blacksquare}=-\cos {\color{blue}\blacksquare} +C$，</span>
<span v-click='4'>从而</span>

<v-click at='4'>

$$\int \sin \fcolorbox{blue}{wwhite}{$5x$}\mathrm{d}(\fcolorbox{blue}{wwhite}{$5x$})=-\cos \fcolorbox{blue}{wwhite}{$5x$}+C.$$
</v-click>

<span v-click='5'>又因为 $\mathrm{d}(5x)=(5x)'\mathrm{d}x=5\,\mathrm{d}x$，</span>
<span v-click='6'>所以</span>

$${hide|1|1-2}{at:6}
\begin{align*}
&\int \sin 5x \,\mathrm{d}x=\frac{1}{5}\int \sin 5x\cdot (5x)'\mathrm{d}x\\
=&\frac{1}{5}\int \sin 5x\,\mathrm{d}(5x)=-\frac{1}{5}\cos 5x +C.
\end{align*}
$$

::right::

<v-click at='9'>

**第一换元法（<span class='text-red'>凑</span>微分法）**
$$\int f[{\color{blue}\varphi(x)}]({\color{blue}\varphi(x)})'\mathrm{d}x\xlongequal{ {\color{blue}u}={\color{blue}\varphi(x)}}
\left[\int f({\color{blue}u})\mathrm{d}{\color{blue}u}\right]_{ {\color{blue}u}={\color{blue}\varphi(x)}}.$$
</v-click>

<div text-center v-click='10'>

希望：（<span class='text-red'>难</span>）$\xrightarrow{转化}$ （<span class='text-red'>易</span>）
</div>

<v-click at='11'>

<span class='text-red'>易</span>：可以用直接积分法解决
</v-click>

<v-click at='12'>

<span class='text-red'>**凑**</span>：凑 <span v-mark.circle.red='12'>里</span> 层函数 ${\color{blue}\varphi(x)}$ 的微分：
$$({\color{blue}\varphi(x)})'\mathrm{d}x=\mathrm{d}({\color{blue}\varphi(x)})$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**第一换元法的证明**
$$\int f[\varphi(x)]\varphi'(x)\mathrm{d}x\xlongequal{u=\varphi(x)}
\left[\int f(u)\mathrm{d}u\right]_{u=\varphi(x)}.$$


<span v-click='1'>记 $F(u)$ 是 $f(u)$ 的原函数，</span>
<span v-click='2'>则 $\displaystyle\frac{\mathrm{d}F(u)}{\mathrm{d}u}=f(u)$，且</span>
<span v-click='3'>等式右侧 $F[\varphi(x)]+C$ 是复合函数：</span>
$${hide|1}{at:3}
x\xmapsto{\varphi} u\xmapsto{F} F(u)
$$

$${hide|1-2}{at:4}
\begin{align*}
\frac{\mathrm{d}F(u)}{\mathrm{d}x}&=\frac{\mathrm{d}F(u)}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x}=f(u)\varphi'(x)\\
&=f[\varphi(x)]\varphi'(x).
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 1** $\displaystyle\int\frac{1}{3+2x}\mathrm{d}x$.

$${hide|1}{at:1}
\int\frac{1}{\color{blue}\blacksquare}\,\mathrm{d}{\color{blue}\blacksquare}=\ln|{\color{blue}\blacksquare}|+C.
$$


<span v-click='2'>想凑 $\mathrm{d}(3+2x)=2\,\mathrm{d}x$，故</span>

$${hide|1|1-2}{at:3}
\begin{align*}
&\int\frac{1}{3+2x}\,\mathrm{d}x=\frac{1}{2}\int\frac{1}{3+2x}\cdot2\,\mathrm{d}x\\
=&\frac{1}{2}\int\frac{1}{\color{blue}3+2x}\,\mathrm{d}({\color{blue}3+2x})=\frac{1}{2}\ln|{\color{blue}3+2x}|+C.
\end{align*}
$$

::right::

<span v-click='5'>**例 2** $\displaystyle\int\mathrm{e}^{-x}\,\mathrm{d}x$.</span>

$${hide|1}{at:6}
\int\mathrm{e}^{-x}\,\mathrm{d}x=-\int\mathrm{e}^{-x}\,\mathrm{d}(-x)=\mathrm{e}^{-x}+C.
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 3** $\displaystyle\int x\sqrt{1-x^2}\,\mathrm{d}x$.

<span v-click='1'>想凑 $\mathrm{d}(1-x^2)=-2x\,\mathrm{d}x$，故</span>

$${hide|1|1-2}{at:2}
\begin{align*}
&\int x\sqrt{1-x^2}\,\mathrm{d}x=-\frac{1}{2}\int\left(1-x^2\right)^{\frac{1}{2}}\mathrm{d}\left(1-x^2\right)\\
=&-\frac{1}{2}\cdot\frac{2}{3}\left(1-x^2\right)^{\frac{3}{2}}+C.
\end{align*}
$$

$${hide|1}{at:4}
\int ({\color{blue}\blacksquare})^{\mu}\,\mathrm{d}({\color{blue}\blacksquare})=\frac{1}{\mu+1}({\color{blue}\blacksquare})^{\mu+1}+C.
$$

::right::

<span v-click='5'>**例 4** $\displaystyle\int\frac{\mathrm{d}x}{x(1+2\ln x)}$.</span>
<span class='text-orange' v-click='6'> ($\displaystyle\frac{\mathrm{d}x}{x}=\mathrm{d}(\ln x)$)</span>

$${hide|1|1-2}{at:7}
\begin{align*}
&\int\frac{\mathrm{d}x}{x(1+2\ln x)}=\int\frac{\mathrm{d}(\ln x)}{1+2\ln x}\\
=&\frac{1}{2}\int\frac{\mathrm{d}(1+2\ln x)}{1+2\ln x}=\frac{1}{2}\ln|1+2\ln x|+C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 6** $\boxed{\int\frac{\mathrm{d}x}{\sqrt{a^2-x^2}}=\arcsin\frac{x}{a}+C\,(a>0).}$

$${hide|1}{at:1}
\int\frac{\mathrm{d}{\color{blue}\blacksquare}}{\sqrt{1-{\color{blue}\blacksquare}^2}}=\arcsin {\color{blue}\blacksquare}+C.
$$

$${hide|1|1-2|1-3}{at:2}
\begin{align*}
\int\frac{\mathrm{d}x}{\sqrt{a^2-x^2}}=&\int\frac{1}{a}\cdot\frac{\mathrm{d}x}{\sqrt{1-\left(\frac{x}{a}\right)^2}}\\
=&\int\frac{\mathrm{d}\left({\color{blue}\frac{x}{a}}\right)}{\sqrt{1-\left({\color{blue}\frac{x}{a}}\right)^2}}\\
=&\arcsin{\color{blue}\frac{x}{a}}+C.
\end{align*}
$$

::right::

<span v-click='5'>**例 7** $\boxed{\int\frac{\mathrm{d}x}{a^2+x^2}=\frac{1}{a}\arctan\frac{x}{a}+C\,(a\neq 0).}$ </span>

$${hide|1}{at:6}
\int\frac{\mathrm{d}{\color{blue}\blacksquare}}{1+{\color{blue}\blacksquare}^2}=\arctan {\color{blue}\blacksquare}+C.
$$

$${hide|1|1-2|1-3}{at:7}
\begin{align*}
\int\frac{\mathrm{d}x}{a^2+x^2}=&\int\frac{1}{a^2}\cdot\frac{\mathrm{d}x}{1+\left(\frac{x}{a}\right)^2}\\
=&\frac{1}{a}\int\frac{\mathrm{d}\left({\color{blue}\frac{x}{a}}\right)}{1+\left({\color{blue}\frac{x}{a}}\right)^2}\\
=&\frac{1}{a}\arctan{\color{blue}\frac{x}{a}}+C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 8** $\boxed{\int\frac{\mathrm{d}x}{x^2-a^2}=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C\,(a\neq 0)}$

$${hide|1|1-2|1-3|1-4}{at:6}
\begin{align*}
\int\frac{\mathrm{d}x}{x^2-a^2}&=\frac{1}{2a}\int\left(\frac{1}{x-a}-\frac{1}{x+a}\right)\mathrm{d}x\\
&=\frac{1}{2a}\left[\int\frac{\mathrm{d}(x-a)}{x-a}-\int\frac{\mathrm{d}(x+a)}{x+a}\right]\\
&=\frac{1}{2a}\left(\ln|x-a|-\ln|x+a|\right)+C\\
&=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C.
\end{align*}
$$

<v-click at='10'>

有理分式 <span v-mark.circle.red='10'>裂项</span> 成部分分式之和。
</v-click>

::right::

$${hide|1|1-2}{at:1}
\begin{align*}
\frac{1}{x^2-a^2}&\equiv\frac{1}{(x-a)(x+a)}\equiv\frac{A}{x-a}+\frac{B}{x+a}\\
&\equiv\frac{(A+B)x+a(A-B)}{(x-a)(x+a)}.
\end{align*}
$$

<v-click at='3'>

要使得上式恒成立，即要
$$1\equiv(A+B)x+a(A-B).$$

</v-click>

<v-click at='4'>

从而 
$$
\begin{cases}
x^1:&0=A+B,\\
x^0:&1=a(A-B)
\end{cases}
\implies
\begin{cases}
A=\displaystyle\frac{1}{2a},\\
B=\displaystyle-\frac{1}{2a}.
\end{cases}
$$
</v-click>

<v-click at='5'>

所以
$$\frac{1}{x^2-a^2}\equiv\frac{1}{2a}\left(\frac{1}{x-a}-\frac{1}{x+a}\right).$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

#### 恒等式补充说明

**问题**：为什么<mark>恒等式两边 $x$ 的相同次幂的系数相等</mark>？

<v-click at='1'>

*回想一下利用拉格朗日中值定理证明恒等式。*
</v-click>

<v-click at='2'>

考察 $a_1x^2+b_1x+c_1\equiv a_2x^2+b_2x+c_2$.
</v-click>

<v-click at='3'>

移项，得
$$(a_1-a_2)x^2+(b_1-b_2)x+(c_1-c_2)\equiv 0.\tag{1}$$
</v-click>

<v-click at='4'>

因为这是一个恒等式，故等式左边函数关于 $x$ 的变化率恒等于 $0$，即
$$2(a_1-a_2)x+(b_1-b_2)\equiv 0.\tag{2}$$
</v-click>

<v-click at='5'>

这又是恒等式，故等式左边函数关于 $x$ 的变化率也恒等于 $0$，即
$$2(a_1-a_2)\equiv 0.\tag{3}$$
</v-click>

::right::

<v-click at='6'>

把 (3) 带回 (2)，得
$$b_1-b_2\equiv 0.\tag{4}$$
</v-click>

<v-click at='7'>

把 (3)、(4) 带回 (1)，得
$$c_1-c_2\equiv 0.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**简单三角有理函数的积分**

$\displaystyle\int\sin x \,\mathrm{d}x=-\cos x+C$.

::right::

<span v-click='1'>**例 9** $\displaystyle\int\sin^2 x\,\mathrm{d}x$</span>
<span v-click='2' v-mark.crossed.red='3'> $\displaystyle=\frac{1}{3}\sin^3 x+C$.</span>

$${hide|1}{at:4}
\int ({\color{blue}\blacksquare})^2\,\mathrm{d}({\color{blue}\blacksquare})=\frac{1}{3}({\color{blue}\blacksquare})^{3}+C.
$$

<span v-click='5' class='text-red'>和公式一致，才能套公式！</span>

<span v-click='6' v-mark.box.red='6'>**降幂**</span>

$${hide|1|1-2|1-3}{at:7}
\begin{align*}
\int\sin^2 x\,\mathrm{d}x&=\int\frac{1-\cos 2x}{2}\mathrm{d}x\\
&=\frac{1}{2}\left[\int 1\,\mathrm{d}x-\frac{1}{2}\int\cos 2x\,\mathrm{d}(2x)\right]\\
&=\frac{x}{2}-\frac{1}{4}\sin 2x +C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 10** $\displaystyle\int\sin^3 x\,\mathrm{d}x$

$${hide|1|1-2|1-3|1-4}{at:3}
\begin{align*}
\int\sin^3 x\,\mathrm{d}x&=\int\sin^2 x \cdot \sin x\,\mathrm{d}x\\
&=-\int(1-\cos^2 x)\,\mathrm{d}(\cos x)\\
&=-\int 1\,\mathrm{d}(\cos x)+\int\cos^2 x\,\mathrm{d}(\cos x)\\
&=-\cos x+\frac{1}{3}\cos^3 x+C.
\end{align*}
$$

<v-click at='7'>

其中，
$$\int 1\,\mathrm{d}(\cos x)=\int (\cos x)^0\,\mathrm{d}(\cos x)=\cos x +C,$$
</v-click>

<v-click at='8'>

或套用公式：$\displaystyle\int \mathrm{d}f(x)=f(x)+C.$
</v-click>

::right::

<v-click at='1'>
<hr>

<span class='text-blue'>Tip</span>：如果 $\sin x$ 是 <span v-mark.box.red='2'>奇数</span> 次幂：

- 拿 <span v-mark.box.red='2'>一个</span> $\sin x$ 凑成 $\sin x\,\mathrm{d}x=-\mathrm{d}(\cos x)$，
- 剩下的 <span v-mark.box.red='2'>偶数</span> 次幂 利用 $\sin^2 x+\cos^2 x=1$ 转化为 $\cos x$.

如果 $\cos x$ 是 <span v-mark.box.red='2'>奇数</span> 次幂，类似。
<hr>
</v-click>

$${hide|1}{at:6}
\int ({\color{blue}\blacksquare})^{\mu}\,\mathrm{d}({\color{blue}\blacksquare})=\frac{1}{\mu+1}({\color{blue}\blacksquare})^{\mu+1}+C.
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 11** $\displaystyle\int\sin^4 x\,\mathrm{d}x$.&nbsp;<span v-click='1' v-mark.box.red='1'>**降幂**</span>

$${hide|1}{at:2}
\begin{align*}
\sin^4 x=\left(\frac{1-\cos 2x}{2}\right)^2
\end{align*}
$$

<span v-click='2'>再降幂：$\displaystyle\cos^2 2x=\frac{1+\cos 4x}{2}$.</span>

<span v-click='3'>如果被积函数 $\sin^6 x,\sin^8 x,\cdots$，求解类似，依次降幂。</span>

<span v-click='4'>如果次幂很大，这样求解，不太现实。</span>

<span v-click='5'>找 $\displaystyle I_n=\int\sin^n x\,\mathrm{d}x$ 的递推规律。</span>

<span v-click='6'>利用分部积分公式来找。</span>

::right::

<span v-click='7'>**例 12** $\displaystyle\int\sin^2 x \cos^3 x\,\mathrm{d}x$.</span>

$${hide|1|1-2|1-3}{at:8}
\begin{align*}
\int\sin^2 x \cos^3 x\mathrm{d}x&=\int \sin^2 x (1-\sin^2 x)\,\mathrm{d}(\sin x)\\
&=\int(\sin^2 x-\sin^4 x)\,\mathrm{d}(\sin x)\\
&=\frac{1}{3}\sin^3 x-\frac{1}{5}\sin^5 x+C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

- $\boxed{\int \tan x\,\mathrm{d}x=-\ln|\cos x|+C.}$

$${hide|1|1-2}{at:1}
\begin{align*}
\int \tan x\,\mathrm{d}x&=\int\frac{\sin x}{\cos x}\,\mathrm{d}x=-\int\frac{\mathrm{d}(\cos x)}{\cos x}\\
&=-\ln|\cos x|+C.
\end{align*}
$$

<v-click at='3'>

- $\boxed{\int \cot x\,\mathrm{d}x=\ln|\sin x|+C.}$
</v-click>

::right::

<v-click at='4'>

- $\boxed{\int \sec x\,\mathrm{d}x=\ln|\sec x+\tan x|+C.}$
</v-click>

$${hide|1|1-2|1-3|1-4}{at:5}
\begin{align*}
\int \sec x\,\mathrm{d}x&=\int\frac{1}{\cos x}\,\mathrm{d}x=\int\frac{\cos x\,\mathrm{d}x}{\cos^2 x}\\
&=\int\frac{\mathrm{d}(\sin x)}{1-\sin^2 x}\\
&=-\frac{1}{2}\ln\left|\frac{\sin x-1}{\sin x+1}\right|+C\\
&=\ln|\sec x+\tan x|+C.
\end{align*}
$$

<v-click at='9'>

- $\boxed{\int \csc x\,\mathrm{d}x=\ln|\csc x-\cot x|+C.}$
</v-click>

---

**例 12** $\displaystyle\int 2\sin 2x \,\mathrm{d}x$.

<span v-click="1">解法一：$\displaystyle\int 2\sin 2x \,\mathrm{d}x=\int\sin 2x\,\mathrm{d}(2x)=-\cos 2x+C$;</span>

<span v-click="2">解法二：$\displaystyle\int 2\sin 2x \,\mathrm{d}x=4\int\sin x \cos x\,\mathrm{d}x=4\int \sin x \,\mathrm{d}(\sin x)=2\sin^2 x+C$;</span>

<span v-click="3">解法三：$\displaystyle\int 2\sin 2x \,\mathrm{d}x=4\int\sin x \cos x\,\mathrm{d}x=-4\int \cos x \,\mathrm{d}(\cos x)=-2\cos^2 x+C$.</span>

---
layout: two-cols
layoutClass: gap-10
---

### 4.2.2.第二换元法

**例 1** $\displaystyle\int x^2(x-1)^{10}\,\mathrm{d}x$.

<span v-click='1'>**解：** 设 $t=x-1$，则 $x=t+1$，$\mathrm{d}x=\mathrm{d}t$,</span>

$${hide|1|1-2|1-3|1-4}{at:2}
\begin{align*}
&\int x^2(x-1)^{10}\,\mathrm{d}x=\int(t+1)^2t^{10}\,\mathrm{d}t\\
=&\int(t^{12}+2t^{11}+t^{10})\,\mathrm{d}t\\
=&\frac{1}{13}t^{13}+\frac{2}{12}t^{12}+\frac{1}{11}t^{11}+C\\
=&\frac{1}{13}(x-1)^{13}+\frac{2}{12}(x-1)^{12}+\frac{1}{11}(x-1)^{11}+C.
\end{align*}
$$

::right::

<v-click at='6'>

**第二换元法**
$$\int f(x)\,\mathrm{d}x\xlongequal{ {\color{blue}x}={\color{blue}\varphi(t)}}
\left[\int f[\varphi(t)]\varphi'(t)\,\mathrm{d}t\right]_{ {\color{blue}t}={\color{blue}\varphi^{-1}(x)}}.$$
</v-click>

<v-click at='7'>

希望：（<span class='text-red'>难</span>）$\xrightarrow{转化}$ （<span class='text-red'>易</span>）
</v-click>

<Admonition title='第二换元法的目的' admonitionType='info' v-click='8'>

通过换元，<span v-mark.highlight.yellow='8'>化简被积函数</span>。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---
**第二换元法的证明：**

$$\int f(x)\,\mathrm{d}x\xlongequal{ {\color{blue}x}={\color{blue}\varphi(t)}}
\left[\int f[\varphi(t)]\varphi'(t)\,\mathrm{d}t\right]_{ {\color{blue}t}={\color{blue}\varphi^{-1}(x)}}.$$

<span v-click='1'>**证：** 不妨记 $\varPhi(t)$ 是 $f[\varphi(t)]\varphi'(t)$ 的其中一个原函数，</span>
<span v-click='2'>等式右边的函数 $F(x)=\varPhi[\varphi^{-1}(x)]+C$，</span>
<span v-click='3'>即为复合函数：</span>

$${hide|1}{at:3}
x\xmapsto{\varphi^{-1}} t\xmapsto{\varPhi} F(x),
$$

::right::

<span v-click='4'>则</span>

$${hide|1|1-2|1-3}{at:5}
\begin{align*}
&\frac{\mathrm{d}F(x)}{\mathrm{d}x}=\frac{\mathrm{d}\varPhi}{\mathrm{d}t}\cdot\frac{\mathrm{d}t}{\mathrm{d}x}\\
=&f[\varphi(t)]\varphi'(t)\cdot \frac{1}{\varphi'(t)}\\
=&f(x).
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 2** $\displaystyle\int\frac{1}{\sqrt{x+1}+1}\,\mathrm{d}x\,(x>-1)$.

<span v-click='3'>**解：** 设 $t=\sqrt{x+1}\,(t>0)$，则 $x=t^2-1$，$\mathrm{d}x=2t\mathrm{d}t$，</span>

$${hide|1|1-2|1-3|1-4|1-5}{at:4}
\begin{align*}
&\int\frac{\mathrm{d}x}{\sqrt{x+1}+1}\\
=&2\int\frac{t}{t+1}\mathrm{d}t\\
=&2\int\left(1-\frac{1}{t+1}\right)\mathrm{d}t\\
=&2(t-\ln|t+1|)+C\\
=&2(\sqrt{x+1}-\ln|\sqrt{x+1}+1|)+C.
\end{align*}
$$

::right::

<v-click at='1'>

此积分的 <span class='text-red'>**难**</span> 在于被积函数有<span class='text-red'>无理函数。</span>
</v-click>

<span v-click='2'>通常的解决办法：</span>
<div text-center v-click='2'>

**有理化：**<span class='text-red'>无理函数</span> $\xRightarrow{换元}$ <span class='text-blue'>有理函数</span>

</div>

---
layout: two-cols
layoutClass: gap-10
---

**例 3** $\displaystyle\int\frac{1}{\sqrt{x}(1+\sqrt[3]{x})}\,\mathrm{d}x\,(x>0)$.

<span v-click='1'>**解：** 设 $x=t^6\,(t>0)$，则 $t=\sqrt[6]{x}$，$\mathrm{d}x=6t^5\,\mathrm{d}t$</span>

$${hide|1|1-2|1-3|1-4}{at:2}
\begin{align*}
&\int\frac{\mathrm{d}x}{\sqrt{x}(1+\sqrt[3]{x})}=\int\frac{6t^5\,\mathrm{d}t}{t^3(1+t^2)}=6\int\frac{t^2\,\mathrm{d}t}{1+t^2}\\
=&6\int\frac{t^2+1-1}{1+t^2}\,\mathrm{d}t=6\int\left(1-\frac{1}{1+t^2}\right)\mathrm{d}t\\
=&6(t-\arctan t)+C\\
=&6(\sqrt[6]{x}-\arctan \sqrt[6]{x})+C.
\end{align*}
$$

<span v-click='6'>**思考：**</span>

<span v-click='6'>1. 能否换元 $x=-t^6$？</span>
<span v-click='7' class='text-red'>不在定义域（不在讨论范围）</span>

<span v-click='8'>2. 能否换元 $x=t^6+1$？</span>
<span v-click='9' class='text-red'>漏讨论范围 $x\in(0,1)$</span>

::right::

<Admonition title='第二换元法注意事项' admonitionType='warning' v-click='10'>
<v-click at='11'>

- 换元后的变量要 <span v-mark.red='11'>符合对应的原来变量的范围</span>；
</v-click>
<v-click at='14'>

- 换元 $x=\varphi(t)$ <span v-mark.red='14'>单调</span> $\Leftarrow$ 限定 $t$ 的<span v-mark.red='14'>单调区间</span>；
</v-click>

<v-click at='17'>

- 换元不唯一，且都是<span class='text-blue'>辅助性</span>的作用，选择一个方便计算的换元。
</v-click>

</Admonition>

<span v-click='12'>3. 在换元 $x=t^6$ 中，而 $t$ 也可以小于 $0$，能否不做任何限定？</span>
<span v-click='13' class='text-red'>不满足换元法的要求。</span>

<span v-click='15'>4. 能否换元 $x=t^6\,(t< 0)$？</span>
<span v-click='16'>可以，最终结果一样。因为 $x=t^6\,(t< 0)$ 和 $x=t^6\,(t>0)$ 是两个不同的换元。</span><span class='text-blue' v-click='16'>同一目的地，不同的路</span>

---
layout: two-cols
layoutClass: gap-10
---

**三角代换**

<v-clicks>

- 常用于求解被积函数中有 $\sqrt{\small 二次多项式}$ 的积分（如 $\sqrt{x^2-3}$、$\sqrt{-x^2+3x}$）
- 处理的**要点**：<mark>去掉根号</mark>
</v-clicks>

<span v-click='3'>**例 1** $\displaystyle\int\sqrt{a^2-x^2}\,\mathrm{d}x\,(a>0)$.</span>

<v-clicks at='4'>

>要去掉根号，就要通过换元 $x={\color{red}?}$，使得 $a^2-x^2=(\square)^2$

><mark>常$^2-$变$^2=$变$^2$</mark>

>$1-\sin^2 t=\cos^2 t \iff a^2-(a\sin t)^2=(a\cos t)^2$

>换元 $x=a\sin t$ 或 $x=a\cos t$.
</v-clicks>

::right::

<v-click at='8'>

**解：** 设 $x=a\sin t$ $\displaystyle\left(-\frac{\pi}{2}<t<\frac{\pi}{2}\right)$
<span class='text-blue' v-click='9'>【保证单调】</span>
</v-click>

<span v-click='10'>则 $\displaystyle t=\arcsin \frac{x}{a}$，$\mathrm{d}x=a\cos t\,\mathrm{d}t$，</span>
<span v-click='11'>于是</span>
$${hide|1|1-2|1-3}{at:11}
\begin{align*}
&\int\sqrt{a^2-x^2}\,\mathrm{d}x=\int a\cos t \cdot a\cos t\,\mathrm{d}t\\
=&a^2\int\cos^2 t\,\mathrm{d}t=a^2\int\frac{1+\cos 2t}{2}\,\mathrm{d}t\\
=&\frac{a^2}{2}\left(t+\frac{1}{2}\sin 2t\right)+C.
\end{align*}
$$
<v-click at='14'>

回代成 $x$ 的函数：$\displaystyle t=\arcsin \frac{x}{a}$,

<span v-mark.crossed.red='15'>$\displaystyle\sin 2t =\sin(2\arcsin \frac{x}{a})$.</span>
</v-click>

<span class='text-orange' v-click='16'>能不出现反三角函数，就不要出现。</span>

<span class='text-blue' v-click='17'>利用换元 $x=a\sin t$，来求出 $\sin 2t$，从而回代。</span>

---
layout: two-cols
layoutClass: gap-10
---

**根据已知三角函数，来求出其它三角函数。**

<span v-mark.highlight.yellow='0'>**方法：** 根据已知三角函数，做辅助的直角三角形</span>

利用 $x=a\sin t$ $\displaystyle\left(0<t<\frac{\pi}{2}\right)$，来求出 $\sin 2t$.

<v-click at='1'>

$$x=a\sin t \iff \sin t=\frac{x}{a}=\frac{\small对}{\small斜}.$$
</v-click>

<span v-click='2'>与之对应的相似直角三角形如下：</span>

<div class="flex flex-justify-center" v-click='3'>
<div>
<svg version="1.1" baseProfile="full" width="240" height="155" xmlns="http://www.w3.org/2000/svg" style="stroke:#000000; stroke-width:1">

  <polygon points="210,10 210,120 10,120" stroke="black" fill="none" stroke-width="2"/>
  <path d="M 50 120 A 20 20 0 0 0 45 100" stroke="black" fill="none" stroke-width="1"/>
  <path d="M 210 105 L 195 105 L 195 120" stroke="black" fill="none" stroke-width="1"/>

  <foreignObject x="60" y="90" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize t$' />
    </span>
  </foreignObject>

  <foreignObject x="220" y="50" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize x$' />
    </span>
  </foreignObject>
  <foreignObject x="90" y="40" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize a$' />
    </span>
  </foreignObject>
    <foreignObject x="70" y="130" width="120" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize\sqrt{a^2-x^2}$' />
    </span>
  </foreignObject>
</svg>
</div>
</div>

::right::

<span v-click='4'>所以 $\displaystyle\cos t=\frac{\sqrt{a^2-x^2}}{a}$.</span>

<span v-click='5'>也可以求角度是 $t$ 的其它任意三角函数。</span>

$${hide|1|1-2|1-3|1-4}{at:6}
\begin{align*}
&\int\sqrt{a^2-x^2}\,\mathrm{d}x=\frac{a^2}{2}\left(t+\frac{1}{2}\sin 2t\right)+C\\
&=\frac{a^2}{2}\left(t+\sin t\cos t\right)+C\\
&=\frac{a^2}{2}\left(\arcsin \frac{x}{a}+\frac{x}{a}\cdot\frac{\sqrt{a^2-x^2}}{a}\right)+C\\
&=\frac{a^2}{2}\arcsin \frac{x}{a}+\frac{x}{2}\frac{\sqrt{a^2-x^2}}{a}+C.
\end{align*}
$$

<span v-click='10'>当 $\displaystyle t\in\left(-\frac{\pi}{2},0\right)$ 时？</span>
<span v-click='11'>同样操作，在图中把 $x$ 换成 $-x$，$t$ 换成 $-t$，所求出的还是一样。</span>

---
layout: two-cols
layoutClass: gap-10
---

**例 2** $\displaystyle\int\frac{\mathrm{d}x}{\sqrt{x^2-4x+13}}$.

<span v-click='1'>**配方：** $\sqrt{x^2-4x+13}=\sqrt{(x-2)^2+3^2}$</span>

<v-clicks at='2'>

>要去掉根号，就要通过换元 $x={\color{red}?}$ 使 $(x-2)^2+3^2=(\square)^2$

><mark>变$^2+$常$^2=$变$^2$</mark>

>$\tan^2 t+1=\sec^2 t \iff (3\tan t)^2+3^2=(3\sec t)^2$

>换元 $x-2=3\tan t$ 或 $x-2=3\cot t$.
</v-clicks>

<div class="flex flex-justify-center" v-click='10'>
<div>
<svg version="1.1" baseProfile="full" width="270" height="140" xmlns="http://www.w3.org/2000/svg" style="stroke:#000000; stroke-width:1">

  <polygon points="210,10 210,120 10,120" stroke="black" fill="none" stroke-width="2"/>
  <path d="M 50 120 A 20 20 0 0 0 45 100" stroke="black" fill="none" stroke-width="1"/>
  <path d="M 210 105 L 195 105 L 195 120" stroke="black" fill="none" stroke-width="1"/>

  <foreignObject x="60" y="90" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize t$' />
    </span>
  </foreignObject>

  <foreignObject x="220" y="50" width="60" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize x-2$' />
    </span>
  </foreignObject>
  <foreignObject x="15" y="25" width="140" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize \sqrt{x^2-4x+13}$' />
    </span>
  </foreignObject>
    <foreignObject x="110" y="120" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize 3$' />
    </span>
  </foreignObject>
</svg>
</div>
</div>

<span v-click='10'>由 $\displaystyle\tan t=\frac{x-2}{3}$，得 $\displaystyle\sec t=\frac{\sqrt{x^2-4x+13}}{3}$.</span>

::right::

<span v-click='6'>**解：** 设 $x-2=3\tan t$ $\displaystyle\left(-\frac{\pi}{2}<t<\frac{\pi}{2}\right)$，</span>

<span v-click='7'>则 $\mathrm{d}x=3\sec^2 t\,\mathrm{d}t$，</span>
<span v-click='8'>于是</span>

$${hide|1|1-2|1-2|1-3|1-4|1-5}{at:8}
\begin{align*}
&\int\frac{\mathrm{d}x}{\sqrt{x^2-4x+13}}=\int \frac{3\sec^2 t\,\mathrm{d}t}{3\sec t}=\int \sec t\,\mathrm{d}t\\
=&\ln|\sec t+\tan t|+C\\
=&\ln\left(\frac{x-2}{3}+\frac{\sqrt{x^2-4x+13}}{3}\right)+C\\
=&\ln|x-2+\sqrt{x^2-4x+13}|-\ln 3+C\\
=&\ln|x-2+\sqrt{x^2-4x+13}|+C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 3** $\displaystyle\int\frac{\mathrm{d}x}{\sqrt{x^2-a^2}}\,(a>0)$.

<v-clicks at='1'>

>要去掉根号，就要通过换元 $x={\color{red}?}$ 使 $x^2-a^2=(\square)^2$

><mark>变$^2-$常$^2=$变$^2$</mark>

>$\sec^2 t-1=\tan^2 t \iff (a\sec t)^2-a^2=(a\tan t)^2$

>换元 $x=a\sec t$ 或 $x=a\csc t$.
</v-clicks>

<div class="flex flex-justify-center" v-click='10'>
<div>
<svg version="1.1" baseProfile="full" width="300" height="140" xmlns="http://www.w3.org/2000/svg" style="stroke:#000000; stroke-width:1">

  <polygon points="210,10 210,120 10,120" stroke="black" fill="none" stroke-width="2"/>
  <path d="M 50 120 A 20 20 0 0 0 45 100" stroke="black" fill="none" stroke-width="1"/>
  <path d="M 210 105 L 195 105 L 195 120" stroke="black" fill="none" stroke-width="1"/>

  <foreignObject x="60" y="90" width="20" height="20">
    <span xmlns="http://www.w3.org/1999/xhtml">
      <Akatex :inline='true' content='$\footnotesize t$' />
    </span>
  </foreignObject>

  <foreignObject x="220" y="50" width="75" height="20">
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
</div>

<span v-click='10'>由 $\displaystyle\sec t=\frac{x}{a}$，得 $\displaystyle\tan t=\frac{\sqrt{x^2-a^2}}{a}$.</span>

::right::

<span v-click='5'>**解：** 只需讨论 $x>a$ 情形，当 $x<-a$ 时，可通过 $x=-u$ 化为前一情形。</span>

<span v-click='6'>设 $x=a\sec t$ $\displaystyle\left(0<t<\frac{\pi}{2}\right)$，</span>

<span v-click='7'>则 $\mathrm{d}x=a\sec t\tan t\,\mathrm{d}t$，</span>
<span v-click='8'>于是</span>

$${hide|1|1-2|1-2|1-3|1-4|1-5}{at:8}
\begin{align*}
&\int\frac{\mathrm{d}x}{\sqrt{x^2-a^2}}=\int \frac{a\sec t\tan t\,\mathrm{d}t}{a\tan t}=\int \sec t\,\mathrm{d}t\\
=&\ln|\sec t+\tan t|+C\\
=&\ln\left(\frac{x}{a}+\frac{\sqrt{x^2-a^2}}{a}\right)+C\\
=&\ln|x+\sqrt{x^2-a^2}|-\ln a+C\\
=&\ln|x+\sqrt{x^2-a^2}|+C.
\end{align*}
$$


---
layout: section
---

## 4.3.分部积分

<span v-click='1'>乘积的求导公式：$(uv)'=u'v+v'u$,</span>

<span v-click='2'>等式两边积分得：$\displaystyle\int(uv)'\mathrm{d}x=\int uv'\mathrm{d}x+\int vu'\mathrm{d}x$,</span>

<span v-click='3'>即：$\displaystyle uv+C=\int uv'\mathrm{d}x+\int vu'\mathrm{d}x$.</span>

<span v-click='4'>移项得：$\displaystyle\int uv'\mathrm{d}x=uv-\int vu'\mathrm{d}x+C$.</span>

<span v-click='5'>$\boxed{\displaystyle\int uv'\mathrm{d}x=uv-\int vu'\mathrm{d}x}$</span>

<span v-click='6'>或 &nbsp; $\boxed{\displaystyle\int u\mathrm{d}v=uv-\int v\mathrm{d}u}$</span>

---
layout: two-cols
layoutClass: gap-10
---

**如何<span class='text-red'>有效地</span>使用分部积分公式？**

$$\int uv'\mathrm{d}x=uv-\int vu'\mathrm{d}x$$

<v-click at='1'>

|<span  v-click='2' v-mark.circle.red='2'> 引导 </span>|（<span class='text-red'>难</span>）| $\xrightarrow{\color{blue}分部积分}$|（<span class='text-red'>易</span>）|
|:---:|:---:|:---:|:---:|
|| <span v-click='3'>$u$</span> | <span v-click='4'>$\xrightarrow{\quad\color{red}求导\quad}$</span> | <span v-click='3'>$u'$</span>|
|| <span v-click='5'>$v'$</span> | <span v-click='6'>$\xrightarrow{\quad\color{red}积分\quad}$</span> | <span v-click='5'>$v$</span>|
</v-click>

<Admonition title='分部积分' admonitionType='warning' v-click='7'>

<span class='text-red'>**引导**</span> 分部积分（出现求导），让（<span class='text-blue'>求导后能化简</span>的）**函数求导**，从而实现化简。

</Admonition>

::right::

<Admonition title='什么函数求导后能化简？' admonitionType='info' v-click='8'>

<v-clicks at='9'>

- <span class='text-blue'>**反三角**</span>函数，如：$(\arctan x)'=\frac{1}{1+x^2}$
- <span class='text-blue'>**对数**</span>函数，如：$(\ln x)'=\frac{1}{x}$
- 正整数次<span class='text-blue'>**幂**</span>函数，如：$(x^n)'=nx^{n-1}$

</v-clicks>
</Admonition>

<Admonition title='什么函数积分后不变复杂？' admonitionType='info' v-click='12'>

<v-clicks at='13'>

- <span class='text-blue'>**三角**</span>函数，如：$\int\cos x \mathrm{d}x=\sin x+C$
- <span class='text-blue'>**指数**</span>函数，如：$\int\mathrm{e}^x\mathrm{d}x=\mathrm{e}^x+C$
</v-clicks>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** $\displaystyle\int x\cos x\,\mathrm{d}x$.

$${hide|1|1-2|1-3}{at:1}
\begin{align*}
\int x\cos x\,\mathrm{d}x&=\int x\,\mathrm{d}(\sin x)\\
&=x\sin x-\int\sin x\,\mathrm{d}x\\
&=x\sin x+\cos x+C.
\end{align*}
$$
<span v-click='7'>引导得不当，会把问题化复杂。</span>

$${hide|1|1-2|1-3}{at:4}
\begin{align*}
\int x\cos x\,\mathrm{d}x&=\int \cos x\,\mathrm{d}\left(\frac{1}{2}x^2\right)\\
&=\frac{1}{2}\left[x^2\cos x-\int x^2\,\mathrm{d}(\cos x)\right]\\
&=\frac{1}{2}\left(x^2\cos x+\int x^2\sin x\,\mathrm{d}x\right).
\end{align*}
$$

::right::

<span v-click='8'>**例 2** $\displaystyle \int x^2\mathrm{e}^x\,\mathrm{d}x$.</span>

$${hide|1|1-2|1-3|1-4|1-5}{at:9}
\begin{align*}
\int x^2\mathrm{e}^x\,\mathrm{d}x&=\int x^2\,\mathrm{d}(\mathrm{e}^x)=x^2\mathrm{e}^x-\int \mathrm{e}^x\,\mathrm{d}(x^2)\\
&=x^2\mathrm{e}^x-2\int x\mathrm{e}^x\,\mathrm{d}x\\
&=x^2\mathrm{e}^x-2\int x\,\mathrm{d}(\mathrm{e}^x)\\
&=x^2\mathrm{e}^x-2\left(x\mathrm{e}^x-\int \mathrm{e}^x\,\mathrm{d}x\right)\\
&=\mathrm{e}^x\left(x^2-2x+2\right)+C.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 3** $\displaystyle\int x^3\ln x\,\mathrm{d}x$.

$${hide|1|1-2|1-3|1-4}{at:1}
\begin{align*}
\int x^3\ln x\,\mathrm{d}x&=\frac{1}{4}\int \ln x\,\mathrm{d}(x^4)\\
&=\frac{1}{4}\left[x^4\ln x-\int x^4\,\mathrm{d}(\ln x)\right]\\
&=\frac{1}{4}\left(x^4\ln x-\int x^4\cdot\frac{1}{x}\,\mathrm{d}x\right)\\
&=\frac{1}{4}\left(x^4\ln x-\frac{1}{4}x^4\right)+C.
\end{align*}
$$

::right::

<span v-click='5'>**例 4** $\displaystyle\int \ln x\,\mathrm{d}x$.</span>

$${hide|1|1-2|1-3}{at:6}
\begin{align*}
\int \ln x\,\mathrm{d}x&=x\ln x-\int x\,\mathrm{d}(\ln x)\\
&=x\ln x-\int 1\,\mathrm{d}x\\
&=x\ln x-x+C.
\end{align*}
$$

<Admonition title='积分中有 <span class="text-blue">对数函数</span> 的常用处理方法' admonitionType='info' v-click='9'>

1. **凑微分**：$\displaystyle\frac{1}{x}\mathrm{d}x=\mathrm{d}(\ln x)$;
2. **分部积分**。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 6** $\displaystyle\int \arccos x\,\mathrm{d}x$.

$${hide|1|1-2|1-3|1-4|1-5|1-6}{at:1}  
\begin{align*}
&\int \arccos x\,\mathrm{d}x\\
=&x\arccos x-\int x\,\mathrm{d}(\arccos x)\\
=&x\arccos x+\int \frac{x}{\sqrt{1-x^2}}\,\mathrm{d}x\\ 
=&x\arccos x-\frac{1}{2}\int(1-x^2)^{-\frac{1}{2}}\,\mathrm{d}(1-x^2)\\
=&x\arccos x-\frac{1}{2}\cdot 2(1-x^2)^{\frac{1}{2}}+C\\
=&x\arccos x-(1-x^2)^{\frac{1}{2}}+C.
\end{align*}  
$$

::right::

<span v-click='7'>**例 7** $\displaystyle\int x\arctan x\,\mathrm{d}x$.</span>

$${hide|1|1-2|1-3|1-4}{at:8}
\begin{align*}
&\int x\arctan x\,\mathrm{d}x=\int \arctan x\,\mathrm{d}\left(\frac{1}{2}x^2\right)\\
=&\frac{1}{2}\left(x^2\arctan x-\int \frac{x^2}{1+x^2}\,\mathrm{d} x\right)\\
=&\frac{1}{2}\left(x^2\arctan x-\int \frac{x^2+1-1}{1+x^2}\,\mathrm{d} x\right)\\
=&\frac{1}{2}\left(x^2\arctan x-x+\arctan x\right)+C.
\end{align*}
$$

<Admonition title='积分中有 <span class="text-blue">反三角函数</span> 的常用处理方法' admonitionType='info' v-click='12'>

1. **凑微分**：例如 $\displaystyle\frac{1}{1+x^2}\,\mathrm{d}x=\mathrm{d}(\arctan x)$;
2. **分部积分**。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 8** $\displaystyle \int \mathrm{e}^x\sin x\,\mathrm{d}x$.

$${hide|1|1-2|1-3|1-4|1-5}{at:1}
\begin{align*}
&\int \mathrm{e}^x\sin x\,\mathrm{d}x=\int \sin x\,\mathrm{d}(\mathrm{e}^x)\\
=&\mathrm{e}^x\sin x-\int \mathrm{e}^x\,\mathrm{d}(\sin x)\\
=&\mathrm{e}^x\sin x-\int \mathrm{e}^x\cos x\,\mathrm{d}x\\
=&\mathrm{e}^x\sin x-\int \cos x\,\mathrm{d}(\mathrm{e}^x)\\
=&\mathrm{e}^x\sin x-\mathrm{e}^x\cos x-\int \mathrm{e}^x\sin x\,\mathrm{d}x,
\end{align*}
$$

<span v-click='6'>移项：$\displaystyle 2\int \mathrm{e}^x\sin x\,\mathrm{d}x=\mathrm{e}^x(\sin x-\cos x)$</span><span class='text-red' v-click='8'>$+C$.</span>

::right::

<span v-click='7'> 所以$\displaystyle\int \mathrm{e}^x\sin x\,\mathrm{d}x=\frac{1}{2}\mathrm{e}^x(\sin x-\cos x)$</span><span class='text-red' v-click='8'>$+C$.</span>

<Admonition title='$C$ 别忘了' admonitionType='error' v-click='9'>
</Admonition>

<v-click at='10'>

“<span class='text-orange'>循环再现</span>”是常用的技巧。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 9** 已知 <span v-mark.blue='1'>$\displaystyle\frac{\sin x}{x}$ 是 $f(x)$ 的一个原函数</span>，求 $\displaystyle\int x^3f'(x)\mathrm{d}x$.

$${hide|1|1-2|1-3|1-4|1-5}{at:4}
\begin{align*}
&\int x^3f'(x)\mathrm{d}x=\int x^3\mathrm{d}f(x)\\
=&x^3f(x)-3\int x^2f(x)\mathrm{d}x\\
=&x^2\cos x-x\sin x-3\int x^2\,\mathrm{d}\left(\frac{\sin x}{x}\right)\\
=&x^2\cos x-x\sin x-3\left(x^2\cdot \frac{\sin x}{x}-\int \frac{\sin x}{x}\cdot 2x\,\mathrm{d}x\right)\\
=&x^2\cos x-4x\sin x-6\cos x+C.
\end{align*}
$$

::right::

<span class='text-blue' v-click='1'>$\displaystyle\iff f(x)=\left(\frac{\sin x}{x}\right)'$</span>
<span v-click='3'>$\displaystyle=\frac{x\cos x-\sin x}{x^2}$.</span>

<span class='text-blue' v-click='2'>$\displaystyle\iff \int f(x)\mathrm{d}x=\frac{\sin x}{x}+C$.</span>

<span class='text-blue' v-click='6'>$\displaystyle\iff f(x)\mathrm{d}x=\mathrm{d}\left(\frac{\sin x}{x}\right)$.</span>

---
layout: center
---

## 4.4.有理函数的积分


---
layout: center
---

## 4.5.补充