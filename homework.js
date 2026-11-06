/* homework.js — все основные функции:
   - часы
   - поиск и загрузка музыки
   - управление библиотекой (localStorage)
   - салют при добавлении книги
   - анимация CSS-переменных для карточек
*/

/* ========== ЧАСЫ ========== */
const clockEl = document.getElementById('clock');
const tickSound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
tickSound.volume = 0.3;
tickSound.preload = 'none';
// Сигнал часов начинается после жеста, поэтому запрет autoplay не создаёт предупреждения каждую минуту.
let clockAudioUnlocked = false;
document.addEventListener('pointerdown', () => { clockAudioUnlocked = true; }, {once: true});
document.addEventListener('keydown', () => { clockAudioUnlocked = true; }, {once: true});

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = now.getSeconds();

    let sString = String(s).padStart(2, '0');
    let sClass = '';

    // Секунды красные с 55 до 59
    if (s >= 55) {
        sClass = 'red-seconds';
    }

    // Пик-пик на 58 и 59 секунде
    if (clockAudioUnlocked && (s === 58 || s === 59)) {
        tickSound.play().catch(err => console.warn("Проблема с autoplay:", err));
    }

    if (clockEl) {
        clockEl.innerHTML = `<h1>${h}:${m}:<span class="${sClass}">${sString}</span></h1>`;
    }
}
updateClock();
setInterval(updateClock, 1000);

// --- НОВАЯ ФУНКЦИЯ: ОБНОВЛЕНИЕ СТАТИСТИКИ ---
function updateStats() {
    const years = books.map(book => +book.year);
    const total = books.length;

    // Получаем элементы DOM для обновления
    const totalBooksEl = document.getElementById('totalBooks');
    const avgYearEl = document.getElementById('avgYear');
    const minYearEl = document.getElementById('minYear');
    const maxYearEl = document.getElementById('maxYear');

    if (totalBooksEl) totalBooksEl.textContent = total;
// Если книг нет, сбрасываем остальные значения
    if (total === 0) {
        if (avgYearEl) avgYearEl.textContent = '—';
        if (minYearEl) minYearEl.textContent = '—';
        if (maxYearEl) maxYearEl.textContent = '—';
        return;
    }

    // Средний год
    const sum = years.reduce((acc, year) => acc + year, 0);
    const avg = (sum / total).toFixed(0);
    if (avgYearEl) avgYearEl.textContent = avg;

    // Минимальный и максимальный год
    const min = Math.min(...years);
    const max = Math.max(...years);
    if (minYearEl) minYearEl.textContent = min;
    if (maxYearEl) maxYearEl.textContent = max;
}


/* ========== АНИМАЦИЯ КАРТОЧЕК (обновляет --deg и --distance в :root) ========== */
const cards = document.querySelectorAll('.card');
const root = document.documentElement;

document.addEventListener('mousemove', e => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const dist = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDist = Math.min(rect.width, rect.height) / 1.5;
        const normalizedDist = Math.min(dist, maxDist) / maxDist;
        const deg = Math.atan2(distanceY, distanceX) * 180 / Math.PI;

        card.style.setProperty('--deg', `${deg + 90}deg`);
        card.style.setProperty('--distance', String(normalizedDist));
        card.style.setProperty('--shadow-x', `${distanceX / 20}px`);
        card.style.setProperty('--shadow-y', `${distanceY / 20}px`);
    });
});

document.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.setProperty('--shadow-x', `0px`);
        card.style.setProperty('--shadow-y', `0px`);
        card.style.setProperty('--distance', '0');
    });
});

/* ========== МУЗЫКА: плейлист и управление ========== */
const audioEl = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');

const playlist = [
    "./music/1.mp3",
    "./music/2.mp3",
    "./music/3.mp3",
    "./music/4.m4a",
    "./music/5.mp3"
];

let currentTrack = 0;

// Загружаем первый трек при загрузке страницы
audioEl.src = playlist[currentTrack];

// Обработчик события 'ended' для зацикливания плейлиста
audioEl.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audioEl.src = playlist[currentTrack];
    audioEl.play().catch(err => console.warn("Ошибка при автовоспроизведении:", err));
});

// Кнопка play/pause
if(playBtn){
    playBtn.addEventListener('click', async () => {
        try {
            if (audioEl.paused) {
                await audioEl.play();
                playBtn.textContent = '⏸ Остановить музыку';
            } else {
                audioEl.pause();
                playBtn.textContent = '🎵 Включить музыку';
            }
        } catch (err) {
            console.warn('Ошибка при воспроизведении:', err);
        }
    });
}

/* ========== БИБЛИОТЕКА (localStorage) ========== */
const bookForm = document.getElementById('bookForm');
const libraryTableBody = document.querySelector('#libraryTable tbody');

// Ключ с префиксом проекта: на dubnovalexey.github.io все проекты делят одно хранилище.
// Книги, сохранённые раньше под старым ключом myBooks, подхватываются автоматически.
const BOOKS_KEY = 'library:books';

let books = [];
try {
    const raw = localStorage.getItem(BOOKS_KEY) ?? localStorage.getItem('myBooks');
    const saved = raw ? JSON.parse(raw) : [];
    // Повреждённая запись не останавливает приложение и не исполняет HTML из хранилища.
    books = Array.isArray(saved) ? saved.filter(book => book && typeof book === 'object' &&
        ['isbn', 'title', 'author'].every(field => typeof book[field] === 'string' && book[field].trim()) &&
        Number.isInteger(Number(book.year)) && Number(book.year) >= 1 && Number(book.year) <= 9999) : [];
} catch(e) {
    books = [];
    console.warn('Не удалось прочитать localStorage:', e);
}

