import menuData from "../json/menu.json"
import markup from "../template/markupTpl.hbs"

const menu = document.querySelector('.js-menu')
menu.innerHTML = markup(menuData)