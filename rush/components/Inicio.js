import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
import data from "../js/data.js";
import Link from "./Link.js";
export default function Inicio() {
    
}

Inicio.prototype.set = function() {
    let appContainer = appContext.get("container");
    this.container_image = createElement(appContainer,{tagName:"div",className:"inicio_container_image"})
    this.container = createElement(this.container_image,{tagName:"div",className:"inicio_container"});
    this.titulo = createElement(this.container,{tagName:"h1",className:"inicio_titulo",innerHtml:"MI PRIMERA APLICACION"})
    this.linksContainer = createElement(this.container,{tagName:"div",className:"links_container"});
    this.links = data.map(cv => {
        new Link(this.linksContainer,cv.link);
    })
}