const coverImage = "./header.png";
const tracks = [
{ title: "Koncentration", url: "https://hogrefe.se/userfiles/files/2__Koncentration_B.mp3" },
{ title: "Andningstrappan", url: "https://hogrefe.se/userfiles/files/4__Andningstrappan_B.mp3" },
{ title: "Bodyscan", url: "https://hogrefe.se/userfiles/files/6__Bodyscan_B.mp3" },
{ title: "Surfa på känslan", url: "https://hogrefe.se/userfiles/files/8__Surfa_pa%CC%8A_ka%CC%88nslan_B.mp3" },
{ title: "Att komma hit", url: "https://hogrefe.se/userfiles/files/10__Att_komma_hit_B.mp3" },
{ title: "Småleende", url: "https://hogrefe.se/userfiles/files/12__Sma%CC%8Aleende_B.mp3" },
{ title: "Tankar som moln", url: "https://hogrefe.se/userfiles/files/14__Tankar_som_moln_B.mp3" },
{ title: "Bioduken", url: "https://hogrefe.se/userfiles/files/16__Bioduken_B.mp3" },
{ title: "Det inre rummet", url: "https://hogrefe.se/userfiles/files/18__Det_inre_rummet_B.mp3" },
{ title: "Den långa listan", url: "https://hogrefe.se/userfiles/files/20__Den_la%CC%8Anga_listan_B.mp3" },
{ title: "Andning i benet och där det gör ont", url: "https://hogrefe.se/userfiles/files/22__Andning_i_benet_och_da%CC%88r_det_go%CC%88r_ont_B.mp3" },
{ title: "Fokus på relationsproblem", url: "https://hogrefe.se/userfiles/files/24__Fokus_pa%CC%8A_relationsproblem_B.mp3" },
];
// ----------------------------------------------------------

// Sätt bilden
document.getElementById('book-cover').src = coverImage;

const list = document.getElementById('track-list');
const playerOverlay = document.getElementById('player-overlay');
const audioPlayer = document.getElementById('audio-player');
const currentTitle = document.getElementById('current-title');
const closeBtn = document.getElementById('close-player');

// Skapa knapparna
tracks.forEach(track => {
    const div = document.createElement('div');
    div.className = 'track-card';
    div.innerHTML = `<span class="track-title">${track.title}</span>`;
    
    div.onclick = () => playTrack(track);
    list.appendChild(div);
});

let currentTrackCard = null; // För att hålla reda på knappen som spelas

// Funktion för att nollställa alla knappars status
function resetTrackStates() {
    document.querySelectorAll('.track-card').forEach(card => {
        card.classList.remove('is-playing', 'icon-play');
        card.innerHTML = `<span class="track-title">${card.dataset.title}</span>`;
    });
}

function playTrack(track, cardElement) {
    // 1. Nollställ gamla knappar
    resetTrackStates(); 

    // 2. Uppdatera spelarens UI
    currentTitle.innerText = track.title;
    audioPlayer.src = track.url;
    playerOverlay.classList.remove('hidden');
    
    // 3. Markera den nuvarande knappen (visuell feedback)
    cardElement.classList.add('is-playing', 'icon-play');
    cardElement.dataset.title = track.title; // Lagrar titeln för återställning
    
    // 4. Starta ljudet
    audioPlayer.play();
    currentTrackCard = cardElement;
}

// VIKTIGT: Den här måste läggas till i loopen för att det ska funka!
// Din gamla lopp:
/*
tracks.forEach(track => {
    // ...
    div.onclick = () => playTrack(track);
    // ...
});
*/

// DEN NYA loopen ska skicka med DIV-elementet (knappen)
list.innerHTML = ''; // Rensa eventuella gamla knappar
tracks.forEach(track => {
    const div = document.createElement('div');
    div.className = 'track-card';
    div.innerHTML = `<span class="track-title">${track.title}</span>`;
    div.dataset.title = track.title; // Lägg till datatitel

    // Skickar med både spåret och knappen till playTrack
    div.onclick = () => playTrack(track, div); 
    list.appendChild(div);
});

// Lägg till en lyssnare som rensar statusen när ljudet är slut
audioPlayer.onended = () => {
    resetTrackStates();
    currentTrackCard = null;
    playerOverlay.classList.add('hidden');
};

// Uppdatera stäng-knappen så den rensar statusen också
closeBtn.onclick = () => {
    audioPlayer.pause();
    resetTrackStates();
    currentTrackCard = null;
    playerOverlay.classList.add('hidden');
};

closeBtn.onclick = () => {
    audioPlayer.pause();
    playerOverlay.classList.add('hidden');
};
