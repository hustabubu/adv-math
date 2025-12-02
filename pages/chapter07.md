
# 7.微分方程

<Toc columns="2" minDepth="2" maxDepth="3" mode="onlyCurrentTree"></Toc>

---
layout: two-cols
layoutClass: gap-10
transition: fade-out
---

## 7.1.什么是微分方程？

<v-click at='1'>

含有<span v-mark.orange="[3,4]">未知函数及其导数</span>的方程叫做**微分方程**。
</v-click>

<v-click at='4'>

- 微分方程的**阶**：方程中未知函数<span v-mark.circle.orange="[4,5]">导数的最高阶数</span>。
</v-click>

<v-click at='7'>

- **解**：函数代入方程使得等式<span v-mark.circle.orange="[8,9]">恒</span>成立（$\forall x \in I$），则此函数称为微分方程的解。
</v-click>

<v-click at='9'>

- **通解**：解中含有<span v-mark="{ at: 10, color: 'yellow', type: 'highlight', multiline: true }"><span v-mark.circle.red="10">独立</span>任意常数的个数$=$微分方程的阶数。</span>
</v-click>

<v-click at='11'>

- **定解条件**：确定解中任意常数的条件。特别的，当定解条件是初始值时，称为**初始条件**。
</v-click>

<v-click at='14'>
> 通常的，几阶的微分方程就需要几个定解条件。
</v-click>

<v-click at='15'>

- **特解**：<span v-mark="{ at: 15, color: 'yellow', type: 'highlight', multiline: true }">不含任意常数</span>的解。
</v-click>

<!-- <v-click at='16'>
下面几个函数分别是方程的什么解？

$s=-0.2t^2+t$ <span v-click='17'>特解</span>
$s=-0.2t^2+C_1t$ <span v-click='17'>解，但非通解也非特解</span>
$s=-0.2t^2+C_1t+2C_1$ <span v-click='17'>解，但非通解也非特解</span>
</v-click> -->

<div v-click='16'>
  下面几个函数分别是方程 (1) 的什么解？
  <br>
  <Akatex :inline='true' content='$s=-0.2t^2+t$'/>  <span v-click='17'>  特解</span>
  <br>
  <Akatex :inline='true' content='$s=-0.2t^2+C_1t$'/> <span v-click='17'>  解，但非通解也非特解</span>
  <br>
  <Akatex :inline='true' content='$s=-0.2t^2+C_1t+2C_1$'/> <span v-click='17'>  解，但非通解也非特解</span>
</div>

::right::

<v-click at='2'>

  **例**：列车沿直线以 <span v-mark.circle.orange="[11,15]">$20\,\mathrm{m/s}$</span> 的速度行驶，当制动时列车获得加速度 <span v-mark.circle.orange="[11,15]">$-0.4\,\mathrm{m/s^2}$</span>，求列车制动运动的规律。
</v-click>

<v-click at='3'>

  **解**：设列车在开始制动后 $t\,\mathrm{s}$ 时行驶了 $s\,\mathrm{m}$，则列车制动运动的规律函数 $s=s(t)$ 满足
  $$\frac{\mathrm{d}^2s}{\mathrm{d}t^2}=-0.4.\tag{1}$$
</v-click>

<v-click at='5'>

  积分一次，得 $\displaystyle\frac{\mathrm{d}s}{\mathrm{d}t}=-0.4t+C_1$，
</v-click>

<v-click at='6'>

再积分一次，得 <span v-mark.circle.orange="[9,11]">$s=-0.2t^2+C_1t+C_2$，</span>
</v-click>

<v-click at='11'>

把 <span v-mark.circle.orange="[11,15]">$s(0)=0$</span>，<span v-mark.circle.orange="[11,15]">$s'(0)=20$</span> 代入方程的解，
</v-click>

<v-click at='12'>

求得 $C_1=20$，$C_2=0$，
</v-click>

<v-click at='13'>

所以 <span v-mark.circle.orange="[15,16]">$s=-0.2t^2+20t$</span>。
</v-click>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
level: 4
---

**通解一定是方程的全部解吗？**

<v-click>
否！

例如方程：$(x-y)y'=0$ 的解：
$$y=x \quad\text{及} \quad y=C.$$
$y=C$ 是通解，但不包含解 $y=x$。
</v-click>

<Admonition title='没必要做没有意义的咬文嚼字！' admonitionType='warning' v-click/>

---

## 一阶微分方程

- <span @click="$slidev.nav.go(6)" class="px-2 py-1 rounded cursor-pointer" hover="bg-blue bg-opacity-10"> 可分离变量微分方程 </span>
  $$\frac{\mathrm{d}y}{\mathrm{d}x}=f_1(x)f_2(y)$$
- <span @click="$slidev.nav.go(8)" class="px-2 py-1 rounded cursor-pointer" hover="bg-blue bg-opacity-10"> 齐次微分方程 </span>
  $$\frac{\mathrm{d}y}{\mathrm{d}x}=f\left(\frac{y}{x}\right)$$
- <span @click="$slidev.nav.go(10)" class="px-2 py-1 rounded cursor-pointer" hover="bg-blue bg-opacity-10"> 一阶线性微分方程 </span>
  $$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x)$$

---
level: 3
layout: two-cols
layoutClass: gap-10
---

### 7.2.可分离变量方程

$$\frac{\mathrm{d}y}{\mathrm{d}x}=f_1(x)f_2(y)$$
<v-click>

1. **分离变量**，得
$$g(y)\mathrm{d}y=f(x)\mathrm{d}x\tag{1}$$
</v-click>

<v-click>

2. 等式两边**积分**，得
$$\int g(y)\mathrm{d}y=\int f(x)\mathrm{d}x\tag{2}$$
</v-click>

::right::
<v-click>

实际上是等式两边对（相同）变量 $x$ 积分，因为：

若 $y=\psi(x)$ 是方程的解，则 (1)式实际上是
$$g[\psi(x)]\mathrm{d}[\psi(x)]=f(x)\mathrm{d}x$$
等式两边对变量 $x$ 积分，得
$$\int g[\psi(x)]\mathrm{d}[\psi(x)]=\int f(x)\mathrm{d}x$$
也就是等式 (2)。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例2** 求解微分方程 $\frac{\mathrm{d}y}{\mathrm{d}x}=2xy$.

**解**：分离变量，得 $\displaystyle\frac{\mathrm{d}y}{y}=2x\mathrm{d}x \,(y\neq 0)$,

两边积分：$\displaystyle\int\frac{\mathrm{d}y}{y}=\int 2x\mathrm{d}x$

得  $\displaystyle\ln|y|=x^2+C_1$，

从而 $\displaystyle y=\pm\mathrm{e}^{x^2+C_1}=\pm\mathrm{e}^{C_1}\mathrm{e}^{x^2}.$

令 $C=\pm\mathrm{e}^{C_1}$，得
$$y=C\mathrm{e}^{x^2}.$$
<v-click at='2'>

因为 $y=0$ 是方程的特解，于是所求方程的通解为 
$$y=C\mathrm{e}^{x^2}.$$
</v-click>

::right::

<arrow x1="500" y1="90" x2="390" y2="115" color="#953" width="2" arrowSize="1" v-click='[1,4]'/>

