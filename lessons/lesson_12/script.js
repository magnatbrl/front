// ! Functions - функции

// функции позволяют переиспользовать написанный код
// если нужно, то можно создать функцию, которую можно будет переиспользовать с разными данными
// функции помогают организовывать и структурировать код

// важная часть функции - return (возвращаемое значение)
// в нем мы указываем на то, что функция 'произведет' или вернет (поэтому, return)
// такое возвращенное значение можно забрать из функции и использовать дальше в программе
// если у функции нет возвращенного значения - она возвращает undefined

// * 1. function declaration - объявление через ключевое слово function

// объявление функции через ключевое слово function
// value - это параметр за место которого в функцию при вызове придет значение

// пример с hoisting (поднятие), вызовом функции до ее объявления
const greeting3 = helloWord(42);

function helloWord(value) {
    // даем возможность передать значение как строку или как число через проверку с typeof
    if (typeof value === "string" || typeof value === "number") {
        return `Hello, ${value}!`;
    }
    // 'выбрасываем' ошибку, чтобы не дать использовать функцию с данными неверного типа
    throw new Error("give me string value, please");
}

// чтобы пользоваться возвращенным значением в коде мы кладем его в переменную
// передаваемые вместо параметров в функцию значения называются аргументами

const greeting1 = helloWord("JavaScript");
const greeting2 = helloWord("sun");

// console.log(greeting1);
// console.log(greeting2);
// console.log(greeting3);

// * 2. function expression - объявление в переменной + ключевое слово function
// такие функции кладутся в переменную и обладают ее свойствами
// их нельзя вызвать до инициализации переменной

// const sumResult = sum(50, 30); вызов до инициализации приведет к ошибке

const sum = function (num1, num2) {
    return num1 + num2;
};

const sumResult = sum(50, 30);
// console.log("суммы двух чисел ====>", sumResult);

// * 3. Стрелочные функции - arrow functions
/// называются так из-за символа =>

// если выражение можно уместить в одну строку  - стрелочным функциям не нужен return
// результат действие станет возвращенным значением
const multiply = (a, b, c) => a * b * c;

// если действе в теле функции не уместить в одну строку мы добавляем фигурные скобки
// если не указать return такая функция вернет undefined

const multiply1 = (a, b, c) => {
    const result = a * b * c;
    return `${result} - это результат умножения ${a}, ${b} и ${c}`;
};

const multiply2 = (a, b, c) => {
    a * b * c;
};


// console.log(multiply1(10, 2, 3)); // вернет 60 - результат выражения
// console.log(multiply1(10, 2, 3)); // вернет строку `${result} - это результат умножения ${a}, ${b} и ${c}`;
// console.log(multiply2(10, 2, 3)) // вернет undefined , поскольку нет return

// ! methods arrays

const brothers = [
    { name: 'Legolas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Aragorn', height: 190, race: 'human', age: 50, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'magician', age: 2000, hasMagic: true }
]

let frodo = { name: 'Frodo', height: 105, race: 'hobbit', age: 33, hasMagic: false }

console.log('novaya dlina arrays', brothers.push(frodo));


console.log(brothers);


// * map()


const brothersNames = brothers.map(el => el.name);
console.log(brothersNames);

const brothersAges = brothers.map(brother => brother.age);
console.log(brothersAges);

// нет return  поэтому undefined
// const brothersNamesAndAges = brothers.map(element => {element.name + ' ' + element.age});
// console.log(brothersNamesAndAges);

const brothersNamesAndAges1 = brothers.map(element => element.name + ' ' + element.age);
console.log(brothersNamesAndAges1);


// * filter()

console.log('=== filter() ===');

console.log(brothers.filter(brother => brother.age > 100 && brother.hasMagic === true));

// * find()

console.log('=== find() ===');

const hobbit = brothers.find(brother => brother.race === 'hobbit');
const oldHero = brothers.find(brother => brother.age > 100);

console.log(oldHero);
console.log(hobbit);


// * reduce()

console.log('=== reduce() ===');

let sum1 = 0;
for (let i = 0; i < brothers.length; i++) {
    sum1 += brothersAges[i];
}

console.log(sum1);

let sum2 = brothersAges.reduce((acc, current) => acc + current, 0);

let sum3 = brothers.reduce((acc, current) => acc + current.age, 0);

console.log(sum3);
console.log(sum2);

let allNames = brothers.reduce((acc, current) => acc + current.name + ", ", 'bratstvo: ');
console.log(allNames);


const newBrothersName = allNames.split(' ').reverse().join(' ');
const newBrothersName1 = allNames.split('').reverse().join('');

console.log(newBrothersName);

console.log('====');

console.log(newBrothersName1);

