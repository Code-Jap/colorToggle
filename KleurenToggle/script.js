const homeBtn = document.getElementById("home")
const greenBtn = document.getElementById("green")
const yellowBtn = document.getElementById("yellow")
const redBtn = document.getElementById("red")
const purpleBtn = document.getElementById("purple")
const blueBtn = document.getElementById("blue")

const menuBtn = document.getElementById("hamburger")
const menu = document.getElementsByClassName("colorMenu")

const h1Text = document.getElementById("heading")



//Enter menu

menuBtn.addEventListener("mouseenter", function () {

    toggleMenu()
});




//Radio button clickevent

homeBtn.addEventListener("click", function () {

    makeBackgroundGrey();
    changeText("Light grey")
    toggleMenu()
});



greenBtn.addEventListener("click", function () {

    makeBackgroundGreen()
    changeText("Green")
    toggleMenu()
});



yellowBtn.addEventListener("click", function () {


    makeBackgroundYellow()
    changeText("Yellow")
    toggleMenu()
    numericMenu(2)
});



redBtn.addEventListener("click", function () {

    makeBackgroundRed()
    changeText("Red")
    toggleMenu()
});



purpleBtn.addEventListener("click", function () {

    makeBackgroundPurple()
    changeText("Purple")
    toggleMenu()
});



blueBtn.addEventListener("click", function () {

    makeBackgroundBlue()
    changeText("Blue")
    toggleMenu()
});




//Background changing function

makeBackgroundGrey = () => {

    body.classList.add("home-background");
    body.classList.remove("green-background");
    body.classList.remove("yellow-background");
    body.classList.remove("red-background");
    body.classList.remove("purple-background");
    body.classList.remove("blue-background");
};


makeBackgroundGreen = () => {

    body.classList.remove("home-background");
    body.classList.add("green-background");
    body.classList.remove("yellow-background");
    body.classList.remove("red-background");
    body.classList.remove("purple-background");
    body.classList.remove("blue-background");
};


makeBackgroundYellow = () => {

    body.classList.remove("home-background");
    body.classList.remove("green-background");
    body.classList.add("yellow-background");
    body.classList.remove("red-background");
    body.classList.remove("purple-background");
    body.classList.remove("blue-background");
};



makeBackgroundRed = () => {

    body.classList.remove("home-background");
    body.classList.remove("green-background");
    body.classList.remove("yellow-background");
    body.classList.add("red-background");
    body.classList.remove("purple-background");
    body.classList.remove("blue-background");
};


makeBackgroundPurple = () => {

    body.classList.remove("home-background");
    body.classList.remove("green-background");
    body.classList.remove("yellow-background");
    body.classList.remove("red-background");
    body.classList.add("purple-background");
    body.classList.remove("blue-background");
};


makeBackgroundBlue = () => {

    body.classList.remove("home-background");
    body.classList.remove("green-background");
    body.classList.remove("yellow-background");
    body.classList.remove("red-background");
    body.classList.remove("purple-background");
    body.classList.add("blue-background");
};



//Menu hide/show

toggleMenu = () => {

    if (menu[0].style.visibility === "visible") {
        menu[0].style.visibility = "hidden";
    } else {
        menu[0].style.visibility = "visible";
    }
};




//Text changing function

changeText = (color) => {

    h1Text.textContent = color
}





























