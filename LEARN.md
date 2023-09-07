## Css

**1, 说一下 css 盒模型**
CSS 中的盒子模型包括 IE 盒子模型和标 准的 W3C 盒子模型
在 标准的盒子模型中，width 指 content 部分的宽度
在 IE 盒子模型中，width 表示 content+padding+border 这三个部分的宽度
**2, 如何画一条0.5px的线**
采用 transform: scale()的方式
移动端，采用meta viewport的方式
**3, link和import的区别**
link 属于 html 标签，而@import 是 css 提供的
页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面加载结束后加载
link 是 html 标签，因此没有兼容性，而@import 只有 IE5 以上才能识别
link 方式样式的权重高于@import 的。
**4, transition和animation区别**
Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，
他们 的主要区别是 transition 需要触发一个事件才能改变属性，
而 animation 不需要触发任何 事件的情况下才会随时间改变属性值，
并且 transition 为 2 帧，从 from .... to，而 animation 可以一帧一帧的。
**5, flex布局**
justify-content：对其方式，水平主轴对齐方式
align-items：对齐方式，竖直轴线方向
order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0
flex-wrap：决定换行规则
flex-direction
**6, 垂直居中的方法**
margin:auto 法, position: absolute, top: 0; left: 0; bottom: 0; right: 0; margin: auto;
利用 flex
负margin法: position: absolute; top: 50%; left: 50%; margin-top: -height/2; margin-left: -width/2
**7, js动画和css动画的差异性**
功能涵盖面，JS 比 CSS 大
实现/重构难度不一，CSS3 比 JS 更加简单，性能跳优方向固定
css3 有兼容性问题
**8, 说一下块元素和行元素**
块元素：独占一行，并且有自动填满父元素，可以设置 margin 和 pading 以及高度和宽度
行元素：不会独占一行，width 和 height 会失效，并且在垂直方向的 margin 会失效
**9, 说一下多行元素和文本省略号**
display: -webkit-box
-webkit-box-orient:vertical
-webkit-line-clamp:3
overflow:hidden
**10, visibility opacity = 0, display=none**
opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些 事件，如 click 事件，那么点击该区域，也能触发点击事件的
visibility=hidden，该元素 隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
display=none， 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样
**11, 双边距重叠问题**
多个相邻（兄弟或者父子关系）普通流的块元素垂直方向 marigin 会重叠 折叠的结果为：
两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。
**12, position相关属性**
固定定位 fixed：相对于浏览器窗口是固定位置,文档流无关，因此不占据空间,Fixed 定位的元素和其他元素重叠
相对定位 relative：出现在正常位置，可以通过设置垂直 或水平位置，让这个元素“相对于”它的起点进行移动
绝对定位 absolute：相对于最近的已定位父元素，如果元素没有已定位的父元素，那 么它的位置相对于<html>，文档流无关和其他元素重叠
粘性定位 sticky：元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing
block（最近的块级祖先元素）定位而后，元素定位表现为在跨越特定阈值前为相对定 位，之后为固定定位。
默认定位 Static：没有定位，元素出现在正常的流中
inherit: 从父元素继承 position 属性的值
**13, 浮动清除，以及方法**
方法一：使用带 clear 属性的空元素 在浮动元素后使用一个空元素如<div class="clear"></div>，并在 CSS 中赋 予.clear{clear:
both;}属性即可清理浮动。
方法二：使用 CSS 的 overflow 属性 给浮动元素的容器添加 overflow:hidden;或 overflow:auto;可以清除浮动，
**14, css3新特性**
CSS3 边框如 border-radius，box-shadow 等；
CSS3 背景如 background-size， background-origin 等；
CSS3 2D，3D 转换如 transform 等；
CSS3 动画如 animation 等。
过渡: transition
媒体查询: media
**15, css3选择器有哪些，优先级呢**
id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等
同一元素引用了多个样式时，排在后面的样式属性的优先级高；
样式选择器的类型不同时，优先级顺序为：id 选择器 > class 选择器 > 标签选择器；
带有!important 标记的样式属性的优先级最高；
样式表的来源不同时，优先级顺序为：内联样式> 内部样式 > 外部样式 > 浏览器用户 自定义样式 > 浏览器默认样式
**16, float的元素，display是什么**
display 为 block
**17, 隐藏元素的方法**
display:none; visibility:hidden; opacity: 0; 等等
**18, 什么是BFC**
BFC 也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局， 并且这个区域的子元素不会影响到外面的元素
**19, cale属性**
Calc 用户动态计算长度值，任何长度值都可以使用 calc()函数计算，需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(
100% - 10px)
**20, display table 和本身的 table 有什么区别**
区别在于，display：table 的 css 声明能够让一个 html 元素和它的子节点像 table 元素一样，使用基于表格的 css 布局
table 的嵌套性太多，没有 div 简洁
**21, z-index的定位方法**
设置元素的堆叠顺序
**22, line-height和height的区别**
line-height 一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height 一般是指容器的整体高度。
**23, 设置一个元素的背景颜色，会填充那些区域**
background-color 设置的背景颜色会填充元素的 content、padding、border 区域。
**24, 属性选择器和伪类选择器的优先级**
属性选择器和伪类选择器优先级相同
**25, inline-block inline 和block 的区别，为什么img是inline还可以设置宽高**
Block 是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding 水平垂直 方向都有效。
Inline：设置 width 和 height 无效，margin 在竖直方向上无效，padding 在水平方向垂直 方向都有效，前后无换行符
Inline-block：能设置宽度高度，margin/padding 水平垂直方向 都有效，前后无换行符
**26, 了解重绘和重排吗，怎样减少重绘和重排，脱离文档流有哪些方法**
DOM 的变化影响到几何属性比如宽高，浏览器重新计算元素的几何属性， 其他元素的几何属性也会受到影响，浏览器需要重新构造渲染树，这个过程称之为重排
浏览器将受到影响的部分重新绘制在屏幕上 的过程称为重绘
引起重排重绘的原因有：
添加或者删除可见的 DOM 元素
元素尺寸位置的改变
浏览器窗口大小发生改变
重排一定导致重绘，重绘不一定导致重排
减少重绘重排的方法有：
不在布局信息改变时做 DOM 查询
使用 csstext,className 一次性改变属性
使用 fragment 对于多次重排的元素，比如说动画
使用绝对定位脱离文档流，使其不影响其他元素
对于多次重排的元素，比如说动画。使用绝对定位脱离文档流，使其不影响其他元素
**27, 两个嵌套的 div，position 都是 absolute，子 div 设置 top 属性，那么这个 top 是相对于父元素的哪个位置定位的**
margin 的外边缘
**27, css预处理器有什么**
less，sass 等

