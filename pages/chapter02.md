# 2.导数与微分

<Toc text-sm columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>


---
layout: two-cols
layoutClass: gap-10
---

## 2.1.导数的概念
<v-click at='1'>

**引例 1** 瞬时速度 $\leftarrow$ 平均速度：

$$v(t_0)=\lim_{\Delta t \to 0}\frac{\Delta s}{\Delta t}=\lim_{t\to t_0}\frac{s(t)-s(t_0)}{t-t_0}.$$
</v-click>

<v-click at='2'>

**引例 2** 切线斜率 $\leftarrow$ 割线斜率：

（*此处需要插入动画来说明*）

$$\tan \alpha=\lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}.$$
</v-click>

::right::

<v-click at='3'>

**导数的定义：** 设函数 $y=f(x)$ 在点 $x_0$ 的某个邻域内有定义，若极限
$$\lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$
存在，则称函数 $y=f(x)$ 在 **点** $x_0$ 处**可导**，并称此**极限值**为函数 $y=f(x)$ 在 **点** $x_0$ 处的**导数**，记为
</v-click>

<v-click at='4'>

$$f'(x_0),\,\left.y'\right|_{x=x_0},\,\left.\frac{\mathrm{d}f(x)}{\mathrm{d}x}\right|_{x=x_0},\,\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=x_0}.$$
</v-click>

<v-click at='5'>

若此极限不存在，则称函数 $y=f(x)$ 在 **点** $x_0$ 处**不可导**，称点 $x_0$ 为**不可导点**。
</v-click>

<v-click at='6'>

- 特别的，如果此极限是 $\infty$，则称 函数 $y=f(x)$ 在点 $x_0$ 处的导数为**无穷大**。
</v-click>

---

<Admonition title='导数的等价定义' admonitionType='info'>

**增量形式：**
$$f'({\color{orange}x_0})=\lim_{ {\color{blue}\Delta x} \to 0}\frac{f({\color{orange}x_0}+{\color{blue}\Delta x})-f({\color{orange}x_0})}{\color{blue}\Delta x}$$
$$f'({\color{orange}x_0})=\lim_{ {\color{blue}h} \to 0}\frac{f({\color{orange}x_0}+{\color{blue}h})-f({\color{orange}x_0})}{\color{blue}h}\quad (\text{令} {\color{blue}h}=\Delta x)$$
**“对称”形式：**
$$f'({\color{orange}x_0})=\lim_{ {\color{blue}x}\to {\color{orange}x_0} }\frac{f({\color{blue}x})-f({\color{orange}x_0})}{ {\color{blue}x}-{\color{orange}x_0} }\quad (\text{令} {\color{blue}x}=x_0+\Delta x)$$

</Admonition>

---

<Admonition title='导数的理解' admonitionType='info'>

函数随着自变量的变化而变化的 <mark>变化率</mark>。

</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**导函数**

<v-click at='1'>

由定义，**导数是**一个极限值，是**数值**,
</v-click>

<v-click at='2'>

而中学 $(x^2)'=2x$，是函数。**疑问？**

</v-click>

<v-click at='3'>

| 自变量  |   导数值   |
| :-----: | :--------: |
|   $1$   | $f'(1)=2$  |
|   $2$   | $f'(2)=4$  |
|   $5$   | $f'(5)=10$ |
| $\dots$ |  $\dots$   |
</v-click>

<v-click at='4'>

<mark>对应关系</mark>：
$$x\mapsto f'(x)$$

</v-click>

::right::

<v-click at='5'>

如果函数 $f(x)$ 在开区间 $(a,b)$ 内的**每一点都可导**，称函数 $f(x)$ 在**开区间 $(a,b)$ 内可导**。
</v-click>

<v-click at='6'>

对任意的 $x\in(a,b)$，由对应关系 $x\mapsto f'(x)$ 构成新的函数 $f'(x)$，称为 $f(x)$ 的**导函数**。记为
$$f'(x),\,y',\,\frac{\mathrm{d}f(x)}{\mathrm{d}x},\,\frac{\mathrm{d}y}{\mathrm{d}x}.$$
</v-click>

<v-click at='7'>

**在点 $x_0$ 处导数定义：**

$$f'({\color{red}x_0})=\lim_{\Delta x\to 0}\frac{f({\color{red}x_0}+\Delta x)-f({\color{red}x_0})}{\Delta x}.$$
</v-click>

<v-click at='8'>

**导函数定义：**
$$f'({\color{red}x})=\lim_{\Delta x\to 0}\frac{f({\color{red}x}+\Delta x)-f({\color{red}x})}{\Delta x}.$$
</v-click>

<v-click at='9'>

$$f'(x_0)=f'(x)|_{x=x_0}$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**本节知识点**

**掌握：**

<Admonition title='1. 讨论函数在<mark>点</mark> $x=x_0$ 处的<mark>可导性</mark>' admonitionType='info' v-click='1'>

<v-clicks at='2'>

- 普通点：导数的定义；
- 分段函数的<mark>分段点</mark>：<mark>左、右导数存在且相等</mark>
</v-clicks>

<v-click at='4'>
<span v-mark.cross.red="5">是否可求导函数 → 代数值，得到左、右导数？</span>
</v-click>

<v-click at='6'>

**理由：**
<span v-mark.red="6">导函数</span>适用于<span v-mark.red="6">区间内部</span>，<span  v-mark="{ at: 7, color: 'yellow', type: 'highlight', multiline: true }">不适用于区间端点。</span>
</v-click>
</Admonition>

<Admonition title='2. 求曲线的切（法）线方程' admonitionType='info' v-click='8'>
</Admonition>

<Admonition title='3. 熟练运用基本初等函数的求导数公式' admonitionType='info' v-click='9'>
</Admonition>

::right::

<Admonition title='4. 利用导数定义求极限' admonitionType='info' v-click='10'>
<v-clicks at='11'>

- 抽象函数
- 具体函数（了解）
</v-clicks>
</Admonition>

<Admonition title='5. 可导的充分必要条件' admonitionType='info' v-click='13'>

$f'(x_0)=A$ $\iff$ $f'_-(x_0)=f'_+(x_0)=A$
</Admonition>

<arrow x1="500" y1="250" x2="440" y2="250" color="#953" width="2" arrowSize="1" v-click='[13]'/>

<Admonition title='6. 可导的与连续的关系' admonitionType='info' v-click='14'>

<v-click at='15'>

- <span v-mark="{ at: 15, color: 'yellow', type: 'highlight', multiline: true }">可导 $\implies$ 连续</span>
</v-click>

