const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];


let namesAndAges = [];

for (let i = 0; i < names.length; i++) {
  namesAndAges.push(`${names[i]} ${ages[i]} лет/годов`)
}
console.log(namesAndAges);

let namesAndAgesReversed = [];
let namesAndAgesReversed1 = [];

for (let i = names.length - 1; i >= 0; i--) {
  namesAndAgesReversed.push(namesAndAges[i])
};

console.log(namesAndAgesReversed);

namesAndAges.reverse();

// console.log(namesAndAges);

let countries = []
countries.push("Германия", "Франция", "Италия");
let deletedCountry = countries.pop();
console.log(countries);
console.log(deletedCountry);

countries.unshift(deletedCountry)

const countriesNew = [deletedCountry, ...countries, "Испания"];
console.log(countriesNew);
console.log(countries);


let car = {
  brand: 'bmw',
  model: 'x5',
  year: '2010',
  isElectric: false,
  getCarInfo: () => `${car.brand}, ${car.model}, ${car.year}`
};

console.log(car.getCarInfo());

for (let key in car) {
  console.log(`key: ${key}, value: ${car[key]}`);
}

console.log(Object.keys(car));
console.log(Object.values(car));


