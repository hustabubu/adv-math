// 引入 Katex 的样式和自动渲染函数
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/contrib/auto-render/auto-render";

export default {
  install(app) {    
    // console.log("插件调用了");
    // 配置 Katex 渲染的选项。根据自己的需求，参看 Katex 官方文档的 Option 来配置选项。
    const renderOption = {
      // 配置分隔符，如果所需要的分隔符不在这里出现【~~不在源文件 auto-render.js 中列出来~~】，直接在这里添加【不需要先在 auto-render.js 添加】。
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\begin{equation}", right: "\\end{equation}", display: true },
        { left: "\\begin{equation*}", right: "\\end{equation*}", display: true }, // 不带编号
        { left: "\\begin{align}", right: "\\end{align}", display: true }, // 多行公式，带编号
        { left: "\\begin{align*}", right: "\\end{align*}", display: true }, // 多行公式，不带编号
      ],
      throwOnError: false,
    };
    // 选项式自定义指令
    app.directive("katex-auto", {
      mounted(el, binding) {
        // console.log("mounted 时，katex-auto-render-plu 执行了");
        // console.log(binding.oldValue,'@@', binding.value); // 把要渲染的内容分放入真实DOM
        // 一上来，就让它渲染公式，
        el.innerHTML = binding.value; 
        renderMathInElement(el, renderOption);
      },
      updated(el, binding) {
        // console.log("updated 时，katex-auto-render-plu 执行了");
        // 如果在标签内绑定的latexTex值没有变化，直接return，没必要执行latex公式的自动渲染
        if(binding.oldValue === binding.value) {
          // 如果真实DOM用的是v-model，则再加上指令修饰符`.trim`就可以去掉头尾空字符
          // console.log("Latex 公式未改变");
          return
        }
        // console.log('@@@',binding.oldValue);
        // console.log('@@@@',binding.value);
        // 把更新的latex字符串赋值给组件的innerHTML（也可以赋值给innerText，实现的效果不一样）
        /* 
          下面的注释全部都没有必要了，
          用 innerHTML，然后在样式中设置，white-space: pre-line;
          就可以解决下面注释所遇到的问题。
        */
        /* 
          innerText：编译后能保留所有的换行（包括在文本中的和在公式中的），
              而有换行（`\n`，不是 latex 中的 `\\`）的 Latex 公式用 Katex 来渲染是失败的；
              【公式书写挺痛快，但是渲染就失败；想要渲染达成功，书写公式别换行】
          innerHTML，编译时会剔除所有换行（`\n`），满足输入公式能写换行的需求，能正常渲染公式；
              但渲染后的文本的换行未能保留。
              【公式书写挺痛快，渲染也能达成功；文本换行已不再，所有文字挤一行】

          功能：编写公式时能用换行，且非公式部分保留换行
          拟解决的办法：
            - 用 `innerHTML`；（编写公式时能用换行）
            - 利用 Katex 中的 `auto-render` 中 的 `splitAtDelimiters` 把 latext 字符串中的文本和公式分别提取出来
            且把文本部分的换行(`\n`)换成 HTML 的换行（`<br>`之类的）。

          解决问题的**关键**在于：**得把文本从 `latex 字符串`中提取出来**。
          如果用正则表达式，固然可以。现在有现成的工具（Katex 中的 `auto-render` 中 的 `splitAtDelimiters`）为什么不用呢？
          文件路径：`node_modules/katex/contrib/auto-render/splitAtDelimiters.js`
        */
        /* 
          把更新的latex字符串赋值给组件的innerText（也可以赋值给innerHTML，实现的效果不一样）
            innerText 利：识别换行。可以保留原来文字与latex混排的换行
                      弊：数学公式必须在一行内写完（数学式子内不允许用换行），否则渲染不出来。
            innerHTML 弊：不识别换行。怎么保留原来换行是个问题
                      利：数学公式没有必要再一行内写完，看得清楚。
          解决办法：还是希望公式内可以换行（ 用 innerHTML；公式之外的换行，利用正则表达式，把原来换行替换成<br>
        */
        // const elBefore = el
        // console.log('重新赋值innerHTMl前',elBefore.innerHTML);

        el.innerHTML = binding.value;
        
        // const elAfter = el
        // console.log('重新赋值innerHTMl后',elAfter.innerHTML);

        // console.log(elBefore===elAfter);

        renderMathInElement(el, renderOption);
        // console.log("updated 时，公式被重新渲染了");
      }
    })
  }
};
