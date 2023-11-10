//Liste des mots utilisés pour le jeu
function afficherProposition(MotAfficher){
   let zoneProposition=document.querySelector(".zoneProposition")
   zoneProposition.innerHTML=MotAfficher
}


function afficherEmail(nom,email,score){
  let mailto=`mailto:${email}+?subject=Partage du score Azerty&body=Salut, 
              je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
 location.href=mailto
}
function afficherResultat(score,nombreTotals){
  let zoneScore=document.querySelector(".zoneScore span")
  let affichageScore=`${score} / ${nombreTotals}`
  zoneScore.innerText=affichageScore
}

function validerNom(nom){
   if(nom.length >= 2)
   {
      return true
   }
   else{
      throw new Error("Le nom doit avoir au moins deux caractères !")
   }

}
function validerEmail(email){
   let emailRegEx=new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
   if(emailRegEx.test(email))
   {
      return true
   }
   else{
      throw new Error("L'email n'est pas valide !")
   }
}

function afficherMessageErreur(messageErr){
   let spanErreurMessage=document.getElementById("erreurMessage")
   if(!spanErreurMessage){
     let popup=document.querySelector(".popup")
     spanErreurMessage=document.createElement("span")
     spanErreurMessage.id="erreurMessage"
     popup.append(spanErreurMessage)
   }
   spanErreurMessage.innerText=messageErr
}

function gererFormulaire(score){
 try{
   let baliseNom=document.getElementById("nom")
   let nom = baliseNom.value
   validerNom(nom)

   let baliseEmail=document.getElementById("email")
   let email = baliseEmail.value
   validerEmail(email)

   afficherMessageErreur("")
   afficherEmail(nom,email,score)
   
}catch(error){
   afficherMessageErreur(error.message)
}
}



// function choisirPhrasesOuMots(){
//    let choix=prompt('Voulez-vous jouer avec les mots (Entrer "mots") ou les phrases (Entrer "phrases")?')
//    while( choix!== "mots" && choix!=="phrases" )
//    {
//       choix=prompt('Voulez-vous jouer avec les mots (Entrer "mots") ou les phrases (Entrer "phrases")?')
//    }
//    return choix
// }
// function lancerBoucleDeJeu(listeProposée)
// {
//       let score=0
//       for(let i=0 ; i<listeProposée.length ; i++)
//       {
//         let motUtilisateur=prompt("Entrer le mot :"+listeProposée[i])
//         if(motUtilisateur === listeProposée[i])
//         {
//          score++
//         }
//       }
//   return score
// }

function lancerJeu(){
   // // let choix=choisirPhrasesOuMots()
   // if(choix === "mots")
   // {
   //    score=lancerBoucleDeJeu(listeMots)
   //    nombreTotal = listeMots.length
   // }
   // else(choix==="phrases")
   // {
   //    score=lancerBoucleDeJeu(listePhrases)
   //    nombreTotal = listePhrases.length
   // }
   let score=0
   let i=0
   let listeProposition=listeMots

   let ValidateBouton = document.getElementById("btnValiderMot")
   let InputEcriture  = document.getElementById("inputEcriture")

   afficherProposition(listeProposition[i])
   ValidateBouton.addEventListener("click",()=>{
      console.log(InputEcriture.value)
      if( InputEcriture.value === listeProposition[i] )
      {
         score++
      }
      i++
      afficherResultat(score,i)
      InputEcriture.value=""
      if(listeProposition[i] === undefined)
      {
         afficherProposition("Le jeu est fini ")
         ValidateBouton.setAttribute("disabled","true")
        // ValidateBouton.disabled=true
      }
      else{
         afficherProposition(listeProposition[i])
      }
   })    

let optionChoix = document.querySelectorAll(".optionSource input")
for(let j=0 ; j< optionChoix.length ; j++)
{
      optionChoix[j].addEventListener("change",(event)=>{
       // Si c'est le premier élément qui a été modifié, alors nous voulons
            // jouer avec la listeMots. 
      if(event.target.value === "1")
      {
           listeProposition=listeMots
      }
      // Sinon nous voulons jouer avec la liste des phrases
      else
      {
           listeProposition=listePhrases
      }

      afficherProposition(listeProposition[i])
   })
   
    let form=document.querySelector("form")
    form.addEventListener("submit", (event)=>{
         event.preventDefault()
         let scoreEmail=`${score}/${i}`
         gererFormulaire(scoreEmail)
      
      
     

      
    })
}
   afficherResultat(score,i)
}

