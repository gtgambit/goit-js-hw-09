function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");const l=document.querySelector(".form");let{delay:u,step:d,amount:a}=l;function f(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r({i:e,delay:t}):o({i:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault(),u=Number(u.value),d=Number(d.value),a=Number(a.value);for(let t=1;t<=a;t+=1)f(t,u).then((({i:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({i:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),u+=d}));
//# sourceMappingURL=03-promises.e16dbe88.js.map
