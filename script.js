$(window).on("scroll", function ()
{
    if($("nav").offset().top > 10)
    {
        $("nav").addClass("scrolled");
        $("nav img").attr("src","src=\"http://taureca.com/wp-content/themes/taureca/img/logo.png\"");
    }
    else
    {
        $("nav").removeClass("scrolled");
    }
    console.log($("nav").offset());
});
