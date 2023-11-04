
//this is for button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function l̥() {//using anonymmous function
        // alert("I am clicked!");
        //this object is very importantin js it returns the identity of the object or a kind of whole object on which operation is being performed
        // this.style.color="white";
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

    });
}

//ading listener to keyboard press!
document.addEventListener("keypress", function (event)//event gives the objects that triggered the event
{
    makeSound(event.key);

})


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log("Invalid");
    }

}




