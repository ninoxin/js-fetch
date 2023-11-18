// Найдем нашу форму и добавим обработчик событий submit
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // Предотвращаем стандартное поведение формы (перезагрузка страницы)
    event.preventDefault();
    // Создаем объект FormData для сбора данных из формы
    let formData = new FormData(this);
    // Создаем пустой объект для хранения данных формы
    let feedbackData = {};
    // Преобразуем данные из объекта FormData в обычный объект
    formData.forEach(function (value, key) {
        feedbackData[key] = value;
    });
    // Добавляем дополнительное поле userId к данным формы
    feedbackData['userId'] = 1;
    // Делаем асинхронный HTTP-запрос методом POST к JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    .then(data => {
        // Выводим успешный результат в консоль
        console.log('Успешно отправлено:', data);
        // Очищаем значения полей формы
        this.reset();
    })
    .catch(error => {
        // Выводим ошибку в консоль
        console.error('Ошибка:', error);
        // Здесь можно добавить обработку ошибки
    });
});