function saveBooks(){
    try {
        localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    } catch(e) {
        console.warn('Не удалось записать в localStorage:', e);
    }
}

// рендер таблицы: каждая запись — отдельная строка (одна под другой)
function renderBooks(){
    if(!libraryTableBody) return;
    libraryTableBody.replaceChildren();
    books.forEach((book, index) => {
        const tr = document.createElement('tr');

        // То, что ввёл пользователь, выводим через textContent: HTML из полей не исполняется
        [index + 1, book.isbn, book.title, book.author, book.year].forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        const actionTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        actionTd.appendChild(deleteBtn);
        tr.appendChild(actionTd);

        deleteBtn.addEventListener('click', () => {
            books.splice(index, 1);
            saveBooks();
            renderBooks();
        });

        libraryTableBody.appendChild(tr);
    });
    // ВЫЗОВ СТАТИСТИКИ ЗДЕСЬ: после того, как таблица полностью отрендерена
    updateStats();
}

let volumeRestoreTimer = null;
let duckedVolume = null;

// Добавление новой книги — и запускаем салют в месте добавленной строки
bookForm.addEventListener('submit', e => {
    e.preventDefault();
    const isbn = document.getElementById('isbn').value.trim();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const year = document.getElementById('year').value.trim();

    if (!isbn || !title || !author || !Number.isInteger(Number(year)) || Number(year) < 1 || Number(year) > 9999) {
        alert('Заполните все поля; год должен быть целым числом от 1 до 9999.');
        return;
    }

    books.push({ isbn, title, author, year });
    saveBooks();
    renderBooks();
    bookForm.reset();

    // 🎆 Логика салюта и музыки
    const musicIsPlaying = !audioEl.paused;
    if (duckedVolume === null) duckedVolume = audioEl.volume;

    if (musicIsPlaying) {
        // Заглушаем музыку почти полностью
        audioEl.volume = 0.01;
    }

    // Запускаем салют и звук салюта
    createExplosion(window.innerWidth / 2, window.innerHeight / 2);
    playFireworkSound();

    // Возвращаем музыку к нормальной громкости через 4 секунды
    clearTimeout(volumeRestoreTimer);
    volumeRestoreTimer = setTimeout(() => {
        if (duckedVolume !== null) audioEl.volume = duckedVolume;
        duckedVolume = null;
    }, 4000);
});

// отрисуем при загрузке страницы
renderBooks();

/* ========== САЛЮТ (канвас) ========== */
const canvas = document.getElementById('explosion-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const fireworkSound = new Audio("./music/11.mp3"); // Звук салюта запускается только действием пользователя
fireworkSound.preload = 'none';

let fireworkStopTimer = null;
function playFireworkSound() {
    if (fireworkSound) {
        clearTimeout(fireworkStopTimer);
        fireworkSound.currentTime = 0;
        fireworkSound.play().catch(err => console.warn("Автопуск заблокирован:", err));

        // Останавливаем звук салюта через 3 секунды
        fireworkStopTimer = setTimeout(() => {
            fireworkSound.pause();
            fireworkSound.currentTime = 0;
        }, 3000);
    }
}

function resizeCanvas(){
    if(!canvas || !ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color, shape = 'circle'){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 4 + 2;
        this.color = color;
        const speed = 7 + Math.random() * 10; // Увеличил начальную скорость
        const angle = Math.random() * Math.PI * 2;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.alpha = 1;
        this.gravity = 0.04 + Math.random() * 0.06;
        this.friction = 0.995;
        this.shape = shape;
    }
    draw(){
        if(!ctx) return;
        ctx.save();
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.fillStyle = this.color;

        if (this.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.shape === 'square') {
            const size = this.radius * 2;
            ctx.fillRect(this.x - size/2, this.y - size/2, size, size);
        } else if (this.shape === 'triangle') {
            const size = this.radius * 2.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - size/2);
            ctx.lineTo(this.x - size/2, this.y + size/2);
            ctx.lineTo(this.x + size/2, this.y + size/2);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }
    update(){
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= this.friction;
        this.speedY *= this.friction;
        this.alpha -= 0.012;
    }
}

let particles = [];
let particleFrame = 0;

function createExplosion(x, y){
    if(!ctx) return;
    const colors = ['#ff4d4d', '#ffd24d', '#4d94ff', '#4dff88', '#b84dff', '#ff7fbf'];
    const count = 250; // Увеличено количество частиц
    const shapes = ['circle', 'square', 'triangle'];

    for(let i=0;i<count;i++){
        const color = colors[Math.floor(Math.random()*colors.length)];
        const shape = shapes[Math.floor(Math.random()*shapes.length)];
        particles.push(new Particle(x, y, color, shape));
    }
    if (!particleFrame) particleFrame = requestAnimationFrame(animateParticles);
}

// основной цикл отрисовки частиц
function animateParticles(){
    particleFrame = 0;
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.alpha > 0 && p.y < window.innerHeight + 200);
    for(const p of particles){
        p.update();
        p.draw();
    }
    if (particles.length) particleFrame = requestAnimationFrame(animateParticles);
}
// Пустой салют не держит постоянный RAF: он запускается только при добавлении книги.