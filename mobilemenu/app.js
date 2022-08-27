
const addButtonAnimation = (function () {
	const menuUl = document.querySelector('.menu ul')
	const button = document.querySelector('.menu button')
				button.addEventListener('click', () => {
					button.classList.toggle('isAnimation')
					menuUl.classList.toggle('isVisible')
					setTimeout(() => button.classList.toggle('isAnimation'), 750)
				})
})()
