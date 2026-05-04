const menuBtn = $(".menu-btn");
const menu = $(".menu");
const menuBranding = $(".menu-branding");
const menuNav = $(".menu-nav");
const navItem = $(".nav-item");
const projectsContainer = $(".projects");

let showMenu = false;

menuBtn.on("click", function () {
  if (!showMenu) {
    menuBtn.addClass("close");
    menu.addClass("show");
    menuBranding.addClass("show");
    menuNav.addClass("show");
    navItem.addClass("show");
    showMenu = true;
  } else {
    menuBtn.removeClass("close");
    menu.removeClass("show");
    menuBranding.removeClass("show");
    navItem.removeClass("show");
    menuNav.removeClass("show");
    showMenu = false;
  }
});

$("#contactForm").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    company: {
      required: true,
    },
    name: {
      required: true,
    },
  },
  messages: {
    email: {
      required: "I need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    company: {
      required: "Please specify your company",
    },
    name: {
      required: "Please specify your name",
    },
  },
});

let modal = $("#myModal");

window.onclick = function (event) {
  if (event.target.id == "myModal") {
    modal.css({ visibility: "hidden" });
  }
};
$("#submit").on("click", function (e) {
  e.preventDefault();

  if ($("#contactForm").valid()) {
    $.ajax({
      method: "POST",
      url: "https://formsubmit.co/teddybear901@abv.bg",
      accepts: "application/json",
      data: $("#contactForm").serialize(),
      error: (error) => console.log("error", error),
      success: function (result) {
        modal.css({ visibility: "visible" });
        $("#contactForm")[0].reset();
      },
    });
  }
});

$(".close").on("click", function (e) {
  modal.css({ visibility: "hidden" });
});

if (projectsContainer.length) {
  const projects = [
    {
      title: "Market Cloud – eCommerce Platform",
      image: "./images/marketCloud.png",
      projectUrl: "https://market-cloud.vercel.app/",
      githubUrl: "https://github.com/TheodoraDimitrova/marketCloud",
    },
    {
      title: "InVoice App",
      image: "./images/invoicer.png",
      projectUrl:
        "https://in-voice-app-theodoradimitrovas-projects.vercel.app/",
      githubUrl: "https://github.com/TheodoraDimitrova/inVoice_App",
    },
    {
      title: "RBS Real Estate",
      image: "./images/RBS.png",
      projectUrl: "https://rbs-real-estate.vercel.app/",
      githubUrl: "https://github.com/TheodoraDimitrova/RBS_Real_Estate",
    },
    {
      title: "Dev Experience",
      image: "./images/devExp.jpg",
      projectUrl: "https://dev-experience-production.up.railway.app/",
      githubUrl: "https://github.com/TheodoraDimitrova/devExpReact",
    },
  ];

  const projectsHtml = projects
    .map(
      (project) => `
        <div class="item">
          <a href="${project.projectUrl}" target="_blank">
            <img src="${project.image}" alt="${project.title}">
          </a>
          <a href="${project.projectUrl}" target="_blank" class="btn btn-light">
            <i class="fas fa-eye fa-2x"></i> Project
          </a>
          <a href="${project.githubUrl}" target="_blank" class="btn btn-dark">
            <i class="fab fa-github fa-2x"></i> Github
          </a>
        </div>
      `,
    )
    .join("");

  projectsContainer.html(projectsHtml);
}

$(document).ready(function () {
  const currentYear = new Date().getFullYear();

  $("#footer").text(
    "Copyright © " + currentYear + " Teodora Dimitrova. All rights reserved.",
  );
});
