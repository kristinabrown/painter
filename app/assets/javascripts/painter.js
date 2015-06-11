$(document).ready(function() {
  
  $(".blue").click(function(){
     color = "blue"
  });
  
  $(".red").click(function(){
     color = "red"
  });
 
  $(".yellow").click(function(){
    color = "yellow"
  });
  
  $(".white").click(function(){
     color = "white"
   });
   
   $(".green").click(function(){
      color = "green"
    });
    
    $(".purple").click(function(){
       color = "purple"
     });
  
  $(".block").hover(function(){
    $(this).removeAttr();
    $(this).attr('id', color);
  });
  
});