const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, ''))); // Раздает твой HTML/CSS/JS

// 1. Имитация данных пользователя
app.get('/api/user-data', (req, res) => {
    res.json({
        id: 12345678,
        username: "Глеб",
        balance: 1000,
        isAdmin: true, // Даем тебе права админа для теста
        inventory: []
    });
});

// 2. Список кейсов (чтобы главная не была пустой)
app.get('/api/get-cases', (req, res) => {
    res.json({
        "all": [
            { id: 'case1', name: 'Brawl Pass', price: 150, image: 'images/force.jpg', category: 'all' },
            { id: 'case2', name: 'Stars Case', price: 500, image: 'images/StarsBanner.webp', category: 'all' }
        ],
        "farm": [
            { id: 'case3', name: 'Daily Farm', price: 0, image: 'images/refcase15.webp', category: 'farm' }
        ]
    });
});

// 3. Мета-данные для админки
app.get('/api/admin/meta', (req, res) => {
    res.json({ isAdmin: true });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

