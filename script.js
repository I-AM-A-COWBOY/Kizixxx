const WEBHOOK_URL = "https://discord.com/api/webhooks/1498364123988103360/69deM-_QKIeMsbU_t91pMFhSwenILmJcWPHoANmChO0YhhVV09Q9MQGOyK9rDbQUxgqj";


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



    const data = {

        username: "Nova Recruit",

        embeds: [

            {

                title: "📩 Nouvelle candidature",

                description: "Une nouvelle personne a envoyé une candidature.",

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

                    text: "Nova Recruit"

                }

            }

        ]

    };



    fetch(WEBHOOK_URL, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(data)

    })
    .then(response => {

        if(response.ok){

            alert("Candidature envoyée !");

            document.querySelector("form").reset();

            compteur.textContent = "0/250";

        } 
        
        else {

            alert("Erreur d'envoi.");

        }

    })
    .catch(error => {

        alert("Erreur de connexion.");

        console.log(error);

    });


});