## JavaScript

**1, get 请求传参长度的误区**
误区：我们经常说 get 请求参数的大小存在限制，而 post 请求的参数大小是无限制的。
实际上 HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对 get 请求参数的限制 是来源与浏览器或 web 服务器，浏览器或 web
服务器限制了 url 的长度。
**2, 补充 get 和 post 请求在缓存方面的区别**
get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以 使用缓存。
post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用 缓存。
因此 get 请求适合于请求缓存。
**3, 说一下闭包**
闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用， 子函数所在的父函数的作用域不会被释放。
**3, 说一下类的创建和继承**
类的创建（es5）：new 一个 function，在这个 function 的 prototype 里面增加属性和 方法。
类的继承——原型链继承
**4, 如何解异步回调地狱**
promise、generator、async/await
**5, 说说前端中的事件流**
什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2 级事件流包括下面几个阶段。
事件捕获阶段
处于目标阶段
事件冒泡阶段
addEventListener：
addEventListener 是 DOM2 级事件新增的指定事件处理程序的操作
这个方法接收 3 个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。
最后这个布尔值参数如果是 true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。
IE 只支持事件冒泡。
**6, 如何让事件先冒泡后捕获**
在 DOM 标准事件模型中，是先捕获后冒泡。
监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。
**7, 说一下事件委托**
事件委托指的是，不在事件的发生地（直接 dom）上设置监听函数，而是在其父元素上设置监听函数，
通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类型，来做出不同的响应。
举例：最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul
父元素上添加。
好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。
**8, 说一下图片预加载和懒加载**
预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
**8, mouseover 和 mouseenter的区别**
mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是 mouseout
mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是 mouseleave
**9, JS的new 操作符做了那些事**
开辟内存空间，在内存中创建一个新的空对象
对象原型指向构造函数的prototype
让 this 指向这个新的对象 执行构造函数
返回这个新对象（所以构造函数里面不需要 return）
**10, 改变函数内部 this 指针的指向函数（bind，apply，call 的区别）**
通过 apply 和 call 改变函数的 this 指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply
是数组，而 call 则是arg1,arg2...这种形式。
通过 bind 改变 this 作用域会返回一个新的函数，这个函数不会马上执行,需要手动调用。
**11, 异步加载js的方法**
defer：只支持 IE 如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，以便加快处理文档的速度。
async，HTML5 属性仅适用于外部脚本，并且如果在 IE 中，同时存在defer 和async，那么 defer 的优先级比较高，脚本将在页面完成时执行。
**12, ajax解决浏览器缓存问题**
在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
在 URL 后面加上一个随机数： "fresh=" + Math.random()。
在 URL 后面加上时间戳："nowtime=" + new Date().getTime()。
**13, js的节流与防抖**
防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，只触发一次。
节流函数，只允许一个函数在一定时间内执行一次。
**14, js的垃圾回收机制**
必要性：由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。
JavaScript 的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。
垃圾回收的方法：标记清除、计数引用。
**15, eval是做什么的**
它的功能是把字符串参数解析成JS代码并运行，并返回执行的结果，应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
**16, 如何理解前端模块化**
一个模块是能实现特定功能的文件，有了模块就可以方便的使用别人的代码，想要什么功能就能加载什么模块。
前端模块化就是复杂的文件编程一个一个独立的模块，比如 JS 文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代）
这样会引来模块之间相互依赖的问题，所以有了 commonJS 规范，AMD，CMD 规范等等，以及用于 JS 打包（编译等处理）的工具 webpack
**17, 说一下commonJS,AMD和CMD**
CommonJS：用在服务器端的，同步的
AMD：中文名异步模块定义的意思。
amd, cmd是用在浏览器端的，异步的，如requirejs和seajs
**18, 对象深度克隆的实现**
**19, 实现一个once函数，传入参数只执行一次**
function ones(func){
var tag=true;
return function(){
if(tag==true){
func.apply(null,arguments);
tag=false;
}
return undefined }
}
**20, 将原生的ajax封装成promise**
**21, JS监听对象的属性的改变**
假设这里有一个 user 对象,
在 ES5 中可以通过 Object.defineProperty 来实现已有属性的监听Object.defineProperty(user,'name',{
set：function(key,value){} })
缺点：如果 id 不在 user 对象中，则不能监听 id 的变化
在 ES6 中可以通过 Proxy 来实现
var user = new Proxy({}，{
set：function(target,key,value,receiver){} })
这样即使有属性在 user 中不存在，通过 user.id 来定义也同样可以这样监听这个属性的变化哦。
**22, 如何实现一个私有变量，使用get方法获取，不能直接访问**
通过 defineProperty 来实现
通过函数的创建形式
**23, == 和===以及Object。is的区别**
==主要存在：强制转换成 number,null==undefined
Object.is() 方法判断两个值是否为同一个值，Object.js主要的区别就是+0！=-0 而 NaN==NaN
**24, setTimeout setInterval 和 requestAnimationFrame的区别**
requestAnimationFrame 不需要设置时间间隔，requestAnimationFrame使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。它返回一个整数，表示定时器的编号
**25, JS怎么控制一次加载一张图片，加载完后再加载下一张**
<script type="text/javascript">
var obj=new Image();
obj.src='http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg';
obj.onload=function(){
alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
document.getElementById('mypic').innnerHTML='<img src=\''+this.src+'\' />';
};
</script>
**26, 代码的执行顺序**
setTimeout(function(){console.log(1)},0);
new Promise(function(resolve,reject){
console.log(2);
resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});
process.nextTick(function(){console.log(5)});
console.log(6);
//输出 2,6,5,3,4,1
**27, 如何实现sleep的效果(es5或es6)**
while 循环的方式
function sleep(ms){
var start=Date.now(),expire=start+ms;
while(Date.now()<expire);
console.log('1111');
return;
}
通过 promise 来实现
**28, Function。_proto_ 是什么**
获取一个对象的原型
**29, 实现js中所有对象的深度克隆**
通过递归可以简单实现对象的深度克隆，但是这种方法不管是 ES6 还是ES5 实现，都有同样的缺陷，就是只能实现特定的 object
的深度复制（比如数组和函数）
不能实现包装对象 Number，String ， Boolean，以及 Date 对象，RegExp 对象的复制
**30, 箭头函数的this指向举例**
当箭头函数作为对象的方法时，里面的this不再指向此对象，而是指向对象所在的作用域
**31, JS判断类型**
判断方法：typeof()，instanceof，Object.prototype.toString.call()等
typeof()数组和对象都返回object
**32, 数组常用方法**
push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等
**33, 数组去重**
indexOf 循环去重
ES6 Set 去重；Array.from(new Set(array))
**34, 闭包有什么用**
闭包是指有权访问另外一个函数作用域中的变量的函数,闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在
**35, 事件代理在捕获阶段的实际应用**
可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。
**36, 性能优化**
减少 HTTP 请求
使用内容发布网络（CDN）
添加本地缓存
压缩资源文件
将 CSS 样式表放在顶部，把 javascript 放在底部（浏览器的运行机制决定）
避免使用 CSS 表达式
减少 DNS 查询
使用外部 javascript 和 CSS
图片 lazyLoad
**37, JS的语言特性**
运行在客户端浏览器上
不用预编译，直接解析执行代码
是弱类型语言，较为灵活
与操作系统无关，跨平台的语言
脚本语言、解释性语言
**38, 如何判断一个数组**
Object.prototype.toString.call() 返回 [object Number] [object Array]
instanceof 返回Boolean
es6 Array.isArray 返回Boolean
**39, typeof**
typeof 只能判断是 object
**40, JS实现跨域**
JSONP：通过动态创建 script，再请求一个带参网址实现跨域通信,jsonp的原理是利用script标签的跨域特性,可以不受限制地从其他域中加载资源,类似的标签还有img。
document.domain；这种方式用在主域名相同子域名不同的跨域访问中
CORS：服务端设置 Access-Control-Allow-Origin 即可，前端无须设置，若要带cookie 请求，前后端都需要设置。
**41, JS 基本数据类型**
基本数据类型：undefined、null、number、boolean、string、symbol
**42, 跨域的原理**
是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对 JavaScript 实施的安全限制，
那么只要协议、域名、端口有任何一个不同，都被当作是不同的域。
跨域原理，即是通过各种方式，避开浏览器的安全限制。
**43, 不同数据类型的值的比较，是怎么转化的，有什么规则**
**44, null == undefined 为什么**
要比较相等性之前，不能将 null 和 undefined 转换成其他任何值，但null == undefined会返回 true 。ECMAScript 规范中是这样定义的。
**45, 暂时性死区**
在代码块内，使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
**46, 写一个深度拷贝**
**47, 什么是按需加载**
当用户触发了动作时才加载对应的功能。鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大小更改等。加载的文件，可以是 JS、图片、CSS、HTML
等。
**48, 什么是虚拟dom**
用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的DOM树，插到文档当中
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的DOM树上，
Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存
**49, webpack是干什么的**
webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。
webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle
**50, ant-design的优点和缺点**
优点：组件非常全面，样式效果也都比较不错。
缺点：框架自定义程度低，默认 UI 风格修改困难。
**51, JS中实现继承的几种方式**
原型链继承
构造继承
实例继承
拷贝继承
**52, Vue的生命周期**
**53, 简单说一下symbol**
Symbol 是 ES6 的新增属性，表示独一无二的值，最大的用法是用来定义对象的唯一属性名
Symbl 确保唯一，即使采用相同的名称，也会产生不同的值，
let sy = Symbol("KK");
console.log(sy); // Symbol(KK)
typeof(sy); // "symbol"
**54, promise+Generator+Async的使用**
Generator 函数：
generator 函数使用:
1、分段执行，可以暂停
2、可以控制阶段和每个阶段的返回值
3、可以知道是否执行到结尾
async 和异步:
async 表示这是一个 async 函数，await 只能用在这个函数里面。
await 表示在这里等待异步操作返回结果，再继续执行。
async 用于定义一个异步函数，该函数返回一个 Promise。
**55, 什么是事件监听**
用于向指定元素添加事件句柄，它可以更简单的控制事件,addEventListener()方法，
element.addEventListener(event, function, useCapture)
第一个参数是事件的类型(如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
在冒泡中，内部元素先被触发，然后再触发外部元素，
捕获中，外部元素先被触发，在触发内部元素。
**56, 介绍一下promise，以及底层如何实现**
**57, JS 原型链，原型链的顶端是什么？Object 的原型是什么？Object 的原型的原型是什么？在数组原型链上实现删除数组重复数据的方法
**
**58, 事件委托以及冒泡原理**
事件委托是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是减少内存消耗，节约效率
**59, 深浅拷贝的原理和实现**
浅拷贝就是改变一个另一个也受影响
深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也互相分离，修改一个对象的属性，不会影响另一个
**60, startwith和indexof的区别**
startwith 函数，其参数有 3 个，stringObj,要搜索的字符串对象，str，搜索的字符串，position，可选，从哪个位置开始搜索，返回 Boolean
Indexof 函数，indexof 函数可返回某个指定字符串在字符串中首次出现的位置。
**61, JS字符串转数字的方法**
通过函数 parseIn（t ），可解析一个字符串，并返回一个整数，语法为parseIn（t string ,radix）
**62, let const var 的区别 ，什么是块级作用域，如何用ES5 的方法实现块级作用域（立即执行函数），ES6 呢.**
var 声明的变量是全局或者整个函数块的,var 声明的变量存在变量提升，
let,const 声明的变量是块级的变量，let,const 不存在变量提升，let 声明的变量允许重新赋值，const 不允许且必须初始化
**63, ES6 箭头函数的特性**
ES6 增加了箭头函数
箭头函数没有 this,需要通过查找作用域链来确定 this 的值
箭头函数没有自己的 arguments 对象
**64, 有了解过事件模型吗，DOM0 级和 DOM2 级有什么区别，DOM的分级是什么**
JSDOM 事件流存在如下三个阶段：
事件捕获阶段
处于目标阶段
事件冒泡阶段
JSDOM 标准事件流的触发的先后顺序为： 先捕获再冒泡 点击DOM 节点时，事件传播顺序：事件捕获阶段，从上往下传播，然后到达事件目标节点，最后是冒泡阶段，从下往上传播
**65, JS 的基本数据类型有哪些，基本数据类型和引用数据类型的区别，NaN是什么的缩写，JS 的作用域类型，undefined==null
返回的结果是什么，undefined与 null 的区别在哪**
JS 的基本数据类型有字符串，数字，布尔，数组，对象，Null，Undefined,基本数据类型是按值访问的
基本数据类型的赋值是简单赋值，如果从一个变量向另一个变量赋值基本类型的值会在变量对象上创建一个新值
引用数据类型的赋值是对象引用
**66, setTimeout(fn,100),100毫秒是怎样权衡的**
100 毫秒是插入队列的时间+等待的时间
**67, 简单讲一讲es6的新特性**
ES6 在变量的声明和定义方面增加了 let、const 声明变量，引入了新的数据类型 symbol，新的数据结构 set 和map
模板字符串、函数方面的默认参数、对象方面属性的简洁表达方式
promise
rest 参数
**68, 了解事件代理吗，这样做有什么好处**
把一个元素响应事件（click、keydown......）的函数委托到另一个元素，利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的事件
事件代理就是说我们将事件添加到本来要添加的事件的父节点，将事件委托给父节点来触发处理函数
这样做的好处是减少事件绑定，减少内存消耗
**69, 给出以下代码，输出的结果是什么？原因？for(var i=0;i<5;i++){ setTimeout(function(){ console.log(i); },1000); }
console.log(i)**
**70, 给两个构造函数A和B，如何实现A继承B**
**72, 如果有三个promise，想串行执行，该怎么写**
A.then(B).then(C).catch(...)
**73, 知道private和public吗**
**74, async和await具体改怎么用**
**75, 知道哪些es6 es7的语法**
promise，await/async，let、const、块级作用域、箭头函数
**76, promise和async，await的关系**
都是异步编程的解决方案
**77, JS过程阻塞，解决办法**
指定 script 标签的 async 属性
如果 async="async"，脚本相对于页面的其余部分异步地执行
如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
**78, JS对象类型，接本对象类型以及引用类型的区别**
分为基本对象类型和引用对象类型
基本数据类型：按值访问，可操作保存在变量中的实际的值
基本数据类型有这六种:undefined、null、string、number、boolean、symbol
引用类型：当复制保存着对象的某个变量时，操作的是对象的引用，但在为对象添加属性时，操作的是实际的对象。
引用类型有这几种：Object、Array、RegExp、Date、Function、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(
Global、Math)。
**79, class**
**80, 箭头函数和function有什么区别**
**81, arguments**
Javascript并没有重载函数的功能，但是Arguments对象能够模拟重载
arguments 是类数组对象，有 length 属性，不能调用数组方法
可用 Array.from()转换
箭头函数获取 arguments，可用…rest 参数获取
**82, eventloop**
任务分为同步任务和异步任务，异步任务永远在同步任务执行完后才执行
不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）
macro-task： 整体代码script、setTimeout、setInterval…
micro-task：Promises、Object.observe…

## React

**什么是虚拟 dom，原理是什么**
虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。
用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中；
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异；
**diff 算法**
1.把树形结构按照层级分解，只比较同级元素。
2.给列表结构的每个单元添加唯一的 key 属性，方便比较
3.React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
4．选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高diff 的性能。
**React 性能优化方案**
重写 shouldComponentUpdate 来避免不必要的 dom 操作。
使用 production 版本的 React.js。
使用 key 来帮助 React 识别列表中所有子组件的最小变化
**简述 flux 思想**
Flux 的最大特点，就是数据的"单向流动"。
用户访问 View
View 发出用户的 Action
Dispatcher 收到 Action，要求 Store 进行相应的更新
Store 更新后，发出一个"change"事件
View 收到"change"事件后，更新页面
**React 解决了什么问题**
解决了三个问题： 1.组件复用问题， 2.性能问题，3.兼容性问题
**react-hooks原理**
在 v16 之前的 React 里，是直接递归遍历 vdom，通过 dom api 增删改 dom 的方式来渲染的。
但当 vdom 过大，频繁调用 dom api 会比较耗时，而且递归又不能打断，所以有性能问题。
后来就引入了 fiber 架构，先把 vdom 树转成 fiber 链表，然后再渲染 fiber。hooks 就是通过把数据挂载到组件对应的 fiber 节点上来实现的。
fiber 节点是一个对象，hooks 把数据挂载在哪个属性呢？
上一个函数是 renderWithHooks，里面有个 workingInProgress 的对象就是当前的 fiber 节点,
fiber 节点的 memorizedState 就是保存 hooks 数据的地方,它是一个通过 next 串联的链表
**React 的工作原理**
React 会创建一个虚拟 DOM(virtual DOM)。当一个组件中的状态改变时，React 首先会通过 "diffing" 算法来标记虚拟 DOM 中的改变，
第二步是调节(reconciliation)会用diff 的结果来更新 DOM。
**类组件和函数式组件之间有何不同**
类组件不仅允许你使用更多额外的功能，如组件自身的状态和生命周期钩子，也能使组件直接访问 store 并维持状态
当组件仅是接收 props，并将组件自身渲染到页面时，该组件就是一个'无状态组件(stateless component)'
**在 React 中，refs 的作用是什么**
Refs 可以用于获取一个 DOM 节点或者 React 组件的引用。
**何为高阶组件 HOC**
高阶组件是一个以组件为参数并返回一个新组件的函数。最常见的可能是 Redux 的 connect 函数。
**为什么建议传递给 setState 的参数是一个 callback 而不是一个对象**
因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个state。
**怎么阻止组件的渲染**
在组件的 render 方法中返回 null 并不会影响触发组件的生命周期方法
**在构造函数中调用 super(props) 的目的是什么**
在 super() 被调用之前，子类是不能使用 this 的，子类必须在constructor 中调用 super()。
传递 props 给 super() 的原因则是便于(在子类中)能在constructor 访问this.props。
**React组件的生命周期**
componentWillMount ()
componentDidMount ()
componentWillReceiveProps ()  一旦从父类接收到props并且在调用另一个渲染之前调用
shouldComponentUpdate () 根据特定条件返回 true 或 false 值
componentWillUpdate ()
componentDidUpdate ()
componentWillUnmount ()
**受控和非受控组件**
受控组件就是每当表单的状态发生变化时，value都会被写入到组件的state中，这种组件就被称为受控组件
非受控组件即不受状态的控制，获取数据就是相当于操作DOM
**什么是Redux**
react的状态管理容器
**Redux 遵循的三个原则是什么**
单一事实来源：组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新，单一状态树可以更轻松地跟踪随时间的变化以及调试或检查应用程序
状态是只读的： 改变状态的唯一方法是触发一个动作
使用纯函数进行更改： 为了指定状态树如何通过操作转换，您需要纯函数
**列出Redux组件**
Action——它是一个描述发生了什么的对象
Reducer——它是一个确定状态将如何改变的地方
Store - 整个应用程序的状态/对象树保存在 Store 中
**Redux 中 Actions 是如何定义的**
Action 必须有一个 type 属性来指示正在执行的 ACTION 的类型。它们必须定义为 String 常量，在 Redux 中，动作是使用名为 Action
Creators 的函数创建的
**解释Reducer的作用**
Reducers 是纯函数，根据action的type返回新值的state
**Store 在 Redux 中的意义是什么**
store 是一个 JavaScript 对象，它可以保存应用程序的状态并提供一些辅助方法来访问状态、调度操作和注册侦听器
**Redux 与 Flux 有何不同**
Flux状态是可变的，Redux状态是不可变的
Flux Store 包含状态和变更逻辑， Redux 存储和更改逻辑是分开的
Flux React 组件订阅 store， Redux 容器组件利用connect

**什么是React 路由**
React Router 是一个建立在 React 之上的强大路由库，它有助于向应用程序添加新的屏幕和流。这使 URL
与网页上显示的数据保持同步。它维护标准化的结构和行为，用于开发单页 Web 应用程序。

**为什么在React Router v4 中使用switch 关键字**
用来封装Router内部的多条路由的，使用中的 标记将键入的 URL 与已定义的路由按顺序匹配。 当找到第一个匹配项时，它会呈现指定的路由。从而绕过其余
路线。

**路由传参**
params得声明 <Route path='/Inbox/:id' component={Inbox} /> this.props.match.params.id
刷新，参数依然存在，只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋。
query <Link to={{pathname:'/Inbox',query:{id:'01009'}}} >铅笔</Link> this.props.location.query.id 刷新地址栏，参数丢失
state <Link to={{pathname:'/Inbox',state:{id:'01009'}}} >铅笔</Link> this.props.location.state.id
刷新地址栏，（hash方式会丢失参数，Browser模式不会丢失参数）
search <Link to='/Inbox?a=1&b=2' >铅笔</Link> this.props.location.search
用location.search所获取的是查询字符串，所以，还需要进一步的解析，自己自行解析，也可以使用第三方模块：qs，或者nodejs里的query-string

**useReducer和redux的区别**
useReducer是useState的代替方案，用于 state 复杂变化
useReducer是单个组件状态管理，组件通讯还需要 props
redux是全局的状态管理，多组件共享数据

## http相关

**HTTP与HTTPS有什么区别**
1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

**http1.x 和http2.x区别**
http2.x: 使用二进制传送，支持多路复用，头部压缩，支持服务器主动推送
http1.x: 文本（字符串）传送

## webpack：

**Webpack是什么？**

本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。
当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，
然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

**打包过程/构建流程 ？**
从entry开始递归分析entry依赖的所有module，根据module.rules里配置的loader进行相应的转换，
根据依赖关系图，组装成一个个包含多个模块的Chunk，再把每个Chunk转化成一个单独的文件加入到输出列表
构建过程中会执行 plugin插件，完成plugin的任务

**Webpack中loader的作用/ loader是什么 ？**
Loader 是webpack中提供了一种处理多种文件格式的机制，因为webpack只认识JS和JSON
less-loader:将less文件编译成css文件，css-loader，style-loader

**常见的Plugin有哪些 ？**
html-webpack-plugin 处理html资源，默认会创建一个空的HTML，自动引入打包输出的所有资源（js/css）
clean-webpack-plugin 每次打包时候，CleanWebpackPlugin 插件就会自动把上一次打的包删除
loader运行在编译阶段，plugins 在整个周期都起作用

**如何利用webpack来优化前端性能？**
代码压缩，js压缩:利用terser-webpack-plugincss压缩:利用了optimize-css-assets-webpack-plugin 插件
，删除了console、注释、空格、换行、没有使用的css代码等

## Webpack优化

### 提升打包构建速度

**开起 hmr**
devServer: {
hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
},

**oneOf**
打包时每个文件都会经过所有 loader 处理,比较慢，如果想要提升效率，就要只匹配一次，即匹配上了就不再往下匹配；

**Include/Exclude**
开发时我们需要使用第三方的库或插件，所有文件都下载到 node_modules 中了。而这些文件是不需要编译可以直接使用的。所以我们在对
js 文件处理时，要排除 node_modules 下面的文件。
babel编译：// exclude: /node_modules/, // 排除node_modules代码不编译
eslint检查： context: path.resolve(__dirname, "../src"), exclude: "node_modules", // 默认值

**Cache**
每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。我们可以缓存之前的 Eslint 检查 和 Babel
编译结果，这样第二次打包时速度就会更快了。
js编译： cacheDirectory: true, // 开启babel编译缓存
eslint检查： cache: true, // 开启缓存

**减少代码体积**
TreeShaking
Image Minimizer 图片进行压缩，减少图片体积

**优化代码运行性能**
Code Split，代码分割（Code Split）
主要做了两件事：
1、分割文件：将打包生成的文件进行分割，生成多个 js 文件。
2、按需加载：需要哪个文件就加载哪个文件；
// 代码分割配置
splitChunks: {
chunks: "all", // 对所有模块都进行分割
}

[//]: # (Webpack 原理系列十：HMR 原理全解析)
https://zhuanlan.zhihu.com/p/410510492

[//]: # (vite和webpack的区别)
https://worktile.com/kb/p/53689