import HamburgerMenu from './utils/HamburguerMenu.js'
import Responsive from './plugins/Responsive.js'
import Certificates from './utils/Certificates.js'
import dataCertificates from './data/dataCertificates.js'
import Projects from './utils/Projects.js'
import dataProjects from './data/dataProjects.js';

const menu = new HamburgerMenu()
const resp = new Responsive(menu)

const cert = new Certificates(dataCertificates)
const proj = new Projects(dataProjects)