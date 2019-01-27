
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

$(document).ready(() => {
  positionLeftElements();
  positionRightElements();
});