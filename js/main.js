const list = document.querySelectorAll(".services__li")

list.forEach(element => {
	element.addEventListener("click", () => {
		element.classList.toggle('active')

		const text = element.querySelector('.service__description')

		text.classList.toggle('active')
	})
});