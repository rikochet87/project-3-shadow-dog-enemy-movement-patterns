function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=i.parcelRequire18c0;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},i.parcelRequire18c0=s),s.register("27Lyk",(function(t,i){var r,n;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var s={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},n=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("27Lyk").register(JSON.parse('{"f07M4":"index.1709a972.js","lvKGp":"enemy_bat_1.be52fb07.png"}'));var h;h=new URL(s("27Lyk").resolve("lvKGp"),import.meta.url).toString();const o=document.getElementById("canvas1"),a=o.getContext("2d");CANVAS_WIDTH=o.width=500,CANVAS_HEIGHT=o.height=900;const d=[];const l=function(e){const t=new Image;return t.src=e,t}(t(h));let f=0;class u{constructor(){this.spriteWidth=83,this.spriteHeight=44,this.width=this.spriteWidth,this.height=this.spriteHeight,this.x=Math.random()*(o.width-this.width),this.y=Math.random()*(o.height-this.height),this.frame=0,this.flapSpeed=Math.floor(3*Math.random()+1)}update(){this.x+=5*Math.random()-2.5,this.y+=5*Math.random()-2.5,f%this.flapSpeed==0&&(this.frame>4?this.frame=0:this.frame++)}draw(){a.drawImage(l,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)}}for(let e=0;e<100;e++)d.push(new u);!function e(){a.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),d.forEach((e=>{e.update(),e.draw()})),f++,requestAnimationFrame(e)}();
//# sourceMappingURL=index.1709a972.js.map
