const presentation = document.getElementById("presentation");

const compteur = document.getElementById("compteur");



presentation.addEventListener("input", function(){

    compteur.textContent = this.value.length + "/250";

});





document.querySelector("form").addEventListener("submit", async function(e){


    e.preventDefault();



    const prenom = document.getElementById("prenom").value;

    const age = document.getElementById("age").value;

    const roblox = document.getElementById("roblox").value;

    const discord = document.getElementById("discord").value;

    const presentation = document.getElementById("presentation").value;




    const reponse = await fetch("/candidature", {


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify({


            prenom:prenom,

            age:age,

            roblox:roblox,

            discord:discord,

            presentation:presentation


        })


    });





    if(reponse.ok){


        alert("Votre candidature a été envoyée !");


        this.reset();


        compteur.textContent="0/250";


    }


});