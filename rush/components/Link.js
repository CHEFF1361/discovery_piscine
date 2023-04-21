import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
export default function Link(container,data) {
    this.button = createElement(container,{tagName:"input",type:"button",value:data.name});
    this.button.addEventListener("click",()=> {
        appContext.get("setCVSelectado")(data.id);
        appContext.get("setPage")("cv");
    })
   
}