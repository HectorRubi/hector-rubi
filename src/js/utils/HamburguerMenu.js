class HamburguerMenu {
  constructor() {
    this.toggleMenu = this.toggleMenu.bind(this)
    this._initHamburguerMenu()
  }

  _initHamburguerMenu() {
    this.section = document.getElementById('menuSection')
    this.button = document.getElementById('menuButton')
    this.addElementsListeners();
  }

  addElementsListeners() {
    this.button.addEventListener('click', this.toggleMenu)
  }

  removeElementsListeners() {
    this.button.removeEventListener('click', this.toggleMenu)
  }

  showMenu() {
    this.section.classList.add('left-0')
    this.section.classList.remove('-left-full')
  }

  hideMenu() {
    this.section.classList.remove('left-0')
    this.section.classList.add('-left-full')
  }

  toggleMenu() {
    this.section.classList.contains('left-0')
      ? this.hideMenu()
      : this.showMenu()
  }
}

export default HamburguerMenu