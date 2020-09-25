class Responsive {
  constructor(menu) {
    this.menu = menu
    this.matchListener = this.matchListener.bind(this)
    this._initResponsive()
  }
  
  _initResponsive() {
    this.sm = window.matchMedia('screen and (max-width: 768px)')
    this.sm.addListener(this.matchListener)
    this.matchListener(this.sm)
  }

  matchListener(event) {
    if (event.matches) {
      this.menu.addElementsListeners()
    } else {
      this.menu.removeElementsListeners()
    }
  }
}

export default Responsive