//const coverImage = "https://via.placeholder.com/150";
VM698:9 const tracks = [
VM698:11   { title: "2. Koncentration B", url: "https://hogrefe.se/userfiles/files/2__Koncentration_B.mp3" },
VM698:11   { title: "4. Andningstrappan B", url: "https://hogrefe.se/userfiles/files/4__Andningstrappan_B.mp3" },
VM698:11   { title: "6. Bodyscan B", url: "https://hogrefe.se/userfiles/files/6__Bodyscan_B.mp3" },
VM698:11   { title: "8. Surfa på känslan B", url: "https://hogrefe.se/userfiles/files/8__Surfa_pa%CC%8A_ka%CC%88nslan_B.mp3" },
VM698:11   { title: "10. Att komma hit B", url: "https://hogrefe.se/userfiles/files/10__Att_komma_hit_B.mp3" },
VM698:11   { title: "12. Småleende B", url: "https://hogrefe.se/userfiles/files/12__Sma%CC%8Aleende_B.mp3" },
VM698:11   { title: "14. Tankar som moln B", url: "https://hogrefe.se/userfiles/files/14__Tankar_som_moln_B.mp3" },
VM698:11   { title: "16. Bioduken B", url: "https://hogrefe.se/userfiles/files/16__Bioduken_B.mp3" },
VM698:11   { title: "18. Det inre rummet B", url: "https://hogrefe.se/userfiles/files/18__Det_inre_rummet_B.mp3" },
VM698:11   { title: "20. Den långa listan B", url: "https://hogrefe.se/userfiles/files/20__Den_la%CC%8Anga_listan_B.mp3" },
VM698:11   { title: "22. Andning i benet och där det gör ont B", url: "https://hogrefe.se/userfiles/files/22__Andning_i_benet_och_da%CC%88r_det_go%CC%88r_ont_B.mp3" },
VM698:11   { title: "24. Fokus på relationsproblem B", url: "https://hogrefe.se/userfiles/files/24__Fokus_pa%CC%8A_relationsproblem_B.mp3" },
VM698:13 ];
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

function playTrack(track) {
    currentTitle.innerText = track.title;
    audioPlayer.src = track.url;
    playerOverlay.classList.remove('hidden');
    audioPlayer.play();
}

closeBtn.onclick = () => {
    audioPlayer.pause();
    playerOverlay.classList.add('hidden');
};