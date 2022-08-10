
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

        }

    )
}

document.addEventListener("keydown", function (e) {

    makeSound(e.key);
    buttonAnimation(e.key);

    }
)

function makeSound (key) {

    switch (key) {

        case "w":
        new Audio('sounds/tom-1.mp3').play();
            break;

        case "a":
        new Audio('sounds/tom-2.mp3').play();
            break;

        case "s":
        new Audio('sounds/tom-3.mp3').play();
            break;

        case "d":
        new Audio('sounds/tom-4.mp3').play();
            break;

        case "j":
        new Audio('sounds/crash.mp3').play();
            break;

        case "k":
        new Audio('sounds/kick-bass.mp3').play();
            break;

        case "l":
        new Audio('sounds/snare.mp3').play();
            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}



// 