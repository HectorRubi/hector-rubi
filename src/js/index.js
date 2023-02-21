import HamburgerMenu from './utils/HamburguerMenu.js'
import Certificates from './utils/Certificates.js'
import dataCertificates from './data/dataCertificates.js'
import Projects from './utils/Projects.js'
import dataProjects from './data/dataProjects.js';

const menu = new HamburgerMenu()
const cert = new Certificates(dataCertificates)
const proj = new Projects(dataProjects)
