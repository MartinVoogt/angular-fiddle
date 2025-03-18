const fs = require('fs');
const { faker } = require('@faker-js/faker');

const randomDate = () => faker.date.betweens({ from: '2024-01-01', to: '2025-03-01' })[0].toISOString().split('T')[0];

const randomPriority = () => {
    let prios = [
        { value: 'low', name: 'Laag' },
        { value: 'normal', name: 'Normaal' },
        { value: 'high', name: 'Hoog' },
    ];

    return faker.helpers.arrayElement(prios);
};

function generateTodos() {
    let todos = [];
    for (let i = 1; i <= 100; i++) {
        todos.push({
            id: i,
            name: faker.lorem.words(3),
            description: faker.lorem.lines({ min: 2, max: 5 }),
            createdAtDate: randomDate(),
            completedAtDate: '',
            priority: randomPriority(),
        });
    }
    return { todos };
}

// Write the generated data to db.json
fs.writeFileSync('db.json', JSON.stringify(generateTodos(), null, 2));
