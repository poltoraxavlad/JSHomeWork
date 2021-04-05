//Try it out:
let sayHelloTo = function (name){
    console.log("Hello" + name);
}
sayHelloTo("nik");

//Try it out:
let drawCats = function (HowManyTimes){
    for (i = 0; i<HowManyTimes; i++){
        console.log(i + " =^.^=")
    }
}
drawCats(100);

//Try it out:
let printMultipleTimes = function (howManyTimes, whatToDraw){
    for (i = 0; i < howManyTimes; i++){
        console.log(i+ "" + whatToDraw);
    }
};
printMultipleTimes(10, "cat");

//Try it out:
let double = function (number) {
    return number * 2;
};
double(4);

//Try it out:
let pickRandomWord = function (words){
    return words[Math.floor(Math.random() * words.length)];
};
let randomWord = ["Planet", "worm", "flower", "PC"];
pickRandomWord(randomWord);
console.log(pickRandomWord(randomWord))

let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!"; randomString;
console.log(randomString)
//Try it out:
function multiply(a, b){
    return a * b;
}
function add(c){
    return c;
}


console.log(multiply(36325, 9824) + add(777));

//Try it out:
function areArraySame (firstArray, secondArray){
    if (firstArray.length !== secondArray.length) {
        return false
        }else{
            for (i = 0; i < firstArray.length;){
                if (firstArray[i] === secondArray[i]) {
                    i++;
                }else {
                    return false
                }
            }
        return true
        }

}
areArraySame([1, 2, 3], [1, 2, 3]);
//areArraySame([1, 5, 6], [1, 5, 4]);




