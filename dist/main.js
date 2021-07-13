(()=>{"use strict";const t=t=>{document.querySelectorAll(".button-nav").forEach((t=>{void 0!==t&&t.classList.remove("active")})),t.classList.add("active")};(()=>{const e=document.querySelector("#content");e.appendChild((()=>{const e=document.createElement("header");e.classList.add("header");const n=document.createElement("img");return n.classList.add("logo"),n.src="./images/logo.png",e.appendChild(n),e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("button-nav"),n.classList.add("active"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||t(n)}));const a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Menu",a.addEventListener("click",(e=>{e.target.classList.contains("active")||t(a)}));const s=document.createElement("button");return s.classList.add("button-nav"),s.textContent="Contact",s.addEventListener("click",(e=>{e.target.classList.contains("active")||t(s)})),e.appendChild(n),e.appendChild(a),e.appendChild(s),e})()),e})()),e.appendChild((()=>{const t=document.createElement("main");t.classList.add("main"),t.setAttribute("id","main");for(let e=1;e<=5;e++){const n=document.createElement("img");n.classList.add("sliderImg"),n.setAttribute("src",`./images/slide${e}.jpg`),n.setAttribute("id",`img${e}`),t.appendChild(n)}const e=document.createElement("p");return e.classList.add("paragraph"),e.textContent="\n    After six successful years in New York, chef Tom Colicchio brought Craft’s pioneering approach to the West Coast. Century City is now where you can enjoy Tom Colicchio’s signature ‘Whats Local Is Best’ cooking style and our ‘Make People Happy’ brand of hospitality. \n    \n    Craft’s emphasis on seasonal dining and warm hospitality has always been a natural West Coast fit and can now be enjoyed on our private patio or back in our Main Dining Room for safety-conscious dinner. CLA To-Go is back offering pickup & local delivery to help you fill your home tables with all your Tom Colicchio favorites.",t.appendChild(e),t})()),e.appendChild((()=>{const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent="Copyright © 2021 Me";const n=document.createElement("a");n.href="https://github.com/siIas";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),t.appendChild(e),t.appendChild(n),t})())})()})();