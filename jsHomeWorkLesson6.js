//Try it out:
let name = "Nikolay";
console.log("Привет " + name);
if (name.length > 5) {
    console.log("Ну и длинное имья")
}else {
    console.log("Короткое имья")
}

//Try it out:
if (name === "Nikolay") {
    console.log("Привет, папа");
}else if (name === "Nastya") {
    console.log("Привет, мама");
}else
    console.log("Привет незнакомец")

//Try it out:
// let sheepCounted = 0;
// while (sheepCounted < 10){
//     console.log("Подсчитано овец " + sheepCounted + " !")
//     sheepCounted++;
// }
// console.log("Хррррр-рррр-рр");

//Try it out:
for (let sheepCounter = 0; sheepCounter < 10; sheepCounter++ ){
    console.log("Подсчитано овец " + sheepCounter + " !");
    }
console.log("Хррррр-рррр-рр")

//Try it out:
for (let i = 0; i< name.length; i++)
    console.log("В моем именни есть буква " +  name[i] + ".");
// Try it out:
for (let x = 3; x < 10000; x=x*3){
    console.log(x);
}
let y = 3;
while (y < 10000){
    y=y*3;
    if (y<10000) {
        console.log(y)
    }
}

//Try it out
let animals = ["Кот","Лемур","Лев","Варан"];
for (let i=0; i < animals.length; ){
    animals[i] = animals[i] + "- прекрасное животное";
    i++;
}
console.log(animals);

//Try it out:
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
while (randomString.length < 10){
    randomString += alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(randomString);
}

//Try it out:
let input = "javascript is awesome";
let output = "";
for ( let i = 0; i < input.length;) {
    if (input[i] === "a") {
        output += 4
    } else if (input[i] === "e") {
        output += 3
    } else if (input[i] === "i") {
        output += 1
    } else if (input[i] === "i") {
        output += 1
    } else if (input[i] === "o") {
        output += 0
    } else output += input[i];
    i++;
}


console.log(output)