<v-click at='16'>

- 逆否命题：<span v-mark="{ at: 16, color: 'yellow', type: 'highlight', multiline: true }">不可导 $\impliedby$ 不连续</span>

</v-click>
</Admonition>


<v-click at='17'>

**理解：** 利用导数的定义求导函数
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 2.1.1.利用导数的定义求导函数

$$
\begin{align*}
f'(x)=\lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x}=&\lim_{\Delta x \to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}\\
=&\lim_{h \to 0}\frac{f(x+h)-f(x)}{h}.
\end{align*}
$$

<v-click at='1'>

- $(C)'=0$
</v-click>

<details v-click='2'>
  <summary ><Akatex inline=true content="$(x^{\alpha})'=\alpha x^{\alpha-1}$"></Akatex></summary>
$$
\begin{align*}
(x^{\alpha})'&=\lim_{h \to 0}\frac{(x+h)^{\alpha}-x^{\alpha}}{h}\\
&=x^{\alpha}\lim_{h \to 0}\frac{(1+\frac{h}{x})^{\alpha}-1}{h}\\
&=x^{\alpha}\lim_{h \to 0}\frac{\alpha \frac{h}{x}}{h}\\
&=\alpha x^{\alpha-1}.
\end{align*}
$$
</details>

<details v-click='3'>
  <summary ><Akatex inline=true content="$(\sin x)'=\cos x$"></Akatex></summary>
$$
\begin{align*}
(\sin x)'&=\lim_{h \to 0}\frac{\sin(x+h)-\sin x}{h}\\
&=\lim_{h \to 0}\frac{2\cos(x+\frac{h}{2})\sin\frac{h}{2}}{h}\\
&=\cos x.
\end{align*}
$$
</details>

<v-click at='4'>

- $(\cos x)'=-\sin x$
</v-click>

::right::

<details v-click='5'>
  <summary ><Akatex inline=true content="$(a^x)'=a^x\ln a \, (a>0,a\neq 1)$"></Akatex></summary>
$$
\begin{align*}
(a^x)'&=\lim_{h \to 0}\frac{a^{x+h}-a^x}{h}\\
&=a^x\lim_{h \to 0}\frac{a^h-1}{h}\\
&=a^x\lim_{h \to 0}\frac{\mathrm{e}^{h\ln a}-1}{h}\\
&=a^x\ln a.
\end{align*}
$$
</details>

<v-click at='6'>

- $(\mathrm{e}^x)'=\mathrm{e}^x$
</v-click>

<details  v-click='7'>
  <summary ><Akatex inline=true content="$(\log_a x)'=\frac{1}{x\ln a} \, (a>0,a\neq 1)$"></Akatex></summary>
$$
\begin{align*}
(\log_a x)'&=\lim_{h \to 0}\frac{\log_a(x+h)-\log_a x}{h}\\
&=\lim_{h \to 0}\frac{\log_a(1+\frac{h}{x})}{h}\\
&=\lim_{h \to 0}\frac{\frac{\ln(1+\frac{h}{x})}{\ln a}}{h}\\
&=\frac{1}{x\ln a}.
\end{align*}
$$
</details>

<v-click at='8'>

- $(\ln x)'=\frac{1}{x}$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 2.1.2.讨论函数在点初的可导性

---
layout: two-cols
layoutClass: gap-10
---

**利用导数的定义求极限**


---

## 2.2.函数的求导法则

---
layout: two-cols
layoutClass: gap-10
---

### 2.2.1.导数的四则运算

**定理 1** 如果函数 $u(x)$，$v(x)$ 在点 $x$ 处可导，则它们的和、差、积、商（除使分母为 $0$ 的点外），都在点 $x$ 处可导，且
- $[u\pm v]'=u'\pm v'$；
- $[uv]'=u'v+uv'$；
- $\displaystyle \left[\frac{u}{v}\right]'=\frac{u'v-uv'}{v^2}\,(v\neq 0)$.

<v-click at='1'>

（与求导变量无关的）**常数可提出求导符号外**：
- $(Cu)'=Cu'$
</v-click>

<v-click at='2'>

可推广到有限个函数求导运算：
- $(u+v+w)'=u'+v'+w'$；
- $(uvw)'=u'vw+uv'w+uvw'$.
</v-click>

::right::

<Admonition title='此定理有两个内涵' admonitionType='info' v-click='3'>

- $u$，$v$ 都可导 $\implies$ 其和、差、积、商都可导（可导性的其中一种判别方法）。
- 和、差、积、商的求导运算。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 求 $y=x^2(\cos x+\sqrt{x})$ 的导数。

$${hide|1-2|1-3}
\begin{align*}
y'&=[x^2(\cos x+\sqrt{x})]'\\
&=(x^2\cos x)'+(x^{\frac{5}{2}})'\\
&=2x\cos x - x^2\sin x +\frac{5}{2}x^{\frac{3}{2}}.
\end{align*}
$$

<v-click at="3">

求导的加减法比乘除法简单。
</v-click>

::right::

**例 2** 求 $y=\cot x$ 的导数。

$${hide|hide|1|1-2|1-3|1-4|1-5}
\begin{align*}
(\cot x)'&=\left(\frac{\cos x}{\sin x}\right)'\\
&=\frac{(\cos x)'\sin x -\cos x (\sin x)'}{\sin^2x}\\
&=\frac{-\sin x \sin x-\cos x\cos x}{\sin^2x}\\
&=-\frac{1}{\sin^2 x}\\
&=-\csc^2 x.
\end{align*}
$$

---

<Admonition title='三角函数求导公式' admonitionType='info'>

$$
\begin{align*}
(\sin x)'&=\cos x,\\
(\cos x)'&=-\sin x,\\
(\tan x)'&=\frac{1}{\cos^2 x}=\sec^2 x,\\
(\cot x)'&=-\frac{1}{\sin^2 x}=-\csc^2 x,\\
(\sec x)'&=\sec x \tan x,\\
(\csc x)'&=-\csc x \cot x.
\end{align*}
$$
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

### 2.2.2.反函数的求导法则

(*引例：这里用齿轮的传递，猜想反函数的求导法则*)

<Admonition title='反函数的求导法则' admonitionType='info'>

$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1}{\frac{\mathrm{d}x}{\mathrm{d}y}}$$
</Admonition>

*(这里需要插入一个svg)*

::right::

<v-click at='1'>

