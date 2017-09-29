$(document).ready(function () {
    $(".the-button").click(function(){
    	console.log("You clicked!");
    });

    $(window).on("scroll", function() {
		if($(window).scrollTop() > 50) {
    		$(".nav").css("background-color", "rgba(59, 59, 59,0.8");
		} else {
    		//remove the background property so it comes transparent again (defined in your css)
   			$(".nav").css("background-color", "rgba(0,0,0,0");
		}
	});
})

  
