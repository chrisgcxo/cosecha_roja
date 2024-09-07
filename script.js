$(document).ready(function(){
var hoverEvent= true;

    /*cuando se hace hover sobre un elemento aplica la clase inhover*/
    $(".divElement").hover(
        function() {
          if(hoverEvent) $(this).toggleClass("inhover");
        }
      );
      /*cuando se  hace click sobre un elemento le aplica la clase selected, si se hace click se retira*/
      $('.divElement').click(function() {
         $(this).toggleClass('selected');
         $('.divElement').not(this).removeClass('selected,inhover');// remove this line if you want multiple selector
         hoverEvent= !hoverEvent;
      });
})