**例 1.**
证明：$\displaystyle (\arcsin x)'=\frac{1}{\sqrt{1-x^2}}\,(|x|<1)$.

</v-click>

<v-click at='2'>

证：设 $y=\arcsin x\,(|x|<1)$，则 $x=\sin y$ $\displaystyle \left(y\in(-\frac{\pi}{2},\frac{\pi}{2})\right)$，且
$$\frac{\mathrm{d}x}{\mathrm{d}y}=\cos y.$$
</v-click>

<v-click at='3'>

由反函数的求导法则，得
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1}{\frac{\mathrm{d}x}{\mathrm{d}y}}=\frac{1}{\cos y}=\frac{1}{\sqrt{1-x^2}}.$$

（*这里补充讲：已知一个三角函数，利用直角三角形求其它三角函数。*）
</v-click>

---

<Admonition title='反三角函数的导数' admonitionType='info'>

$$
\begin{align*}
(\arcsin x)'&=\frac{1}{\sqrt{1-x^2}}\quad(|x|<1)\\
(\arccos x)'&=-\frac{1}{\sqrt{1-x^2}}\quad(|x|<1)\\
(\arctan x)'&=\frac{1}{1+x^2}\quad(x\in \R)\\
(\arcctg x)'&=-\frac{1}{1+x^2}\quad(x\in \R)
\end{align*}
$$
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

### 2.2.3.复合函数的求导法则

(*引例：齿轮的传递，猜想复合函数的变换率*)

<Admonition title='链式法则' admonitionType='info'>

若变量之间的依赖关系为：
$$x\xmapsto{g} u \xmapsto{f} y$$

<v-click at='1'>

则 
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x}.$$
</v-click>
</Admonition>

<v-click at='2'>

这是所谓的**链式法则**。
</v-click>

::right::

<Admonition title='链式法则使用' admonitionType='warning' v-click='6'>

1. 理清<span v-mark.red='7'>变量之间的依赖关系</span>； 
2. <span v-mark="{ at: 8, color: 'yellow', type: 'highlight'}">由外向内，逐层求导</span>。
</Admonition>

<v-click at='3'>

若变量之间的依赖关系为：
$$x\xmapsto{g} u \xmapsto{h} v \xmapsto{f} y$$
</v-click>

<v-click at='4'>

则
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}v}\cdot\frac{\mathrm{d}v}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x},$$
</v-click>

<v-click at='5'>

