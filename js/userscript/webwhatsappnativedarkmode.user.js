// ==UserScript==
// @name         WebWhatsappNativeDarkMode
// @author       dippas
// @namespace    https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @homepage     https://github.com/dippas/WebWhatsapp-Native-DarkMode/
// @description  Add native darkmode to web whatsapp
// @version      1.1.1
// @supportURL   https://github.com/dippas/WebWhatsapp-Native-DarkMode/issues
// @downloadURL  https://raw.githubusercontent.com/dippas/WebWhatsapp-Native-DarkMode/master/js/userscript/webwhatsappnativedarkmode.user.js
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==


let currentDarkState

function startup() {
	setDarkStateImmediately()
	chrome.storage.sync.get('isDarkModeActive', storage => {
		currentDarkState = storage.isDarkModeActive
		toggleTheme(currentDarkState)
	})
}

function setDarkStateImmediately() {
	if (typeof currentDarkState !== 'undefined')
		toggleTheme(currentDarkState)

}

chrome.storage.onChanged.addListener(changes => {
	if (changes.isDarkModeActive) {
		currentDarkState = changes.isDarkModeActive.newValue
		toggleTheme(currentDarkState)
	}
})

const observer = new MutationObserver(setDarkStateImmediately)

function toggleTheme(state) {
	observer.disconnect()
	state ? document.body.classList.add('dark') : document.body.classList.remove('dark')
	addObserver() 
}

function addObserver() {
	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ["class"],
	})
}

window.addEventListener('load', startup)
startup()