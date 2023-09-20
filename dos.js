const cards = document.querySelectorAll('.disaster-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