$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}v}\cdot\frac{\mathrm{d}v}{\mathrm{d}x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 设 $\displaystyle y=\arctan\frac{1}{x}$，求 $y'$.

<v-click at='1'>

**解：**$\displaystyle x \mapsto {\color{red}\frac{1}{x}} \mapsto \arctan {\color{red}\frac{1}{x}}$
</v-click>

$${hide|hide|1|1-2|1-3}
\begin{align*}
\left(\arctan{\color{red}\frac{1}{x}}\right)'
&=\frac{1}{1+\left({\color{red}\frac{1}{x}}\right)^2}\cdot\left({\color{red}\frac{1}{x}}\right)'\\
&=\frac{1}{1+\left(\frac{1}{x}\right)^2}\cdot\left(-x^{-2}\right)\\
&=-\frac{1}{x^2+1}.
\end{align*}
$$

::right::

<v-click at='5'>

**例 2** 设 $\displaystyle y=\ln\tan\frac{x}{2}$，求 $y'$.
</v-click>

<v-click at='6'>

**解：**$\displaystyle x \mapsto {\color{orange}\frac{x}{2}} \mapsto {\color{blue}\tan {\color{orange}\frac{x}{2}}} \mapsto \ln{\color{blue}\tan\frac{x}{2}}$
</v-click>

$$ {hide|hide|hide|1|1-2|1-3|all}
\begin{align*}
\left(\ln {\color{blue}\tan \frac{x}{2}}\right)'
&=\frac{1}{\color{blue}\tan \frac{x}{2}}\cdot\left({\color{blue}\tan {\color{orange}\frac{x}{2}}}\right)'\\
&=\frac{1}{\tan \frac{x}{2}}\cdot\sec^2\left({\color{orange}\frac{x}{2}}\right)\cdot\left({\color{orange}\frac{x}{2}}\right)'\\
&=\frac{1}{\tan \frac{x}{2}}\cdot\sec^2\left(\frac{x}{2}\right)\cdot\frac{1}{2}\\
&=\frac{1}{\sin x}.
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

**例 3** 设 $y=x^{b^c}+a^{x^c}+a^{b^x}\,(a,b,c>0)$，求 $y'$.
<v-click at='1'>

**解：**$x^{b^c}$：$x\xmapsto{幂} x^{b^c},$
</v-click>

<v-click at='2'>

$$\left(x^{b^c}\right)'=b^c x^{b^c-1};$$
</v-click>

<v-click at='3'>

$a^{x^c}$：$x\xmapsto{幂} {\color{orange}x^c} \xmapsto{指} a^{\color{orange}x^c},$
</v-click>

<v-click at='4'>

$$\left(a^{x^c}\right)'=a^{\color{orange}x^c}\ln a \cdot ({\color{orange}x^c})'=a^{x^c}\ln a\cdot cx^{c-1};$$
</v-click>

<v-click at='5'>

$a^{b^x}$：$x\xmapsto{指} {\color{orange}b^x} \xmapsto{指} a^{\color{orange}b^x},$
</v-click>

<v-click at='6'>

$$\left(a^{b^x}\right)'=a^{\color{orange}b^x}\ln a \cdot ({\color{orange}b^x})'=a^{b^x}\ln a\cdot b^x\ln b.$$
</v-click>

<v-click at='7'>

所以 $y'=\cdots+\cdots+\cdots$.
</v-click>

**关键：** 弄清<mark>谁在变？</mark>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='有用的公式' admonitionType='warning'>

$$(\ln|x|)'=\frac{1}{x}\quad (x\neq 0)$$

</Admonition>

<v-click at='1'>

**证：** 当 $x>0$，则 
$$(\ln|x|)'=(\ln x)'=\frac{1}{x};$$
</v-click>

<v-click at='2'>

当 $x<0$，则 
$$(\ln|x|)'=(\ln(-x))'=\frac{1}{-x}\cdot (-1)=\frac{1}{x};$$
</v-click>

<v-click at='3'>

所以 $\displaystyle (\ln|x|)'=\frac{1}{x}$.
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

## 2.3.高阶导数

<v-click at='1'>

**定义** 若函数 $y=f(x)$ 的导数 $f'(x)$ 在点 $x$ 处可导，即极限
$$\lim_{\Delta x \to 0}\frac{f'(x+\Delta x)-f'(x)}{\Delta x}$$
存在，则称此极限为函数 $f(x)$ 在点 $x$ 处的**二阶导数**，记为
</v-click>

<v-click at='2'>

$$y''\triangleq(y')'\quad\text{或}\quad \frac{\mathrm{d}^2y}{\mathrm{d}x^2}\triangleq\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right).$$
</v-click>

::right::

<v-click at='3'>

类似地，二阶导数的导数称为**三阶导数**，依次类推，$n-1$ 阶导数的导数称为 **$n$ 阶导数**，类似的记为
$$y''',y^{(4)},\cdots,y^{(n)}\quad\text{或}\quad\frac{\mathrm{d}^3y}{\mathrm{d}x^3},\frac{\mathrm{d}^4y}{\mathrm{d}x^4},\cdots,\frac{\mathrm{d}^ny}{\mathrm{d}x^n}.$$
</v-click>

<v-click at='4'>

约定俗成:

</v-click>

<v-clicks at='4'>

- **高阶导数**：$f^{(n)}(x)\,(n\geq 2)$;
- **一阶导数**：$f'(x)$;
- **零阶导数**：$f(x)$.

</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**高阶导数的运算**

设函数 $u=u(x)$，$v=v(x)$ 在点 $x$ 处有 $n$ 阶导数，则

<v-clicks>

- $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$;
- $(Cu)^{(n)}=C(u^{(n)})$;
- **莱布尼兹公式**：
  $$(uv)^{(n)}=\sum_{k=0}^{n} C_n^k u^{(n-k)}v^{(k)}.$$
</v-clicks>

<v-click>

与二项式展开比较
$$(a+b)^n=\sum_{k=0}^{n}C_n^ka^{n-k}b^k.$$

</v-click>

::right::

<v-click>

|   阶数   |                                            导数                                            |
| :------: | :----------------------------------------------------------------------------------------: |
|   $1$    |                           ${\color{red}1}u'v+{\color{red}1}uv'$                            |
|   $2$    |                 ${\color{red}1}u''v+{\color{red}2}u'v'+{\color{red}1}uv''$                 |
|   $3$    |     ${\color{red}1}u'''v+{\color{red}3}u''v'+{\color{red}3}u'v''+{\color{red}1}uv'''$      |
| $\cdots$ |                                          $\cdots$                                          |
|   $n$    | $u^{(n)}v+C_n^1 u^{(n-k)}v'+C_n^2 u^{(n-2)}v''+\cdots+C_n^k u^{(n-k)}v^{(k)}+\cdots+uv^{(n-k)}$ |

</v-click>

---
layout: center
layoutClass: gap-10
---

<Admonition title='怎么求高阶导数？' admonitionType='info'>

- 方法一：（**直接法**）归纳总结出通式；
- 方法二：（**间接法**）利用已知高阶导数公式，通过各种运算，间接求出通式。

</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 设 $y=\mathrm{e}^{2x}$，求 $y^{(n)}$.

<v-click>

**解：** 
</v-click>

$${hide|1|1-2|1-3|1-5}{at:1}
\begin{align*}
y'&=2\mathrm{e}^{2x},\\
y''&=2^2\mathrm{e}^{2x},\\
y'''&=2^3\mathrm{e}^{2x},\\
\cdots\\
y^{(n)}&=2^n\mathrm{e}^{2x}.
\end{align*}
$$

::right::

**例 2** 设 $y=\sin x$，求 $y^{(n)}$.

<v-click at='5'>

**解：** 
</v-click>

$${hide|1|1-2|1-3|1-4|1-6}{at:5}
\begin{align*}
y'&=\cos x=\sin\left(x+\frac{\pi}{2}\right),\\
y''&=-\sin x=\sin\left(x+2\cdot\frac{\pi}{2}\right),\\
y'''&=-\cos x=\sin\left(x+3\cdot\frac{\pi}{2}\right),\\
y^{(4)}&=\sin x=\sin\left(x+4\cdot\frac{\pi}{2}\right),\\
\cdots\\
y^{(n)}&=\sin\left(x+n\cdot\frac{\pi}{2}\right).
\end{align*}
$$

<v-click at='10'>

类似地
$$(\cos x)^{(n)}=\cos\left(x+n\cdot\frac{\pi}{2}\right).$$
</v-click>

---

**例 3** 设幂函数 $y=(x+b)^{\alpha}$，求 $y^{(n)}$.

$${hide|1|1-2|1-3|1-5}{at:1}
\begin{align*}
y'&=\alpha(x+b)^{\alpha-1},\\
y''&=\alpha(\alpha-1)(x+b)^{\alpha-2},\\
y'''&=\alpha(\alpha-1)(\alpha-2)(x+b)^{\alpha-3},\\
\cdots\\
y^{(n)}&=\alpha(\alpha-1)(\alpha-2)\cdots(\alpha-n+1)(x+b)^{\alpha-n}.
\end{align*}
$$

<v-click at='5'>

特别的，若次幂 $\alpha$ 为**正整数**时，
<Admonition title='正整数次幂函数的高阶导数' admonitionType='warning'>

$$
\left((x+b)^{\alpha}\right)^{(n)}=
\begin{cases}
\text{同上},&\text{求导阶数}<\text{次幂数},\\
n!,&\text{求导阶数}=\text{次幂数},\\
0,&\text{求导阶数}>\text{次幂数}.
\end{cases}
$$
</Admonition>
</v-click>

---

**例** 设 $f(x)=x^2\mathrm{e}^x$，求 $f^{(2024)}(0)$.

<v-click at='1'>

**解：** 由莱布尼兹公式得
</v-click>

$${hide|1|1-3|1-4}
\begin{align*}
f^{(n)}(x)=&\sum_{k=0}^{n}C_n^k(x^2)^{(k)}(\mathrm{e}^x)^{(n-k)}\\
=&C_n^0(x^2)^{(0)}(\mathrm{e}^x)^{(n)}+C_n^1(x^2)^{(1)}(\mathrm{e}^x)^{(n-1)}+C_n^2(x^2)^{(2)}(\mathrm{e}^x)^{(n-2)}\\
&+C_n^3(x^2)^{(3)}(\mathrm{e}^x)^{(n-3)}+\cdots+C_n^n(x^2)^{(n)}(\mathrm{e}^x)^{(0)}\\
=&x^2\mathrm{e}^x + n\cdot 2x \cdot \mathrm{e}^x + \frac{n(n-1)}{2}\cdot 2 \cdot \mathrm{e}^x+0+\cdots+0.
\end{align*}
$$

<v-click at='4'>
所以
$$
f^{(2024)}(0)=2024\cdot 2023.
$$
</v-click>

---
layout: section
---

## 2.4.隐函数、参数式函数的导数

---

### 2.4.1.隐函数的导数

求隐函数方程 $F(x,y)=0$ 所确定的函数 $y=y(x)$ 的导数 $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}$.

