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
    imageUrl: "./innerpeace.png",
    projectTitle: "Inner Peace",
    projectStatus: "Status:  Front End Complete",
    linkDescription: "Visit Demo Website",
    projectDescription:
      "Mental health is very important in this fast paced world. Inner peace is a web application that allows the user to track their mood every day and recieve monthly reports based on the user’s input."
  },
  project2: {
    id: 1,
    imageUrl: "./musicmaker.png",
    projectTitle: "Music Maker",
    projectStatus: "Status:  90% complete",
    linkDescription: "Try It Now",
    projectDescription:
      "I have a huge passion for music and I love web developing. So I combined my passions and decided to create a web app for drums & piano."
  },
  project3: {
    id: 2,
    imageUrl: "./snakegame.png",
    projectTitle: "Snake Game",
    projectStatus: "Status: Complete",
    linkDescription: "Play Game",
    projectDescription:
      "Does the age old snake game need an introduction? This was the first game I created, using vanilla Javascript, HTML and CSS."
  },
  project4: {
    id: 3,
    imageUrl: "./oldportfolio.png",
    projectTitle: "Old Portfolio",
    projectStatus: "Status:  Complete",
    linkDescription: "Visit Website",
    projectDescription:
      "Keeping track of my progress really motivates me - this was the first website I created."
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
  if (i < 3) i++;
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
  else i = 3;

  rotateProjectLeft(i);
}
document.getElementById("left-arrow").addEventListener("click", generateLeftI);

// $(document).ready(function() {
//   $(".gradient-box").mouseenter(function() {
//     $(".gradient-box").append($("#link-description, #project-arrow "));
//     $(".inner-gradient-box").fadeOut();
//   });
// });
