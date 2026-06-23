// SLIDER CAROUSEL

let FeaturesSpeedySearchingH2 = document.querySelector(
  "#Features_SpeedySearching_h2",
);
let FeaturesSpeedySearchingHr = document.querySelector(
  "#Features_SpeedySearching_Hr",
);

let FeaturesSimpleBookmarkingH2 = document.querySelector(
  "#Features_SimpleBookmarking_h2",
);
let FeaturesSimpleBookmarkingHr = document.querySelector(
  "#Features_SimpleBookmarking_hr",
);

let FeaturesEasySharingH2 = document.querySelector("#Features_EasySharing_H2");
let FeaturesEasySharingHr = document.querySelector("#Features_EasySharing_Hr");

let featuresImage = document.querySelector("#featuresImage");

// helper function (clean code)
function resetTabs() {
  // hide all HR
  FeaturesSpeedySearchingHr.classList.add("hidden");
  FeaturesSimpleBookmarkingHr.classList.add("hidden");
  FeaturesEasySharingHr.classList.add("hidden");

  // reset colors
  FeaturesSpeedySearchingH2.style.color = "#4b5563";
  FeaturesSimpleBookmarkingH2.style.color = "#4b5563";
  FeaturesEasySharingH2.style.color = "#4b5563";
}

// SPEEDY
FeaturesSpeedySearchingH2.addEventListener("click", () => {
  resetTabs();

  FeaturesSpeedySearchingHr.classList.remove("hidden");
  FeaturesSpeedySearchingH2.style.color = "black";

  featuresImage.src = "images/illustration-features-tab-2.svg";
});

// SIMPLE
FeaturesSimpleBookmarkingH2.addEventListener("click", () => {
  resetTabs();

  FeaturesSimpleBookmarkingHr.classList.remove("hidden");
  FeaturesSimpleBookmarkingH2.style.color = "black";

  featuresImage.src = "images/illustration-features-tab-1.svg";
});

// EASY
FeaturesEasySharingH2.addEventListener("click", () => {
  resetTabs();

  FeaturesEasySharingHr.classList.remove("hidden");
  FeaturesEasySharingH2.style.color = "black";

  featuresImage.src = "images/illustration-features-tab-3.svg";
});

// Woops wrong email JS

let ContactUsBtn = document.querySelector("#Contact_Us_Btn");
let EmailInput = document.querySelector("#Email_Input");
let ErrorIcon = document.querySelector("#error_icon");
let ErrorText = document.querySelector("#error_text");

ContactUsBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (EmailInput.value.trim() === "") {
    EmailInput.style.border = "2px solid red";
    EmailInput.style.borderBottom = "20px solid red";
    EmailInput.style.borderColor = "red";
    ErrorIcon.classList.remove("hidden");
    ErrorText.classList.remove("hidden");
  } else {
    EmailInput.style.borderColor = "green";
    ErrorIcon.classList.add("hidden");
    EmailInput.style.border = "2px solid green";
    ErrorText.classList.add("hidden");
  }
});

// BURGER MENU

let BurgerMenuIcon = document.querySelector("#Burger_Menu_Icon");
let BurgerMenu = document.querySelector("#Burder_Menu");
let CloseMenuIcon = document.querySelector("#Close_Menu_Icon");

// OPEN (slide in)
BurgerMenuIcon.addEventListener("click", () => {
  BurgerMenu.classList.remove("translate-x-full");
});

// CLOSE (slide out)
CloseMenuIcon.addEventListener("click", () => {
  BurgerMenu.classList.add("translate-x-full");
});

// DROP DOWN MENU (SECTION)

let WhatIsBookmarkArrowImg = document.querySelector(
  "#What_is_Bookmark_Arrow_Img",
);
let WhatIsBookmarkText = document.querySelector("#What_is_Bookmark_Text");
let WhatIsBookmark = document.querySelector("#What_is_Bookmark");

WhatIsBookmarkArrowImg.addEventListener("click", () => {
  WhatIsBookmarkText.classList.toggle("hidden");
  WhatIsBookmarkArrowImg.classList.toggle("rotate-180");
  WhatIsBookmarkArrowImg.classList.toggle("orange");

  if (WhatIsBookmarkText.classList.contains("hidden")) {
    // CLOSED → border ON
    WhatIsBookmark.classList.add("border-b-2", "border-b-gray-300");
  } else {
    // OPEN → border OFF
    WhatIsBookmark.classList.remove("border-b-2", "border-b-gray-300");
  }
});

let RequestArrow = document.querySelector(
  "#How_can_I_request_a_new_browser_Img",
);
let RequestText = document.querySelector(
  "#How_can_I_request_a_new_browser_Text",
);
let RequestBox = document.querySelector("#How_can_I_request_a_new_browser");

RequestArrow.addEventListener("click", () => {
  RequestText.classList.toggle("hidden");
  RequestArrow.classList.toggle("rotate-180");
  RequestArrow.classList.toggle("orange");

  if (RequestText.classList.contains("hidden")) {
    // CLOSED → border ON
    RequestBox.classList.add("border-b-2", "border-gray-300");
  } else {
    // OPEN → border OFF
    RequestBox.classList.remove("border-b-2", "border-gray-300");
  }
});

let MobileArrow = document.querySelector("#Is_there_a_mobile_app_Img");
let MobileText = document.querySelector("#Is_there_a_mobile_app_Text");
let MobileBox = document.querySelector("#Is_there_a_mobile_app");

MobileArrow.addEventListener("click", () => {
  MobileText.classList.toggle("hidden");
  MobileArrow.classList.toggle("rotate-180");
  MobileArrow.classList.toggle("orange");

  if (MobileText.classList.contains("hidden")) {
    // CLOSED → border ON
    MobileBox.classList.add("border-b-2", "border-gray-300");
  } else {
    // OPEN → border OFF
    MobileBox.classList.remove("border-b-2", "border-gray-300");
  }
});

let ChromiumArrow = document.querySelector(
  "#What_about_other_Chromium_browsers_Img",
);
let ChromiumText = document.querySelector(
  "#What_about_other_Chromium_browsers_Text",
);
let ChromiumBox = document.querySelector("#What_about_other_Chromium_browsers");

ChromiumArrow.addEventListener("click", () => {
  ChromiumText.classList.toggle("hidden");
  ChromiumArrow.classList.toggle("rotate-180");
  ChromiumArrow.classList.toggle("orange");

  if (ChromiumText.classList.contains("hidden")) {
    // CLOSED → border ON
    ChromiumBox.classList.add("border-b-2", "border-gray-300");
  } else {
    // OPEN → border OFF
    ChromiumBox.classList.remove("border-b-2", "border-gray-300");
  }
});