**注意：**
<v-clicks>

1. 隐函数方程 $F(x,y)=0$ 不一定能写成显函数 $y=y(x)$;
2. 通常 $y$ 是 $x$ 的函数（$y=y(x)$，自变量 $x$），也可看成 $x$ 是 $y$ 的函数（$x=x(y)$，自变量 $y$）;
3. 当把 $y=y(x)$ 代入隐函数方程，则 $F(x,y(x))\equiv 0$ 是个**恒等式**。
   
   例如：
   把 $y=\pm\sqrt{1-x^2}$ 代入 $x^2+y^2=1$，得
   $x^2+(1-x^2)\equiv 1$ （对在其定义域内的**任意** $x$ 都恒成立）。
</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 设 $\sin y+xy=x^2$，求 $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}$.

<v-click at='1'>

**分析：** 不妨把所确定的函数记为 $y=y(x)$，代入，得
$$\sin y(x)+xy(x)\equiv x^2,$$
</v-click>

<v-click at='2'>

等式两边对 $x$ 求导，得
$$\cos y(x)\cdot y'(x)+y(x)+xy'(x)=2x,$$
</v-click>

<v-click at='3'>

解得
$$y'(x)=\frac{2x-y(x)}{\cos y(x)+x},$$
其中 $\cos y(x)+x\neq 0$.
</v-click>

::right::

<v-click at='4'>

实际书写时，都**隐去** $y(x)$ 和 $y'(x)$ 中的**自变量 $x$**，

但是<mark>切记 $y$ 中隐含有变量 $x$</mark>.

但是<mark>切记 $y$ 中隐含有变量 $x$</mark>.

但是<mark>切记 $y$ 中隐含有变量 $x$</mark>.

</v-click>

<v-click at='5'>

**解：** 等式两边对 $x$ 求导，得
$$\cos y\cdot y'+y+xy'=2x,$$
解得
$$y'=\frac{2x-y}{\cos y+x},$$
其中 $\cos y+x\neq 0$.
</v-click>

---

**例 2** 求曲线 $xy+\mathrm{e}^x=\mathrm{e}^y$ 在 $x=0$ 处的切线方程。

<v-click>

**解：** 等式两边对 $x$ 求导，得
$$y+xy'+\mathrm{e}^x=\mathrm{e}^yy',$$
</v-click>

<v-click>

解得
$$y'=\frac{\mathrm{e}^x+y}{\mathrm{e}^y-x}\quad(\mathrm{e}^y-x\neq 0).$$
</v-click>

<v-click>

将 $x=0$ 代入原方程，解得 $y(0)=0$.
</v-click>

<v-click>

切线斜率
$$k=y'|_{(0,0)}=\frac{\mathrm{e}^0+0}{\mathrm{e}^0-0}=1.$$
</v-click>

<v-click>

切线方程：$y-0=1\cdot (x-0)$，即 $y=x$.
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 3** 设 $x^2+y^2=4$，求 $y'|_{(\sqrt{2},\sqrt{2})}$ 和 $y''|_{(\sqrt{2},\sqrt{2})}$.

<v-click at='1'>

**解：解法一（先求导函数，再把点代入）**
</v-click>

<v-click at='2'>

等式两边对 $x$ 求导，得 $2x+2yy'=0$，即
$$
\begin{equation}
x+yy'=0.
\end{equation}
$$
</v-click>

<v-click at='3'>

解得 $\displaystyle y'=-\frac{x}{y}$.
</v-click>

<v-click at='4'>

一阶导函数对 $x$ 求导，得
</v-click>

<v-click at='5'>

$$
\begin{align*}
y''&=-\frac{y-xy'}{y^2}\xlongequal{\text{代入} y'}-\frac{y-x\left(-\frac{x}{y}\right)}{y^2}\\
&=-\frac{x^2+y^2}{y^3}=-\frac{4}{y^3},
\end{align*}
$$
</v-click>

<v-click at='6'>

因此 $y'|_{(\sqrt{2},\sqrt{2})}=-1$，$y''|_{(\sqrt{2},\sqrt{2})}=-\sqrt{2}$.
</v-click>

::right::

<v-click at='7'>

**解法二（“边求边代”）**
</v-click>

<v-click at='8'>

