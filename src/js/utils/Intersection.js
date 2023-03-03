class Intersection {
  constructor() {
    this.__initObserverFor('animate__fadeInLeft', 'animate__fadeOutLeft')
    this.__initObserverFor('animate__fadeInUp', 'animate__fadeOutUp')
    this.__initObserverFor('animate__fadeInRight', 'animate__fadeOutRight')
  }

  __initObserverFor(inClass, outClass) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(inClass)
          entry.target.classList.remove(outClass)
        } else {
          entry.target.classList.remove(inClass)
          entry.target.classList.add(outClass)
        }
      });
    })
    const elements = document.querySelectorAll('.' + inClass)
    elements.forEach(el => observer.observe(el))
  }
  
}

export default Intersection
