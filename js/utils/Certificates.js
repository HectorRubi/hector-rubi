class Certificates {
  constructor(certificates) {
    this.certificates = certificates
    this.renderCode()
  }

  __buildSimpleCertified(certified) {
    let code = `
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <article class="certifications__element">
          <figure class="certifications__element--image">
            <img src="${certified.image}" alt="Certified">
          </figure>
          <div class="certifications__element--container">
            <h3 class="certifications__element--title">${certified.name}</h3>
            <p class="certifications__element--description">${certified.description}</p>
          </div>
        </article>
      </div>
    `;
    return code
  }

  __buildAllCertificates(){
    let code = ''
    this.certificates.forEach((certified) => {
      const element = this.__buildSimpleCertified(certified)
      code += element
    })
    return code
  }

  renderCode() {
    const code = this.__buildAllCertificates()
    const container = document.querySelector('.certifications__container')
    container.innerHTML = code
  }
}

export default Certificates