/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,s){var o,l,a,u,f="modernizr",c=i("div"),d=p();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=s?s[r]:f+(r+1),c.appendChild(a);return o=i("style"),o.type="text/css",o.id="s"+f,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),l=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!l}function d(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(u(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+u(n[s])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return t}function m(e,n,s,o){function u(){p&&(delete T.style,delete T.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var f=d(e,s);if(!r(f,"undefined"))return f}for(var p,c,m,y,v,g=["modernizr","tspan","samp"];!T.style&&g.length;)p=!0,T.modElem=i(g.shift()),T.style=T.modElem.style;for(m=e.length,c=0;m>c;c++)if(y=e[c],v=T.style[y],l(y,"-")&&(y=a(y)),T.style[y]!==t){if(o||r(s,"undefined"))return u(),"pfx"==n?y:!0;try{T.style[y]=s}catch(h){}if(T.style[y]!=v)return u(),"pfx"==n?y:!0}return u(),!1}function y(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?y(s,t||n):s);return!1}function g(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+j.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,s,o):(l=(e+" "+k.join(i+" ")+i).split(" "),v(l,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=b;var P="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",P||z);var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style});var N="Moz O ms Webkit",j=w._config.usePrefixes?N.split(" "):[];w._cssomPrefixes=j;var k=w._config.usePrefixes?N.toLowerCase().split(" "):[];w._domPrefixes=k,w.testAllProps=g,w.testAllProps=h,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=i("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);