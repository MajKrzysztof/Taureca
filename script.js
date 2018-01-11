$(window).on("scroll", function ()
{
    if($("nav").offset().top > 10)
    {
        $("nav").addClass("scrolled");
        $("nav img").attr("src","logo.png");

    }
    else
    {
        $("nav").removeClass("scrolled");
        $("nav img").attr("src","logo2.png");
    }
    console.log($("nav").offset());
});
    $(document).ready(function(){
        $(".opener").click(function(){
            $(this).next().slideToggle();
        });
        $(".glyphicon-menu-hamburger").click(function(){
            console.log("123");
            $(".mobileMenu").css("width","280px");
        });
    });