等式 (1) 两边对 $x$ 求导，得
$$
\begin{equation}
1+(y')^2+yy''=0,
\end{equation}
$$
</v-click>

<v-click at='9'>

把 $(\sqrt{2},\sqrt{2})$ 代入 (1) 式， 得 $y'|_{(\sqrt{2},\sqrt{2})}=-1$，
</v-click>

<v-click at='10'>

把 $(\sqrt{2},\sqrt{2})$ 和 $y'|_{(\sqrt{2},\sqrt{2})}=-1$ 代入 (2) 式，得 $y''|_{(\sqrt{2},\sqrt{2})}=-\sqrt{2}$.
</v-click>

<Admonition title='注意' admonitionType='warning' v-click='11'>

- 求隐函数 $F(x,y)=0$ 在点 $(x,y)$ 的导数 $y'$，则 <mark>$y'$ 中的 $(x,y)$ 仍满足 $F(x,y)=0$</mark>.

<v-click at='12'>

- 若求具体点的高阶导**数值**，**边求变代**简单些，选择**先求高阶导函数再代点**有可能会繁琐。
</v-click>
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

### 2.4.2.取对数求导数

---

**例** 求 $\displaystyle y=\frac{\sqrt[3]{(x-1)^2(4+2x)}}{\sqrt[5]{x^4(3-x)}}$ 的导数。

<v-click>

**解：** 等式两边先取绝对值，再取对数，得
$$
\ln|y|=\frac{1}{3}(2\ln|x-1|+\ln|4+2x|)-\frac{1}{5}(4\ln|x|+\ln|3-x|).
$$
</v-click>

<v-click>

等式两边对 $x$ 求导，得（注意上式是隐函数方程，且复合函数 $\ln|y|: x\mapsto y \mapsto \ln|y|$）
$$
\frac{1}{y}\cdot y'=\frac{1}{3}\left(\frac{2}{x-1}+\frac{\color{red}2}{4+2x}\right)-\frac{1}{5}\left(\frac{4}{x}+\frac{\color{red}-1}{3-x}\right)
$$
</v-click>

<v-click>
所以
$$
y'=\frac{\sqrt[3]{(x-1)^2(4+2x)}}{\sqrt[5]{x^4(3-x)}}\left[\frac{1}{3}\left(\frac{2}{x-1}+\frac{2}{4+2x}\right)-\frac{1}{5}\left(\frac{4}{x}+\frac{-1}{3-x}\right)\right].
$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 2.4.3.幂指函数的导数

**例** 求 $y=x^{\sin x}\,(x>0)$ 的导数。

<v-click at='1'>

**方法一（取对数求导）**

等式两边取对数，得
$$\ln y=\sin x \ln x,$$
</v-click>

<v-click at='2'>

等式两边对 $x$ 求导，得
$$\frac{1}{y}\cdot y'=\cos x \cdot \ln x + \sin x \cdot \frac{1}{x},$$
</v-click>

<v-click at='3'>

所以
$$y'=x^{\sin x}\left(\cos x \ln x+\frac{\sin x}{x}\right).$$
</v-click>

::right::

<v-click at='4'>

**方法二（化成以 $\mathrm{e}$ 的指数函数来求导）**
</v-click>

$${hide|1|1-2|1-3}{at:4}
\begin{align*}
(x^{\sin x})'&=\left(\mathrm{e}^{\sin x \ln x}\right)'\\
&=\left(\mathrm{e}^{\sin x \ln x}\right)(\sin x \ln x)'\\
&=x^{\sin x}\left(\cos x \ln x+\frac{\sin x}{x}\right).
\end{align*}
$$

---
layout: two-cols
layoutClass: gap-10
---

### 2.4.4.参数式函数的导数

设函数 $y=f(x)$ 由参数方程 $\begin{cases}x=x(t),\\ y=y(t)\end{cases}$ 所确定，且 $x(t)$ 和 $y(t)$ 可导，则

（通过速度的切向量的斜率，猜想出参数式函数的求导方法）
<v-click>

$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}=\frac{y'_{\color{red}t}}{x'_{\color{red}t}}.
$$
</v-click>

<v-click>

**分析：** 变量依赖关系：
$\begin{cases}t\mapsto x,\\ t\mapsto y,\end{cases}$

可以看成是复合函数：$x\mapsto t \mapsto y$,

</v-click>

<v-click>

所以
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}t}\cdot \frac{\mathrm{d}t}{\mathrm{d}x}=\frac{\mathrm{d}y/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}.
$$
</v-click>

::right::

<v-click>

**例 1** 设 $\begin{cases} x=\arctan t, \\ y=\ln(1+t^2) \end{cases}$，求 $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}$ 和 $\displaystyle \frac{\mathrm{d}^2y}{\mathrm{d}x^2}$.
</v-click>

<v-click>

一阶导数：$\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y/\mathrm{d}t}{\mathrm{d}x/\mathrm{d}t}=\frac{\frac{2t}{1+t^2}}{\frac{1}{1+t^2}}=2t.$
</v-click>

<v-click>

二阶导数：<span v-mark.cross.red="7">$\displaystyle \frac{\mathrm{d}^2y}{\mathrm{d}x^2}=(2t)'=2$</span>. 
</v-click>

<v-click>
<span v-mark.highlight.yellow="8">很多同学都犯这个错误。</span>
</v-click>

<v-click at='9'>

**错误原因：**
</v-click>

<span v-click='12'>$\displaystyle \frac{\mathrm{d}^2y}{\mathrm{d}x^2}$</span>
<span v-click='13'>$\displaystyle =\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)}{\mathrm{d}x}$</span>
<span v-click='14'>${\color{red}\neq}$</span>
<span v-click='11'>$\displaystyle \frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)}{\mathrm{d}t}=$</span>
<span v-click='10'>$(2t)'=2$.</span>

<v-click at='15'>
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}=\frac{(2t)'_t}{(\arctan t)'_t}=2(1+t^2).
$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**参数式函数的高阶导数**

<v-click at='1'>

实际上，参数式函数的<mark>一阶导函数仍是参数式函数</mark>，其完整形式如下：
$$
\begin{cases}
x=x(t),\\
\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'_t}{x'_t}.
\end{cases}
$$
</v-click>

<v-click at='2'>

可以看成是复合函数：$\displaystyle x\mapsto t \mapsto \frac{\mathrm{d}y}{\mathrm{d}x}$.
</v-click>

<v-click at='3'>

因此，求二阶导数的方法和求一阶导数的方法一样：
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)}{\mathrm{d}x}=\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}.
$$
</v-click>

::right::

<v-click at='4'>

依次类推，参数式函数的<mark>二阶导函数也仍是参数式函数</mark>。
</v-click>

<v-click at='5'>

$$
\frac{\mathrm{d}^3y}{\mathrm{d}x^3}=\frac{\mathrm{d}\left(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right)}{\mathrm{d}x}=\frac{\mathrm{d}\left(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right)/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}.
$$
</v-click>

<v-click at='6'>

其它高阶导数求解方法类似。
</v-click>

---

**例 2** 计算摆线：$\begin{cases} x=a(t-\sin t), \\ y=a(1-\cos t)\end{cases}$ 的二阶导数。

<v-click>

**解：**
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}=\frac{a\sin t}{a(1-\cos t)}=\frac{\sin t}{1-\cos t}\quad (t\neq 2k\pi,k\in \Z).
$$
</v-click>

<v-click>

$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)}{\mathrm{d}x}=\frac{\mathrm{d}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)/\color{red}\mathrm{d}t}{\mathrm{d}x/\color{red}\mathrm{d}t}=\frac{\left(\frac{\sin t}{1-\cos t}\right)'_t}{\left(a(t-\sin t)\right)'_t}=-\frac{1}{a(1-\cos t)^2}\quad (t\neq 2k\pi,k\in \Z).
$$
</v-click>

---

**例 3** 求椭圆曲线的参数方程 $\begin{cases} x=a\cos t, \\ y=b\sin t\end{cases}$ 在 $\displaystyle t=\frac{\pi}{4}$ 相应点处的切线方程。

<v-click>

