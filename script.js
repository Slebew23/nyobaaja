const messages = [
    "Beneran gatau kah?",
    "Pura-pura ya",
    "BJIR SERIUSAN?",
    "HIH?",
    "Au deh Shell",
    "Pencet tidak terus donk smpe akhir",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (noButton && yesButton) {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
}

function handleYesClick() {
    window.location.href = "page2.html"; // Ubah halaman tujuan ke page2.html
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (noButton) noButton.addEventListener("click", handleNoClick);
    if (yesButton) yesButton.addEventListener("click", handleYesClick);
});
