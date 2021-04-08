//Try it out:
const friends = ["Bill", "Fredy", "Alcapone"];

for (var i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
    $("p")
        .last()
        .hide()
        .fadeIn((i + 1) * 2000);
}

$("p").append(" the best");

//Try it out 2:
let fadeTime;
for (var i = 0; i < 5; i++) {
    fadeTime = (i + 1) * 1000;
    $("#main-heading")
        .fadeOut(fadeTime / 2)
        .fadeIn(fadeTime / 2);
}

//Try it out 3:
const friends = ["Nick", "Habib", "Stas"];

for (var i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
    $("p")
        .last()
        .hide().delay((i + 1) * 2500)
        .fadeIn(2000);
}

$("p").append(" the best");