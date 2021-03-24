// Try it out:
let firstInvitedPeople, additionalInvitedPeople, ballsCounts;

    firstInvitedPeople = 15;
    additionalInvitedPeople = 9;
    ballsCounts = (firstInvitedPeople + additionalInvitedPeople) * 2;
        console.log('All quantity of balls '+ ballsCounts);

//Try it out:
const secondInAMinute = 60;
const minuteInAHour = 60;
const secondInAHour = secondInAMinute * minuteInAHour;
const hoursInADay = 24;
const daysInAYear = 365;

let age, ageInASecond;

let secondInADay = secondInAHour * hoursInADay;
        console.log(secondInADay + ' second in a day ');
        console.log(secondInAHour + ' second in a hour ');
let secondInAYear = secondInADay * daysInAYear;
        console.log(secondInAYear + ' second in a year ');
    age = 10;
    ageInASecond = secondInAYear * age;
        console.log(ageInASecond + ` second in a ${age} year`);

//Try it out:
let ballons = 100;
    ballons *= 2;
        console.log('Ballons quantity: '+ ballons);
    ballons += 2;
        console.log('Ballons quantity: '+ ballons);
    ballons -= 2;
        console.log('Ballons quantity: '+ ballons);
    ballons /=4;
        console.log('Ballons quantity: '+ ballons);

//Try it out:
const myName = "Vlad";
    console.log(myName[0]);
    console.log(myName[1]);
    console.log(myName[2]);
    console.log(myName[3]);

//Try it out:
const codeWar1 = "Обернитесь";
const codeWar2 = "неужели";
const codeWar3 = "огурци";
const codeWar4 = "липкие";
const codeWar5 = "?!";
    console.log(codeWar1[1] + codeWar2[1] + codeWar3[1] + codeWar4[1] + codeWar5[1]);

//Try it out:
const longString = "Эта длинная строка такая длинная";
let trimedString = longString.slice(4,18);
        console.log(trimedString);


//Try it out:
let sillyString, lowerString, firstCharacterUpper, firstCharacter, restOfString;
    sillyString = "эЙ, кАК деЛа?";
    lowerString = sillyString.toLowerCase();
    firstCharacter = lowerString[0];
    firstCharacterUpper = firstCharacter.toUpperCase();
    restOfString = lowerString.slice(1);
        console.log(firstCharacterUpper + restOfString);

let newString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
        console.log(newString);


//Try it out:
let accompanied = true;
if (age <= 11 && accompanied === false) {
    console.log("Access denied");
} else {
    console.log("Access approved");
}
