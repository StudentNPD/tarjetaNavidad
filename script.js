// Crear copos de nieve
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakes = ['❄', '❅', '❆'];

    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 8}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflakesContainer.appendChild(snowflake);
    }
}

createSnowflakes();