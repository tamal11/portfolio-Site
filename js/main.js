const projectId = document.getElementById("nav-list-project");
const sectionProject = document.getElementById("project");

const techskillId = document.getElementById("nav-list-techskill");
const sectionTechskill = document.getElementById("techskill");

const experienceId = document.getElementById("nav-list-experience");
const sectionExperience = document.getElementById("experience");

const achievementId = document.getElementById("nav-list-achievement");
const sectionAchievement = document.getElementById("achievement");

// Mobile navigation bar
const mobileNavBar = document.getElementById("enter");
const closeNavBar = document.getElementById("exit");
const mobileNav = document.getElementById("mobile-navigation");

// mobile navigation id declaration
const mProjectId = document.getElementById("mobile-nav-list-project");

const mTechskillId = document.getElementById("mobile-nav-list-techskill");

const mExperienceId = document.getElementById("mobile-nav-list-experience");

const mAchievementId = document.getElementById("mobile-nav-list-achievement");

mobileNavBar.addEventListener("click", function () {
  mobileNav.style.display = "block";
});

closeNavBar.addEventListener("click", function () {
  mobileNav.style.display = "none";
});

// Adding margin for different section for mobile view
mProjectId.addEventListener("click", function () {
  mobileNav.style.display = "none";
  sectionTechskill.classList.remove("mobile-section-margin");
  sectionExperience.classList.remove("mobile-section-margin");
  sectionAchievement.classList.remove("mobile-section-margin");
});

mTechskillId.addEventListener("click", function () {
  mobileNav.style.display = "none";
  sectionProject.classList.remove("mobile-section-margin");
  sectionExperience.classList.remove("mobile-section-margin");
  sectionAchievement.classList.remove("mobile-section-margin");
});

mExperienceId.addEventListener("click", function () {
  mobileNav.style.display = "none";
  sectionTechskill.classList.remove("mobile-section-margin");
  sectionProject.classList.remove("mobile-section-margin");
  sectionAchievement.classList.remove("mobile-section-margin");
});

mAchievementId.addEventListener("click", function () {
  mobileNav.style.display = "none";
  sectionTechskill.classList.remove("mobile-section-margin");
  sectionProject.classList.remove("mobile-section-margin");
  sectionExperience.classList.remove("mobile-section-margin");
});

// Adding margin for different section for desktop view
projectId.addEventListener("click", function () {
  sectionTechskill.classList.remove("addMargin");
  sectionExperience.classList.remove("addMargin");
  sectionAchievement.classList.remove("addMargin");
  if (sectionProject.classList.contains("addMargin")) {
    sectionProject.classList.remove("addMargin");
  } else {
    sectionProject.classList.add("addMargin");
  }
});

techskillId.addEventListener("click", function () {
  sectionProject.classList.remove("addMargin");
  sectionExperience.classList.remove("addMargin");
  sectionAchievement.classList.remove("addMargin");
  if (sectionTechskill.classList.contains("addMargin")) {
    sectionTechskill.classList.remove("addMargin");
  } else {
    sectionTechskill.classList.add("addMargin");
  }
});

experienceId.addEventListener("click", function () {
  sectionTechskill.classList.remove("addMargin");
  sectionProject.classList.remove("addMargin");
  sectionAchievement.classList.remove("addMargin");
  if (sectionExperience.classList.contains("addMargin")) {
    sectionExperience.classList.remove("addMargin");
  } else {
    sectionExperience.classList.add("addMargin");
  }
});

achievementId.addEventListener("click", function () {
  sectionTechskill.classList.remove("addMargin");
  sectionProject.classList.remove("addMargin");
  sectionExperience.classList.remove("addMargin");
  if (!sectionAchievement.classList.contains("addMargin")) {
    sectionAchievement.classList.add("addMargin");
  }
});

// For hello wolrd typinf effect

const mHTML = document.getElementById('message'),
  messages = [
    'world..',
    '< / world >'

  ];
let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(() => {
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(() => {
        deleteMessage(part);
      }, 1000);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}
function deleteMessage(str) {
  let int = setInterval(() => {
    if (str.length === 0) {
      setTimeout(() => {
        typeMessage();
      }, 1000);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  }, 50);
}
typeMessage();