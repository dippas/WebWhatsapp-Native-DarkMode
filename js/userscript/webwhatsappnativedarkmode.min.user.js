// ==UserScript==
// @name         WebWhatsappNativeDarkMode
// @author       dippas
// @namespace    https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @homepage     https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @description  Add native darkmode to web whatsapp
// @version      1.1.0
// @supportURL   https://github.com/dippas/WebWhatsapp-Native-DarkMode/issues
// @downloadURL  https://raw.githubusercontent.com/dippas/WebWhatsapp-Native-DarkMode/master/js/userscript/webwhatsappnativedarkmode.min.user.js
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==


let currentDarkState;function startup(){setDarkStateImmediately(),chrome.storage.sync.get("isDarkModeActive",e=>{toggleTheme(currentDarkState=e.isDarkModeActive)})}function setDarkStateImmediately(){void 0!==currentDarkState&&toggleTheme(currentDarkState)}chrome.storage.onChanged.addListener(e=>{e.isDarkModeActive&&toggleTheme(currentDarkState=e.isDarkModeActive.newValue)});const observer=new MutationObserver(setDarkStateImmediately);function toggleTheme(e){observer.disconnect(),e?document.body.classList.add("dark"):document.body.classList.remove("dark"),addObserver()}function addObserver(){observer.observe(document.body,{attributes:!0,attributeFilter:["class"]})}window.addEventListener("load",startup),startup();