**解：** 当 $\displaystyle t=\frac{\pi}{4}$ 时，椭圆上相应点 $M_0$ 的坐标为 
$
\begin{cases} 
\displaystyle x_0=a\cos \frac{\pi}{4}=\frac{\sqrt{2}a}{2}, \\
\displaystyle y_0=b\sin \frac{\pi}{4}=\frac{\sqrt{2}b}{2}.
\end{cases}
$
</v-click>

<v-click>

导函数为
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y/\mathrm{d}t}{\mathrm{d}x/\mathrm{d}t}=\frac{b\cos t}{-a\sin t}=-\frac{b}{a}\cot t.$$

</v-click>

<v-click>

曲线在点 $M_0$ 的切线斜率：$\displaystyle\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=\frac{\pi}{4}}=-\frac{b}{a}$.

</v-click>

<v-click>

在 $M_0$ 处的切线方程：$\displaystyle y-\frac{\sqrt{2}b}{2}=-\frac{b}{a}(x-\frac{\sqrt{2}a}{2})$，即 $bx+ay-\sqrt{2}ab=0$.
</v-click>

---
layout: center
---

## 2.5.微分

**目的**：<span v-mark.box.orange='1'>函数的增量 $\Delta y$</span> 与 <span v-mark.box.orange='1'>自变量的增量 $\Delta x$</span> 的关系。

<span v-click='2'>什么一元函数的 $\Delta y$ 与 $\Delta x$ 最简捷？</span><span v-click='3' v-mark.highlight.yellow='3'>直线</span>

<v-click at='4'>

直线 $y=Ax+b$，则 <span v-mark.highlight.yellow='4'>$\Delta y=A\Delta x$（比例关系）</span>。
</v-click>

<v-click at='5'>

希望其它的函数也能（在<span v-mark.box.red='6'>局部</span>范围）
<span v-mark.highlight.yellow='6'>“当成直线来用”</span>。
</v-click>

<div text-center v-click='7'>

曲线 <mark>$\approx$</mark> 直线
</div>

<div text-center v-click='8'>

$\iff$ $\Delta y$ <mark>$\approx$</mark> $A\Delta x$
</div>

<div text-center v-click='9'>

$\iff$ $\Delta y=A\Delta x+o(\Delta x)$
</div>

<v-click at='10'>

满足上式，称为可微。
</v-click>

<v-click at='11'>

通俗来说，在局部范围内能 <span v-mark.highlight.yellow='11'>“当成直线来用”</span>，称为可微。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**定义** 若函数的增量 $\Delta y=f(x_0+\Delta x)-f(x_0)$ 可以表示为
<div text-center v-mark.box.yellow='1'>

<span>$\Delta y=$</span> <span v-mark.highlight.yellow='2'>$A\Delta x$</span> $+o(\Delta x),$
</div>

其中 $A$ 是不依赖于 $\Delta x$ 常数，则称函数 $y=f(x)$ 在点 $x_0$ 处<span v-mark.box.yellow='1'>**可微**</span>，并称 <span v-mark.highlight.yellow='2'>$A\Delta x$</span> 为函数 $y=f(x)$ 在点 $x_0$ 处的<span v-mark.highlight.yellow='2'>**微分**</span>，记为 $\mathrm{d}y$ 或 $\mathrm{d}f(x)$，即
$$\mathrm{d}y=A\Delta x.$$

::right::

<span v-click='3'>**微分 $\mathrm{d}y$ 的基本性质：**</span>

<v-clicks at='4'>

- $\mathrm{d}y$ 是 $\Delta x$ 的**线性函数**（与自变量的增量 $\Delta x$ 呈比例关系）；
- 当 $|\Delta x|$ 很小时，<mark>$\Delta y \approx \mathrm{d}y$</mark>；
- 当 $A\neq 0$，<mark>$\Delta y \sim \mathrm{d}y\,(\Delta x\to 0)$</mark>;
- 微分 $\mathrm{d}y$ 称为 $\Delta y$ 的**线性主部**。
</v-clicks>

---
layout: two-cols
layoutClass: gap-10
---

**定理** 函数 $y=f(x)$ 在点 $x$ 处，
<span v-mark.highlight.yellow='1'>可微 $\iff$ 可导</span>，

且 $\color{blue}\mathrm{d}y=\mathrm{d}f(x)=f'(x)\Delta x$.

<span v-click='2'>**证：**</span>

$${hide|1|1-2|1-3|1-4|1-5}{at:2}
\begin{align*}
&\text{函数} f(x) \text{在} x=x_0 \text{处可微}\\
\iff & \Delta y=A\Delta x + o(\Delta x) \\
\iff & \frac{\Delta y}{\Delta x}=A + \frac{o(\Delta x)}{\Delta x}\\
\iff & \lim_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0}\left(A + \frac{o(\Delta x)}{\Delta x}\right)\\
\iff &f'(x_0)=A.
\end{align*}
$$

::right::

<Admonition title='自变量的微分' admonitionType='warning' v-click='7'>

通常约定**自变量 $x$ 的增量 $\Delta x$** 称为**自变量的微分**，记为 $\mathrm{d}x$，即

<div text-center>

<span v-mark.highlight.yellow='8'>$\Delta x=\mathrm{d}x$</span>

<span v-mark.highlight.yellow='8'>自变量的增量$=$自变量的微分</span>
</div>
</Admonition>

<v-click at='9'>

