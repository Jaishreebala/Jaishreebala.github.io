let project = {
  id: 0,
  imageUrl: "./innerpeace.png",
  projectTitle: "Inner Peace",
  projectStatus: "Status:  Front End Complete",
  linkDescription: "Visit Demo Website",
  projectDescription:
    "Mental health is very important in this fast paced world. Inner peace is a web application that allows the user to track their mood every day and recieve monthly reports based on the user’s input."
};
// console.log(project);
//will contain project name and description
let projectList = {
  project1: {
    id: 0,
    imageUrl: "./quickCheck.png",
    projectTitle: "QuickCheck",
    projectStatus: "Status:  Complete",
    linkDescription: "Try It Now",
    projectDescription:
      "QuickCheck is an online symptom checker that allows users to receive a preliminary diagnosis, based on the symptoms they report from the comfort of their home. ",
    projectLink: "https://jaishreebala.com/QuickCheck/"


  },
  project2: {
    id: 1,
    imageUrl: "./MemoryGame.png",
    projectTitle: "Memory Game",
    projectStatus: "Status:  Complete",
    linkDescription: "Play Game",
    projectDescription:
      "Match up the same cards to win! Three wrong guesses and you lose :( There’s also themes to choose from - Friends/Harry Potter/How I Met Your Mother",
    projectLink: "http://jaishreebala.com/memory-game/"

  },
  project3: {
    id: 2,
    imageUrl: "./ToDoList.png",
    projectTitle: "To Do List",
    projectStatus: "Status:  Complete",
    linkDescription: "Use Application",
    projectDescription:
      "Animated to do list, that makes completing work fun! It also has a filter option, making it a great way to keep track of work completed / work left for the day. The items on list gets saved, in the browser’s local storage.",
    projectLink: "https://jaishreebala.com/todo-list/"

  },
  project4: {
    id: 3,
    imageUrl: "./innerpeace.png",
    projectTitle: "Inner Peace",
    projectStatus: "Status:  Front End Complete",
    linkDescription: "Visit Demo Website",
    projectDescription:
      "Mental health is very important in this fast paced world. Inner peace is a web application that allows the user to track their mood every day and recieve monthly reports based on the user’s input.",
    projectLink: "http://jaishreebala.com/Inner-Peace/demosite.html"

  },

  project5: {
    id: 4,
    imageUrl: "./snakegame.png",
    projectTitle: "Snake Game",
    projectStatus: "Status: Complete",
    linkDescription: "Play Game",
    projectDescription:
      "Does the age old snake game need an introduction? This was the first game I created, using vanilla Javascript, HTML and CSS.",
    projectLink: "https://jaishreebala.com/Snake-Game/"

  },
  project6: {
    id: 5,
    imageUrl: "./oldportfolio.png",
    projectTitle: "Old Portfolio",
    projectStatus: "Status:  Complete",
    linkDescription: "Visit Website",
    projectDescription:
      "Keeping track of my progress really motivates me - this was the first website I created.",
    projectLink: "https://jaishreebala.com/Portfolio2019/"

  }


};
function manipulateData() {
  document.getElementById("project-image").src = project.imageUrl;
  document.getElementById("project-title").innerHTML = project.projectTitle;
  document.getElementById("project-status").innerHTML = project.projectStatus;
  document.getElementById("project-description").innerHTML =
    project.projectDescription;
  document.getElementById("link-description").innerHTML =
    project.linkDescription;
  document.getElementById("project-link").href = project.projectLink;
}
//code for Right
function rotateProjectRight(i) {
  for (var k in projectList) {
    if (projectList[k].id == i)
      for (var j in projectList[k]) {
        project[j] = projectList[k][j];
      }
  }
  console.log(project);
  manipulateData();
}
console.log(project);
var i = 0;
function generateRightI() {
  if (i < 5) i++;
  else i = 0;
  console.log(i);
  rotateProjectRight(i);
}
document
  .getElementById("right-arrow")
  .addEventListener("click", generateRightI);

//code for Left
function rotateProjectLeft(i) {
  for (var k in projectList) {
    if (projectList[k].id == i)
      for (var j in projectList[k]) {
        project[j] = projectList[k][j];
      }
  }
  console.log(project);
  manipulateData();
}

function generateLeftI() {
  if (i > 0) i--;
  else i = 5;

  rotateProjectLeft(i);
}
document.getElementById("left-arrow").addEventListener("click", generateLeftI);

window.addEventListener('resize', hideMenu);
$(document).ready(function () {
  $(".menu").click(function () {
    if ($("header").attr('id') == "cross") {
      $("header").removeAttr('id')
      $(".menu").removeClass('open')

      $(".links").hide();

    }
    else {
      $('header').attr('id', 'cross');
      $('.menu').addClass('open');
      $(".links").css({
        "display": "flex",
        "flex-direction": "column",
        "width": "100%"
      })
    }
  });
})

function hideMenu() {
  if (window.innerWidth > 725 && $("header").attr('id') == "cross") {
    $("header").removeAttr('id')
    $(".menu").removeClass('open')
    $(".links").hide();
  }
  if (window.innerWidth > 725 && $(".links").is(":visible") == false) {
    $(".links").css({
      "display": "flex",
      "flex-direction": "row",
      "width": "fit-content"
    })
  }
  if (window.innerWidth < 725 && $("header").attr('id') != "cross") {
    $(".links").hide();
    $(".menu").removeClass('open')
  }
}