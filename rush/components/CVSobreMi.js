import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
export default function CVSobreMi(container,data) {
    this.container = createElement(container,{tagName:"div",id:"sobremi",className:"cvSobreMi_container"});
    this.title = createElement(this.container,{tagName:"h1",innerHtml:data.title})
    this.sobreMi = createElement(this.container,{tagName:"p",innerHtml:data.sobreMi});
}
