document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            return;
        }

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});