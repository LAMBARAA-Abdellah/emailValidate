const erreur=document.querySelector(".erreur");
const input=document.querySelector("input"),
emailIcon=document.querySelector(".email-icon");
input.addEventListener("keyup",()=>{
    //regex pour verifier si l'email est valide
    let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value===""){
        //display none pour cacher erreur
        emailIcon.classList.replace("uil-check-circle","uil-envelope");
      emailIcon.style.color="#b4b4b4";
      erreur.style.color="green";

    }
   if(input.value.match(pattern)){
      emailIcon.classList.replace("uil-envelope","uil-check-circle");
      erreur.innerHTML=".  Email valide";
         emailIcon.style.color="green";
         //Display block pour afficher erreur
         
         erreur.style.color="green";
   }  
    else{
        emailIcon.classList.replace("uil-check-circle","uil-envelope");
       
         erreur.innerHTML=".  Email invalide";

      emailIcon.style.color="#de0611";
    } 
    
})