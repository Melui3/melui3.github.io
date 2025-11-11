import { quotes, teamColors } from "./quotes.js";

const radioCard = document.getElementById("radioCard");
const newQuoteBtn = document.getElementById("newQuote");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Reset card
    radioCard.innerHTML = "";

    // Fond noir + padding/bordures
    radioCard.style.backgroundColor = "#000000";
    radioCard.style.padding = "20px";
    radioCard.style.borderRadius = "12px";
    radioCard.style.width = "380px";
    radioCard.style.fontFamily = "Consolas, monospace";

    const driverColor = teamColors[selectedQuote.team] || "#FFFFFF"; // pilote = couleur équipe
    const engineerColor = "#CCCCCC"; // ingénieur = gris clair

    // Titre pilote + équipe en dessous
    const h2 = document.createElement("h2");
    h2.classList.add("driver-title");
    h2.style.color = driverColor;
    h2.innerHTML = `${selectedQuote.driver} <br> ${selectedQuote.team}`;
    radioCard.appendChild(h2);

    // Dialogue
    selectedQuote.dialogue.forEach((line, index) => {
        const p = document.createElement("p");
        p.classList.add("line");

        // Ici on compare avec "driver" et "engineer"
        const isDriverLine = line.speaker === "driver";
        const color = isDriverLine ? driverColor : engineerColor;

        p.style.color = color;
        p.style.marginBottom = "4px";
        p.style.animationDelay = `${0.2 * index}s`;
        p.innerHTML = `<strong style="color:${color}">${line.speaker}:</strong> ${line.text}`;

        radioCard.appendChild(p);
    });
}

// Bouton
newQuoteBtn.addEventListener("click", generateQuote);

// Affiche une première quote
generateQuote();