<Admonition title='不是同解变形,可能导致“丢失”或“多出”解' admonitionType='warning' v-click='[1,4]'>

可能会丢失解 $y=0$，可能需要补充说明！
</Admonition>

<arrow x1="500" y1="135" x2="310" y2="440" color="#953" width="2" arrowSize="1" v-click='[2,4]'/>

<Admonition title='$y=0$ 不是一个数' admonitionType='error' v-click='[3,4]'>

是函数 $y\equiv0$
</Admonition>

<arrow x1="300" y1="190" x2="500" y2="290" color="#953" width="2" arrowSize="1" v-click='4'/>
<div v-mark.box.orange="4"  v-click='4'>

$$\ln|y|=x^2+\ln|C|,$$
</div>
<arrow x1="500" y1="300" x2="320" y2="450" color="#953" width="2" arrowSize="1"  v-click='5'/>

---
level: 3
layout: two-cols
layoutClass: gap-10
---

### 7.3.齐次方程

$$\frac{\mathrm{d}y}{\mathrm{d}x}=f\left(\frac{y}{x}\right)$$

<span v-click='1'>换元 $\displaystyle u=\frac{y}{x}$，</span> <span v-click='3'>则 $y=xu$，$\displaystyle\frac{\mathrm{d}y}{\mathrm{d}x}=u+x\frac{\mathrm{d}u}{\mathrm{d}x}$，</span> <span v-click='4'>代入方程，得</span>
<v-click at='4'>

$$u+x\frac{\mathrm{d}u}{\mathrm{d}x}=f(u),$$
</v-click>

<v-click at='5'>分离变量，得

$$\frac{\mathrm{d}u}{f(u)-u}=\frac{\mathrm{d}x}{x}\quad (f(u)-u\neq 0),$$
</v-click>

<v-click at='6'>积分

$$\int\frac{\mathrm{d}u}{f(u)-u}=\int\frac{\mathrm{d}x}{x}.$$
</v-click>

::right::

<v-click at='7'>

再回代 $\displaystyle u=\frac{y}{x}$，得到通解。
</v-click>

<Admonition title='变量结构' admonitionType='attention' v-click='2'>
<div>

原来：<span ml-10> $x\to y$ </span>

换元后：<span ml-5>$x\to u$</span>

<span ml-22>自 $\to$ 因</span>
</div>

实际上把因变量 $y$ 换成了 $u$，而 $x$ 仍是自变量。
</Admonition>

<arrow x1="510" y1="370" x2="420" y2="370" color="#953" width="2" arrowSize="1" v-click='8'/>

<Admonition title='可能丢失解' admonitionType='info' v-click='8'>

$f(u)=u$，即 $\displaystyle f\left(\frac{y}{x}\right)=\frac{y}{x}$.
</Admonition>

---

**例 2** 解微分方程 $\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y}{x}+\tan\frac{y}{x}$。
<v-click>

**解**：令 $u=\frac{y}{x}$，则 $y'=u+xu'$，代入方程，得
$$u+xu'=u+\tan u,$$
</v-click>
<v-click>

分离变量
$$\frac{\cos u}{\sin u}\mathrm{d}u=\frac{\mathrm{d}x}{x},$$
</v-click>
<v-click>

两边积分
$$\ln|\sin u|=\ln|x|+\ln|C|,$$
</v-click>
<v-click>

回代
$$\sin \frac{y}{x}=Cx.$$
（$\sin u=0$，即 $\sin\left(\frac{y}{x}\right)=0$ 也是方程的解，此时取 $C=0$）
</v-click>

---
level: 3
---

### 7.4.一阶线性微分方程

<div class="grid grid-cols-[400px_1fr] gap-10">
  <div >

  齐次：<span ml-20>$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=0$,</span>

  非齐次：<span ml-15>$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x)$，</span>

  其中，$Q(x)\not\equiv 0$ 为非齐次项。
  </div>
<div>
<Admonition title='注意' admonitionType='error' v-click='2'>

1. 想要套公式，就先得把方程标准化；
2. 公式中所有的不定积分结果都不需要带上任意常数 $C$，因为最终都可以合并到通解公式中的 $C$。
</Admonition>
</div>
</div>

<Admonition title='通解公式' admonitionType='warning' v-click='1'>

齐次：<span ml-20>$y=C\mathrm{e}^{-\int P(x)\mathrm{d}x}$</span>

非齐次：<span ml-15>$y=\mathrm{e}^{-\int P(x)\mathrm{d}x}\left[C+\int Q(x)\mathrm{e}^{\int P(x)\mathrm{d}x}\mathrm{d}x\right]$</span>
</Admonition>

---
level: 4
---

#### 一阶线性齐次方程的公式的推导

$$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=0.$$

<v-click>

分离变量，得
$$\frac{\mathrm{d}y}{y}=-P(x)\mathrm{d}x,$$
</v-click>
<v-click>

两边积分，得
$$\ln|y|=-\int P(x)\mathrm{d}x+\ln|C|,$$
</v-click>
<v-click>

故通解为
$$y=C\mathrm{e}^{-\int P(x)\mathrm{d}x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
level: 4
---

#### 一阶线性非齐次方程的公式的推导

$$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x).$$

<v-click at='1'>

写得简单些 $y'+Py=Q.$
</v-click>

<v-click at='2'>

等式两边同乘以 $u(x)$，得 
$$y'u+yPu=Qu.\tag{1}$$
</v-click>

<v-click at='3'>

希望上式左侧 
$$y'u+yPu=(yu)'=y'u+yu',$$
</v-click>

<v-click at='4'>

即需要 $Pu=u'$
<v-click>

</v-click at='5'>

$$u=C\mathrm{e}^{\int P\mathrm{d}x}.$$
</v-click>

::right::

<v-click at='6'>

把 $u$ 代入方程 (1)，得
$$\left(y\mathrm{e}^{\int P\mathrm{d}x}\right)'=Q\mathrm{e}^{\int P\mathrm{d}x}$$
</v-click>

<v-click at='7'>

对变量 $x$ 积分，得
$$y\mathrm{e}^{\int P\mathrm{d}x}=C+\int Q\mathrm{e}^{\int P\mathrm{d}x}\mathrm{d}x$$
</v-click>

<v-click  at='8'>

所以
$$y=\mathrm{e}^{-\int P(x)\mathrm{d}x}\left[C+\int Q(x)\mathrm{e}^{\int P(x)\mathrm{d}x}\mathrm{d}x\right]$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 3** 解方程
$$
(x+1)y'=2y+(x+1)^{\frac{7}{2}}.
$$

<v-click>

**解**：整理<span v-mark.circle.orange="1">（“标准化”）</span>得
$$
\frac{\mathrm{d}y}{\mathrm{d}x}-\frac{2y}{x+1}=(x+1)^{\frac{5}{2}}.
$$
</v-click>

<v-click>

$P(x)=-\frac{2}{x+1}$，$Q(x)=(x+1)^{\frac{5}{2}}$，代入通解公式，得
</v-click>

