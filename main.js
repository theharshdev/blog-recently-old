$(document).ready(function () {
  $(".menu").click(function () {
    $(".sidemenu").css("left", "0");
    $(".searchIcon").hide();
    $(".cateBtn").hide();
    $(".menu").hide();
    $(".social").hide();
    $(".closeBox").show();
    $("body").css("height", "100vh");
    $("body").css("overflow", "hidden");
  });
  $(".closeBox").click(function () {
    $(".sidemenu").css("left", "-100%");
    $(".menu").show();
    $(".social").show();
    $(".cateBtn").show();
    $(".closeBox").hide();
    $(".searchIcon").show();
    $(".searchBox").css("right", "-100%");
    $("body").css("height", "100%");
    $("body").css("overflow", "auto");
    $(".formWidth").removeClass("moveToTop");
  });
  $(".formWidth").click(function () {
    $(".formWidth").addClass("moveToTop");
  });
  $(".searchIcon").click(function () {
    $(".searchBox").css("right", "0");
    $(".searchIcon").hide();
    $(".cateBtn").hide();
    $(".menu").hide();
    $(".social").hide();
    $(".closeBox").show();
    $("body").css("height", "100vh");
    $("body").css("overflow", "hidden");
  });
  $(".cateBtn").click(function () {
    $(".cateList").slideToggle(400);
  });
  $(".listItem").click(function () {
    $(".cateList").slideUp(200);
  });
  $(".footerCategory").click(function () {
    $(".cateList").slideUp(200);
  });
  $(".toDown").click(function () {
    document.body.scrollTop = 900;
    document.documentElement.scrollTop = 900;
  });
  $(".closeSub").click(function () {
    $(".subBox").hide();
    $("body").css("height", "100%");
    $("body").css("overflow", "auto");
  });
  setTimeout(function () {
    $(".subBox").show();
  }, 5000);

  $(".cateFood").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/food.webp')"
    );
    $("#mainHeading").html(
      "Delightful <br>Flavors &  <br>Culinary  <br>Adventures"
    );
  });
  $(".cateAll").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/robot.webp')"
    );
    $("#mainHeading").html(
      "Travel <br>Technology <br>Finanace <br>& Many More!"
    );
  });
  $(".cateHealth").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('img/health.webp')"
    );
    $("#mainHeading").html("Nurturing <br>  Wellness  & <br>  Well-being");
  });
  $(".cateSports").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/sports.webp')"
    );
    $("#mainHeading").html("Thrilling  <br> Athleticism  &  <br> Team Spirit");
  });
  $(".cateTechnology").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/technology.webp')"
    );
    $("#mainHeading").html("Embracing the <br> Digital<br> Revolution");
  });
  $(".cateTravel").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/travel.webp')"
    );
    $("#mainHeading").html("Exploring <br>  New Horizons <br>  & Cultures.");
  });
  $(".cateFashion").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/fashion.webp')"
    );
    $("#mainHeading").html(
      "Style  <br> Trends & <br>  Personal  <br> Statements"
    );
  });
  $(".cateBeauty").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/beauty.webp')"
    );
    $("#mainHeading").html(
      "Embracing  <br> Self-expression  & <br>  Aesthetics"
    );
  });
  $(".cateAi").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/ai.webp')"
    );
    $("#mainHeading").html(
      "Intelligent <br>  Machines <br>  Shaping <br>  the Future"
    );
  });
  $(".cateBussiness").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/bussiness.webp')"
    );
    $("#mainHeading").html("Bussiness & <br> Market <br> Dynamics");
  });
  $(".cateArts").click(function () {
    $("#bgChange").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('img/art.webp')"
    );
    $("#mainHeading").html(
      "Creativity <br> Unleashed <br>  Through Various <br>  Mediums"
    );
  });
  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#toTopBtn").fadeIn();
      $(".cateList").slideUp(200);
    } else {
      $("#toTopBtn").fadeOut();
    }
  });
  $("#toTopBtn").click(function () {
    $(window).scrollTop(0);
  });
  $("#copyBlogLink").click(function () {
    $("#copiedBlogLink").show();
    $("#copyBlogLink").hide();
  });
});

filterSelection("All");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("blogContainer");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
