
function goToStartPosition() {
  $("html, body").animate({ scrollTop: 0 }, 50);
  const windowWidth = window.innerWidth;
  const imageWidth = 1300;
  const x = (imageWidth - windowWidth) / 2;
  $("html, body").animate({ scrollTop: 1000, scrollLeft: x-20 }, 50);
}

$(document).ready(() => {
  goToStartPosition();
});

