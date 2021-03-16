/*ProjectNav*/
$(document).ready(function(){

    $(".projects a").click(function(){ 
      var project = $(this).attr('href');
      $(".project-item").removeClass("is-visible");
      $(project+'').addClass("is-visible");
      /*$(".information").removeClass("is-visible");
        */
       const vw = window.innerHeight;
       const listHeight = $(project + " .list").outerHeight();
       const paddingTop = vw - listHeight;
       $(".content").css({
           "padding-top": 170
          //  "padding-bottom": listHeight + "px"
        });
       
    });
    /*ProjectNav*/
    $(".headers a").click(function(){
    /* $("#info").toggle();*/
    });


    //------- SCROLL ---------//
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
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
    });
    


});
  