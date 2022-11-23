
let isCollapseActive = false;

class Collapse {
    constructor(arrowId, conteudo) {
        this.arrowId = arrowId;
        this.arrowObj;
        this.conteudo = document.getElementById(`${conteudo}`);
        this.parent = this.conteudo.parentElement;
        this.isOpen = true;
    }

    addEvent() {
        let obj = this;
        let arrow = document.createElement("i");
        arrow.className = "fa-solid fa-chevron-down";
        arrow.id = this.arrowId;
        this.parent.appendChild(arrow);
        this.arrowObj = document.getElementById(this.arrowId);

        this.arrowObj.addEventListener("click", function () {
            obj.collapseFunction(obj)
        })
    }

    collapseFunction(obj) {
        if (isCollapseActive) {
            if (obj.isOpen) {       
                obj.conteudo.animate({
                    height: ["0px", "150px", "300px", "450px", `${obj.conteudo.offsetHeight}px`],
                    opacity: ["0","0","0","0","0","0", "1"]
                }, { duration: 300, interations: 1, direction: "reverse"});
                obj.arrowObj.style.transform = "rotate(0deg)";

                obj.isOpen = false;
                setTimeout(() => {
                    obj.conteudo.style.display = "none";
                }, 275);
            } else {
                obj.conteudo.style.display = "flex";
                obj.conteudo.animate({
                    height: ["0px", "150px", "300px", "450px", `${obj.conteudo.offsetHeight}px`],
                    opacity: ["0","0","0","0","0","0", "1"]
                }, { duration: 300, interations: 1});
                obj.arrowObj.style.transform = "rotate(180deg)";
                obj.isOpen = true;
            }
        } else {
            obj.conteudo.style.display = "flex";
            obj.isOpen = true;
        }

    }
}

let collapseSabado = new Collapse("sabado", "programacao-sabado");
let collapseDomingo = new Collapse("domingo", "programacao-domingo");

document.addEventListener("DOMContentLoaded", setCollapses);
window.addEventListener("resize", setCollapses);

function setCollapses() {
    if (isCollapseActive == false) {
        if (window.innerWidth <= 997) {
            isCollapseActive = true;
            console.log(collapseSabado)
            collapseSabado.addEvent()
            collapseDomingo.addEvent()
            collapseSabado.collapseFunction(collapseSabado)
            collapseDomingo.collapseFunction(collapseDomingo)
            console.log(isCollapseActive)
        }
    } else if (window.innerWidth > 997) {
        isCollapseActive = false;
        collapseSabado.arrowObj.remove()
        collapseDomingo.arrowObj.remove()
        collapseSabado.collapseFunction(collapseSabado)
        collapseDomingo.collapseFunction(collapseDomingo)
    }

}