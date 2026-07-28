const WEBHOOK_URL = "https://discord.com/api/webhooks/1498364123988103360/69deM-_QKIeMsbU_t91pMFhSwenILmJcWPHoANmChO0YhhVV09Q9MQGOyK9rDbQUxgqj";

const form = document.getElementById("candidature-form");
const presentation = document.getElementById("presentation");
const compteur = document.getElementById("compteur");
const submitBtn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");

presentation.addEventListener("input", function () {
  const length = this.value.length;
  compteur.textContent = length + "/250";
  compteur.classList.toggle("limit", length >= 230);
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const age = document.getElementById("age").value.trim();
  const roblox = document.getElementById("roblox").value.trim();
  const discord = document.getElementById("discord").value.trim();
  const presentationValue = presentation.value.trim();

  if (!prenom || !age || !roblox || !discord || !presentationValue) {
    status.textContent = "Merci de remplir tous les champs.";
    status.className = "error";
    return;
  }

  const data = {
    username: "Nova Recruit",
    embeds: [
      {
        title: "📩 Nouvelle candidature",
        description: "Une nouvelle personne a envoyé une candidature.",
        color: 2926056,
        fields: [
          { name: "👤 Prénom", value: prenom, inline: true },
          { name: "🎂 Âge", value: age, inline: true },
          { name: "🎮 Pseudo Roblox", value: roblox, inline: false },
          { name: "💬 Discord", value: discord, inline: false },
          { name: "📝 Présentation", value: presentationValue, inline: false }
        ],
        footer: { text: "Nova Recruit" },
        timestamp: new Date().toISOString()
      }
    ]
  };

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  status.textContent = "";
  status.className = "";

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      status.textContent = "Candidature envoyée avec succès !";
      status.className = "success";
      form.reset();
      compteur.textContent = "0/250";
      compteur.classList.remove("limit");
    } else {
      status.textContent = "Erreur d'envoi. Réessaie plus tard.";
      status.className = "error";
    }
  } catch (error) {
    status.textContent = "Erreur de connexion. Vérifie ta connexion internet.";
    status.className = "error";
    console.log(error);
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }
});
