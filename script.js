// Corazones y rosas flotantes
function crearEfecto() {
    const efectos = ['🌹', '❤️', '💖', '💘'];
    const elemento = document.createElement('div');
    elemento.classList.add('efecto');
    elemento.textContent = efectos[Math.floor(Math.random() * efectos.length)];
    elemento.style.left = Math.random() * 100 + 'vw';
    elemento.style.fontSize = (Math.random() * 20 + 20) + 'px';
    elemento.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.getElementById('efectos').appendChild(elemento);
    setTimeout(() => elemento.remove(), 6000);
}
setInterval(crearEfecto, 300);

const cuboExterno = document.getElementById('cuboExterno');

// Al pasar el mouse, se expande
cuboExterno.addEventListener('mouseenter', () => {
    cuboExterno.classList.add('cubo-expandido');
});

// Al quitar el mouse, se cierra
cuboExterno.addEventListener('mouseleave', () => {
    cuboExterno.classList.remove('cubo-expandido');
});

// Intentar reproducir música después de interacción
window.addEventListener('click', () => {
    const musica = document.getElementById('musicaFondo');
    if (musica) {
        musica.play().catch(() => {});
    }
}, { once: true });

