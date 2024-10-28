const customCursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e) {
    setTimeout(() => {
        customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    }, 60);
}

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

const title = document.querySelector('h1');
const titleLetters = title.textContent.split('');

title.innerHTML = '';

titleLetters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.display = 'inline-block';
    span.style.transition = 'transform 0.3s ease';

    span.addEventListener('mouseover', () => {
        if (letter !== ' ') {
            span.style.transform = 'translateY(-10px)';
        }
    });

    span.addEventListener('mouseout', () => {
        if (letter !== ' ') {
            span.style.transform = 'translateY(0)';
        }
    });

    title.appendChild(span);
});

function animateTitle() {
    titleLetters.forEach((letter, index) => {
        const span = title.children[index];
        if (letter !== ' ') {
            setTimeout(() => {
                span.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    span.style.transform = 'translateY(0)';
                }, 200);
            }, index * 100);
        }
    });
}

// Animation initiale
animateTitle();

// Répéter l'animation toutes les 5 secondes
setInterval(animateTitle, 5000);
