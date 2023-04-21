import createElement from "../js/createElement.js";
import appContext from "./appContext.js";

function Icon(container,data) {
    this.name = data.name;
    this.icon = createElement(container,{tagName:"span",className:"material-symbols-rounded",innerHtml:data.icon});
    this.icon.addEventListener("click",()=> {
        let c = document.getElementById(this.name); 
        c.scrollIntoView({behavior: "smooth"});
       
    })
}

export default function Navegacion(data = []) {
    this.container = createElement(appContext.get("container"),{tagName:"div",className:"navegacion_container"});
    this.icons = data.map(d => new Icon(this.container,d));
}