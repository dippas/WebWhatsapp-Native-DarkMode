let themeCheckbox

function setThemeStateInStorage() {
	chrome.storage.sync.set({
		isDarkModeActive: themeCheckbox.checked
	})
}

function useStoredOptionsForDisplayInDOM() {
	chrome.storage.sync.get({ isDarkModeActive: true }, items => {
		themeCheckbox.checked = items.isDarkModeActive
	})
}

function startup() {
	themeCheckbox = document.querySelector(".js-toggle-theme")
	themeCheckbox.addEventListener("change", setThemeStateInStorage)
	useStoredOptionsForDisplayInDOM()
}

window.addEventListener('DOMContentLoaded', startup)