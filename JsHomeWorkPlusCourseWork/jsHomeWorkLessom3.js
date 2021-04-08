//Try it out:
const randomBodyParts = ["глаз", "нос", "череп"];
const randomAdjectives = ["кривой", "унылый", "противнее"];
const randomAnimals = ["мухы", "выдры", "жирафа", "мартышкы", "крысы"];
const animalBodyParts = ["шея", "нос", "хвост"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let animalBodyPart = animalBodyParts[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];

console.log(`У тебя ${randomBodyPart} еще более ${randomAdjective}, чем ${animalBodyPart} у ${randomAnimal}`);
console.log(["У тебя", randomBodyPart, "еще более", randomAdjective+",", "чем", animalBodyPart, "у", randomAnimal].join(" "));

const numbers = [3,2,1];
console.log(numbers.join(" больше, чем "));

