import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
import  Inicio  from "./Inicio.js";
import CV from "./CV.js";
export default function App(usersData = []) {
    this.usersData = usersData;
    this.container = createElement(document.body,{tagName:"div",className:"app_container"});
    this.cvSelectado = null;
    this.pages = {
        inicio: new Inicio(),
        cv: new CV()
    }
    appContext.set("container",this.container);
    appContext.set("setPage",this.setPage.bind(this));
    appContext.set("getCVSelectado",this.getCVSelectado.bind(this));
    appContext.set("setCVSelectado",this.setCVSelectado.bind(this));
    this.setPage("inicio");
}
App.prototype.setCVSelectado = function(id = 0) {
    this.usersData.forEach(ud => {
        if(ud.id == id) this.cvSelectado = ud;
    })
}
App.prototype.getCVSelectado = function() {
    return this.cvSelectado;
}
App.prototype.setPage = function(pageName) {
    this.container.innerHTML = "";
    this.pages[pageName].set();
}
