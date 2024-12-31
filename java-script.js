// Обработчики для музыки
const music = document.getElementById('background-music');
const toggle = document.querySelector('.music-toggle');
const volumeControl = document.getElementById('volume');
const changeMusicBtn = document.querySelector('.change-music');
const musicOptions = document.querySelector('.music-options');
const songOptions = document.querySelectorAll('.song-option');

// Текущая песня
let currentSong = music.querySelector('source').src;

toggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggle.textContent = '🎵 Выключить';
    } else {
        music.pause();
        toggle.textContent = '🎵 Включить';
    }
});

volumeControl.addEventListener('input', () => {
    music.volume = volumeControl.value;
});

music.addEventListener('error', (e) => {
    alert('Ошибка воспроизведения музыки:', e);
});

// Прелоадер
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2000);
});

// Показываем или скрываем список песен
changeMusicBtn.addEventListener('click', () => {
    musicOptions.style.display = musicOptions.style.display === 'block' ? 'none' : 'block';
});

// Переключаем песню при выборе
songOptions.forEach(option => {
    option.addEventListener('click', () => {
        const songSrc = option.getAttribute('data-src');
        const currentSong = music.querySelector('source');
        currentSong.src = songSrc;
        music.load();
        music.play();
        toggle.textContent = '🎵 Выключить'; // Обновляем текст кнопки
        musicOptions.style.display = 'none'; // Закрываем меню выбора
    });
});

// Прелоадер
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2000);
});

function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakeContainer);

    const numFlakes = 100; // Количество снежинок
    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Снежинка
        snowflake.style.left = `${Math.random() * 100}vw`; // Случайное положение по оси X
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`; // Случайная скорость падения
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; // Разные размеры снежинок
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Случайная задержка старта анимации
        snowflakeContainer.appendChild(snowflake);
    }
}

window.addEventListener('load', createSnowflakes);

// Обработчики для фотографий в галерее
const slides = document.querySelectorAll('.gallery .slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        slide.classList.toggle('active');
    });
});

// Обработчики для изображений в tea-photo
const teaPhotos = document.querySelectorAll('.tea-photo img');

teaPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('active');
    });
});


document.querySelector('.reveal-btn').addEventListener('click', function () {
    const section = document.querySelector('.reveal-section');
    const content = document.querySelector('.reveal-content');
    const message = document.querySelector('.reveal-message');
    const button = this;

    // Добавляем затемнение и эффект кнопке
    section.classList.add('dimmed');
    content.classList.add('dimmed');
    button.classList.add('dimmed');

    // Отображаем сообщение с анимацией
    message.style.display = 'block';
});


// Функция для удаления блюра по клику
function toggleBlur(factId) {
    const factElement = document.getElementById(factId);
    const textElement = factElement.querySelector(".blurred-text");
    // Убираем блюр при клике
    textElement.style.filter = "none";
  
    // Добавляем класс для изменения стилей
    factElement.classList.add('clicked');
  
    // Если это последний факт, меняем текст через 2 секунды
    if (factId === "fact3") {
      setTimeout(() => {
        textElement.textContent = "Шутка";
      }, 2000);
    }
  }
  
  // Функция для обработки кнопок "Да" и "Нет"
  function toggleAnswer(factId, answer) {
    const answerTextElement = document.getElementById('answer-text');
  
    // Проверяем, какой ответ был выбран и выводим соответствующий текст
    if (answer === 'yes') {
      answerTextElement.textContent = "Недоступно";
      answerTextElement.style.color = "red"; // Можно изменить цвет текста
    } else if (answer === 'no') {
      answerTextElement.textContent = "Не правда";
      answerTextElement.style.color = "blue"; // Можно изменить цвет текста
    }
  }
  
  function updateTimer() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 0, 0, 0);

    const diff = midnight - now;

    const link = document.getElementById("telegram-link");
    const message = document.getElementById("reveal-message");

    if (diff <= 0) {
      // Активация кнопки
      link.classList.remove("dimmed");
      link.disabled = false;
      message.style.display = "block";
      message.style.opacity = "1";
      link.onclick = () => {
        window.open("https://t.me/DOSH11K_bot", "_blank");
      };
    } else {
      // Обновление таймера
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      document.getElementById("time-remaining").innerText = `${hours}:${minutes}:${seconds}`;
      setTimeout(updateTimer, 1000);
    }
  }

  // Запуск таймера
  updateTimer();