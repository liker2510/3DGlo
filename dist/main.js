(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),a=e=>e>=0&&e<10?"0"+e:e;let r=setInterval((()=>{(()=>{let e=(()=>{let e=(new Date("03 december 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=a(e.hours),o.textContent=a(e.minutes),c.textContent=a(e.seconds),e.timeRemaining<0&&(clearInterval(r),t.textContent="00",o.textContent="00",c.textContent="00")})()}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body");t.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.closest(".close-btn")||t.target.matches("menu>ul>li>a")?e.classList.toggle("active-menu"):t.target.matches("menu")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{const t=window.screen.width;e.style.cssText="display: block;",t>="767"&&function(){e.style.cssText="display: block;opacity: 0;";let t=0;for(;t<=1;)!function(t){setTimeout((function(){e.style.opacity=t}),60+1e3*t)}(t),t+=.1}()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.cssText="display: none;")}))})(),document.querySelectorAll(".calc-block>input").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),document.body.addEventListener("input",(e=>{"user_name"===e.target.name?e.target.value=e.target.value.replace(/[^а-яА-Я\-\s]+/,""):"user_email"===e.target.name?e.target.value=e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/,""):"user_phone"===e.target.name?e.target.value=e.target.value.replace(/[^0-9\-()]+/,""):"user_message"===e.target.name&&(e.target.value=e.target.value.replace(/[^а-яА-Я\-\s]+/,""))})),(()=>{const e=document.getElementById("service-block");document.querySelector("a").addEventListener("click",(()=>{e.scrollIntoView({block:"center",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t)=>{if(".portfolio-content"===e&&".portfolio-item"===t){const o=document.querySelector(e),c=document.querySelectorAll(t),a=document.querySelector(".portfolio-dots");let r,n=document.querySelectorAll(".dot"),s=2e3,l=0;for(let e=0;e<c.length;e++){const t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),a.append(t),n=document.querySelectorAll(".dot")}const i=(e,t,o)=>{e[t].classList.remove(o)},d=(e,t,o)=>{e[t].classList.add(o)},u=()=>{i(c,l,"portfolio-item-active"),i(n,l,"dot-active"),l++,l>=c.length&&(l=0),d(c,l,"portfolio-item-active"),d(n,l,"dot-active")},m=(e=1500)=>{r=setInterval(u,e)},v=()=>{clearInterval(r)};o.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(i(c,l,"portfolio-item-active"),i(n,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=c.length?l=0:l<0&&(l=c.length-1),d(c,l,"portfolio-item-active"),d(n,l,"dot-active"))})),o.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&v()}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(s)}),!0),m(s)}})(".portfolio-content",".portfolio-item")})();