
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