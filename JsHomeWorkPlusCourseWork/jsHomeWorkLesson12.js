//Try it out:
let speak = function () {
    console.log('Hi, my name is '+ this.name + this.sound);
}
let dog = {
    name: "Barsik ",
    sound: "Waf-waf-waf",
    color: "Brown",
    speak: speak
};

let cat = {
    name: "Rich ",
    sound: "Mau-mau-mau",
    color: "Perl",
    speak: speak
};
cat.speak();
dog.speak();

//Try it out 2:
let Car = function (x, y) {
    this.x = x;
    this.y = y;
};
Car.prototype.draw = function () {
    var carHtml = '<img src="../Kuznetsov.png">';

    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};
Car.prototype.moveRight = function () {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= 80
    this.carElement.css({
        left: this.x,
        top: this.y

    });
};

Car.prototype.moveUp = function () {
    this.y -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

let tesla = new Car(20, 20);
let nissan = new Car(20, 200);
// tesla.draw();
// nissan.draw();
setInterval(function (){
    tesla.draw();
    tesla.moveRight(Math.random() * 4)
}, 50)
setInterval(function (){
    nissan.draw();
    nissan.moveRight(Math.random() * 9)
}, 70)






