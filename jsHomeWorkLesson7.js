let words = [
    "макарон",
    "сосиска",
    "максиТех",
    "инновекс"
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
let gueesConter = 3;
let remainingLetters = word.length;

while (remainingLetters > 0 && gueesConter > 0) {
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase()
    if (guess === null || gueesConter === 0) {
        break
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.")
    }else {
        gueesConter--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess.toLowerCase()
                remainingLetters--
            }
        }
    }
}

alert(answerArray.join(" "))
if (gueesConter > 0) {
    alert(`Отлично! Было загадано слово ${word}`);
} else {
    alert(`Не угадали! Было загадано слово ${word}`);
}

