document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, background 0.3s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100 + 300); // Stagger delay starting after 300ms
    });
});
