debugger
$("#about").hide();
$("button").click(function()
{
    $("#formValidate").hide();
    $("#display").show();
    });





$(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            //interval between items (in milliseconds)
            var itemInterval = 5000;

            //cross-fade time (in milliseconds)
            var fadeTime = 2500;

            //count number of items
            var numberOfItems = $('.rotating-item').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});
//$("#show").click(function(){
       // $("button").toggle();
       @media only screen and (min-device-width: 320px) and (max-device-width: 480px)  {
         .jumbotron h1 {
            color:blue;
            font-size: 40px;
        }
    }
    $(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });