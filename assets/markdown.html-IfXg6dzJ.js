import{_ as k,r as l,o as m,c as v,d as b,a as n,b as s,e as a,w as t,f as o}from"./app-M5IawSp-.js";const g={},_=n("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),f=n("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),w=n("h2",{id:"markdown-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),s(" Markdown 介绍")],-1),q={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"markdown-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),s(" Markdown 配置")],-1),A=n("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),E={class:"hint-container info"},j=n("p",{class:"hint-container-title"},"相关信息",-1),B={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},z=n("h2",{id:"markdown-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),s(" Markdown 扩展")],-1),M={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},D=n("h3",{id:"vuepress-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),s(" VuePress 扩展")],-1),F=n("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),C={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},T=n("h3",{id:"主题扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),s(" 主题扩展")],-1),P={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"vuepress-plugin-md-enhance",-1),S=o(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><p>::: danger 自定义标题</p><p>危险容器</p><p>:::</p><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,9),W={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},I=n("h4",{id:"代码块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),s(" 代码块")],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),K={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},L=n("h4",{id:"上下角标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),s(" 上下角标")],-1),O=n("p",null,[s("19"),n("sup",null,"th"),s(" H"),n("sub",null,"2"),s("O")],-1),R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},U=n("h4",{id:"自定义对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),s(" 自定义对齐")],-1),$=n("div",{style:{"text-align":"center"}},[n("p",null,"我是居中的")],-1),J=n("div",{style:{"text-align":"right"}},[n("p",null,"我在右对齐")],-1),G={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},Z=n("h4",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),s(" Attrs")],-1),Q=n("p",null,[s("一个拥有 ID 的 "),n("strong",{id:"word"},"单词"),s("。")],-1),nn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},sn=o('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),an={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},en=n("h4",{id:"标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),s(" 标记")],-1),tn=n("p",null,[s("你可以标记 "),n("mark",null,"重要的内容"),s(" 。")],-1),on={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ln=n("h4",{id:"任务列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),s(" 任务列表")],-1),pn={class:"task-list-container"},rn=o('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),cn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},un=n("h3",{id:"图片增强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),s(" 图片增强")],-1),dn=n("p",null,"支持为图片设置颜色模式和大小",-1),hn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},kn=o(`<h4 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h4><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mrhope.site/logo.svg
link: https://mrhope.site
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/card.html",target:"_blank",rel:"noopener noreferrer"},vn=o(`<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4><p>::: chart 一个散点图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),bn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},gn=o(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts 一个折线图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),_n={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},fn=o(`<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> 是否执行操作<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 操作
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),wn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},qn=o(`<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Flowchart
<span class="token arrow operator">---</span>
<span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),yn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},xn=n("h4",{id:"tex-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),s(" Tex 语法")],-1),An=n("p",null,[s("$$"),n("br"),s(" \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)"),n("br"),s(" = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right}"),n("br"),s(" $$")],-1),En={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},jn=n("h4",{id:"导入文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),s(" 导入文件")],-1),Bn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},zn=n("h4",{id:"代码演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),s(" 代码演示")],-1),Mn=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("非常"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s("强大!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"非常强大"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Cn=n("h4",{id:"样式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),s(" 样式化")],-1),Tn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Pn=n("h4",{id:"交互演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),s(" 交互演示")],-1),Hn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("h4",{id:"vue-交互演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),s(" Vue 交互演示")],-1),Wn=n("p",null,"::: vue-playground Vue 交互演示",-1),In=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,2),Nn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Xn=n("h4",{id:"幻灯片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),s(" 幻灯片")],-1),Yn=n("p",null,"@slidestart",-1),Kn=n("h2",{id:"幻灯片-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片-1","aria-hidden":"true"},"#"),s(" 幻灯片 1")],-1),Ln={href:"https://mrhope.site",target:"_blank",rel:"noopener noreferrer"},On=o(`<hr><h2 id="幻灯片-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-2" aria-hidden="true">#</a> 幻灯片 2</h2><ul><li>项目 1</li><li>项目 2</li></ul><hr><h2 id="幻灯片-3-1" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-1" aria-hidden="true">#</a> 幻灯片 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="幻灯片-3-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-2" aria-hidden="true">#</a> 幻灯片 3.2</h2><p>$$<br> J(\\theta_0,\\theta_1) = \\sum_{i=0}<br> $$</p><p>@slideend</p>`,10),Rn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Un=o('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function $n(Jn,Gn){const e=l("ExternalLinkIcon"),c=l("CodeTabs"),i=l("RouterLink"),u=l("CodeDemo"),d=l("Badge"),h=l("Playground");return m(),v("div",null,[_,f,b(" more "),w,n("p",null,[s("如果你是一个新手，还不会编写 Markdown，请先阅读 "),n("a",q,[s("Markdown 介绍"),a(e)]),s(" 和 "),n("a",y,[s("Markdown 演示"),a(e)]),s("。")]),x,A,n("div",E,[j,n("p",null,[s("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),n("a",B,[s("Frontmatter 介绍"),a(e)]),s("。")])]),z,n("p",null,[s("VuePress 会使用 "),n("a",M,[s("markdown-it"),a(e)]),s(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),n("a",V,[s("语法扩展"),a(e)]),s(" 。")]),D,F,n("p",null,[s("关于这些扩展，请阅读 "),n("a",C,[s("VuePress 中的 Markdown 扩展"),a(e)]),s("。")]),T,n("p",null,[s("通过 "),n("a",P,[H,a(e)]),s("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),S,n("ul",null,[n("li",null,[n("a",W,[s("查看详情"),a(e)])])]),I,a(c,{id:"93",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:t(({value:p,isActive:r})=>[s("pnpm")]),title1:t(({value:p,isActive:r})=>[s("yarn")]),title2:t(({value:p,isActive:r})=>[s("npm")]),tab0:t(({value:p,isActive:r})=>[N]),tab1:t(({value:p,isActive:r})=>[X]),tab2:t(({value:p,isActive:r})=>[Y]),_:1}),n("ul",null,[n("li",null,[n("a",K,[s("查看详情"),a(e)])])]),L,O,n("ul",null,[n("li",null,[n("a",R,[s("查看详情"),a(e)])])]),U,$,J,n("ul",null,[n("li",null,[n("a",G,[s("查看详情"),a(e)])])]),Z,Q,n("ul",null,[n("li",null,[n("a",nn,[s("查看详情"),a(e)])])]),sn,n("ul",null,[n("li",null,[n("a",an,[s("查看详情"),a(e)])])]),en,tn,n("ul",null,[n("li",null,[n("a",on,[s("查看详情"),a(e)])])]),ln,n("ul",pn,[rn,n("li",null,[n("p",null,[n("a",cn,[s("查看详情"),a(e)])])])]),un,dn,n("ul",null,[n("li",null,[n("a",hn,[s("查看详情"),a(e)])])]),kn,n("ul",null,[n("li",null,[n("a",mn,[s("查看详情"),a(e)])])]),vn,n("ul",null,[n("li",null,[n("a",bn,[s("查看详情"),a(e)])])]),gn,n("ul",null,[n("li",null,[n("a",_n,[s("查看详情"),a(e)])])]),fn,n("ul",null,[n("li",null,[n("a",wn,[s("查看详情"),a(e)])])]),qn,n("ul",null,[n("li",null,[n("a",yn,[s("查看详情"),a(e)])])]),xn,An,n("ul",null,[n("li",null,[n("a",En,[s("查看详情"),a(e)])])]),jn,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/%E6%9B%B4%E5%A4%9A/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8/markdown.html"},{default:t(()=>[s("Markdown 展示")]),_:1})])]),n("li",null,[n("p",null,[a(i,{to:"/%E6%9B%B4%E5%A4%9A/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8/page.html"},{default:t(()=>[s("页面展示")]),_:1})])]),n("li",null,[n("p",null,[a(i,{to:"/%E6%9B%B4%E5%A4%9A/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8/disable.html"},{default:t(()=>[s("禁用展示")]),_:1})])]),n("li",null,[n("p",null,[a(i,{to:"/%E6%9B%B4%E5%A4%9A/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8/encrypt.html"},{default:t(()=>[s("加密展示")]),_:1})])])]),n("ul",null,[n("li",null,[n("a",Bn,[s("查看详情"),a(e)])])]),zn,a(u,{id:"code-demo-333",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:t(()=>[Mn,Vn,Dn]),_:1}),n("ul",null,[n("li",null,[n("a",Fn,[s("查看详情"),a(e)])])]),Cn,n("p",null,[s("向 Mr.Hope 捐赠一杯咖啡。 "),a(d,{type:"tip"},{default:t(()=>[s("Recommended")]),_:1})]),n("ul",null,[n("li",null,[n("a",Tn,[s("查看详情"),a(e)])])]),Pn,a(h,{key:"2e8cfbd8",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),n("ul",null,[n("li",null,[n("a",Hn,[s("查看详情"),a(e)])])]),Sn,Wn,n("template",null,[In,n("ul",null,[n("li",null,[n("a",Nn,[s("查看详情"),a(e)])])]),Xn,Yn,Kn,n("p",null,[s("一个有文字和 "),n("a",Ln,[s("链接"),a(e)]),s(" 的段落")]),On,n("ul",null,[n("li",null,[n("a",Rn,[s("查看详情"),a(e)])])])]),Un])}const Qn=k(g,[["render",$n],["__file","markdown.html.vue"]]);export{Qn as default};