于是 
$$\fcolorbox{red}{yellow}{$\mathrm{d}y=\mathrm{d}f(x)=f'(x)\,\mathrm{d}x$}$$
</v-click>

<v-click at='10'>

也就有 
$$f'(x)=\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}f(x)}{\mathrm{d}x}.$$
</v-click>

---

<Admonition title='可微、可导、连续、极限存在的关系' admonitionType='info'>

可微 $\iff$ 可导 $\Rightarrow$ 连续 $\Rightarrow$ 极限存在
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='如何求函数的微分？' admonitionType='warning' >

<v-click at='1'>

**方法一：**
$$\fcolorbox{red}{yellow}{$\mathrm{d}y=\mathrm{d}f(x)=f'(x)\,\mathrm{d}x$}$$
这意味着，**会求导数，就会求微分**。
</v-click>

<v-click at='2'>

**方法二：利用微分运算**
- 基本的四则运算
- 微分形式不变性（复合函数的微分法则）
  $\mathrm{d}f[{\color{red}g(x)}]=f'[{\color{red}g(x)}]\,\mathrm{d}{\color{red}g(x)}$
</v-click>
</Admonition>

::right::

<v-click at='3'>

**求具体点的微分**

**例 1** 求 $y=x^2$ 在 $x=1$ 处的微分。
</v-click>

<v-click at='4'>

**解：** 因为 $\mathrm{d}y=(x^2)'\,\mathrm{d}x=2x\,\mathrm{d}x$，所以
$$\left.\mathrm{d}y\right|_{x=1}=\left.2x\right|_{x=1}\,\mathrm{d}x=2\,\mathrm{d}x.$$

</v-click>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='微分的四则运算' admonitionType='info' >

$$
\begin{align*}
\mathrm{d}(u\pm v)&=\mathrm{d}u\pm \mathrm{d}v,\\
\mathrm{d}(uv)&=v\,\mathrm{d}u+u\,\mathrm{d}v,\\
\mathrm{d}\left(\frac{u}{v}\right)&=\frac{v\,\mathrm{d}u-u\,\mathrm{d}v}{v^2},\\
\mathrm{d}(Cu)&=C\,\mathrm{d}u\,(C \text{是常数}).
\end{align*}
$$
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**复合函数的微分**

设函数可微，且复合关系：$x \xmapsto{g} u \xmapsto{f} y$，即 $u=g(x)$，$y=f(u)=f[g(x)]$，则

<div text-center v-click='1'>

$\mathrm{d}y=$
<span v-mark.box.blue='2'>$\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x}\,\mathrm{d}x$</span>$\displaystyle=\frac{\mathrm{d}y}{\mathrm{d}u}\frac{\mathrm{d}u}{\mathrm{d}x}\,\mathrm{d}x=$
<span v-mark.box.blue='2'>$\displaystyle \frac{\mathrm{d}y}{\mathrm{d}u}\,\mathrm{d}u$</span>.
</div>

<Admonition title='微分形式不变性' admonitionType='info' v-click='3'>

无论 $\color{red}{\blacksquare}$ 是自变量还是中间变量，微分都是

$$\mathrm{d}y=\frac{\mathrm{d}y}{\mathrm{d}\color{red}{\blacksquare}}\,\mathrm{d}\color{red}{\blacksquare}$$

求复合函数的微分：<span v-mark.box.red='4'>由外向内，逐层微分。</span>
<div text-center v-click='5'>

$\mathrm{d}f[{\color{red}g(x)}]=f'[{\color{red}g(x)}]\,\mathrm{d}{\color{red}g(x)}$
</div>
</Admonition>

::right::

<v-click at='6'>

**例 2** 设 $\displaystyle y=\ln\tan\frac{x}{2}$，求 $\mathrm{d}y$.
</v-click>

<v-click at='7'>

解：$\displaystyle x \mapsto {\color{orange}\frac{x}{2}} \mapsto {\color{blue}\tan {\color{orange}\frac{x}{2}}} \mapsto \ln{\color{blue}\tan\frac{x}{2}}$
</v-click>

$$ {hide|1|1-2|1-3}{at:8}
\begin{align*}
&\mathrm{d}\left(\ln {\color{blue}\tan \frac{x}{2}}\right)
=\frac{1}{\color{blue}\tan \frac{x}{2}}\,\mathrm{d}\left({\color{blue}\tan {\color{orange}\frac{x}{2}}}\right)\\
=&\frac{1}{\tan \frac{x}{2}}\sec^2\left({\color{orange}\frac{x}{2}}\right)\,\mathrm{d}\left({\color{orange}\frac{x}{2}}\right)\\
=&\frac{1}{\tan \frac{x}{2}}\sec^2\left(\frac{x}{2}\right)\frac{1}{2}\,\mathrm{d}x
=\frac{1}{\sin x}\,\mathrm{d}x.
\end{align*}
$$
<hr>
$$ {hide|1|1-2|1-3}{at:8}
\begin{align*}
&\left(\ln {\color{blue}\tan \frac{x}{2}}\right)'
=\frac{1}{\color{blue}\tan \frac{x}{2}}\cdot\left({\color{blue}\tan {\color{orange}\frac{x}{2}}}\right)'\\
=&\frac{1}{\tan \frac{x}{2}}\cdot\sec^2\left({\color{orange}\frac{x}{2}}\right)\cdot\left({\color{orange}\frac{x}{2}}\right)'\\
=&\frac{1}{\tan \frac{x}{2}}\cdot\sec^2\left(\frac{x}{2}\right)\cdot\frac{1}{2}
=\frac{1}{\sin x}.
\end{align*}
$$

---

**例 3** 设 $y=5^{2x+1}\arctan(3x)$，求 $\mathrm{d}y$.

<v-click at='1'>

**解：**

$${hide|1|1-2|1-3|1-4|1-5}{at:1}
\begin{align*}
\mathrm{d}y=&\mathrm{d}\left(5^{2x+1}\arctan(3x)\right)\\
  =&\arctan(3x)\,\mathrm{d}(5^{2x+1})+5^{2x+1}\,\mathrm{d}(\arctan(3x))\\
  =&\arctan(3x)5^{2x+1}\ln 5\,\mathrm{d}(2x+1)+5^{2x+1}\frac{1}{1+(3x)^2}\,\mathrm{d}(3x)\\
  =&\arctan(3x)5^{2x+1}\ln 5 \cdot 2\,\mathrm{d}x+5^{2x+1}\frac{1}{1+(3x)^2}\cdot 3\,\mathrm{d}x\\
  =&5^{2x+1}\left(2 \ln 5 \arctan(3x)+\frac{3}{1+(3x)^2}\right)\,\mathrm{d}x
\end{align*}
$$
</v-click>

---

**微分的几何意义**

微分 $=$ <span v-mark.box.red='1'>曲线的切线上纵坐标的增量</span>。

(*补充：微分几何意义图形演示*)

---

**可微的本质：局部线性近似**

---

**凑微分**

**例** 将适当的函数填入下列括号内，使得等式成立：

|                                             |                                                    |
| ------------------------------------------- | -------------------------------------------------- |
| $\mathrm{d}(\qquad)=(2x+1)\,\mathrm{d}x$      | $\displaystyle \mathrm{d}(\qquad)=\frac{1}{\sqrt{x}}\,\mathrm{d}x$ |
| $\displaystyle \mathrm{d}(\qquad)=\frac{1}{x}\,\mathrm{d}x$ | $\mathrm{d}(\qquad)=\mathrm{e}^{-2x}\,\mathrm{d}x$   |
| $\mathrm{d}(\qquad)=\sin 2t\,\mathrm{d}t$     | $\displaystyle \mathrm{d}(\qquad)=\frac{1}{\cos^2 x}\,\mathrm{d}x$ |
