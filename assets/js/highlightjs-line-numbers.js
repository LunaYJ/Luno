!function(n,e){"use strict";function t(){var n=e.createElement("style");n.type="text/css",n.innerHTML=g(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[v,L,b]),e.getElementsByTagName("head")[0].appendChild(n)}function r(t){"interactive"===e.readyState||"complete"===e.readyState?i(t):n.addEventListener("DOMContentLoaded",function(){i(t)})}function i(t){try{var r=e.querySelectorAll("code.hljs,code.nohighlight");for(var i in r)r.hasOwnProperty(i)&&l(r[i],t)}catch(o){n.console.error("LineNumbers error: ",o)}}function l(n,e){"object"==typeof n&&f(function(){n.innerHTML=s(n,e)})}function o(n,e){if("string"==typeof n){var t=document.createElement("code");return t.innerHTML=n,s(t,e)}}function s(n,e){e=e||{singleLine:!1};var t=e.singleLine?0:1;return c(n),a(n.innerHTML,t)}function a(n,e){var t=u(n);if(""===t[t.length-1].trim()&&t.pop(),t.length>e){for(var r="",i=0,l=t.length;i<l;i++)r+=g('<tr><td class="{0}"><div class="{1} {2}" {3}="{5}"></div></td><td class="{4}"><div class="{1}">{6}</div></td></tr>',[j,m,L,b,p,i+1,t[i].length>0?t[i]:" "]);return g('<table class="{0}">{1}</table>',[v,r])}return n}function c(n){var e=n.childNodes;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];h(r.textContent)>0&&(r.childNodes.length>0?c(r):d(r.parentNode))}}function d(n){var e=n.className;if(/hljs-/.test(e)){for(var t=u(n.innerHTML),r=0,i="";r<t.length;r++){var l=t[r].length>0?t[r]:" ";i+=g('<span class="{0}">{1}</span>\n',[e,l])}n.innerHTML=i.trim()}}function u(n){return 0===n.length?[]:n.split(y)}function h(n){return(n.trim().match(y)||[]).length}function f(e){n.setTimeout(e,0)}function g(n,e){return n.replace(/\{(\d+)\}/g,function(n,t){return e[t]?e[t]:n})}var v="hljs-ln",m="hljs-ln-line",p="hljs-ln-code",j="hljs-ln-numbers",L="hljs-ln-n",b="data-line-number",y=/\r\n|\r|\n/g;n.hljs?(n.hljs.initLineNumbersOnLoad=r,n.hljs.lineNumbersBlock=l,n.hljs.lineNumbersValue=o,t()):n.console.error("highlight.js not detected!")}(window,document);
