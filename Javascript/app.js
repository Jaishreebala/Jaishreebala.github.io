// DOM selectors
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menuItems")
const listItems = document.querySelectorAll(".menuItems a");
const swipeText = document.querySelector(".text");
const logo = document.querySelector(".logo img");
const burger = document.querySelector(".hamburger");
let swipeTextList = ["Full Stack Web developer", "Game Development Enthusiast", "Data Science Enthusiast", "UI/UX Designer"];
let countText = 1;
let delayCounter = 0;
let mouse = document.querySelector(".cursor");
let interactiveText = mouse.querySelector("span");

// Functions

function typewriter() {
    countText++;
    delayCounter++;
    swipeText.style.animation = `swipeAnimation 1s ease ${3 * delayCounter}s`;
    setTimeout(() => {
        swipeText.innerText = swipeTextList[countText];
    }, 500)
    if (countText == 4) {
        countText = 0;
    }
    setTimeout(typewriter, 3000)

}

function cursor(e) {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}
function interactiveMouse(e) {
    const item = e.target;
    if (item.id === "logo" || item.id === "burger" || item.classList.contains('button') || item.parentNode.classList.contains("links-area") || item.parentNode.classList.contains("menuLinks")) {
        mouse.classList.add("interactive-purple")
        interactiveText.innerHTML = item.innerText || "tap";
    } else {
        mouse.classList.remove("interactive-purple");
        interactiveText.innerHTML = "";
    }
}
function smoothScrollBg() {
    if ((this.scrollY > this.innerHeight / 2) && !isInViewport(document.getElementById("contact"))) {
        document.body.classList.add("projects-gradient")
    }
    else {
        document.body.classList.remove("projects-gradient")
    }
    if (isInViewport(document.getElementById("home"))) {
        listItems[1].classList.remove("selected");
        listItems[2].classList.remove("selected");
        listItems[0].classList.add("selected");
    } else
        if (isInViewport(document.getElementById("contact"))) {
            listItems[1].classList.remove("selected");
            listItems[0].classList.remove("selected");
            listItems[2].classList.add("selected");
        }
        else {
            listItems[0].classList.remove("selected");
            listItems[2].classList.remove("selected");
            listItems[1].classList.add("selected");
        }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight * 2 || document.documentElement.clientHeight * 2) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//  Event Listeners and timeouts
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", interactiveMouse);
window.addEventListener("scroll", smoothScrollBg);
setTimeout(typewriter, 3000)
hamburger.addEventListener("click", () => {
    menuItems.classList.toggle('toggleMenu');
    document.body.classList.toggle("hidden");

    listItems.forEach(listItem => {
        listItem.classList.toggle('fade')
    })
})
listItems.forEach(listItem => {
    listItem.addEventListener("click", () => {
        menuItems.classList.toggle('toggleMenu')
        document.body.classList.toggle("hidden");

        listItems.forEach(listItemTwo => {
            listItemTwo.classList.remove("selected")
            listItemTwo.classList.toggle('fade')
        })
        listItem.classList.add("selected");
    })
})
