
function createElement(data = {
    container:document.body,
    tagName: "",
    id: "",
    className: "",
    innerHTML: "",
    style:"",
    type:"",
    value:""
}) {

    let newElement = document.createElement(data.tagName);
    if(data.className) newElement.className = data.className;
    if(data.id) newElement.id = data.id;
    if(data.innerHTML) newElement.innerHTML = data.innerHTML;
    if(data.value) newElement.value = data.value;
    if(data.type) newElement.type = data.type;
    if(data.style) newElement.style.cssText = data.style;
    data.container.appendChild(newElement);
    return newElement;
}

let list;

function Todo(container,name = "",id = 0) {
    this.name = name;
    this.id = id;
    this.container = createElement({container,tagName:"div",className:"todo_container",innerHTML:name});
    this.container.addEventListener("click",()=> {
        list.removeItem(this.id);
    })
}


function List(data = []) {
    this.data = data;
    this.add = createElement({container:document.body,tagName:"input",type:"button",value:"New",className:"add"})
    this.container = createElement({container:document.body,tagName:"div",className:"list_container"});
    this.add.addEventListener("click",()=> {
        this.addNewTodo();
    })

    this.setList();
    
} 
List.prototype.setList = function() {
    this.container.innerHTML = "";
    this.todos = this.data.map(t => new Todo(this.container,t.name,t.id));
        
}
List.prototype.addNewTodo = function() {
    let name = prompt();
    let data = [];
    data.push({name,id: 0});
    this.data.forEach((d,index) => {
        data.push({name:d.name,id:index+1});
    })
    this.data = data;
    this.setList();
    localStorage.setItem("data",JSON.stringify(this.data));
}  
List.prototype.removeItem = function(id) {
    let c = confirm("Estas segur@?");
    if(c) {
        this.data = this.data.filter(d => d.id !== id);
        this.setList();
        localStorage.setItem("data",JSON.stringify(this.data));
    }
}

list = new List(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []);