import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
export default function CVInicio(container,data) {
    this.container = createElement(container,{tagName:"div",id:"inicio",className:"cvInicio_container"});
    this.image = createElement(this.container,{tagName:"img",atrubuts:[{name:"src",value:`./images/${data.image}`}]});
    this.name = createElement(this.container,{tagName:"h1",innerHtml:data.name});
    this.title = createElement(this.container,{tagName:"h2",innerHtml:data.title});
    this.sobreMi = createElement(this.container,{tagName:"p",innerHtml:data.sobreMi});
    this.cv = createElement(this.container,{tagName:"div",className:"cvInicio_cv",innerHtml:"Descargar CV"});

    
}
