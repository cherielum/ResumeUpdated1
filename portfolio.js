$(document).ready(function () {
    $(".the-arrow").click(function(){
    	console.log("You clicked!");

        var button = $(".the-arrow");

        button.on("click", function(e) {
        $('html, body').animate({scrollTop: 0}, 500);
        e.preventDefault();

         });
    });

    $(window).on("scroll", function() {
		if($(window).scrollTop() > 50) {
    		$(".nav").css("background-color", "rgba(59, 59, 59,0.8");
		} else {
    		//remove the background property so it becomes darker as header
   			$(".nav").css("background-color", "rgba(0,0,0,0");
		}



        if($(window).scrollTop() >200) {
            $(".contactImage").css("background-color", "rgba(0, 0, 0, 0");
        } else {
            //remove the background property so it comes darker
            $(".contactImage").css("background-color", "rgba(79,91,102,0");
                console.log("hello");
        }

        // $(window).scroll(function() {
        // console.log($(window).scrollTop());
  
  
// });


	});

    // $(".contactImage").hover(function(){
    // $(this).css("background-color", "rgba(59, 59, 59,0.8");
    // }, function(){
    // $(this).css("filter", "grayscale(100%);

    // })
})

  
