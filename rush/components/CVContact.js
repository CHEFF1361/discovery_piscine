import createElement from "../js/createElement.js";

export default function CVContact(container,data) {
    this.container = createElement(container,{tagName:"div",id:"contact",className:"cvContact_container"})
    this.container_s = createElement(this.container,{tagName:"div",className:"cvContact_container_s"});
    this.contact_container = createElement(this.container_s,{tagName:"div",className:"contact_container"});
    this.msg_container = createElement(this.container_s,{tagName:"div",className:"msg_container"});
    this.name = createElement(this.contact_container,{tagName:"h1",innerHtml:data.nombre});
    this.email = createElement(this.contact_container,{tagName:"h1",innerHtml:data.email});
    this.telefono = createElement(this.contact_container,{tagName:"h1",innerHtml:data.telefono});
    this.linkedin = createElement(this.contact_container,{tagName:"h1",innerHtml:data.linkedin});

    this.inputName = createElement(this.msg_container,{tagName:"input",type:"text",atrubuts:[{name:"placeholder",value:"Nombre y Apellido"}]});
    this.inputEmail = createElement(this.msg_container,{tagName:"input",type:"text",atrubuts:[{name:"placeholder",value:"email"}]});
    this.inputmensaje = createElement(this.msg_container,{tagName:"textarea",atrubuts:[{name:"placeholder",value:"Mensaje"}]});
    this.submit = createElement(this.msg_container,{tagName:"input",type:"submit"});

}