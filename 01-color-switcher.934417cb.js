!function(){var t={startBt:document.querySelector("[data-start]"),stopBt:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")},e=null;t.startBt.addEventListener("click",(function(){e=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBt.setAttribute("disabled",""),t.startBt.removeAttribute("disabled")})),t.stopBt.addEventListener("click",(function(){clearInterval(e),t.stopBt.setAttribute("disabled",""),t.startBt.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.934417cb.js.map
