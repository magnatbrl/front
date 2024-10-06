const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const heroesSimpl = starWarsHeroes.map(hero => ({ name: hero.name, isJedi: hero.isJedi }));
console.log(heroesSimpl);

function getSimplHeroes(heroes) {
    return heroes.map(hero => ({ name: hero.name, isJedi: hero.isJedi }));
}

console.log(getSimplHeroes(starWarsHeroes));



console.log('===  младше 40 лет ===');
const youngJedi = starWarsHeroes.filter(heroes => heroes.age < 40);
console.log(youngJedi);

function getYoungJedi(heroes) {
    return starWarsHeroes.filter(heroes => heroes.age < 40);
};
console.log(getYoungJedi(starWarsHeroes));




console.log('=== возраст всех джедаев ===');
const heroesAges = starWarsHeroes.reduce((acc, current) => acc + current.age, 0);
console.log('возраст всех джедаев: ' + heroesAges);

function getHeroesAges(ages) {
    return starWarsHeroes.reduce((acc, current) => acc + current.age, 0);
}
console.log('возраст всех джедаев: ' + getHeroesAges(starWarsHeroes));


console.log('=== Повысьте возраст героев на 10 лет ===');
const heroesPlusAges = starWarsHeroes.map(hero => ({ ...hero, age: hero.age + 10 }));
console.log(heroesPlusAges);

function getHeroesPlusAges(ages) {
    return starWarsHeroes.map(hero => ({ ...hero, age: hero.age + 10 }));
}
 console.log(getHeroesPlusAges(starWarsHeroes));
 


console.log('=== Anakin => Darth ===');
const updatedHeroes = starWarsHeroes.map(hero => hero.name === 'Anakin Skywalker' ? { name: 'Darth Vader', isJedi: false, age: 50 } : hero);
console.log(updatedHeroes);

function GetUpdatedHeroes(heroes) {
    return starWarsHeroes.map(hero => hero.name === 'Anakin Skywalker' ? { name: 'Darth Vader', isJedi: false, age: 50 } : hero);
}
console.log(GetUpdatedHeroes(starWarsHeroes));
