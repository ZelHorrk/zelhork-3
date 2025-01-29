// Mobile menu toggle
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('#navToggle')) {
        document.getElementById('navMenu').classList.remove('active');
    }
});

// Game sorting functionality
document.getElementById('sortFilter').addEventListener('change', function() {
    const sortValue = this.value;
    const gamesContainer = document.querySelector('.games-grid');
    const games = Array.from(gamesContainer.children);
    
    games.sort((a, b) => {
        if(sortValue === 'rating') {
            return b.dataset.rating - a.dataset.rating;
        }
        return 0;
    });
    
    games.forEach(game => gamesContainer.appendChild(game));
});