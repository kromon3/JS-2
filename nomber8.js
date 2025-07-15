function SnowballName(names, k) {
    let sequence = [];

    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j <= i; j++) {
            sequence.push(names[j]);
        }
    }

    // Возвращаем имя на позиции k (1-индексация)
    return sequence[k - 1] || null;
}

// Пример использования:
const names = ["Миша", "Гена", "Маша"];
const k = 4;

console.log(SnowballName(names, k)); // → "Миша"
