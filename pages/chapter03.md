# 3.微分中值定理与导数的应用

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>

---
layout: section
---

## 3.1.微分中值定理

为什么要学微分中值定理？

<v-click at='1'>

**最终目的**：研究函数 $f(x)$ 的性质
</v-click>

<v-click at='2'>

从哪里**获取函数 $f(x)$ 的信息**？<span v-click='3'>从其**导数 $f'(x)$**。</span>
</v-click>

<v-click at='4'>

**拉格朗日中值定理**：
$$
\frac{f(b)-f(a)}{b-a}=f'(\xi),\quad \exist\,\xi\in(a,b)
$$
</v-click>

<v-click at='5'>

沟通 $f(x)$ 与 $f'(x)$ 的 <mark>“桥梁”</mark>

</v-click>

<arrow x1="370" y1="330" x2="430" y2="275" color="red" width="2" arrowSize="1" v-click='5'/>
<arrow x1="520" y1="340" x2="630" y2="275" color="red" width="2" arrowSize="1" v-click='5'/>

---

从哪里 **获取一阶导数 $f'(x)$ 的信息**？<span v-click='1'>从 **二阶导数$f''(x)$**；</span>

<v-click at='2'>

依次类推……

从哪里 **获取 $f^{(n)}(x)$ 的信息**？<span v-click='3'>从 **$f^{(n+1)}(x)$**。</span>
</v-click>

<span v-click='4'>如果从 **一阶导数 $f'(x)$ 获取的信息** 不够？</span> <span v-click='5'>从 **二阶导数 $f''(x)$**；</span>