$${hide|1|1-2|all}
\begin{align*}
y&=\mathrm{e}^{-\int (-\frac{2}{x+1})\mathrm{d}x}\left[C+\int (x+1)^{\frac{5}{2}}\mathrm{e}^{\int (-\frac{2}{x+1})\mathrm{d}x}\mathrm{d}x\right]\\
&=(x+1)^2\left[C+\int (x+1)^{\frac{5}{2}}\cdot(x+1)^{-2}\mathrm{d}x\right]\\
&=(x+1)^2\left[C+\frac{2}{3}(x+1)^{\frac{3}{2}}\right].
\end{align*}
$$

::right::

<Admonition title='注意' admonitionType='warning' v-click='1'>

1. 整理方程，看是属于什么类型的一阶方程？
2. 想要套公式，得把方程标准化。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例 4** 解方程 
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y}{y^2-x}.
$$

<v-click>

**解**：整理得
$$
\frac{\mathrm{d}x}{\mathrm{d}y}+\frac{1}{y}x=y.
$$

$P(y)=\frac{1}{y}$，$Q(y)=y$，代入通解公式，得
</v-click>

$${hide|1|1-2|all}
\begin{align*}
x&=\mathrm{e}^{-\int\frac{1}{y}\mathrm{d}y}\left[C+\int y\mathrm{e}^{\int\frac{1}{y}\mathrm{d}y}\mathrm{d}y\right]\\
&=\frac{1}{y}\left[C+\int y\cdot y\mathrm{d}y\right]\\
&=\frac{1}{y}\left(C+\frac{y^3}{3}\right).
\end{align*}
$$

<v-click>

或 $3xy=y^3+C$.
</v-click>

::right::

<Admonition title='注意' admonitionType='warning' v-click='1'>

可以考虑自变量与因变量的地位互换一下。
</Admonition>

---
level: 2
---

## 7.5.可降阶微分方程

- $y^{(n)}=f(x)$

- 不显含因变量 $y$

- 不显含自变量 $x$

---
level: 3
layout: two-cols
layoutClass: gap-10
---

### 7.5.1.$y^{(n)}=f(x)$
<v-click>

等式两边对变量 $x$ 积分，得
$$y^{(n-1)}=\int f(x)\mathrm{d}x+C_1$$
</v-click>

<v-click>

继续等式两边对变量 $x$ 积分，得
$$y^{(n-2)}=\int\left[\int f(x)\mathrm{d}x+C_1\right]\mathrm{d}x+C_2$$
</v-click>

<v-click>
依此继续积分，逐步降阶。
</v-click>

::right::
<v-click>

**问**：请问如下求解过程有何问题？
$$y'=y,$$
等式两边对变量 $x$ 积分，得
$$y=\int y\mathrm{d}x=y\int \mathrm{d}x=y(x+C).$$
</v-click>
<Admonition title='错误' admonitionType='error' v-click='5'>

方程的 <span v-mark.orange="6">$y$ 中隐含 $x$</span>，实际上，上式积分应该是
$$y=\int y(x)\mathrm{d}x.$$ 
这意味着直接积分的办法必须要求等式另外一边不能含有未知函数，否则处理不了。
</Admonition>

---
level: 3
layout: two-cols
layoutClass: gap-10
---

