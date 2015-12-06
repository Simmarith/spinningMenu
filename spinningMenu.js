var config = {
  //config for the 4 buttons
  sides: {
    top:{
      //will not be generated into html or js if set to false
      active:true,
      //relative path from spinner to picture;will be resized to 70x70 px
      img:'img/gear.png',
      //name of the function that is executed onClick. These have to be declared before executing this!
      action:topAction
    },
    right:{
      active:true,
      img:'img/cross.png',
      action:rightAction
    },
    bottom:{
      active:true,
      img:'img/bars.png',
      action:bottomAction
    },
    left:{
      active:true,
      img:'img/plus.png',
      action:leftAction
    }
  },
  //relative path from spinner to picture;will be resized to 300x300 px
  background:'img/emptyRing.png'
}

$(document).ready(function() {
  $('.spinner').addClass('invisible');
  //actual html for the buttons
  var sidesHtml = '';

  for (var sideName in config.sides) {
    if (config.sides.hasOwnProperty(sideName)) {
      if (config.sides[sideName].active) {
        sidesHtml = sidesHtml + '<div id="' + sideName + 'Option" style="background-image:url(' + config.sides[sideName].img + ')"></div>';
      }
    }
  }

  $('.spinner').html(sidesHtml);

  if (config.sides.top.active) {
    $('#topOption').click(function () {
      config.sides.top.action();
    })
  }
  if (config.sides.right.active) {
    $('#rightOption').click(function () {
      config.sides.right.action();
    })
  }
  if (config.sides.bottom.active) {
    $('#bottomOption').click(function () {
      config.sides.bottom.action();
    })
  }
  if (config.sides.left.active) {
    $('#leftOption').click(function () {
      config.sides.left.action();
    })
  }

  $(document).click(function () {
    $('.spinner').addClass('invisible');
  });

  $('.spinner').css('background-image', 'url(' + config.background + ')');
});
$(document).bind("contextmenu", function(e) {
  $('.spinner').css('position', 'absolute');
  $('.spinner').css('top', (e.pageY-150) + 'px');
  $('.spinner').css('left', (e.pageX-150) + 'px');
  $('.spinner').removeClass('invisible');
  return false;
});
