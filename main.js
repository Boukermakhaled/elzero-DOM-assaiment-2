let element = document.querySelector(".our-element");
document.querySelector("p").remove();

let befor = document.createElement("div");
let afte= document.createElement("div");

element.before(befor);
element.after(afte);

befor.className="start";
befor.title="start element";
befor.setAttributeNode(document.createAttribute("data-value"));
befor.setAttribute("data-value","start");
befor.innerHTML="Start";

afte.className="end";
afte.title="end element";
afte.setAttributeNode(document.createAttribute("data-value"));
afte.setAttribute("data-value","end");
afte.innerHTML="end";

// document.body.appendChild(before);
// document.body.appendChild(after);
