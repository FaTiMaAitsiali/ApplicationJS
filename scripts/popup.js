//afficher le popup pour partager le score
function afficherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    //La popup est masquer par defaut (display:none),ajouter la classe active 
    //pour changer son display et le rendre visible
    popupBackground.classList.add("active")
}
//cache le popup
function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    //la popup est masquer par defaut (display:none)
    //supprimer la classe active
    popupBackground.classList.remove("active")
}

function initAddEventListenerPopup(){
    let bntPartage=document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")

    bntPartage.addEventListener("click",()=>{
        afficherPopup()
    })
    popupBackground.addEventListener("click",(event)=>{
        if(event.target === popupBackground){
        cacherPopup()
        }
    })
}
