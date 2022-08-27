
const addImageSlider = (function () {
  const container = document.querySelector('.carousel')
  const pictureFrame = document.createElement('div')
  pictureFrame.classList.add('picture-frame')
  container.appendChild(pictureFrame)
  
	const addImages = (function () {
		for (let index = 0; index < 5; index++) {
			const image = document.createElement('img')
			image.setAttribute('src', `https://picsum.photos/300?random=${index + 1}`)
			image.classList.add('picture-frame-img')
			pictureFrame.appendChild(image)
		}	
	})()
	
	const addControlButtons = (function () {		
		const images = document.querySelectorAll('.picture-frame-img')
		
		const addControlContainer = (function () {
			const div = document.createElement('div')
			div.classList.add('control')
			container.appendChild(div)
			
			return {div}
		})()
		
		const addControlButtons = (function () {
			const div = addControlContainer.div
			let imagePosition = 100
			
			for (let index = 0; index < images.length; index++) {
				const button = document.createElement('button')
				button.setAttribute('data-position', `${imagePosition}px`)
				imagePosition -= 400
				div.appendChild(button)
			}
		})()
		
		const moveImages = (function () {
			const position = getComputedStyle(pictureFrame).getPropertyValue('left')
			const positionNumber = position.substring(0, position.length - 2)
			let newPositionNumber = positionNumber
			let interval = setInterval(slide, 5000)
			
			function slide() {		
				const prevPositionNumber = newPositionNumber
				if (newPositionNumber === -1500) {
					newPositionNumber = 100
				} else {
					newPositionNumber -= 400
				}
				
				const addAnimation = (function () {
					const animation = [
						{left: `${prevPositionNumber}px`},
						{left: `${newPositionNumber}px`}
					]
					const animationOption = {
						duration: 750,
						itineration: 1
					}
					
					pictureFrame.animate(animation, animationOption)
				})()
				
				pictureFrame.style.left = `${newPositionNumber}px`
			}
			
			const showImageOnClick = (function () {
				const buttons = document.querySelectorAll('.control button')
				buttons.forEach((button) => {
					const dataAttribute = button.getAttribute('data-position')
					const animation = [
						{left: position},
						{left: dataAttribute}
					]
					const animation2 = [
						{left: dataAttribute},
						{left: '100px'}
					]
					const animationOption = {
						duration: 750,
						itineration: 1
					}
					
					button.addEventListener('click', () => {
						interval = clearInterval(interval)
						button.classList.add('isActive')
						pictureFrame.animate(animation, animationOption)
						pictureFrame.style.left = dataAttribute
						setTimeout(() => {
							newPositionNumber = 100
							prevPositionNumber = -1500
							pictureFrame.style.left = '100px'
							pictureFrame.animate(animation2, animationOption)
							button.classList.remove('isActive')
							setTimeout(() => {
								interval = setInterval(slide, 5000)
							}, 750)
						}, 5000)
					})
				})
			})()
			
		})()
		
	})()
	
})()
