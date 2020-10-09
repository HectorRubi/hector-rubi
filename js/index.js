import HamburgerMenu from './HamburguerMenu.js';
import Responsive from './plugins/Responsive.js';
import Certificates from './Certificates.js'
import dataCertificates from './data/dataCertificates.js'

const menu = new HamburgerMenu();
const resp = new Responsive(menu);

const cert = new Certificates(dataCertificates)
cert.renderCode();