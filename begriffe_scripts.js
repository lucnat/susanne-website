
let lastShowed = null;

function positionLeftElements() {
  const left = $('#left').width();
  let elements = $('.vertical.left').get();
  console.log(elements);
  let first = -60 + left;
  const increment = 33;
  elements.forEach(e => {
    $(e).css('left',first);
    first = first + increment;
  });
}

function positionRightElements() {
  // position the right elements
  const left = $('#left').width();
  const elements = $('.vertical.right').get();
  let first = 800 + left;
  const increment = 33;
  elements.forEach(e => {
    $(e).css('left',first);
    first = first + increment;
  });
}


function transform(value) {
  return {
    '-webkit-transform' : value,
    '-moz-transform'    : value,
    '-ms-transform'     : value,
    '-o-transform'      : value,
    'transform'         : value
  }
}


function showOne(e) {
  lastShowed = e.innerHTML;
  $(e).css(transform('rotate0deg'));
  $(e).css(transform('translate(-50px)'));
  $(e).css('top', '20px')
}

function resetAll() {
  $('.vertical').css(transform('rotate(-90deg)'));
  $('.vertical').css('top', '200px')
}

function resetOne(e) {
  $(e).css(transform('rotate(-90deg)'))
  $(e).css('top', '200px')
}

function attachShowHorizontallyEffect() {
  const elements = $('.vertical').get();
  elements.forEach(e => {
    $(e).mouseenter(() => {
      if(lastShowed == e.innerHTML) {
        // weve just showed that one so let's not do anything
        return;
      } else {
        // we're going to show this and undo all others
        resetAll();
        showOne(e);
        setTimeout(() => {
          resetOne(e);
        }, 1500);
      }
    })
  });
}

$( window ).resize(function() {
  positionLeftElements();
  positionRightElements()
});


$(document).ready(() => {
  positionLeftElements();
  positionRightElements();
  attachShowHorizontallyEffect();
});










