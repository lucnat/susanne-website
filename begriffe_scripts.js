
// ---------- Begriffe Stuff ----------------

let lastResize = new Date()

let lastShowed = null;

function positionLeftElements() {
  const left = $('#left').width();
  let elements = $('.vertical.left').get();
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

// ---------- Initial Position Stuff ----------------

function goToStartPosition() {
  $("html, body").animate({ scrollTop: 0 }, 50);
  const windowWidth = window.innerWidth;
  const imageWidth = 1300;
  const x = (imageWidth - windowWidth) / 2;
  $("html, body").animate({ scrollTop: 1000, scrollLeft: x-20 }, 50);
}

// ---------- Mobile Specific Stuff ----------------

function makeStaticOnMobile(){
  // hide begriffe
  $('.vertical').css('display','none') 
  
  // disable scrolling
  const disableScrolling =  {margin: 0, height: '100%', overflow: 'hidden'};
  $('html').css(disableScrolling);
  $('body').css(disableScrolling);
}

function scaleToBrowserWidth() {
  const factor = window.innerWidth/1300;
  const css = transform('scale('+ factor +')');
  $('#container').css(css);
}

function init() {
  // does everything when page loads or window size changes
  if(window.innerWidth <= 800) {
    console.log('making static for mobile');
    makeStaticOnMobile();
  } else {
    console.log('prearing for desktop');
    positionLeftElements();
    positionRightElements();
    attachShowHorizontallyEffect();
    // scaleToBrowserWidth();
  }
  goToStartPosition();
} 


$(window).resize(function() {
  // only do it if after resize some time has passed
  if(new Date() - lastResize > 1000) {
    init();
    lastResize = new Date();
  }
}); 


$(document).ready(() => {
  init();
});


