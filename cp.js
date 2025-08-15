const characters = [
    "Kürt", "Her Bokolog", "Karadenizli", "Gey", "Anti-muhafazakar",
    "Muhafazakar", "Abaza", "Otistik", "Aşko", "Ana Kuzusu",
    "Kibar", "Drama-queen", "Eski Çağ", "Bir kere yurt dışı görmüş", "Ülkücü" , "Keko"
];

let players = [];
let assignments = [];
let votes = {};
let timerInterval;
let timeLeft = 300; // 10 dakika
let mode = "random"; // yeni mod değişkeni

const randomBtn = document.getElementById('randomBtn');
const eachOtherBtn = document.getElementById('eachOtherBtn');
const playerForm = document.getElementById('playerForm');
const playerInputs = document.getElementById('playerInputs');
const addPlayer = document.getElementById('addPlayer');
const startGame = document.getElementById('startGame');
const gameArea = document.getElementById('gameArea');
const assignmentsList = document.getElementById('assignments');
const timerDiv = document.getElementById('timer');
const voteBtn = document.getElementById('voteBtn');
const voteArea = document.getElementById('voteArea');
const voteList = document.getElementById('voteList');
const showWinner = document.getElementById('showWinner');
const winnerArea = document.getElementById('winnerArea');
const winnerText = document.getElementById('winnerText');

function resetGame() {
    players = [];
    assignments = [];
    votes = {};
    timeLeft = 300;
    clearInterval(timerInterval);
    playerInputs.innerHTML = '';
    assignmentsList.innerHTML = '';
    voteList.innerHTML = '';
    winnerText.textContent = '';
    playerForm.classList.add('hidden');
    gameArea.classList.add('hidden');
    voteArea.classList.add('hidden');
    winnerArea.classList.add('hidden');
}

function addPlayerInput(name = "") {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Oyuncu adı';
    input.value = name;
    playerInputs.appendChild(input);
}

randomBtn.onclick = () => {
    resetGame();
    mode = "random";
    playerForm.classList.remove('hidden');
    addPlayerInput();
    addPlayerInput();
};

eachOtherBtn.onclick = () => {
    resetGame();
    mode = "eachOther";
    playerForm.classList.remove('hidden');
    addPlayerInput();
    addPlayerInput();
};

addPlayer.onclick = () => addPlayerInput();

startGame.onclick = () => {
    players = Array.from(playerInputs.querySelectorAll('input'))
        .map(input => input.value.trim())
        .filter(name => name.length > 0);

    if (players.length < 2) {
        alert("En az 2 oyuncu girin!");
        return;
    }

    assignments = [];

    if (mode === "random") {
        // Karakterleri rastgele ata
        assignments = players.map(player => {
            let char;
            do {
                char = characters[Math.floor(Math.random() * characters.length)];
            } while (assignments.some(a => a.character === char));
            return { player, character: char };
        });
    } else if (mode === "eachOther") {
        // Oyuncuları birbirine rastgele ata (kimse kendini taklit etmesin)
        let targets = [...players];
        let valid = false;
        while (!valid) {
            // Karıştır
            targets = shuffle([...players]);
            valid = players.every((p, i) => p !== targets[i]);
        }
        assignments = players.map((player, i) => ({
            player,
            character: targets[i]
        }));
    }

    playerForm.classList.add('hidden');
    gameArea.classList.remove('hidden');
    assignmentsList.innerHTML = '';
    assignments.forEach(a => {
        const li = document.createElement('li');
        li.textContent = mode === "random"
            ? `${a.player}: ${a.character}`
            : `${a.player} → ${a.character} (taklit edilecek kişi)`;
        assignmentsList.appendChild(li);
    });

    // Sayaç başlat
    timeLeft = 300;
    timerDiv.textContent = formatTime(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            voteBtn.classList.remove('hidden');
        }
    }, 1000);

    voteBtn.classList.add('hidden');
    voteBtn.onclick = showVoteArea;
};

// Modal için HTML ekle
const modal = document.createElement('div');
modal.id = 'voteModal';
modal.className = 'hidden';
modal.innerHTML = `
    <div id="modalContent" style="background:#393d63;padding:2rem;border-radius:12px;box-shadow:0 4px 16px #0008;display:flex;flex-direction:column;align-items:center;">
        <h3 id="modalTitle"></h3>
        <div id="modalInputs"></div>
        <button id="modalNext">Oylamayı Kaydet</button>
    </div>
`;
document.body.appendChild(modal);

let voteIndex = 0;
let voteResults = {};

function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function showVoteArea() {
    gameArea.classList.add('hidden');
    voteArea.classList.add('hidden');
    voteResults = {};
    voteIndex = 0;
    showVoteModal();
}

function showVoteModal() {
    if (voteIndex >= assignments.length) {
        // Oylama bitti, sonucu göster
        showWinnerFunc();
        return;
    }
    const current = assignments[voteIndex];
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalTitle').textContent = `${current.player} (${current.character}) için puan verin`;
    const modalInputs = document.getElementById('modalInputs');
    modalInputs.innerHTML = '';
    assignments.forEach(a => {
        if (a.player !== current.player) {
            const div = document.createElement('div');
            div.style.margin = '0.5rem 0';
            div.innerHTML = `
                <label style="margin-right:8px;">${a.player}:</label>
                <input type="number" min="1" max="10" style="width:60px;" data-player="${a.player}">
            `;
            modalInputs.appendChild(div);
        }
    });
}

document.getElementById('modalNext').onclick = () => {
    const current = assignments[voteIndex];
    if (!voteResults[current.player]) voteResults[current.player] = 0;
    let valid = false;
    let allValid = true;
    document.querySelectorAll('#modalInputs input').forEach(input => {
        const score = parseInt(input.value, 10);
        if (!isNaN(score)) {
            if (score < 1 || score > 10) {
                allValid = false;
            } else {
                voteResults[current.player] += score;
                valid = true;
            }
        }
    });
    if (!allValid) {
        alert("Puanlar 1 ile 10 arasında olmalı!");
        return;
    }
    if (!valid) {
        alert("En az bir puan girin!");
        return;
    }
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    voteIndex++;
    showVoteModal();
};

function showWinnerFunc() {
    let maxScore = -1;
    let winner = '';
    for (const [player, score] of Object.entries(voteResults)) {
        if (score > maxScore) {
            maxScore = score;
            winner = player;
        }
    }
    winnerArea.classList.remove('hidden');
    winnerText.textContent = `Kazanan: ${winner} (${maxScore} puan) 🎉`;
}

// Karıştırma fonksiyonu
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}