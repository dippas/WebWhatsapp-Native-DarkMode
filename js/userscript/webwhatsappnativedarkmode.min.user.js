// ==UserScript==
// @name        WebWhatsappNativeDarkMode
// @author      dippas
// @namespace   https://github.com/dippas/
// @homepage    https://github.com/dippas/
// @description Add native darkmode to web whatsapp
// @version     1.0
// @match       https://web.whatsapp.com/*
// @grant       none
// ==/UserScript==


const darkMode={el:{body:document.body},init(){window.addEventListener('load',()=>this.el.body.classList.add('dark'))}}
darkMode.init()