let cat = {};
cat.legs = 3;
cat.name = "Rich";
cat.color = "brown";
console.log(cat)

//Try it out

let anna = {name: "Anna", age: 23, luckyNumbers: [2,3,5,], scores: 5 };
let oleg = {name: "Oleg", age: 25, luckyNumbers: [1,4,9,], scores: 7 };
let valik = {name: "Valik", age: 27, luckyNumbers: [6,7,8], scores: 3 };

let plusScores =
    anna.scores += 2;
    oleg.scores += 1;
    valik.scores += 3;


console.log(oleg, anna, valik);
//Try it out
let myCrazyObjects = {
    "name": "Какой-то обьект",
    "some array": [7,9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
};
console.log(myCrazyObjects["some array"][2].number);
