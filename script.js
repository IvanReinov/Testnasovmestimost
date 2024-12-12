const questions = [
    {
        question: "Ты больше любишь утро или вечер?",
        answers: ["Утро", "Обед", "Вечер", "Ночь"],
        correct: 2 // Вечер
    },
    {
        question: "Какая у тебя любимая еда, которую ты мог(ла) бы есть каждый день?",
        answers: ["Пицца", "Картошка с Цезарем", "Суши", "Бургеры"],
        correct: 1 // Картошка с Цезарем
    },
    {
        question: "Какой твой идеальный отпуск: пляж, горы или активное путешествие?",
        answers: ["Пляж", "Горы", "Городской тур", "Дома"],
        correct: 0 // Пляж
    },
    {
        question: "Если бы ты мог(ла) быть любым животным, кем бы ты стал(а)?",
        answers: ["Лев", "Капибара", "Панда", "Орёл"],
        correct: 1 // Капибара
    },
    {
        question: "Какую суперспособность ты бы выбрал(а) – читать мысли или летать?",
        answers: ["Летать", "Читать мысли", "Невидимость", "Скорость"],
        correct: 1 // Читать мысли
    },
    {
        question: "Что тебе больше нравится: фильмы или сериалы?",
        answers: ["Фильмы", "Сериалы", "Книги", "Игры"],
        correct: 0 // Фильмы
    },
    {
        question: "Если бы ты выиграл(а) миллион долларов, на что бы потратил(а) первым делом?",
        answers: ["Путешествия", "На танки онлайн", "Купил(а) дом", "Благотворительность"],
        correct: 1 // На танки онлайн
    },
    {
        question: "Твоя любимая нелепая шутка или мем?",
        answers: ["Лягушка Пепе", "Мешапы", "Мистер Крабс", "Гачимучи"],
        correct: 1 // Мешапы
    },
    {
        question: "Ты предпочитаешь остаться дома с пиццей или пойти на вечеринку?",
        answers: ["Вечеринка", "Кинотеатр", "Дома", "Кафе"],
        correct: 2 // Дома
    },
    {
        question: "Какой твой любимый способ расслабляться после сложного дня?",
        answers: ["Смотреть сериалы", "Прогулка", "Подрочить", "Спорт"],
        correct: 2 // Подрочить
    },
    {
        question: "Как ты думаешь, кто должен первым писать после ссоры?",
        answers: ["Мужчина", "Женщина", "Вумен", "Оба"],
        correct: 2 // Вумен
    },
    {
        question: "Что для тебя важнее в отношениях: страсть или стабильность?",
        answers: ["Страсть", "Стабильность", "И то и то", "Свобода"],
        correct: 2 // И то и то
    },
    {
        question: "Как ты относишься к романтическим сюрпризам?",
        answers: ["Нейтрально", "Не люблю", "Круто", "Иногда"],
        correct: 2 // Круто
    },
    {
        question: "Что бы ты хотел(а) делать в выходные?",
        answers: ["Спать", "Гулять", "Спать, срать и переписываться с Ксюшей", "Работать"],
        correct: 2 // Спать, срать и переписываться с Ксюшей
    },
    {
        question: "Что самое странное было в твоей жизни?",
        answers: [
            "Когда сосед ворвался ночью",
            "Меня спросили путь в лесу",
            "Ничего странного",
            "Когда меня обрызгала машина"
        ],
        correct: 0 // Когда сосед ворвался ночью
    },
    {
        question: "Что для тебя самое привлекательное в человеке?",
        answers: ["Глаза", "Улыбка", "Сиськи", "Харизма"],
        correct: 2 // Сиськи
    },
    {
        question: "Какое место кажется тебе самым горячим для секса?",
        answers: ["Пляж", "Ад", "Самолет", "Лифт"],
        correct: 2 // Самолет
    },
    {
        question: "Было ли что-то, что ты давно хотел(а) попробовать, но стесняешься сказать?",
        answers: ["Нет", "Да, чипсы у сестры", "Молчу", "Купить что-то дорогое"],
        correct: 1 // Чипсы у сестры
    },
    {
        question: "Ты бы согласился(лась) на секс в публичном месте?",
        answers: ["Нет", "Да", "Зависит от места", "Когда-нибудь"],
        correct: 1 // Да
    },
    {
        question: "Какое самое нелепое или смешное приключение с тобой случалось?",
        answers: [
            "Меня задела собака",
            "Сосед кричал на меня",
            "Тетя кричала, увидев меня",
            "Забыл(а) ключи дома"
        ],
        correct: 2 // Тетя кричала, увидев меня
    },
    {
        question: "Что ты предпочитаешь: спонтанность или планирование?",
        answers: ["Спонтанность", "Планирование", "Смешение", "Свободу"],
        correct: 1 // Планирование
    },
    {
        question: "Какой самый безумный поступок ты совершил(а) бы ради кого-то?",
        answers: ["Пошел(а) на край света", "Лег бы спать", "Подарил(а) машину", "Сделал(а) предложение"],
        correct: 1 // Лег бы спать
    },
    {
        question: "Какой твой цвет глаз?",
        answers: ["Голубой", "Зеленый", "Карие", "Серый"],
        correct: 2 // Карие
    },
    {
        question: "Какие любимые цветы?",
        answers: ["Розы", "Гипсофилы", "Лилии", "Ромашки"],
        correct: 1 // Гипсофилы
    },
    {
        question: "Какая любимая конфета?",
        answers: ["Киткат", "Сникерс", "Баунти", "Марс"],
        correct: 2 // Баунти
    },
    {
        question: "На что бы ты точно не согласилась?",
        answers: ["Прыжок с парашютом", "Второе высшее образование", "Эмиграция", "Брак"],
        correct: 1 // Второе высшее образование
    },
    {
        question: "Что выберешь – Акулич в теле Ксюши или Ксюшу в теле Акулич?",
        answers: [
            "Акулич в теле Ксюши",
            "Ксюшу в теле Акулич",
            "Оба варианта",
            "Ни один"
        ],
        correct: 1 // Ксюшу в теле Акулич
    }
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = ""; // Очистка контейнера перед загрузкой нового вопроса

    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    const questionElement = document.createElement("h2");
    questionElement.textContent = questionObj.question;

    container.appendChild(questionElement);

    questionObj.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "answer-btn";
        button.onclick = () => checkAnswer(index, button);
        container.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const questionObj = questions[currentQuestionIndex];
    const allButtons = document.querySelectorAll(".answer-btn");

    if (selectedIndex === questionObj.correct) {
        button.classList.add("correct"); // Подсвечиваем правильный ответ зеленым
        score++;
    } else {
        button.classList.add("incorrect"); // Подсвечиваем выбранный неправильный красным
        allButtons[questionObj.correct].classList.add("correct"); // Подсвечиваем правильный ответ зеленым
    }

    allButtons.forEach(btn => btn.onclick = null); // Блокируем кнопки после ответа

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // Пауза 2 секунды перед переходом к следующему вопросу
}

function showResults() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = `<h2>Вы завершили тест!</h2><p>Ваш результат: ${score} из ${questions.length}</p>`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
