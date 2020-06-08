// ==UserScript==
// @name         WebWhatsappNativeDarkMode
// @author       dippas
// @namespace    https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @homepage     https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @description  Add native darkmode to web whatsapp
// @version      1.0
// @supportURL   https://github.com/dippas/WebWhatsapp-Native-DarkMode/issues
// @downloadURL  https://raw.githubusercontent.com/dippas/WebWhatsapp-Native-DarkMode/master/js/userscript/webwhatsappnativedarkmode.min.user.js
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==


const darkMode={el:{body:document.body},init(){window.addEventListener('load',()=>this.el.body.classList.add('dark'))}}
darkMode.init()