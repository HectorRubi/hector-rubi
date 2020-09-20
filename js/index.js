(function(){
  // Hamburger menu
  const menuSection = document.getElementById('menuSection')
  const menuButton = document.getElementById('menuButton')
  const menuCloseButton = document.getElementById('menuCloseButton')
  const ipad = window.matchMedia('screen and (max-width: 768px)')

  const hideShow = event => {
    event.preventDefault()
    menuSection.classList.contains('show')
      ? menuSection.classList.remove('show')
      : menuSection.classList.add('show')
  }

  const validation = (event) => {
    if (event.matches) {
      menuButton.addEventListener('click', hideShow)
      menuCloseButton.addEventListener('click', hideShow)
    } else {
      menuButton.removeEventListener('click', hideShow)
      menuCloseButton.removeEventListener('click', hideShow)
    }
  }

  ipad.addListener(validation)
  validation(ipad)
})()