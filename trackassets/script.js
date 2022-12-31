var log = document.getElementById("log");
var sign = document.getElementById("sign");
var logclose = document.getElementById("log-close");
var signclose = document.getElementById("sign-close");

// Get the button that opens the modal
var signbtn = document.getElementById("signBtn");
var logbtn = document.getElementById("logBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("popstate", detectHistory);

function orlog() {
  sign.style.display = "none";
  log.style.display = "block";
}
function orsign() {
  sign.style.display = "block";
  log.style.display = "none";
}
// When the user clicks the button, open the modal
logbtn.onclick = function () {
  log.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};
signbtn.onclick = function () {
  sign.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};

// When the user clicks on <span> (x), close the modal
logclose.onclick = function () {
  log.style.display = "none";
  history.back();
};
signclose.onclick = function () {
  sign.style.display = "none";
  history.back();
};

/***********proceed btn ************/
var probtn = $("#proceed-btn");
var proceed = document.getElementById("proceed-modal");
var courseCount = 0;
$("#proceed-btn").click(function () {
  if (courseCount === 0) {
    $("#proceed-modal").css("display", "inline-block");
    $("#proceed-modal").animate({ bottom: "0" }, 500);
    window.history.pushState({ id: 1 }, null, "index.html");
  } else {
    console.log($("#proceed-link"));
    document.getElementById("proceed-link").click();
  }
});
document.getElementById("ok").onclick = function () {
  $("#proceed-modal").animate({ bottom: "-100vh" }, 500);
  setTimeout(function () {
    $("#proceed-modal").css("display", "none");
  }, 1000);
  history.back();
};
/***********proceed btn ************/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sign) {
    sign.style.display = "none";
    history.back();
  }
  if (event.target == log) {
    log.style.display = "none";
    history.back();
  }
  /***********proceed btn ************/

  if (event.target == proceed) {
    $("#proceed-modal").animate({ bottom: "-100vh" }, 500);
    setTimeout(function () {
      $("#proceed-modal").css("display", "none");
    }, 1000);
    history.back();
  }
  /***********proceed btn ************/
};

function detectHistory() {
  sign.style.display = "none";
  log.style.display = "none";
}

var query = document.getElementsByClassName("query-asked");

for (var i = 0; i < 4; i++) {
  query[i].addEventListener("click", function () {
    $(".query-asked > .query-ans")
      .not($(this).children(".query-ans"))
      .fadeOut();

    $(".query-asked >.query-ques> button>.minus")
      .not(
        $(this).children(".query-ques").children("button").children(".minus")
      )
      .hide();
    $(".query-asked >.query-ques> button> .plus")
      .not($(this).children(".query-ques").children("button").children(".plus"))
      .show();
    $(".query-asked").not(this).removeClass("active-query", 500);
    // $(this).children(".query-asked button").toggleClass("button-border");
    var min = $(this)
      .children(".query-ques")
      .children("button")
      .children(".minus");
    var plu = $(this)
      .children(".query-ques")
      .children("button")
      .children(".plus");
    min.toggle();
    plu.toggle();
    var divToSlide = $(this).children(".query-ans");
    divToSlide.fadeToggle();
    $(this).toggleClass("active-query", 500);
  });
}

var coll = document.getElementsByClassName("collapsible");

if (coll) {
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0";
      } else {
        content.style.padding = "0rem 0rem 0.5rem";
        content.style.maxHeight = content.scrollHeight + "rem";
      }
    });
  }
}

var nobtn = document.getElementsByClassName("no-btn");

if (nobtn) {
  var i;
  for (i = 0; i < nobtn.length; i++) {
    nobtn[i].addEventListener("click", function () {
      $(this).toggleClass("active-content-btn", 500);
      // console.log($(this).text());
      $(".collapsible").text($(this).text());
      $(".result").text($(this).text() * 3);
      $(".no-btn").not(this).removeClass("active-content-btn", 500);
      var content = document.getElementsByClassName("content")[0];
      content.style.maxHeight = null;
      content.style.padding = "0";
    });
  }
}

var crslBtn = document.getElementsByClassName("crsl-btn");
var slide = document.getElementsByClassName("slide");

if (crslBtn) {
  var i;
  for (i = 0; i < nobtn.length; i++) {
    crslBtn[i].addEventListener("click", function () {
      $(this).addClass("active-crsl-btn", 500);
      // console.log($(this).text());
      $(".crsl-btn").not(this).removeClass("active-crsl-btn", 500);
      var curr = $(this).text() - 1;
      $(".slide").eq(curr).addClass("active-slide", 500);
      $(".slide").not($(".slide").eq(curr)).removeClass("active-slide", 500);
    });
  }
}

var addcourse = document.getElementsByClassName("add-course");

if (addcourse) {
  var i;
  for (i = 0; i < addcourse.length; i++) {
    addcourse[i].addEventListener("click", function () {
      var course = this.parentElement.parentElement;
      console.log(course);
      if (course.classList.contains("added")) {
        course.classList.remove("added");
        courseCount = courseCount - 1;
        $(this).children(".rem").css("display", "none");
        $(this).children(".add").css("display", "block");
        $(this).css("marginLeft", "4.8rem");
        $(this).children("span").text("add");
      } else {
        course.classList.add("added");
        courseCount = courseCount + 1;
        $(this).children(".add").css("display", "none");
        $(this).children(".rem").css("display", "block");
        $(this).css("marginLeft", "2rem");
        $(this).children("span").text("remove");
      }
    });
  }
}
console.log(courseCount);

/**
 * skills slider
 */
new Swiper(".skills-slider", {
  speed: 1000,

  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      spaceBetween: 20,
    },
  },
  loop: true,
});
