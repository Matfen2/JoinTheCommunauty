const name = document.getElementById('name');
const age = document.getElementById('age');
const inscribe = document.getElementById('btnInscribe');

const reponseReason = document.querySelector('.reason');

inscribe.addEventListener('click', function (event) {
    event.preventDefault(); // Pour éviter que le formulaire ne se soumette

    const reponse = document.createElement('div'); // Utilisation de div au lieu de reponse
    
    const nameValue = name.value;
    const ageValue = age.value;
    
    reponseReason.innerHTML = ""; // Pour supprimer la reponse précédente

    if (ageValue <= 21) {
        reponse.style.paddingBottom = "10px";
        reponse.style.marginTop = "-15px";
        reponse.style.fontWeight = "bold";
        reponse.style.textAlign = "center";
        reponse.textContent = "Bienvenue " + nameValue + ", dans notre communauté, il n'est jamais trop tard pour apprendre quelque chose";
        reponseReason.appendChild(reponse);
    }

    if (ageValue >= 21) {
        reponse.style.paddingBottom = "10px";
        reponse.style.marginTop = "-15px";
        reponse.style.fontWeight = "bold";
        reponse.style.textAlign = "center";
        reponse.textContent = "Bienvenue " + nameValue + ", dans notre communauté, il n'est jamais trop tard pour forger votre avenir";
        reponseReason.appendChild(reponse);
    }
});