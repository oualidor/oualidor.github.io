

function setDimenstions(){

  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if(w>1100){


    }else{
      w=1100;
    }

    if(h>500){

    }else{
      h=500;
    }
  $('body').css("height", h+"px");
  $('body').css("width", w+"px");
}

function setMobileDimensions(){

  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  $('body').css("height", h+"px");
  $('body').css("width", w+"px");
}

function test(){
  $('.toAnimate').textillate({
    minDisplayTime: 200,
    in: { effect: 'flipInX', sync: true },
    out :{  delay: 1, effect: 'tada', sync: true},
    loop: true
  });
}
$(document).ready(function(){
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    setMobileDimensions();
    $(window).resize(function(){
      setMobileDimensions();
    });


  }else {
    setDimenstions();

    $(window).resize(function(){
      setDimenstions();
    });
  }

  $(".navA").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  })

});