### 7.5.2.不显含因变量 $y$
$f(x,y',y'')=0$
<div class="text-sm" v-click='4'>

|               | $x$ $\to$  <span v-mark.crossed-off.green="5">$y$</span> $\to$ <span v-mark.circle.orange="6"> $y'$ </span> $\to$ $y''$ |
| :-----------: | :---------------------------------------------------------------------------------------------------------------------- |
| 二阶方程变量: | 自 $\to$ <span v-mark.crossed-off.green="5">因</span> $\to$ 因$'$ $\to$ 因$''$                                          |

</div>
<div class="text-sm" v-click='6'>

| <span v-mark.highlight.yellow="6">换元 $y'=p(x)$</span> | $x$ $\to$ <span v-mark.circle.orange="6"> $p$ </span> $\to$ $p'$                                 |
| :-----------------------------------------------------: | :----------------------------------------------------------------------------------------------- |
|                     换元后方程变量:                     | <span v-mark.box.orange="7">自 $\to$ <span v-mark.circle.orange="6">因</span> $\to$ 因$'$</span> |
</div>
<arrow x1="380" y1="290" x2="600" y2="190" color="#953" width="2" arrowSize="1" v-click='7'/>

<v-click at='8'>

从而降阶为一阶方程：$f(x,p,p')=0$，
</v-click>

<v-click at='9'>

解出 $p=\varphi(x,C_1)$,
</v-click>

<v-click at='10'>

这是一个一阶微分方程 $y'=p=\varphi(x,C_1)$
</v-click>

<v-click at='11'>

再解出，从而得到最终的通解。
</v-click>

::right::

<v-click at='1'>

**思考**：怎么操作才能使方程降阶？
</v-click>

<div class="text-sm" v-click='2'>

|       |                                                            |
| :---: | :--------------------------------------------------------- |
| 一阶: | $x \to  y \to y'$                                          |
|       | <span v-mark.box.orange="7">自 $\to$ 因 $\to$ 因$'$</span> |
| 二阶: | $x \to  y \to y' \to y''$                                  |
|       | 自 $\to$ 因 $\to$ 因$'$ $\to$ 因$''$                       |
</div>

<Admonition title='关键' admonitionType='error' v-click='3'>

高阶方程变量结构 $\xRightarrow{\text{换元}}$ 低阶方程变量结构
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

**例**：求微分方程 $(1+x^2)y''=2xy'$ 满足初始条件 $y(0)=1$，$y'(0)=3$ 的特解。
<v-click>

**分析**：因为 $x\to y' \to y''$ 不显含 $y$，故可通过换元 $y'=p(x)$ 实现降阶。
</v-click>
<v-click>

**解**：令 $y'=p(x)$，则 $y''=p'$，方程降阶为
$$(1+x^2)p'=2xp,$$
</v-click>
<v-click>

即
$$p'-\frac{2x}{1+x^2}p=0,$$
</v-click>
<v-click>

所以
$$p=C_1\mathrm{e}^{-\int\left(-\frac{2x}{1+x^2}\right)\mathrm{d}x}=C_1(1+x^2).$$
</v-click>
<v-click>

代入初始条件 $y'(0)=3$，解得 $C_1=3$.
</v-click>

::right::

<v-click>

所以
$$y'=3(1+x^2).$$
</v-click>
<v-click>

等式两边对 $x$ 积分得
$$y=x^3+3x+C_2,$$
</v-click>
<v-click>

代入初始条件 $y(0)=1$，解得 $C_2=1$.
</v-click>
<v-click>

所以所求特解为
$$y=x^3+3x+1.$$
</v-click>

---
level: 3
layout: two-cols
layoutClass: gap-10
---

### 7.5.3.不显含自变量 $x$

$f(y,y',y'')=0$
<div class="text-sm" v-click='1'>

|               | <span v-mark.crossed-off.green="2">$x$</span> $\to$ $y$ $\to$ <span v-mark.circle.orange="3"> $y'$ </span> $\to$ $y''$ |
| :-----------: | :--------------------------------------------------------------------------------------------------------------------- |
| 二阶方程变量: | <span v-mark.crossed-off.green="2">自</span> $\to$ 因 $\to$ 因$'$ $\to$ 因$''$                                         |

</div>
<div class="text-sm" v-click='3'>

| <span v-mark.highlight.yellow="3">换元 $y'=p(y)$</span> | <span v-mark.circle.red="3">$y$</span> $\to$ <span v-mark.circle.orange="3"> $p$ </span> $\to$ $p'$ |
| :-----------------------------------------------------: | :-------------------------------------------------------------------------------------------------- |
|                     换元后方程变量:                     | <span v-mark.circle.red="3">自</span> $\to$ <span v-mark.circle.orange="3">因</span> $\to$ 因$'$    |
</div>

<v-click at='7'>

降阶为一阶方程：$f(y,p,pp')=0$，
</v-click>

<v-click at='8'>

解出 $p=\varphi(y,C_1)$,
</v-click>

<v-click at='9'>

这是一个一阶微分方程 $y'=p=\varphi(y,C_1)$
</v-click>

<v-click at='10'>

再解出，从而得到最终的通解。
</v-click>

::right::

<v-click at='4'>

**注意**： <span v-mark.crossed-off.red="5">$y''=p'$？</span>
</v-click>

<v-click at='6'>

$y''=\frac{\mathrm{d}(y')}{\mathrm{d}x}=\frac{\mathrm{d}(p(y))}{\mathrm{d}x}=\frac{\mathrm{d}(p(y))}{\mathrm{d}y}\frac{\mathrm{d}y}{\mathrm{d}x}=p'p$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例**：求微分方程 $yy''-y'^2=0$ 的通解。
<v-click>

**分析**：因为 $y\to y' \to y''$ 不显含自变量 $x$，故可通过换元 $y'=p(y)$ 实现降阶。
</v-click>
<v-click>

**解**：令 $y'=p(y)$，则 $y''=pp'$，方程降阶为
$$ypp'-p^2=0,$$
</v-click>
<v-click>

即
$$p(yp'-p)=0,$$
</v-click>
<v-click>

所以 $p=0$ 或 $yp'-p=0$
</v-click>
<v-click>

**情况 1**： $yp'-p=0$，
</v-click>

<v-click>

若 $y\neq 0$，则 $p'-\frac{1}{y}p=0$，故
</v-click>

<v-click>

$$p=C_1\mathrm{e}^{-\int(-\frac{1}{y})\mathrm{d}y}=C_1y.$$
</v-click>

::right::

<v-click>

**情况 2**：$p=0$ 显然是方程的解，且为**情形 1**中 $C_1=0$ 的解。
</v-click>

<v-click>

$$p=C_1y\quad\text{即}\quad y'=C_1y$$
</v-click>

<v-click>

利用齐次线性通解公式，得
$$y=C_2\mathrm{e}^{C_1x}.$$
</v-click>

<v-click>

函数 $y=0$ 显然是方程的特解，且为 $C_2=0$ 情形。
</v-click>
<v-click>

因此，所求方程的通解为：
$$y=C_2\mathrm{e}^{C_1x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

#### 扩展知识：

试利用可降阶微分方程求解的思想，分析可以通过什么换元实现对下列微分方程降阶？

1. $y^{(5)}+y^{(4)}+x=0$,
2. $y''-5y'+6y=\mathrm{e}^x$.

<v-click>

备选换元：
1. $p(x)=y^{(4)}$,
2. $p(x)=y'-2y$ 或 $p(x)=y'-3y$.
</v-click>

---
level: 2
---

## 7.6.线性微分方程解的结构

<Admonition title='目的' admonitionType='info' v-click='1'>

根据<span v-mark.box.orange='2'>解的结构</span>来<span v-mark.orange='2'>求解</span>线性微分方程的<span v-mark.box.orange='2'>解</span>。
</Admonition>

<v-click at='3'>

$n$ 阶线性微分方程：
$$y^{(n)}+a_1(x)y^{(n-1)}+\cdots+a_{n-1}(x)y'+a_n(x)y=f(x)$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**线性代数的知识补充**

<v-click>

1. **线性运算**（加法和数乘）： $l\vec{\alpha}+k\vec{\beta}$.
</v-click>

<v-click>

2. $\vec{\alpha}=k_1\vec{\alpha_1}+k_2\vec{\alpha_2}$ 称为 $\vec{\alpha_1}$，$\vec{\alpha_2}$ 的**线性组合**，也称 $\vec{\alpha}$ 可以用 $\vec{\alpha_1}$，$\vec{\alpha_2}$ **线性表示**。
</v-click>

<v-click>

3. 存在不全为 $0$ 的常数 $k_1,k_2,\dots,k_n$，使
$$k_1\vec{\alpha_1}+k_2\vec{\alpha_2}+\cdots+k_n\vec{\alpha_n}=0,$$
称 $\vec{\alpha_1},\vec{\alpha_2},\dots,\vec{\alpha_n}$ **线性相关**，否则称为**线性无关**。
</v-click>

<v-click>

线性相关实际上是把向量**共线**（共面...）的概念推广到高维空间。
</v-click>

<v-click>
当给函数空间赋予一定的结构，则函数是向量。与向量的各种概念是一样。
</v-click>

::right::

<Admonition title='两个函数的线性相关性的判别' admonitionType='info' v-click='6'>

<span v-mark.box.orange='7'>$\frac{y_1}{y_2}=$ 常数</span> $\Rightarrow$ <span v-mark.box.orange='8'> $y_1,y_2$ 线性相关</span>，

否则线性无关。
</Admonition>

<v-click at='9'>

设 $y_1(x),y_2(x)$ 是定义在区间 $I$ 上的函数，若存在不全为 $0$ 的常数 $k_1,k_2$ 使得 $\forall x \in I$，**恒**有
$$k_1y_1+k_2y_2\equiv0,$$
则称 $y_1,y_2$ 在区间 $I$ 上线性相关，否则线性无关。
</v-click>

<v-click at='10'>

不妨 $k_1\neq 0$，则 $y_1=-\frac{k_2}{k_1}y_2$。

也就是 $\frac{y_1}{y_2}=-\frac{k_2}{k_1}$ （常数）。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

#### 二阶线性微分方程

**齐次**：<span ml-10>$y''+P(x)y'+Q(x)y=0$,</span>

**非齐次**：<span ml-5>$y''+P(x)y'+Q(x)y=f(x)$，</span>

其中 $f(x)\not\equiv 0$ 为非齐次项。

<v-click>

#### 引入一些记号：
1. 微分算子 $D$：$Df(x):=f'(x)$，则有 $D^2f(x)=f''(x)$；
</v-click>

<v-click>

2. 单位算子 $I$：$If(x):=f(x)$；
</v-click>

<v-click>

记 $L=D^2+P(x)D+Q(x)I$，则由求导保持向量的线性运算，知 $L$ 也保持向量的线性运算，即
$$L(k_1f_1+k_2f_2)=k_1Lf_1+k_2Lf_2.$$
</v-click>

::right::

<v-click>
二阶线性微分方程，简记为：

**齐次**：<span ml-10>$Ly=0$,</span>

**非齐次**：<span ml-5>$Ly=f(x)$.</span>
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

### 7.6.1.齐次线性方程解的结构

<Admonition title='目标' v-click='1'>

<span v-mark.circle.orange='2'>二阶</span>方程的<span v-mark.orange='2'>通解</span>：带有 <span v-mark.circle.orange='2'>$2$</span> 个<span v-mark.circle.orange='2'>独立任意常数</span>的解。
</Admonition>

<Admonition title='线性叠加原理 I （齐次）' admonitionType='info' v-click='3'>

$y_1,y_2$ 是方程 $Ly=0$ 的解，则
$$C_1y_1+C_2y_2$$
也是方程 $Ly=0$ 的解。
</Admonition>

<span v-click='4'>**证**：因为 $y_1,y_2$ 是方程 $Ly=0$ 的解，</span> <span v-click='5'>所以</span>
<v-click at='5'>

$$
\begin{align}
  Ly_1=0 \\
  Ly_2=0
\end{align}
$$
</v-click>

::right::

<span v-click='6'>$C_1(1)+C_2(2)$，</span><span v-click='7'>得 $C_1Ly_1+C_2Ly_2=0$，</span> <span v-click='8'>即</span>
<v-click at='8'>

$$L(C_1y_1+C_2y_2)=0$$
</v-click>

<span v-click='9'>所以 $C_1y_1+C_2y_2$ 也是方程 $Ly=0$ 的解。</span>
<hr>

<span v-mark.box.green='10' v-click='10'>$C_1y_1+C_2y_2$ 是通解</span>

<v-click at='11'>

$\Leftarrow$ <span v-mark.box.green='11'>$C_1,C_2$ 相互独立</span> 
</v-click>

<v-click at='12'>

$\Leftarrow$ <span v-mark.box.green='12'>$y_1,y_2$ 线性无关</span> 
</v-click>

<Admonition title='线性叠加原理 II （齐次通解）' admonitionType='info' v-click='13'>

$y_1,y_2$ 是方程 $Ly=0$ 的<span v-mark.box.orange='13'>线性无关解</span>，则
$$C_1y_1+C_2y_2$$
是方程 $Ly=0$ 的通解。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='求 $n$ 阶齐次线性方程的通解的方法' admonitionType='info'>

要求 <span v-mark.circle.orange='1'>$n$ 阶</span>方程的<span v-mark.orange='1'>通解</span>，就需找 <span v-mark.circle.orange='1'>$n$</span> 个<span v-mark.circle.orange='1'>线性无关解</span>，把它们<span v-mark.box.orange='2'>线性组合起来</span>就得到通解。
</Admonition>

::right::

<Admonition title='线性叠加原理 III （齐次、复值解）' admonitionType='info' v-click='3'>

设 $u(x),v(x)$ 是实值函数，

复值函数 $u(x)+iv(x)$ 是方程 $Ly=0$ 的解
$$\Longleftrightarrow$$
$u(x),v(x)$ 都是方程 $Ly=0$ 的解。
</Admonition>

---
layout: two-cols
layoutClass: gap-10
---

### 7.6.2.非齐次线性方程解的结构

<v-click at='1'>

若 $\tilde{y}$ 是所对应的齐次方程 $Ly=0$ 的解，则
$$L\tilde{y}=0\tag{1}$$
</v-click>

<v-click at='3'>

若 $y^*$ 是非齐次方程 $Ly=f(x)$ 的解，则
$$Ly^*=f(x)\tag{2}$$
</v-click>

<v-click at='4'>

$(1)+(2)$ 得 $L(\tilde{y}+y^*)=f(x)$，
</v-click>

<v-click at='5'>

即 $\tilde{y}+y^*$ 是非齐次方程方程 $Ly=f(x)$ 的解。
</v-click>

<hr>

<span v-mark.box.green='7' v-click='7'>想要 $\tilde{y}+y^*$ 是非齐次通解</span>

<v-click at='8'>

$\Leftarrow$ <span v-mark.box.green='8'>则需要 $\tilde{y}+y^*$ 含有两个相互独立的任意常数</span> 
</v-click>

<v-click at='9'>

$\Leftarrow$ <span v-mark.box.green='9'>只需 $\tilde{y}$ 是齐次通解</span> 
</v-click>

<v-click at='10'>

因为齐次通解中含有两个独立的任意常数。
</v-click>

::right::

<Animated v-click='2'/>

<v-click at='6'>

**齐解 $+$ 非齐解 $=$ 非齐解**
</v-click>

<Admonition title='线性叠加原理 IV （非齐次通解）' admonitionType='info' v-click='11'>

$y^*$ 是非齐次方程 $Ly=f(x)$ 的其中一个特解，

$Y$ 是所对应的齐次方程 $Ly=0$ 的通解，则

$Y+y^*$ 是非齐次方程 $Ly=f(x)$ 的通解。
</Admonition>

<Admonition title='齐通解 $+$ 非齐特解 $=$ 非齐通解' admonitionType='warning' v-click='12'/>

---
layout: two-cols
layoutClass: gap-10
---

<Admonition title='线性叠加原理 V （非齐次解）' admonitionType='info'>

$y_1$ 是非齐次方程 $Ly=f_1(x)$ 的解，

$y_2$ 是非齐次方程 $Ly=f_2(x)$ 的解，则
$$y_1+y_2$$
 是非齐次方程 
 $$Ly=f_1(x)+f_2(x)$$
 的解。
</Admonition>

::right::

<v-click at='1'>

$$Ly_1=f_1(x) \tag{1}$$
$$Ly_2=f_2(x) \tag{2}$$

$(1)+(2)$ 得

 $$L(y_1+y_2)=f_1(x)+f_2(x)$$
</v-click>

---

## 7.7.二阶常系数齐次线性微分方程

$$y''+py'+qy=0$$
其中 $p,q$ 是常数。

<v-click at='1'>

**分析**：
一阶常系数齐次线性微分方程

$$y'-py=0$$
其中 $p$ 是常数，通解为 $y=C\mathrm{e}^{px}$
</v-click>

<v-click at='2'>

**规律**：
1. **解一定是 $\mathrm{e}^{px}$ 形式**；
</v-click>

<v-click at='3'>

<kbd>要确定解 $\mathrm{e}^{px}$</kbd> $\Leftrightarrow$ <kbd>要确定 $p$</kbd> $\Leftrightarrow$ <kbd>$p$ 是方程 $r-p=0$ 的解</kbd>
</v-click>

<v-click at='4'>

2. **微分方程 $y'-py=0$ 的解 $\mathrm{e}^{px}$** $\xLeftrightarrow{1-1\text{对应}}p$ **代数方程 $r-p=0$ 的解 $p$**。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**问题**：1. 二阶以上常系数齐次线性微分方程的也**解一定是 $\mathrm{e}^{px}$ 形式**？

<v-click at='1'>
为了方便：

$y'-py=0$ 记为 $(D-pI)y=0$ 或 $Dy=py$,
</v-click>

<v-click at='2'>

$y''+py'+qy=0$ 记为 $(D^2+pD+qI)y=0$.
</v-click>

<v-click at='3'>

为了进一步方便，记 $P(r)=r^2+pr+q$，
</v-click>

<v-click at='4'>

记 $P(D)=D^2+pD+qI$，
</v-click>

<v-click at='5'>

因式分解 $P(r)=(r-r_1)(r-r_2)$，则
$$P(D)=(D-r_1I)(D-r_2I).$$
</v-click>

::right::

<v-click at='6'>

$y''+py'+qy=0$ 化为 
$$(D-r_1I)(D-r_2I)y=0.$$
</v-click>

<v-click at='7'>

换元 $u=(D-r_2I)y$，则上方程化为
$$(D-r_1I)u=0.$$
</v-click>

<span v-click='8'>其通解为 $u=C_1\mathrm{e}^{r_1x}$。</span> <span v-click='9'>因此</span>
<v-click at='9'>

$$(D-r_2I)y=C_1\mathrm{e}^{r_1x}.$$
</v-click>

<v-click at='10'>

所以原方程通解为
$$y=\mathrm{e}^{r_2x}\left[C_2+\int C_1\mathrm{e}^{r_1x}\mathrm{e}^{-r_2x}\mathrm{d}x\right].$$
</v-click>

<v-click at='11'>

若 $r_1\neq r_2$，则整理化简上式，得
$$y=C_1\mathrm{e}^{r_1x}+C_2\mathrm{e}^{r_2x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**问题**：2. 是否也可把**微分方程求解**转化为**代数方程求解**？

<v-click at='1'>

$\mathrm{e}^{rx}$ 是微分方程 $P(D)y=0$ 的解
</v-click>

<v-click at='2'>

$\Longleftrightarrow$ $P(D)\mathrm{e}^{rx}=0$
</v-click>

<v-click at='3'>

$\Longleftrightarrow$ $\mathrm{e}^{rx}P(r)=0$
</v-click>

<v-click at='4'>

$\Longleftrightarrow$ <span v-mark.box.orange="6">$P(r)=0$</span> &nbsp;&nbsp;&nbsp;
<span v-mark.box.orange="6" v-click='6'>特征方程</span>
</v-click>

<v-click at='5'>

$\Longleftrightarrow$ <span v-mark.box.yellow="7">$r$</span> 是代数方程 $P(r)=0$ 的解
</v-click>

<span v-mark.box.yellow="7" v-click='7'>特征根</span> 

::right::

<Admonition title='求 $2$ 阶齐次线性方程的通解的方法' admonitionType='info' v-click='8'>

要求 <span v-mark.circle.orange='9'>$2$ 阶</span>方程的<span v-mark.orange='9'>通解</span>，就需找 <span v-mark.circle.orange='9'>$2$</span> 个<span v-mark.circle.orange='9'>线性无关解</span>，把它们<span v-mark.box.orange='9'>线性组合起来</span>就得到通解。
</Admonition>

---

### 7.7.1.通解公式的推导

**情形 1** 互异实根 $r_1\neq r_2$

<span v-click='1'>$y_1=\mathrm{e}^{r_1x}$，$y_2=\mathrm{e}^{r_2x}$ 是微分方程的两个解，且 $y_1$，$y_2$ 线性无关。</span>

<v-click at='2'>

因为
$$\frac{y_1}{y_2}=\frac{\mathrm{e}^{r_1x}}{\mathrm{e}^{r_1x}}=\mathrm{e}^{(r_1-r_2)x}\quad\text{不是常数，}$$
</v-click>

<v-click at='3'>

故通解为
$$y=C_1\mathrm{e}^{r_1x}+C_2\mathrm{e}^{r_2x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**情形 2** 重根 $r_1=r_2$

<span v-click='1'>$y_1=\mathrm{e}^{r_1x}$ 是方程的一个解，</span> 
<span v-click='2'>需要找到另一个解 $y_2$，且 $y_2$ 与 $y_1$ 线性无关。</span>
<span v-click='3'>故 $y_2/y_1$ 不是常数，也就是 $y_2/y_1=u(x)$，</span>
<span v-click='4'>所以 $y_2$ 一定形如：</span>

<v-click at='4'>

$$y_2=u(x)\mathrm{e}^{r_1x},$$
其中 $u(x)$ 是待定的函数。
</v-click>

<v-click at='5'>

代入方程，整理得
$$u''+(2r_1+p)u'+(r_1^2+pr_1+q)u=0$$
</v-click>

<span v-click='7'>故 $u''=0$，</span>
<span v-click='8'>积分两次得 $u=x$。</span>
<v-click at='9'>

所以通解为
$$y=(C_1+C_2x)\mathrm{e}^{r_1x}$$
</v-click>

::right::

<Admonition title='根与系数关系' v-click='6'>

若 $r_1$，$r_2$ 是方程 $r^2+pr+q=0$ 的根，则
$$\begin{cases}
r_1+r_2=-p \\
r_1r_2=q
\end{cases}$$
</Admonition>

<v-click at='10'>

简要推导：
若 $r_1$，$r_2$ 是方程 $r^2+pr+q=0$ 的根，则
$$0=(r-r_1)(r-r_2)=r^2-(r_1+r_2)r+r_1r_2.$$
故得结论。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**情形 2** 共轭复根 $r_{1,2}=\alpha\pm i\beta$

<span v-click='1'>$y_1=\mathrm{e}^{(\alpha+i\beta)x}$，$y_2=\mathrm{e}^{(\alpha-i\beta)x}$ 是微分方程的两个（共轭的）解，</span>

<span v-click='2'>为后续的使用方便，找出方程实值解。</span>

<v-click at='4'>

根据右侧的叠加原理，得 $\mathrm{e}^{(\alpha+i\beta)}x$ 的 

实部 $\mathrm{e}^{\alpha x}\cos\beta x$ 和 虚部 $\mathrm{e}^{\alpha x}\sin\beta x$

也是方程的解，且线性无关。
</v-click>

<v-click at='4'>

所以通解为
$$y=\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x).$$

</v-click>

::right::

<Admonition title='线性叠加原理 III （齐次、复值解）' admonitionType='info' v-click='3'>

设 $u(x),v(x)$ 是实值函数，

复值函数 $u(x)+iv(x)$ 是方程 $Ly=0$ 的解
$$\Longleftrightarrow$$
$u(x),v(x)$ 都是方程 $Ly=0$ 的解。
</Admonition>

<v-click at='3'>

**方程复值解的实部和虚部也是方程解。**
</v-click>

---

### 7.7.2.通解公式

<br>
<br>

<div class='container'>

| 特征方程 $r^2+pr+q=0$ 的根 $r_1,r_2$ |             微分方程 $y''+py'+qy=0$ 的通解              |
| :----------------------------------: | :-----------------------------------------------------: |
|        互异实根 $r_1\neq r_2$        |      $y=C_1\mathrm{e}^{r_1x}+C_2\mathrm{e}^{r_2x}$      |
|            重根 $r_1=r_2$            |             $y=(C_1+C_2x)\mathrm{e}^{r_1x}$             |
| 共轭复根 $r_{1,2}=\alpha\pm i\beta$ | $y=\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ |
</div>

<style>
.container {
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(255, 165, 0, .3);
  border-radius: .3rem;
  border: 2px solid rgba(255, 165, 0, .5);
}
</style>

---
layout: two-cols
layoutClass: gap-10

**例子**

**例 1** 求 $y''-2y'+3y=0$ 的解。
<v-click at='1'>

**解**：特征方程：$r^2-2r+3=0$，
</v-click>

<span v-click='2'>特征根：$r_1=1$，$r_1=3$，</span>

<span v-click='3'>通解：$y=C_1\mathrm{e}^x+C_2\mathrm{e}^{3x}$.</span>

<v-click at='4'>
<hr>

**例 2** 求 $\frac{\mathrm{d}^2s}{\mathrm{d}t^2}+2\frac{\mathrm{d}s}{\mathrm{d}t}+s=0$ 满足初始条件： $s(0)=4$，$s'(0)=-2$ 的特解。
</v-click>

<v-click at='5'>

**解**：特征方程：$r^2+2r+1=0$，
</v-click>

<span v-click='6'>特征根：$r_1=r_2=-1$</span>

<span v-click='7'>通解：$s=(C_1+C_2t)\mathrm{e}^{-t}$.</span>

<span v-click='8'>求导，得 $s'=(C_2-C_1-C_2t)\mathrm{e}^{-t}$</span>

::right::

<span v-click='9'>将 $s(0)=4$、$s'(0)=-2$ 分别代入通解和其一阶导数中，得 $C_1=4$，$C_2=2$</span>

<span v-click='10'>所求特解为 $s=(4+2t)\mathrm{e}^{-t}$。</span>

<v-click at='11'>
<hr>

**例 3** 求 $y''-4y'+13y=0$ 的解。
</v-click>

<v-click at='12'>

**解**：特征方程：$r^2-4r+13=0$，
</v-click>

<span v-click='13'>特征根：$r_{1,2}=2\pm 3i$，</span>

<span v-click='14'>通解：$y=\mathrm{e}^{2x}(C_1\cos 3x+C_2\sin 3x)$.</span>

---
layout: two-cols
layoutClass: gap-10
---

## 7.8.二阶常系数非齐次线性微分方程

$$y''+py'+qy=f(x)$$

<Admonition title='线性叠加原理 IV （非齐次通解）' admonitionType='info' v-click='1'>

$y^*$ 是非齐次方程 $Ly=f(x)$ 的其中一个特解，

$Y$ 是所对应的齐次方程 $Ly=0$ 的通解，则

$Y+y^*$ 是非齐次方程 $Ly=f(x)$ 的通解。
</Admonition>

<Admonition title='齐通解 $+$ 非齐特解 $=$ 非齐通解' admonitionType='warning' v-click='2'/>

<v-click at='3'>

现在<span v-mark.circle.red='4'>主要问题</span>在于<span v-mark.red='4'>求出</span>方程的其中一个<span v-mark.circle.red='4'>特解</span>
</v-click>

::right::

<Animated v-click='5'/>

<br><br>

<v-click at='6'>
求特解思路：
</v-click>

<v-click at='7'>

**等式两边的 “形状” 一样** 
</v-click>

<v-click at='8'>

$\rightarrow$ 根据“<span v-mark.box.red='8'>成品</span>”，<span v-mark.orange='8'>找</span>“<span v-mark.circle.red='8'>原材料</span>”。 
</v-click>

<v-click at='9'>

$\rightarrow$ 由“形状” 求具体表达式（**待定系数法**）。

</v-click>

---

### 7.8.1常见的非齐次项的“形状”

$$y''+py'+qy=f(x)$$

<v-click at='1'>

1. 指数函数 $\times$ 多项式：
  $$f(x)=\mathrm{e}^{\lambda x}P_m(x)$$
</v-click>

<v-click at='2'>

2. 指数函数 $\times$ 多项式 $\times$ $\sin$（或 $\cos$）：
  $$f(x)=\mathrm{e}^{\lambda x}[P_m(x)\cos\omega x+Q_m(x)\sin\omega x]$$
</v-click>

<v-click at='3'>

其实 <kbd>2</kbd> 可以转化成 <kbd>1</kbd>，
</v-click>

<v-click at='4'>

因为 三角函数 $\xLeftrightarrow{\text{欧拉公式}}$ 指数函数

$$\mathrm{e}^{i\theta}=\cos\theta+i\sin\theta$$
</v-click>

<v-click at='5'>

3. 其它变化的形式：通过适当的叠加、组合转化成 <kbd>1</kbd>
</v-click>

---

### 7.8.2.非齐特解形式的推导

**1. 指数函数 $\times$ 多项式**：
  $$y''+py'+qy=\mathrm{e}^{\lambda x}P_m(x)$$

则非齐次特解一定是形式：指数函数 $\times$ 多项式
$$y^*=\mathrm{e}^{\lambda x}R(x),$$
其中 $R(x)$ 是**待定**的多项式。

分两步解决：
1. 确定多项式 $R(x)$ 的**次幂**，从而得到便于利用的形式；（直接用，记公式）
2. 根据前一步得到的形式，通过**待定系数法**，确定多项式 $R(x)$ 的**系数**。（计算）

将 $y^*=\mathrm{e}^{\lambda x}R(x)$ 代入方程，整理得
$$R''(x)+(2\lambda+p)R'(x)+(\lambda^2+p\lambda+q)R(x)=P_m(x).$$

---
layout: two-cols-header
---

$$R''(x)+(2\lambda+p)R'(x)+(\lambda^2+p\lambda+q)R(x)=P_m(x).$$

::left::

<v-click at='1'>

**情形 1：$\lambda$ 不是特征根（“$0$ 重根”）**

$\lambda^2+p\lambda+q\neq 0$，$R(x)=R_m(x)$

特解形式：<span v-mark.box.orange='1'>$R_m(x)\mathrm{e}^{\lambda x}$</span>
</v-click>

<v-click at='2'>

**情形 2：$\lambda$ 是特征根（单根，“$1$ 重根”）**

$\lambda^2+p\lambda+q=0$，$2\lambda+p\neq 0$，$R(x)=xR_m(x)$

特解形式：<span v-mark.box.orange='2'>$xR_m(x)\mathrm{e}^{\lambda x}$</span>
</v-click>

<v-click at='4'>

**情形 3：$\lambda$ 是特征根（$2$ 重根）**

$\lambda^2+p\lambda+q=0$，$2\lambda+p=0$，$R(x)=x^2R_m(x)$

特解形式：<span v-mark.box.orange>$x^2R_m(x)\mathrm{e}^{\lambda x}$</span>
</v-click>

::right::

<kbd>非齐次项：$f(x)=\mathrm{e}^{\lambda x}P_m(x)$</kbd>
<Admonition title='根与系数关系' v-click='3'>

若 $r_1$，$r_2$ 是方程 $r^2+pr+q=0$ 的根，则
$$\begin{cases}
r_1+r_2=-p \\
r_1r_2=q
\end{cases}$$
</Admonition>

---

### 7.8.3.非齐特解形式公式
$$y''+py'+qy=\mathrm{e}^{\lambda x}P_m(x)$$

<Admonition title='特解形式' admonitionType='error'>

若 $\lambda$ 是特征方程 $r^2+pr+q=0$ 的 <span v-mark.circle.red='1'>$k$</span> 重根，则特解形式：
$$y^*=x^kR_m(x)\mathrm{e}^{\lambda x},$$
其中多项式 $R_m(x)=b_0x^m+b_1x^{m-1}+\cdots+b_{m-1}x+b_m$，系数待定。
</Admonition>

不是特征根：“$0$ 重根”；

单根：“$1$ 重根”；

$2$ 重根

---
layout: two-cols
layoutClass: gap-10
---

**例 1** 写出微分方程 $y''-2y'-3y=f(x)$ 的特解形式，其中
(1) $f(x)=3x+1$，
(2) $f(x)=x^2\mathrm{e}^{3x}$。

<v-click at='2'>

**解** 所对应的齐次方程的特征方程：$r^2-2r-3=0$

特征根：$r_1=-1$，$r_2=3$。
</v-click>

<v-click at='3'>

(1) $f(x)=3x+1$：因为 $\lambda=0$ 不是特征根【注意 $3x+1=\mathrm{e}^{0\cdot x}(3x+1)$】，
$m=1$，所以特解形式为
$$y^*=(ax+b)\mathrm{e}^{0\cdot x}=ax+b.$$
</v-click>

<v-click at='4'>

(2) $f(x)=x^2\mathrm{e}^{3x}$：因为 $\lambda=3$ 是特征根，且单根，
$m=2$，所以特解形式为
$$y^*=x(ax^2+bx+c)\mathrm{e}^{3x}.$$
</v-click>

::right::

<Admonition title='特解形式' admonitionType='error' v-click='1'>

若 $\lambda$ 是特征方程 $r^2+pr+q=0$ 的 <span v-mark.circle.red='1'>$k$</span> 重根，则特解形式：
$$y^*=x^kR_m(x)\mathrm{e}^{\lambda x}$$
</Admonition>

<v-click at='5'>

**例 2** 写出微分方程 $y''-6y'+9y=\mathrm{e}^{3x}$ 的特解形式。
</v-click>

<v-click at='6'>

**解** 所对应齐次方程的特征方程：$r^2-6r+9=0$，

特征根：$r_1=r_2=3$。
</v-click>

<v-click at='7'>

因为 $\lambda=3$ 是特征根，且 $2$ 重根，
$m=0$，所以特解形式为
$$y^*=x^2\cdot a\cdot\mathrm{e}^{3x}.$$
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

**例 3** 求微分方程 $y''-5y'+6y=x\mathrm{e}^{2x}$ 的通解。

<v-click at='1'>

**解** 特征方程：$r^2-5r+6=0$，特征根：$r_1=2$，$r_2=3$。
</v-click>

<v-click at='2'>

齐次通解：$Y=C_1\mathrm{e}^{2x}+C_2\mathrm{e}^{3x}$。
</v-click>

<v-click at='3'>

因为 $\lambda=2$ 是特征方程的单根，$m=1$，故设特解
$$y^*=x(ax+b)\mathrm{e}^{2x}$$
</v-click>

<v-click at='4'>

代入方程，整理得
$$(-2ax+2a-b)\mathrm{e}^{2x}\equiv x\mathrm{e}^{2x},$$
即 $-2ax+2a-b$<span v-mark.circle.orange='5'>$\equiv$</span>$x$。（<span v-mark.circle.orange='5'>恒</span>等式）
</v-click>

<v-click at='6'>

<span v-mark.highlight.yellow='6'>比较 $x$ 相同次幂系数</span>，得 $\begin{cases}
-2a&=&1,\\
2a-b&=&0.
\end{cases}$
</v-click>

::right::

<v-click at='4'>

$y^*$ 代入方程计算过程：
1. 求 $(y^*)'$、$(y^*)''$；
2. 把 $y^*$、$(y^*)'$、$(y^*)''$ 代入微分方程。

*ps: 可以借助于莱布尼兹公式求二阶导数*
$$(uv)''=u''v+2u'v'+uv''.$$
<hr>
</v-click>

<v-click at='7'>

解得 $a=-\frac{1}{2}$，$b=-1$，求得其中一个特解为
$$y^*=x\left(-\frac{1}{2}x-1\right)\mathrm{e}^{2x}.$$
</v-click>

<v-click at='8'>

所求通解为
$$y=Y+y^*=C_1\mathrm{e}^{2x}+C_2\mathrm{e}^{3x}+x\left(-\frac{1}{2}x-1\right)\mathrm{e}^{2x}.$$
</v-click>
<!-- $$
\begin{align*}
  y^*=&(ax^2+bx)\mathrm{e}^{2x},\\
  (y^*)'=&(2ax+b)\mathrm{e}^{2x}+(ax^2+bx)\cdot 2\mathrm{e}^{2x}\\
  =&[2ax^2+2(a+b)x+b]\mathrm{e}^{2x},\\
  (y^*)''=&2a\mathrm{e}^{2x}+2(2ax+b)\cdot 2\mathrm{e}^{2x}\\
  &+(ax^2+bx)\cdot 4\mathrm{e}^{2x}\\
  =&[4ax^2+(8a+4b)x+2a+4b]\mathrm{e}^{2x}
\end{align*}
$$
代入微分方程，
$$
\begin{align*}
  x\mathrm{e}^{2x}=&[4ax^2+(8a+4b)x+2a+4b]\mathrm{e}^{2x}\\
  &-5[2ax^2+2(a+b)x+b]\mathrm{e}^{2x}\\
  &+6(ax^2+bx)\mathrm{e}^{2x}\\
  =&(-2ax+2a-b)\mathrm{e}^{2x}
\end{align*}
$$ -->

---
layout: two-cols
layoutClass: gap-10
---

### 恒等式补充说明

**问题**：为什么<mark>恒等式两边 $x$ 的相同次幂的系数相等</mark>？

<v-click at='1'>

*回想一下利用拉格朗日中值定理证明恒等式。*
</v-click>

<v-click at='2'>

考察 $a_1x^2+b_1x+c_1\equiv a_2x^2+b_2x+c_2$。
</v-click>

<v-click at='3'>

移项，得
$$(a_1-a_2)x^2+(b_1-b_2)x+(c_1-c_2)\equiv 0.\tag{1}$$
</v-click>

<v-click at='4'>

因为这是一个恒等式，故等式左边函数关于 $x$ 的变化率恒等于 $0$。
$$2(a_1-a_2)x+(b_1-b_2)\equiv 0.\tag{2}$$
</v-click>

<v-click at='5'>

这又是恒等式，故等式左边函数关于 $x$ 的变化率也恒等于 $0$
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

<v-click at='8'>
<hr>

因为是恒等式，所以也可以代入**特殊值**.
</v-click>

<v-click at='9'>

比如 **例 3**
要确定 $-2ax+2a-b\equiv x$ 中的 $a$，$b$。
</v-click>

<v-click at='10'>

分别代入 $x=0$，$x=1$ 得方程组 
$$\begin{cases}
2a-b&=0,\\
-b&=1.
\end{cases}$$

也一样解出 $a$ 和 $b$。
</v-click>

---
layout: two-cols
layoutClass: gap-10
---

#### 叠加原理的简单运用

**例** 求方程 $y''-5y'+6y=\mathrm{e}^{x}+x\mathrm{e}^{2x}$ 的特解。

分别求出

$$y''-5y'+6y=\mathrm{e}^{x},$$
$$y''-5y'+6y=x\mathrm{e}^{2x}$$
的特解 $y_1^*$，$y_2^*$，则
$$y_1^*+y_2^*$$
即为所求方程的特解。
::right::

<Admonition title='线性叠加原理 V （非齐次解）' admonitionType='info'>

$y_1$ 是非齐次方程 $Ly=f_1(x)$ 的解，

$y_2$ 是非齐次方程 $Ly=f_2(x)$ 的解，则
$$y_1+y_2$$
 是非齐次方程 
 $$Ly=f_1(x)+f_2(x)$$
 的解。
</Admonition>
