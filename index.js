!function(t){function e(o){if(s[o])return s[o].exports;var n=s[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var n=s(1),i=o(n);customElements.define("shaf-button",i.default)},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t){return t.pressure||t.force||t.webkitForce||1}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),r=o(i),u=s(2),a=o(u);e.default=(0,r.default)({attributeChangedCallback:function(t,e,s){this.rendered&&this.updateRendering()},connectedCallback:function(){this.button=document.querySelector("button"),this.classList.add("shaf-button"),this.relativeXRatio=.5,this.relativeYRatio=.5,this.rotateX,this.rotateY,this.extraScale=0,this.isMouseDown=!1,this.press=this.press.bind(this),this.unpress=this.unpress.bind(this),this.mousemove=this.mousemove.bind(this),this.button.addEventListener("blur",this.unpress),this.button.addEventListener("mousedown",this.press),this.button.addEventListener("touchstart",this.press),this.button.addEventListener("mousemove",this.mousemove),this.button.addEventListener("touchmove",this.mousemove),this.button.addEventListener("webkitmouseforcedown",this.mousemove),this.button.addEventListener("webkitmouseforcechanged",this.mousemove)},detachedCallback:function(){this.button.removeEventListener("blur",this.unpress),this.button.removeEventListener("mousedown",this.press),this.button.removeEventListener("mousemove",this.mousemove),this.button.removeEventListener("webkitmouseforcedown",this.mousemove),this.button.removeEventListener("webkitmouseforcechanged",this.mousemove)},press:function(t){this.isMouseDown=!0,this.extraScale=n(t)-1,this.button.style.transform="perspective(500px) rotateX("+this.rotateY*-1+"deg) rotateY("+this.rotateX+"deg) scale("+(.98-.05*this.extraScale)+")",document.addEventListener("mouseup",this.unpress)},unpress:function(){var t=this;this.isMouseDown=!1,this.button.style.transform="perspective(500px) rotateX("+1.1*this.rotateY+"deg) rotateY("+this.rotateX*-1.1+"deg) scale("+(1.02+.04*this.extraScale)+")",setTimeout(function(){t.button.style.transform="rotateX(0deg) rotateY(0deg) scale(1)"},100),document.removeEventListener("blur",this.unpress)},mousemove:function(t){this.extraScale=n(t)-1,this.relativeXRatio=(t.pageX-this.button.offsetLeft)/this.button.offsetWidth,this.relativeYRatio=(t.pageY-this.button.offsetTop)/this.button.offsetHeight,this.rotateX=-5+10*this.relativeXRatio,this.rotateY=-5+10*this.relativeYRatio,this.isMouseDown&&this.press(t)}}),document.addEventListener("DOMContentLoaded",function(){var t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(a.default)),document.head.insertBefore(t,document.head.firstChild)})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n.shaf-button {\n  transition: transform 0.05s;\n  transform: rotateX(0deg) rotateY(0deg);\n  will-change: transform;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-transform: translateZ(0px);\n  -webkit-font-smoothing: subpixel-antialiased;\n}"},function(t,e){function s(t){function e(){var t="undefined"!=typeof Reflect?Reflect.construct(HTMLElement,[],e):HTMLElement.call(Object.create(e.prototype));return t.initialize&&t.initialize(),t}return Object.setPrototypeOf(e,HTMLElement),e.prototype=Object.create(HTMLElement.prototype),Object.keys(t).forEach(function(s){e.prototype[s]=t[s]}),e}t.exports=s}]);