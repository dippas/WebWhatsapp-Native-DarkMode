const darkMode = {
	el: {
		body: document.body
	},

	init() {
		window.addEventListener('load', () => this.el.body.classList.add('dark'))
	}
}
darkMode.init()