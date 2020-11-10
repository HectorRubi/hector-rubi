class HamburguerMenu {
  constructor() {
    this._initHamburguerMenu()
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  _initHamburguerMenu() {
    this.section = document.getElementById('menuSection')
    this.button = document.getElementById('menuButton')
    this.closeLink = document.getElementById('menuCloseButton')
  }

  addElementsListeners() {
    this.button.addEventListener('click', this.toggleMenu)
    this.closeLink.addEventListener('click', this.toggleMenu)
  }

  removeElementsListeners() {
    this.button.removeEventListener('click', this.toggleMenu)
    this.closeLink.removeEventListener('click', this.toggleMenu)
  }

  showMenu() {
    this.section.classList.add('show')
  }

  hideMenu() {
    this.section.classList.remove('show')
  }

  toggleMenu() {
    this.section.classList.contains('show')
      ? this.hideMenu()
      : this.showMenu()
  }
}

export default HamburguerMenu