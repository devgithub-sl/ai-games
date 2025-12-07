// 1. Data Source: 10 Casual Games across different genres
const games = [
    {
        title: "Tic-Tac-Toe",
        genre: "Classic",
        desc: "The classic X and O game. Challenge a friend or play against the AI in this timeless grid battle.",
        image: "https://placehold.co/600x400/673ab7/white?text=Tic-Tac-Toe",
        link: "games/tictactoe.html"
    },
    {
        title: "Space Invaders",
        genre: "Arcade",
        desc: "Defend the earth from pixelated aliens. Shoot them down before they reach the bottom of the screen.",
        image: "https://placehold.co/600x400/212121/white?text=Space+Invaders",
        link: "games/spaceinvaders.html"
    },
    {
        title: "Memory Match",
        genre: "Puzzle",
        desc: "Test your memory skills. Flip the cards and find the matching pairs before the time runs out.",
        image: "https://placehold.co/600x400/009688/white?text=Memory+Match",
        link: "games/memorymatch.html"
    },
    {
        title: "Snake Run",
        genre: "Retro",
        desc: "Eat the apples and grow your snake! Don't hit the walls or your own tail.",
        image: "https://placehold.co/600x400/4CAF50/white?text=Snake",
        link: "games/snake.html"
    },
    {
        title: "Sudoku Solver",
        genre: "Logic",
        desc: "Fill the 9x9 grid with digits so that each column, row, and subgrid contains all digits from 1 to 9.",
        image: "https://placehold.co/600x400/FF9800/white?text=Sudoku",
        link: "games/sudoku.html"
    },
    {
        title: "Flappy Clone",
        genre: "Action",
        desc: "Tap to fly! Navigate the bird through the pipes without crashing. How high can you score?",
        image: "https://placehold.co/600x400/03A9F4/white?text=Flappy",
        link: "games/flappy.html"
    },
    {
        title: "2048",
        genre: "Math Puzzle",
        desc: "Slide tiles to combine numbers. 2+2=4, 4+4=8. Can you reach the legendary 2048 tile?",
        image: "https://placehold.co/600x400/FFC107/white?text=2048",
        link: "games/alchemy.html"
    },
    {
        title: "Whack-a-Mole",
        genre: "Reflex",
        desc: "They pop up fast! Hit the moles as quickly as you can, but be careful not to hit the bombs.",
        image: "https://placehold.co/600x400/795548/white?text=Whack-Mole",
        link: "games/whack.html"
    },
    {
        title: "Simon Says",
        genre: "Memory",
        desc: "Follow the pattern of lights and sounds. The sequence gets longer every round!",
        image: "https://placehold.co/600x400/E91E63/white?text=Simon+Says",
        link: "games/bomb.html"
    },
    {
        title: "Rock Paper Scissors",
        genre: "Chance",
        desc: "Play against the computer. Rock beats Scissors, Scissors beats Paper, Paper beats Rock.",
        image: "https://placehold.co/600x400/607D8B/white?text=R-P-S",
        link: "games/rps.html"
    },
    {
        title: "Syntax Error",
        genre: "Typing Defense",
        desc: "Bugs are falling into the source code! Type the keywords to delete them before the system crashes.",
        image: "https://placehold.co/600x400/000000/00ff00?text=syntax+error",
        link: "games/syntax.html"
    },
    {
        title: "Dimension Hopper",
        genre: "Gravity Runner",
        desc: "You can't jump, but you can change reality. Click to flip gravity and run on the ceiling.",
        image: "https://placehold.co/600x400/000000/00ffff?text=Flip+Gravity",
        link: "games/gravity.html"
    },
    {
        title: "Orbital Guard",
        genre: "360° Defense",
        desc: "Protect the core. Rotate your shield to block incoming meteors from all angles.",
        image: "https://placehold.co/600x400/050510/4deeea?text=Orbital+Defense",
        link: "games/orbit.html"
    },
    {
        title: "Laser Logic",
        genre: "Optics Puzzle",
        desc: "Guide the laser beam to the target. Click on mirrors to rotate them and bend the light.",
        image: "https://placehold.co/600x400/111111/f44336?text=Laser+Puzzle",
        link: "games/laser.html"
    },
    {
        title: "Quantum Clicker 3D",
        genre: "Idle Simulation",
        desc: "Mine Qubits from the quantum core. Use entanglement to automate production. How many Qubits can you generate?",
        image: "https://placehold.co/600x400/000000/00ffff?text=3D+Quantum+Core",
        link: "games/quantum.html"
    },
    {
        title: "Chrono Stack",
        genre: "3D Time Puzzle",
        desc: "You are your own staircase. Jump, freeze time, and stand on your past self's ghost to reach the sky.",
        image: "https://placehold.co/600x400/000000/00ffff?text=Time+Clone",
        link: "games/chrono.html"
    },
];

// 2. Select the container
const container = document.getElementById('game-container');

// 3. Generate the Cards
games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Check if the game has a specific link, otherwise use '#'
    const gameLink = game.link ? game.link : "#"; 

    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${game.title}</h2>
            <p style="color: #999; font-size: 0.8rem; margin-bottom: 5px;">${game.genre}</p>
            <p class="card-text">${game.desc}</p>
            <a href="${gameLink}" class="card-btn">Play Now</a>
        </div>
    `;
    container.appendChild(card);
});