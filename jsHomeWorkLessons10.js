let counter = 1;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
    counter+= 5;
};
let interId = setInterval(printMessage, 5000);

const privet = function (name){
    console.log("Привет лоб " + name)
}
privet ("vlad")

function zdorov(name){
    console.log("Привет Череп " + name)
}
zdorov("Dima")


let intervalCounter = 0;
const interval = setInterval(function() {
    if (intervalCounter === 5) {
        clearInterval(interval)
    } else {
        console.log(++intervalCounter)
    }
}, 5000)

let arrow = (Surname) => console.log("Hello " + Surname)
arrow("Kuznetsov")

//Try it out 1:
$("html").click(function (event) {
    // добавили обработчик события mousemove
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY,
    });
});

//Try it out 2:
let direction = 'right';
let offset = 0;

$("#heading").offset({ left: offset, top: offset });

let moveHead = function () {
    if (direction === 'right') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 100) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 100) {
            offset = 100;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 100;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

setInterval(moveHead, 20);

//Try it out 3:
let intervalId = setInterval(moveHead, 20);

$("#heading").click(function () {
    clearInterval(intervalId);
});

//Exercise4:
let intervalId = setInterval(moveHead, intervalLength);

$("#heading").click(function () {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("#heading").text("You are winner!");
    } else {
        intervalId = setInterval(moveHead, intervalLength)
    }
});