<span v-click='6'>如果从**二阶导数 $f''(x)$ 获取的信息** 还不够？</span> <span v-click='7'>从**三阶导数 $f'''(x)$**。</span>

<span v-click='8'>依次类推……</span>

<span v-click='9'>但嵌套的层次多了，终究不是办法。</span>

<span v-click='10'>最终的解决方案：</span>

<span v-click='10'>“**桥梁**”：**泰勒公式**（升级版的拉格朗日中值定理）</span>

---
layout: two-cols
layoutClass: gap-10
---

**本节知识点**

**掌握：**
<Admonition title='1. 证明恒等式' admonitionType='info'>

证明 $f(x)\equiv C \, (x\in I)$：
1. 证明 <span v-mark.box.red='1'>$f'(x)\equiv 0 \, (x\in I)$</span>;
2. 代入 <span v-mark.box.blue='2'>特殊点</span>来确定常数 $C$.
</Admonition>

::right::

<Admonition title='2. 利用微分中值定理证明不等式' admonitionType='info' v-click='3'>

证明 <span v-mark.box.red='7'>**形如**</span> 拉格朗日或柯西中值定理的不等式：
$${hide|1|1-2|1-3}{at:4}
\begin{align*}
A<&\frac{f(b)-f(a)}{b-a}<B \\
\xLeftrightarrow{拉氏定理} A<&f'(\xi)<B \\
\Longleftarrow a<&\xi<b
\end{align*}
$$
</Admonition>

<Admonition title='3. 证明微分中间值问题' admonitionType='info' v-click='8'>

</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**引例：** 

地点：桂林 $\xrightarrow{200\mathrm{km}}$ 柳州

交通工具：高铁 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 用时：$2\,\mathrm{h}$

<span v-click='1'>断言：高铁一定在某个时刻的瞬时速度恰好是 $100\,\mathrm{km}/\mathrm{h}$.</span>

<v-click at='2'>

**翻译成数学式子：**

路程：$s(t)$，则 $s(0)=0$，$s(2)=200$;

速度：$v(t)$，则 $v(t)=s'(t)$;
</v-click>

<v-click at='3'>

断言实际为：$\exist\, \xi\in(0,2)$，使得
$$s'(\xi)=\frac{s(2)-s(0)}{2-0}.$$
</v-click>

::right::

<span v-click='4'>某一时刻的瞬时速度 $=$ 平均速度</span>

<v-click at='5'>

<hr>

**一般化：**

**拉格朗日中值定理**：
$$
f'(\xi)=\frac{f(b)-f(a)}{b-a},\quad \exist\,\xi\in(a,b).
$$
</v-click>

<v-click at='6'>

<hr>

**简单化：** 不妨 $f(a)=f(b)$

**罗尔中值定理**：

$$
f'(\xi)=0,\quad \exist\,\xi\in(a,b).
$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 3.1.1.罗尔定理

---
layout: two-cols
layoutClass: gap-10
---

### 3.1.2.拉格朗日中值定理

---
layout: two-cols
layoutClass: gap-10
---

**证明恒等式**

<Admonition title='1. 证明恒等式' admonitionType='info'>

证明 $f(x)\equiv C \, (x\in I)$：
1. 证明 <span v-mark.box.red='1'>$f'(x)\equiv 0 \, (x\in I)$</span>;
2. 代入 <span v-mark.box.blue='2'>特殊点</span>来确定常数 $C$.
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='2. 利用微分中值定理证明不等式' admonitionType='info'>

证明 <span v-mark.box.red='6'>**形如**</span> 拉格朗日或柯西中值定理的不等式:
$${hide|1|1-2|1-3}{at:1}
\begin{align*}
A<&\frac{f(b)-f(a)}{b-a}<B \\
\xLeftrightarrow{拉氏定理} A<&f'(\xi)<B \\
\Longleftarrow a<&\xi<b
\end{align*}
$$
</Admonition>

<v-click at='4'>

**例 1：** 证 $\displaystyle \frac{a-b}{a}<\ln\frac{a}{b}<\frac{a-b}{b}\quad(a>b>0)$.
</v-click>

<v-click at='5'>

**分析：** 待证不等式 
$\displaystyle \iff\frac{1}{a}<\frac{\ln a-\ln b}{a-b}<\frac{1}{b}.$
</v-click>

<v-click at='6'>

形如拉氏定理。
</v-click>

::right::

<v-click at='7'>

**证：** 设 $f(x)=\ln x$，则其在 $[b,a]$ 上连续，在 $(b,a)$ 内可导，由拉格朗日中值定理得
$$\frac{\ln a-\ln b}{a-b}=f'(\xi)=\frac{1}{\xi},\quad b<\xi<a.$$

</v-click>

<v-click at='8'>

因为 $b<\xi<a$，故 $\displaystyle \frac{1}{a}<\frac{1}{\xi}<\frac{1}{b}$.
</v-click>

<v-click at='9'>

结合上式，得
$$\frac{1}{a}<\frac{\ln a-\ln b}{a-b}<\frac{1}{b}.$$
</v-click>

<v-click at='10'>

所以
$$\frac{a-b}{a}<\ln\frac{a}{b}<\frac{a-b}{b}.$$
</v-click>

---

**中间值问题：**

证明 $\exist\,\xi\in(a,b)$ 使得 $G(\xi)=0$.

<span v-click='1'>例如：</span>

<v-clicks at='2'>

1. 闭区间上连续函数的性质（最值、介值、零点定理）等相关问题；
2. 如果 $G(\xi)=0$ 是**带有导数**的，这样的问题叫**微分中间值问题**；
3. 如果 $G(\xi)=0$ 是**带有积分**的，这样的问题叫**积分中间值问题**。
</v-clicks>

<span v-click='5'>**通常的证明方法**：<mark>构造辅助函数</mark>，借助一些定理来证明。</span>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='3. 证明微分中间值问题' admonitionType='info'>

证明：$\exist\,\xi\in(a,b)$ 使得 $G(\xi)=0$，其中 $G(\xi)$ 带有导数。

<span v-click='1'>**通常步骤：**</span>

<v-clicks at='2'>

1. **分离 $\xi$**：（尽量简化（如：避免带有除式））
   
   $H(\xi)=$ 不含有 $\xi$ 的式子   
2. 找到 $( {\color{red}?} )'=H(x)$.
   
   通常 ${\color{red}?}$ 即为要找的辅助函数。
3. 验证满足定理的条件，并证明。
</v-clicks>

<span v-click='5'>找辅助函数很**灵活**，有各种各样的方法，不必拘泥于这样的步骤。</span>
</Admonition>

::right::

<v-click at='6'>

**例 2** 设 $f(x)$ 在 $[0,a]$ 上连续，在 $(0,a)$ 内可导，且 $f(a)=0$，证明：$\exist\, \xi\in(a,b)$ 使
$$f(\xi)+\xi f'(\xi)=0.$$
</v-click>

<v-click at='7'>

**分析：** $f(x)+xf'(x)=($<span v-click='8'>$xf(x)$</span>$)'$
</v-click>

<v-click at='9'>

**证：** 设 $F(x)=xf(x)$，则 $F(x)$ 在 $[0,a]$ 上连续，在 $(0,a)$ 内可导，且
$$F(0)=0=F(a).$$
</v-click>

<v-click at='10'>

由罗尔中值定理，$\exist\, \xi\in(a,b)$ 使 $F'(\xi)=0$，
</v-click>

<v-click at='11'>

即
$$f(\xi)+\xi f'(\xi)=0.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 3.1.3.柯西中值定理

---

## 3.2.洛必达法则

1. 什么是洛必达法则？

2. 在什么情况下用？怎么用？（使用技巧）

3. 在什么情况下不能用？（使用逻辑）

---
layout: center
---

**洛必达法则的用途：求极限**

<span v-click='1'>处理的极限类型：</span>

<v-clicks at='2'>

- $\displaystyle \frac{0}{0}$ 型未定式

- $\displaystyle \frac{\infty}{\infty}$ 型未定式

- 其它未定式
</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**引入**

考察 $\displaystyle \frac{0}{0}$ 型未定式

<v-click at='1'>

已学方法：
- 约去零因子
- 等价无穷小替换
- 利用导数的定义
</v-click>

<v-click at='2'>

无论何种方法，**核心**都是要<mark>约去零因子</mark>。
<hr>
</v-click>

<span v-click='3'>有什么运算可以**减少因子的个数**？</span><span v-mark.highlight.yellow='4' v-click='4'>**求导。**</span>

<span v-click='5'>例如：$f(x)=(x-1)^3$，则 $f'(x)=3(x-1)^2$.</span>

::right::

<span v-click='6'>考察 $\displaystyle \frac{0}{0}$ 型极限：$\displaystyle \lim_{x\to a}\frac{f(x)}{g(x)}$.</span>

<span v-click='7'>当 $x\to a$ 时，$f(x)\to 0$ 和 $g(x)\to 0$，即 $x-a$ 是 $f(x)$ 和 $g(x)$ 的公共趋于**零因子**。</span>

<v-click at='8'>

若分子和分母分别同时求导数之后得 $\displaystyle \frac{f'(x)}{g'(x)}$，

恰好起到了分子、分母同时<span v-mark.highlight.yellow='9'>约去零因子的效果</span>。
</v-click>

<v-click at='10'>

**启发：**
$$
\lim_{x\to a}\frac{f(x)}{g(x)}\xrightarrow{\color{red}\text{转化？}}\lim_{x\to a}\frac{f'(x)}{g'(x)}.
$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 3.2.1. 洛必达法则定理

<Admonition title='洛必达法则'>
<v-clicks>

1. $\lim\limits_{x \to a}f(x)=\lim\limits_{x \to a}g(x)=0$（即 <span v-mark.highlight.yellow='1'>$\displaystyle \frac{0}{0}$</span>）；
2. $f(x)$，$g(x)$ 在 $\mathring{U}(a)$ 内<span v-mark.highlight.yellow='2'>可导</span>，且 $g'(x)\neq 0$
3. <span v-mark.highlight.yellow='3'>$\displaystyle \lim_{x \to a}\frac{f'(x)}{g'(x)}$ 存在（或 $\infty$）</span>；
</v-clicks>

<v-click at='4'>

则
$$\lim_{x \to a}\frac{f(x)}{g(x)}=\lim_{x \to a}\frac{f'(x)}{g'(x)}.$$
</v-click>
</Admonition>

<v-clicks at='5'>

- 极限过程 $x\to a$ 也 可以换成其它极限过程；
- 极限类型也可以是 <span v-mark.highlight.yellow='6'>$\displaystyle \frac{\infty}{\infty}$</span>.
</v-clicks>

::right::

<v-click at='8'>

**证：** 补充或修改定义：$f(a)=0$，$g(a)=0$。
</v-click>

<v-click at='7'>

任取 $x\in\mathring{U}(a)$，则在以 $x$ 和 $a$ 为端点的区间上满足**柯西中值定理**的条件，故
$$\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(\xi)}{g'(\xi)},$$
其中 $\xi$ 介于 $x$ 与 $a$ 之间。
</v-click>

<v-click at='9'>

令 $x\to a$，则 $\xi\to a$，所以
$$\lim_{x \to a}\frac{f(x)}{g(x)}=\lim_{x \to a}\frac{f'(\xi)}{g'(\xi)}=\lim_{\xi \to a}\frac{f'(\xi)}{g'(\xi)}=\lim_{x \to a}\frac{f'(x)}{g'(x)}.$$
</v-click>

---

**洛必达法则的几何意义**

[洛必达法则的几何意义](https://www.geogebra.org/m/uufz5tk3)

 <!-- <iframe scrolling="no" title="洛必达法则的几何意义" src="https://www.geogebra.org/material/iframe/id/vmhzttfm/width/1533/height/640/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="850px" height="600px" style="border:0px;"> </iframe> -->

---
layout: two-cols
layoutClass: gap-10
---

**例 1** $\displaystyle \lim_{x\to 1}\frac{x^3-3x+2}{x^3-x^2-x+1}$<span v-click='1'>$\displaystyle =\lim_{x\to 1}\frac{3x^2-3}{3x^2-2x-1}$</span>

<v-click at='3'>

$\displaystyle =\lim_{x\to 1}\frac{6x}{6x-2}$<span v-click='4' v-mark.cross.red='5'>$\displaystyle =\lim_{x\to 1}\frac{6}{6}=1$</span>
</v-click>

<v-click at='7'>

$\displaystyle =\frac{3}{2}$
</v-click>

<Admonition title='不满足使用条件：$\displaystyle \frac{0}{0}$ 或 $\displaystyle \frac{\infty}{\infty}$，不能继续用洛必达法则' admonitionType='error' v-click='6'>
</Admonition>

::right::

<v-click at='2'>

**推论：** 若使用洛必达法则后得到 
1. $\displaystyle \lim\frac{f'(x)}{g'(x)}$ 仍是 $\displaystyle \frac{0}{0}$ 型；
2. 且 $f'(x)$，$g'(x)$ 可导，$g''(x)\neq 0$；
3. 并且 $\displaystyle \lim\frac{f''(x)}{g''(x)}$ 存在（或 $\infty$），则
$$\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}=\lim\frac{f''(x)}{g''(x)}.$$

- 推论告诉我们：**洛必达法则可以一直用下去（如果满足使用条件），直到把极限求出来**。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 2** $\displaystyle \lim_{x\to 0}\frac{x\cos x-\sin x\cos x}{(\mathrm{e}^x-1)\arctan x^2}$
$${hide|1-2|1-3|1-4|1-5|all}{at:1}
\begin{align*}
&\lim_{x\to 0}\frac{x\cos x-\sin x\cos x}{(\mathrm{e}^x-1)\arctan x^2} \\
=&\lim_{x\to 0}\frac{x-\sin x}{(\mathrm{e}^x-1)\arctan x^2}\cdot\lim_{x\to 0}\cos x \\
=&\lim_{x\to 0}\frac{x-\sin x}{x^3} \\
=&\lim_{x\to 0}\frac{1-\cos x}{3x^2} \\
=&\lim_{x\to 0}\frac{\frac{1}{2}x^2}{3x^2} \\
=&\frac{1}{6}.
\end{align*}
$$

::right::

<Admonition title='洛必达法则使用的技巧：' admonitionType='info' v-click='6'>

1. 使用洛必达法则前，<mark>先化简</mark>，包括
   - 四则运算；
   - 各种恒等变形；
   - **优先**<mark>等价无穷小替换</mark>；
   - 换元
   - 等等
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 3** $\displaystyle \lim_{x\to+\infty}\frac{\ln x}{x^5}$
<span v-click='1'>$\displaystyle =\lim_{x\to+\infty}\frac{x^{-1}}{5x^4}$</span>
<span v-click='2'>$\displaystyle =\lim_{x\to+\infty}\frac{1}{5x^5}=0$.</span>

<span v-click='7' v-mark.highlight.yellow='6'>对 $\ll$ 幂</span>

<span v-click='3'>**例 4**$\displaystyle \lim_{x\to+\infty}\frac{x^4}{\mathrm{e}^{3x}}$</span>
<span v-click='4'>$\displaystyle =\lim_{x\to+\infty}\frac{4x^3}{3\mathrm{e}^{3x}}$</span>
<span v-click='5'>$\displaystyle =\lim_{x\to+\infty}\frac{4\cdot 3x^3}{3^2\mathrm{e}^{3x}}$</span>

<span v-click='6'>$\displaystyle =\cdots$</span>
<span v-click='6'>$\displaystyle =\lim_{x\to+\infty}\frac{4!}{3^4\mathrm{e}^{3x}}=0.$</span>
<span v-click='8' v-mark.highlight.yellow='8'>幂 $\ll$ 指</span>

<v-click at='13'>

**例 5** $\displaystyle \lim_{x\to+\infty}\frac{3^x+2^x+x^{100}+(\ln x)^{10000}}{3^x+5^{-x}}$
</v-click>

<v-click at='14'>

$$
原式=\lim_{x\to+\infty}\frac{1+\left(\frac{2}{3}\right)^x+\frac{x^{100}}{3^x}+\frac{(\ln x)^{10000}}{3^x}}{1+\left(\frac{1}{15}\right)^x}=1.
$$
</v-click>

::right::

<Admonition title='对、幂、指函数趋于 $\infty$ 的“速度”' admonitionType='warning' v-click='9'>

<v-clicks at='9'>

1. 当 $x\to+\infty$ 时，且 $\alpha>0,a>1$，
   $$\ln x\ll x^\alpha\ll a^x.$$
   <div text-center>
   
   <span v-mark.highlight.yellow='9'>对 $\ll$ 幂 $\ll$ 指</span>
   </div>
2. 当 $x\to\infty$ 时，<span v-mark.highlight.yellow='10'>$x^{\color{red}\alpha}\ll x^{\color{red}\beta}(0<{\color{red}\alpha}<{\color{red}\beta})$</span>;
3. 当 $x\to+\infty$ 时，<span v-mark.highlight.yellow='11'>${\color{red}a}^x\ll {\color{red}b}^x(1<{\color{red}a}<{\color{red}b})$</span>;
4. 当 $x\to+\infty$ 时，$\log_{\color{red}a} x$ 与 $\log_{\color{red}b} x(1<{\color{red}a}<{\color{red}b})$ <span v-click='12'>同阶无穷大。</span>
</v-clicks>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 6** $\displaystyle \lim_{x\to+\infty}x\left(\frac{\pi}{2}-\arctan x\right)$

$${hide|1|1-2|1-3}{at:'4'}
\begin{align*}
原式=&\lim_{x\to+\infty}\frac{x}{(\frac{\pi}{2}-\arctan x)^{-1}}\\
=&\lim_{x\to+\infty}\frac{1}{-(\frac{\pi}{2}-\arctan x)^{-2}\cdot(-{\frac{1}{1+x^2}})}\\
=&\lim_{x\to+\infty}(1+x^2)\left(\frac{\pi}{2}-\arctan x\right)^2.
\end{align*}
$$

<span v-click='7'>越来越复杂！</span>

$${hide|1|1-2|1-3}{at:'8'}
\begin{align*}
原式=&\lim_{x\to+\infty}\frac{\frac{\pi}{2}-\arctan x}{x^{-1}}\\
=&\lim_{x\to+\infty}\frac{-\frac{1}{1+x^2}}{-x^{-2}}=\lim_{x\to+\infty}\frac{x^2}{1+x^2}\\
=&1.
\end{align*}
$$

::right::

<v-click at='1'>

- <span v-mark.highlight.yellow='2'>$\displaystyle 0\cdot\infty=\frac{\infty}{\frac{1}{0}}=\frac{\infty}{\infty}$</span> 或

- <span v-mark.highlight.yellow='3'>$\displaystyle 0\cdot\infty=\frac{0}{\frac{1}{\infty}}=\frac{0}{0}$</span>.
</v-click>

<Admonition title='怎样才能有效地使用洛必达法则？' admonitionType='error' v-click='11'>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='怎样才能有效地使用洛必达法则？' admonitionType='warning'>

$$\lim\frac{f(x)}{g(x)}\xlongequal{\color{blue}转化}\lim\frac{f'(x)}{g'(x)}$$

<v-click at='1'>

转化问题，需要 <span v-mark.highlight.yellow='2'>引导</span> 转化的方向。
</v-click>

<v-click at='3'>

希望（<span v-mark.highlight.yellow='3'>引导</span>）： <span v-click='4' v-mark.circle.red='4'>难</span> <span v-click='5'>$\xrightarrow{\color{blue}洛必达法则}$</span> <span v-click='6' v-mark.circle.green='6'>易</span> 
</v-click>

<v-click at='7'>

$$
\begin{align*}
f(x)\xrightarrow{求导}f'(x)\\
g(x)\xrightarrow{求导}g'(x)\\
\end{align*}
$$
</v-click>

<v-click at='8'>

在恒等变形时，<mark>控制</mark>分子和分母变形为<mark>求导后能化简单的函数</mark>。
</v-click>
</Admonition>

::right::

<v-click at='9'>
什么函数 <span v-mark.box.red='9'>求导</span> 后能 <span v-mark.box.green='9'>化简单</span> ？
</v-click>

<Admonition title='求导后能化简单的函数' admonitionType='info' v-click='10'>
<v-clicks at='11'>

- <mark>幂函数</mark>：$(x^n)'=nx^{n-1}(n\in \N)$;
- <mark>对数函数</mark>：$\displaystyle (\ln x)'=\frac{1}{x}$;
- <mark>反三角函数</mark>：$\displaystyle (\arctan x)'=\frac{1}{1+x^2},\cdots$;
- 等等。
</v-clicks>
</Admonition>

---

<span v-click='3'>**某些情况，洛必达法则也可能是徒劳！**</span>

**例 7** 
$\displaystyle \lim_{x\to+\infty}\frac{\sqrt{1+x^2}}{x}$
<span v-click='1'>$\displaystyle =\lim_{x\to+\infty}\frac{x}{\sqrt{1+x^2}}$</span>
<span v-click='2'>$\displaystyle =\lim_{x\to+\infty}\frac{\sqrt{1+x^2}}{x}$.</span>

<span v-click='4'>"**抓大头**"，立刻可以得到结果是 $1$.</span>

---
layout: two-cols
layoutClass: gap-10
---

**洛必达法则使用的逻辑**

**例 8** $\displaystyle \lim_{x\to\infty}\frac{x+\sin x}{x}$
<span v-click='1'>$\displaystyle =\lim_{x\to\infty}\frac{1+\cos x}{1}$ </span>
<span v-click='2'> 不存在，因为 $\displaystyle \lim_{x\to\infty}\cos x$ 振荡。</span>
<v-click at='3'>

问题：<span v-mark.crossed-off.red='5'>不存在 $\xLeftarrow{\quad\color{red}\large ？}$ 不存在</span>
</v-click>

<v-click at='4'>

$\displaystyle \lim_{x\to\infty}\frac{x+\sin x}{x}=\lim_{x\to\infty}\left(1+\frac{\sin x}{x}\right)=1$.
</v-click>

<Admonition title='易混淆地方' admonitionType='error' v-click='6'>

**原因：** $\lim\limits_{x \to a}\frac{f'(x)}{g'(x)}$ 存在（或 $\infty$）是洛必达法则
$$\lim_{x \to a}\frac{f(x)}{g(x)}=\lim_{x \to a}\frac{f'(x)}{g'(x)}.$$
的**使用前提**，也就是说：<span v-mark="{at:7,color:'red',multiline:true}">导数相除的极限（非 $\infty$ 的）不存在仅能说明不能使用洛必达法则</span>。
</Admonition>

::right::

<Admonition title='洛必达法则使用逻辑顺序' admonitionType='info' v-click='8'>

$$\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}=\lim\frac{f''(x)}{g''(x)}.$$

<div text-center>

<span v-click='11'>存在 $\impliedby$</span> <span v-click='10'>存在 $\impliedby$</span><span v-click='9'>存在</span>

<span v-click='12'>上结论包括极限是 $\infty$ 的不存在</span>
</div>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**不能直接使用洛必达法则的情况**
<Admonition title='其它未定式' admonitionType='warning'>

<v-clicks at='1'>

1. 不是 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$;
2. 不可导；
3. 导数相除的极限不存在。
</v-clicks>
</Admonition>

<span v-click='4'>**例 9** $\displaystyle \lim_{n\to\infty}\frac{n^2+1}{n^2+n}$</span>
<span v-click='5' v-mark.crossed-off.red='6'>$\displaystyle =\lim_{n\to\infty}\frac{2n}{2n+1}$</span>

<v-click at='7'>

**原因：** 数列不可导，不能直接用洛必达法则。
</v-click>

<v-click at='10'>

先考察 $\displaystyle \lim_{x\to+\infty}\frac{x^2+1}{x^2+x}=\lim\limits_{x\to+\infty}\frac{2x}{2x+1}=1$, 
</v-click>

<v-click at='11'>

所以 $\displaystyle \lim_{n\to\infty}\frac{n^2+1}{n^2+n}=\lim\limits_{x\to+\infty}\frac{x^2+1}{x^2+x}=1$. 
</v-click>

::right::

<Admonition title='函数极限与数列极限的关系' admonitionType='info' v-click='8'>

若 $\lim\limits_{n\to\infty}x_n=x_0$，则
$$
\begin{align*}
\lim_{x\to x_0}f(x)=A &\implies \lim_{n\to\infty}f(x_n)=A.\\
{\color{red}函数极限存在} &\implies {\color{red}数列极限存在}\\
  &\xcancel{\impliedby}
\end{align*}
$$
</Admonition>

<Admonition title='数列极限间接用洛必达法则' admonitionType='info' v-click='9'>

1. 先求解数列极限 $\lim\limits_{x\to x_0}f(x)=A$;
2. 在利用函数极限与数列极限的关系 $\lim\limits_{n\to\infty}f(x_n)=\lim\limits_{x\to x_0}f(x)=A$.
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='其它未定式' admonitionType='warning'>

通过各种手段<mark>转化</mark>为基本的未定式（<mark>$\frac{0}{0}$ 或 $\frac{\infty}{\infty}$</mark>）：
<v-clicks>

- <mark>$\infty-\infty$$\xRightarrow{\text{通分或有理化}}$ $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$</mark> ；
- <mark>$0\cdot\infty=\frac{0}{\frac{1}{\infty}}=\frac{0}{0}$</mark> 或 <mark>$0\cdot\infty=\frac{\infty}{\frac{1}{0}}=\frac{\infty}{\infty}$</mark>；
- <mark>幂指</mark>函数未定式（如：$0^0,1^\infty,\infty^0$ 等）：通过
  <mark>$u^v=\mathrm{e}^{v\ln u}$</mark>
  转化为 <mark>$0\cdot\infty$</mark>.
</v-clicks>
</Admonition>

**幂指函数的极限：**

<span v-click='4'>**例 10** $\displaystyle \lim_{n\to\infty}\sqrt[n]{n}$</span>
<span v-click='5'>$\displaystyle =\lim_{n\to\infty}\mathrm{e}^{\frac{\ln n}{n}}=\mathrm{e}^{\lim\limits_{n\to\infty}\frac{\ln n}{n}}$</span>
<span v-click='8'>$=\mathrm{e}^{\color{blue}0}=1$.</span>

<span v-click='6'>考察 $\displaystyle \lim_{x\to+\infty}\frac{\ln x}{x}=\lim_{x\to+\infty}\frac{x^{-1}}{1}=0$,</span>

<span v-click='7'>因此 $\displaystyle \lim_{n\to\infty}\frac{\ln n}{n}=\lim_{x\to+\infty}\frac{\ln x}{x}={\color{blue}0}$.</span>

::right::

<span v-click='9'>**例 11** $\displaystyle \lim_{x\to 0^+}x^x$</span>
<span v-click='10'>$\displaystyle =\mathrm{e}^{\lim\limits_{x\to 0^+}x \ln x}$</span>
<span v-click='11'>$\displaystyle =\mathrm{e}^{\lim\limits_{x\to 0^+}\frac{\ln x}{x^{-1}}}$</span>

<span v-click='12'>$\displaystyle =\mathrm{e}^{\lim\limits_{x\to 0^+}\frac{x^{-1}}{-x^{-2}}}=\mathrm{e}^0=1$.</span>

<span v-click='13'>若指数上的**式子较长**，书写带着 $\mathrm{e}$ 不方便，可以**取对数**，再处理。因为</span>

<span v-click='14'>$A=\lim f(x) \iff \ln A=\lim \ln f(x)=B$</span>

<span v-click='15'>所以可先求 $\lim \ln f(x)=B$，则 $A=\mathrm{e}^B$.</span>


---
layout: section
---

## 3.3.泰勒公式

**目的：** <span v-mark.highlight.yellow='1'>复杂函数简单用</span>

---

**引入：**

如果函数 $f(x)$ 在点 $x_0$ 处

<div>

|连续|<span v-click='1'>$f(x)\approx f(x_0)$</span>|<span v-click='4'>$0$ 次多项式</span>|
|:--:|:--|:--:|
|<span v-click='2'>可导：</span>|<span v-click='3'>$f(x)\approx f(x_0)+f'(x_0)(x-x_0)$</span>|<span v-click='5'>$1$ 次多项式</span>|
|<span v-click='6'>二阶可导：</span>|<span v-click='7'>$f(x){\color{orange}\approx ?} a_0+a_1(x-x_0)+a_2(x-x_0)^2$</span>|<span v-click='7'>$2$ 次多项式</span>|
|<span v-click='8'>$n$ 阶可导：</span>|<span v-click='8'>$f(x){\color{orange}\approx ?}a_0+a_1(x-x_0)+a_2(x-x_0)^2 + \cdots +a_n(x-x_0)^n$</span>|<span v-click='8'>$n$ 次多项式</span>|
</div>

<div text-center v-click='9'>

<span v-mark.box.red='9'>**$f(x)\,\approx$ 泰勒多项式 $P_n(x)$.**</span>
</div>

[图示泰勒公式](https://www.geogebra.org/m/vtbqsnmk)
<!-- <iframe scrolling="no" title="Taylor'sPolynomial" src="https://www.geogebra.org/material/iframe/id/mubp5b3j/width/660/height/620/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="450px" height="422px" style="border:0px;"> </iframe> -->

---
layout: two-cols
layoutClass: gap-10
---

**怎么找出泰勒多项式 $P_n(x)$？**
<div v-mark.box.red='0'>
$$
\begin{align*}
P_n(x)=&a_0+a_1(x-x_0)+a_2(x-x_0)^2 + \cdots \\ &+a_n(x-x_0)^n.
\end{align*}
$$
</div>

<span v-click='1'>**$0$ 次近似：**$f(x)$ 与 $P_n(x)$ 在点 $x_0$ **相交**：</span>

<div text-center v-click='2'>

${\color{blue}f(x_0)}=P_n(x_0)$
<span v-click='3'>$={\color{blue}a_0}$.</span>
</div>

<span v-click='4'>**$1$ 次近似：**$f(x)$ 与 $P_n(x)$ 在点 $x_0$ **相切**：</span>

<div text-center v-click='5'>

${\color{blue}f'(x_0)}=P'_n(x_0)$<span v-click='7'>$={\color{blue}a_1}$,</span>
</div>

<span v-click='6'>其中 $P'_n(x)=a_1+2a_2(x-x_0) + \cdots +na_n(x-x_0)^{n-1}.$</span>

::right::

<span v-click='8'>**$2$ 次近似：**$f'(x)$ 与 $P'_n(x)$ 在点 $x_0$ **相切**：</span>

<div text-center v-click='9'>

${\color{blue}f''(x_0)}=P''_n(x_0)$<span v-click='11'>$={\color{blue}2!a_2}$,</span>
</div>

<span v-click='10'>其中 $P''_n(x)=2!a_2+3\cdot2a_2(x-x_0) + \cdots +n(n-1)a_n(x-x_0)^{n-2}$.</span>

<span v-click='12'>**...**</span>

<span v-click='13'>**$n$ 次近似：**$f^{(n-1)}(x)$ 与 $P^{(n-1)}_n(x)$ 在点 $x_0$ **相切**：</span>

<div text-center v-click='14'>

${\color{blue}f^{(n)}(x_0)}=P^{(n)}_n(x_0)$<span v-click='16'>$={\color{blue}n!a_n}$.</span>
</div>

<span v-click='15'>其中 $P^{(n)}_n(x)=n!a_n$.</span>

<div v-click='17' v-mark.box.red='17'>

综上所述，$(x-x_0)^{\color{red}k}$ 的系数
$$a_{\color{red}k}=\frac{f^{({\color{red}k})}(x_0)}{ {\color{red}k}!}\,({\color{red}k}=0,1,2,\dots,n).$$
</div>

---

当 $|x-x_0|$ 很小时，**$f(x)\approx P_n(x)$ 能否近似？**
<span v-click='1'>$\iff\,f(x)-P_n(x)$ 很小，当 $|x-x_0|$ 很小时？</span>

<span v-click='2' v-mark.red='2'>**余项 $R_n(x)\triangleq f(x)-P_n(x)$ 到底有多小？**</span>

<span v-click='3'>由上页幻灯片知道：$R_n(x_0)=R'_n(x_0)=\cdots=R^{(n)}_n(x_0)=0$.</span>

$${hide|1|1-2|1-3|1-4}{at:4}
\begin{align*}
&\lim_{x\to x_0}\frac{R_n(x)}{(x-x_0)^n}{\color{red}=0?}\\
=&\lim_{x\to x_0}\frac{R'_n(x)}{n(x-x_0)^{n-1}}=\lim_{x\to x_0}\frac{R''_n(x)}{n(n-1)(x-x_0)^{n-2}}\\
=&\cdots=\lim_{x\to x_0}\frac{R^{(n-1)}_n(x)}{n!(x-x_0)}={\color{red}\xcancel{\color{black}\lim_{x\to x_0}\frac{R^{(n)}_n(x)}{n!}=\frac{1}{n!}R^{(n)}_n(x_0)=0}}\\
=&\frac{1}{n!}\lim_{x\to x_0}\frac{R^{(n-1)}_n(x)-R^{(n-1)}_n(x_0)}{x-x_0}=\frac{1}{n!}R^{(n)}_n(x_0)=0.
\end{align*}
$$

<v-click at='8'>

所以 <span v-mark.box.red='8'>$R_n(x)=o\left((x-x_0)^n\right)\,(x\to x_0)$.</span>
<span v-click='9'> 称为**皮亚诺（Peano）余项**。</span>
</v-click>

---

<Admonition title='泰勒中值定理 1（Peano 余项）' admonitionType='info'>

如果函数 $f(x)$ 在 $x_0$ 处具有 $n$ 阶导数，则 $\exist\, \mathring{U}(x_0)$，使得 $\forall\,x\in\mathring{U}(x_0)$，有
$$
f(x)=a_0+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots +\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o\left((x-x_0)^n\right).
$$
</Admonition>

<span v-click='1'>什么时候用 **Peano 余项** 的泰勒公式？</span>

<span v-click='2'>关心 $f(x)$ 当 $x\to x_0$ 时的“速度”等 <mark>**粗糙**</mark> 的问题（比如：求极限）。</span>

<span v-click='3'>当关心 $f(x)$ 更为 <mark>**精细**</mark> 的问题，需要用 **Lagrange 余项** 的泰勒公式。</span>

<span v-click='4'>即需要余项 $R_n(x)$ 有 **精细** 的表达式。</span>

---

<Admonition title='泰勒中值定理 2（Lagrange 余项）' admonitionType='info'>

如果函数 $f(x)$ 在 $x_0$ 处具有 $n+1$ 阶导数，则 $\exist\, \mathring{U}(x_0)$，使得 $\forall\,x\in\mathring{U}(x_0)$，有
$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots +\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_n(x),
$$
其中 $R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$ ( $\xi$ 介于 $x_0$ 与 $x$ 之间 )。
</Admonition>

<span v-click='1'>**什么时候用** Lagrange 余项的泰勒公式？</span><span v-click='2'>关心 $f(x)$ <mark>**精细**</mark> 的问题（比如：**等式**、**不等式**和**误差精度**等问题）。</span>

<Admonition title='注意' admonitionType='warning' v-click='3'>
<v-clicks at='3'>

1. $(x-x_0)^{\color{red}k}$ 的<span v-mark.red='3'>**系数**</span> $a_{\color{red}k}$ $\xleftrightarrow{\color{orange}1-1 对应}$ <span v-mark.red='3'>**高阶导数**</span> $f^{({\color{red}k})}(x_0)$：<span v-mark.red='3'>$\displaystyle a_{\color{red}k}=\frac{f^{({\color{red}k})}(x_0)}{ {\color{red}k}!}$</span>;
2. 点 $x_0$ 是泰勒公式的**中心点**。
</v-clicks>
</Admonition>

---

**证明：**
要证此定理，即要证 $\exist \, \xi$ 介于 $x_0$ 与 $x$ 之间，满足
$$R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}{\color{red}?}$$

<v-click at='1'>

$$\iff \frac{R_n(x)}{(x-x_0)^{n+1} }=\frac{f^{(n+1)}(\xi)}{(n+1)!}{\color{red}?}$$
</v-click>

<span v-click='2'>从前面的 ppt 中，已得：$R_n(x_0)=R'_n(x_0)=\cdots=R^{(n)}_n(x_0)=0$.</span>

<v-click at='3'>

应用柯西中值定理得，$\exist \, \xi_1$ 介于 $x_0$ 与 $x$ 之间，满足
$$\frac{R_n(x)}{(x-x_0)^{n+1} }=\frac{R_n(x)-R_n(x_0)}{(x-x_0)^{n+1}-0}=\frac{R'_n(\xi_1)}{(n+1)(\xi_1-x_0)^{n} }.$$
</v-click>

<v-click at='4'>

再应用柯西中值定理得，$\exist \, \xi_2$ 介于 $x_0$ 与 $\xi_1$ 之间，满足
$$\frac{R'_n(\xi_1)}{(n+1)(\xi_1-x_0)^{n} }=\frac{R'_n(\xi_1)-R'_n(x_0)}{(n+1)(\xi_1-x_0)^{n}-0}=\frac{R''_n(\xi_2)}{(n+1)n(\xi_2-x_0)^{n-1} }.$$
</v-click>

---

这样经过 $n+1$ 次应用柯西中值定理后，$\exist \, \xi$ 介于 $x_0$ 与 $\xi_n$ 之间，也就介于$x_0$ 与 $x$ 之间，满足
$$\frac{R_n(x)}{(x-x_0)^{n+1}}=\frac{R_n^{(n+1)}(\xi)}{(n+1)!}.$$

<span v-click='1'>注意到 $R_n^{(n+1)}(x)=f^{(n+1)}(x)$，即</span>

<v-click at='2'>

$$\frac{R_n(x)}{(x-x_0)^{n+1}}=\frac{f^{(n+1)}(\xi)}{(n+1)!}.$$

</v-click>

---

**常见的在 $x=0$ 处的泰勒公式：**

$${1|1-2|1-3|1-4|1-5|1-6}
\begin{align*}
\mathrm{e}^x &=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n),\\
\sin x &=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^{m-1}\frac{x^{2m-1}}{(2m-1)!}+o(x^{2m-1}),\\
\cos x &=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^{m}\frac{x^{2m}}{(2m)!}+o(x^{2m}),\\
\frac{1}{1-x} &=1+x+x^2+\cdots+x^n+o(x^n),\\
\ln(1+x)& =x-\frac{x^2}{2}+\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n),\\
(1+x)^{\alpha}&=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}+o(x^n).
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**1. 利用泰勒公式求极限**

**例 1** 求极限 $\displaystyle \lim_{x\to 0}\frac{\sin x-x\cos x}{\sin^3 x}$.

<span v-click='3'>**解：** 因为</span>

$${hide|1|1-3}{at:3}
\begin{align*}
\sin x &=x-\frac{x^3}{3!}+o(x^3),\\
x\cos x &=x\left(1-\frac{x^2}{2!}+o(x^2)\right)\\
&=x-\frac{x^3}{2!}+o(x^3),
\end{align*}
$$

<v-click at='5'>

所以
$$
\lim_{x\to 0}\frac{\sin x-x\cos x}{\sin^3 x}=\lim_{x\to 0}\frac{\frac{1}{3}x^3+o(x^3)}{x^3}=\frac{1}{3}.
$$
</v-click>

::right::

<Admonition title='到底展开出几阶的泰勒公式才合适？' admonitionType='warning' v-click='1'>

<span v-click='2'>由分子或分母<mark>精度</mark>，来决定展开成几阶的泰勒公式。</span>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**2. 求高阶导数**

**例 2** 设 $f(x)=x^2\mathrm{e}^x$，求 $f^{(2024)}(0)$.

<span v-click='2'>**解：** 因为</span>

$${hide|1|1-2|1-3}{at:2}
\begin{align*}
f(x)=&x^2\mathrm{e}^x \\
=& x^2\left(1+x+\cdots+\frac{x^{2022}}{2022!}+o(x^{2022})\right)\\
=& x^2+x^3+\cdots+\frac{x^{2024}}{2022!}+o(x^{2024}),
\end{align*}
$$

<v-click at='5'>

所以
$$
f^{(2024)}(0)=2024!\cdot \frac{1}{2022!}=2024\cdot 2023.
$$
</v-click>

::right::

<Admonition title='注意' admonitionType='warning' v-click='1'>

 $(x-x_0)^{\color{red}k}$ <span v-mark.red.box='1'>**系数**</span> $a_{\color{red}k}$ $\xleftrightarrow{\color{orange}1-1 对应}$ <span v-mark.red.box='1'>**高阶导数**</span> $f^{({\color{red}k})}(x_0)$
 
 <span v-mark.red.box='1'>$a_{\color{red}k}=\frac{f^{({\color{red}k})}(x_0)}{ {\color{red}k}!}$</span>.
</Admonition>

<v-click at='6'>
<hr>

**例 3** 设 $f(x)=x(x+1)(x+2)\cdots(x+n)$，求 $f'(0)$.
</v-click>

<span v-click='7'>**解析：** 只需求出 $x^1$的系数：</span>
<span v-click='8'>$n!$，</span>

<span v-click='9'>故 $f'(0)=n!$.</span>

---
layout: two-cols
layoutClass: gap-10
---

**例 4** 设 $f(x)$ 在 $x=0$ 处二阶可导，且 $x\in\mathring{U}(0)$ 有 $f(x)=x^2+o(x^2)$，求出 $f(0)$，$f'(0)$，$f''(0)$.

<v-click at='1'>

**解析：** 因为 $f(x)$ 在 $x=0$ 处二阶可导，由泰勒公式，$\forall x\in\mathring{U}(0)$，有
$$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+o(x^2).$$
</v-click>

<span v-click='2'>而已知 $f(x)=x^2+o(x^2)$，</span>

<span v-click='3'>所以 $f(0)=0$，$f'(0)=0$，$f''(0)=2$.</span>

::right::

<v-click at='4'>

利用泰勒公式来理解极值的第二充分条件。

设 $f(x)$ 在 $x_0$ 附近具有二阶导数，且 $f'(x_0)=0$，则
1. $f''(x_0)<0\,\implies$ $f(x)$ 在 $x_0$ 处取到极大值；
2. $f''(x_0)>0\,\implies$ $f(x)$ 在 $x_0$ 处取到极小值。
</v-click>

<v-click at='5'>

**分析：** 因为 $f(x)$ 在 $x_0$ 附近具有二阶导数，且 $f'(x_0)=0$，则由泰勒公式，得

$$
\begin{align*}
f(x)=&f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2\\
&+o\left((x-x_0)^2\right)\\
=&f(x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+o\left((x-x_0)^2\right)
\end{align*}
$$
</v-click>

<v-click at='6'>

当 $|x-x_0|$ 很小的时候，$f(x)$ 和 $f(x_0)$ 的大小关系，由 $f''(x_0)$ 决定。
</v-click>

---
layout: section
---

## 3.4.函数的单调性、凹凸性

---

## 3.5.极值和最值
函数在一个区间（有限、无穷、开、闭）上最值：

如果 $f(x)$ 在区间上有唯一的一个驻点 $x_0$。
- 若 $x_0$ 是函数的极小值点，则 $x_0$ 一定是最小值点；
- 若 $x_0$ 是函数的极大值点，则 $x_0$ 一定是最大值点；

---

设函数 $y=f(x)$ 在 $(-\infty,+\infty)$ 上连续，且一阶导函数图像如下所示，问函数有多少个极值，分别是极大值还是极小值？曲线有多少个拐点。

---

|判断方式|$f(x)$|$f'(x)$|$f''(x)$|
|:---:|:---:|:---:|:---:|
|极值点|
|拐点|

---
layout: center
---

## 3.6.函数图形

