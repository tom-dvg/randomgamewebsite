document.getElementById('randomButton').addEventListener('click', showRandomGame);

let games = [];

fetch('games.json')
    .then(response => response.json())
    .then(data => {
        games = data;
    })
    .catch(error => console.error('Error loading games:', error));

function showRandomGame() {
    if (games.length === 0) {
        console.error('No games available');
        return;
    }

    const randomIndex = Math.floor(Math.random() * games.length);
    const game = games[randomIndex];

    const gameCover = document.getElementById('gameCover');
    const gameName = document.getElementById('gameName');
    const gameContainer = document.getElementById('gameContainer');
    const randomButton = document.getElementById('randomButton');

    gameCover.src = game.cover;
    gameCover.style.display = 'block';
    gameName.textContent = `${game.name} (${game.year})`;

    gameContainer.style.display = 'flex';
    randomButton.style.marginTop = '20px'; // Mueve el botón hacia arriba
}