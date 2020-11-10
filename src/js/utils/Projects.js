class Projects {
  constructor(projects) {
    this.projects = projects
    this.renderCode()
  }

  __buildSimpleProject(project, reverse) {
    const content = `
      <div class="project__element--content ${reverse ? 'right' : 'left'}">
        <h3 class="project__element--title">${project.title}</h3>
        <ul class="project__element--info">
          <li>${project.technologies}</li>
          <li>${project.date}</li>
        </ul>
        <p class="project__element--description">${project.description}</p>
        <div class="project__element--link">
          <a href="${project.link}" target="_blank" rel="noreferrer">${project.linkName}</a>
        </div>
      </div>
    `
    const image = `
      <figure class="projects__element--image">
        <img src="${project.image}" alt="Proyecto ${project.title}">
      </figure>
    `
    const code = `
      <article class="projects__element ${reverse ? 'reverse' : ''}">
        ${reverse ? content + image : image + content }
      </article>
    `
    return code
  }

  __buildAllProjects() {
    let code = ''
    this.projects.forEach((project, index) => {
      let reverse = false
      if ((index % 2) !== 0) {
        reverse = true
      }
      const element = this.__buildSimpleProject(project, reverse)
      code += element
    })
    return code
  }

  renderCode() {
    const code = this.__buildAllProjects()
    const container = document.querySelector('.projects__container')
    container.innerHTML = code
  }
}

export default Projects