
function positionLeftElements() {
  let elements = $('.vertical.left').get();
  console.log(elements);
  let first = -60;
  const increment = 33;
  elements.forEach(e => {
    $(e).css('left',first);
    first = first + increment;
  });
}

function positionRightElements() {
  // position the right elements
  const elements = $('.vertical.right').get();
  let first = 800;
  const increment = 33;
  elements.forEach(e => {
    $(e).css('left',first);
    first = first + increment;
  });
}

function resetAllTopElements() {
  // if we are not above an element
  let actuallyReset = true;
  if ($('.vertical:hover').length == 0) {
    $('.vertical').css('transform', 'rotate(-90deg)')
    $('.vertical').css('top', '200px')
  }
}

function attachHoverEffects() {
  const elements = $('.vertical').get();
  elements.forEach(e => {
    $(e).mouseenter(() => {
      $('.vertical').css('transform', 'rotate(-90deg)')
      $('.vertical').css('top', '200px')
      $(e).css('transform', 'rotate(0deg)')
      $(e).css('top', '20px')

      setTimeout(resetAllTopElements,1000);
    });
  });
}

function goToStartPosition() {
  $("html, body").animate({ scrollTop: 0 }, 50);
  const windowWidth = window.innerWidth;
  const imageWidth = 1300;
  const x = (imageWidth - windowWidth) / 2;
  $("html, body").animate({ scrollTop: 1000, scrollLeft: x }, 50);
}

$(document).ready(() => {
  positionLeftElements();
  positionRightElements();
  attachHoverEffects();
  goToStartPosition();
});










