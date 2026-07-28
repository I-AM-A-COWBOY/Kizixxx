const WEBHOOK_URL = "https://discord.com/api/webhooks/1515735682172059648/Dw2flP7ipuG10pzMvq1ExS06enrA8Ih9_-ax2PQrkGpodHrcd6rAQKnQs2eegT_RLO6w";


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




    const message = {

        username: "Nova Recruit",

        embeds: [

            {

                title: "📩 Nouvelle candidature",

                color: 3447003,

                fields: [

                    {
                        name: "👤 Prénom",
                        value: prenom,
                        inline: true
                    },

                    {
                        name: "🎂 Âge",
                        value: age,
                        inline: true
                    },

                    {
                        name: "🎮 Pseudo Roblox",
                        value: roblox,
                        inline: false
                    },

                    {
                        name: "💬 Discord",
                        value: discord,
                        inline: false
                    },

                    {
                        name: "📝 Présentation",
                        value: presentation,
                        inline: false
                    }

                ],

                footer: {

                    text: "Système de recrutement"

                }

            }

        ]

    };





    const reponse = await fetch(WEBHOOK_URL, {


        method: "POST",


        headers: {

            "Content-Type": "application/json"

        },


        body: JSON.stringify(message)


    });





    if(reponse.ok){


        alert("Candidature envoyée !");


        this.reset();


        compteur.textContent = "0/250";


    }

    else{


        alert("Erreur lors de l'envoi.");

    }



});
