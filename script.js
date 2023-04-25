var advantage = document.querySelector(".advantage_block");
var scroll_to_advantage = document.querySelector(".scroll_to_advantage");
function scrollToAdvantage() {
  advantage.scrollIntoView({ behavior: "smooth" });
}
scroll_to_advantage.addEventListener("click", scrollToAdvantage);

var new_road = document.querySelector(".pre_footer");
var scroll_to_new_road = document.querySelector(".scroll_to_new_road");
function scrollToNewRoad() {
  new_road.scrollIntoView({ behavior: "smooth" });
}
scroll_to_new_road.addEventListener("click", scrollToNewRoad);

var footer_wrapper = document.querySelector(".footer_wrapper");
var footer_wrapper_btn = document.querySelector(".scroll_to_footer_wrapper");
function scrollToFooter() {
  footer_wrapper.scrollIntoView({ behavior: "smooth" });
}

footer_wrapper_btn.addEventListener("click", scrollToFooter);

function toggleMenu() {
  var element = document.querySelector(".nav_list_wrapper");
  element.classList.toggle("mob_menu_wrapper");
}
