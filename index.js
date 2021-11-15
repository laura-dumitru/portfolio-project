const scrollTop = document.getElementById("scroll-top");

window.onscroll = function () {
  scrollFunction();
};

const scroll = 640; //px

function scrollFunction() {
  scrollTop.style.display = "block";

  if (
    document.body.scrollTop > scroll ||
    document.documentElement.scrollTop > scroll
  ) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
