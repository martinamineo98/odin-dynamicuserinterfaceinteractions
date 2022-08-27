
const dropdownMenu = (function () {
  const menuParents = document.querySelectorAll('.menu-parent')
  const menuChildren = document.querySelectorAll('.menu-child')

  function turnInvisible () {
    menuChildren.forEach((child) => child.classList.remove('isVisible'))
  }

  menuParents.forEach((parent) => {
    parent.addEventListener('click', () => {
      const child = parent.querySelector('ul.menu-child')
      turnInvisible()
      child.classList.add('isVisible')
    })
  })
})()
