// Example 1:
let firstInvitedPeople, additionalInvitedPeople, ballsCounts;

    firstInvitedPeople = 15;
    additionalInvitedPeople = 9;
    ballsCounts = (firstInvitedPeople + additionalInvitedPeople) * 2;
        console.log('All quantity of balls '+ ballsCounts);

//Example 2:
let secondInAMinute, minuteInAHour, secondInAHour, hoursInADay, secondInADay, daysInAYear, secondInAYear, age, ageInASecond;

    secondInAMinute = 60
    minuteInAHour = 60
    secondInAHour = secondInAMinute * minuteInAHour
        console.log('Second in a hour '+ secondInAHour)

    hoursInADay = 24
    secondInADay = secondInAHour * hoursInADay
        console.log('Second in a day '+ secondInADay)
    daysInAYear = 365
    secondInAYear = secondInADay * daysInAYear
        console.log('Second in a year '+ secondInAYear)
    age = 10;
    ageInASecond = secondInAYear * age
        console.log('Age in a second '+ ageInASecond)

//Try it out:
let ballons = 100;
    ballons *= 2;
        console.log('Ballons quantity'+ ballons)
    ballons += 2;
        console.log('Ballons quantity'+ ballons)
    ballons -= 2;
        console.log('Ballons quantity'+ ballons)
    ballons /=4;
        console.log('Ballons quantity'+ ballons)

//Try it out 2:
let sillyString, lowerString, firstCharacterUpper, firstCharacter, restOfString;
    sillyString = "эЙ, кАК деЛа?"
    lowerString = sillyString.toLowerCase();
    firstCharacter = lowerString[0];
    firstCharacterUpper = firstCharacter.toUpperCase();
    restOfString = lowerString.slice(1);
        console.log(firstCharacterUpper + restOfString)

let newString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()
        console.log(newString)

//Try it out 3:

let accompanied = false;
if (age <= 11 && accompanied === false) {
    console.log("Access denied");
} else {
    console.log("Access approved");
};
