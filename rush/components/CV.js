import createElement from "../js/createElement.js";
import Navegacion from "./Navegacion.js";
import appContext from "./appContext.js";
import CVInicio from "./CVInicio.js";
import CVSobreMi from "./CVSobreMi.js";
import CVContact from "./CVContact.js";
export default function CV() {
   
}
CV.prototype.set = function() {
    this.cvSelectadoData = appContext.get("getCVSelectado")();
    this.navegacion = new Navegacion(this.cvSelectadoData.navegacion);
    this.container = createElement(appContext.get("container"),{tagName:"div",className:"cv_container"});
    this.inicio = new CVInicio(this.container,this.cvSelectadoData.inicio);
    this.sobreMi = new CVSobreMi(this.container,this.cvSelectadoData.sobreMi);
    this.contact = new CVContact(this.container,this.cvSelectadoData.contact);
}