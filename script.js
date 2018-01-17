$(window).on("scroll", function () {
    if ($("nav").offset().top > 10) {
        $("nav").addClass("scrolled");
        $("nav img").attr("src", "logo.png");
        $(".hiddenOnScroll").css("color", "#0047d8");
        // $(".hiddenOnScroll").css("display", "none");
    }
    else {
        $("nav").removeClass("scrolled");
        $("nav img").attr("src", "logo2.png");
        $(".hiddenOnScroll").css("color", "#fff");
        // $(".hiddenOnScroll").css("display", "block");
    }
});

$(document).ready(function () {
    $(".opener").click(function () {
        $(this).next().slideToggle();
    });
    $(".glyphicon-menu-hamburger").click(function () {
        //jesli dlugosc elementu .mobileMaenu jest wyzsza od 0 to:
            //zmniejsz dlugosc elementu .mobileMenu do 0
        //jesli nie, to:
            //zwieksz dlugosc elementu .mobileMenu do 280px

        console.log($(".mobileMenu").css('width'));
        if ($(".mobileMenu").css("width") !== "0px")
        {
            $(".mobileMenu").animate({width:0},500);
        }
        else
        {
            $(".mobileMenu").animate({width:"280px"},500);
        }
    });
});

if ($("glyphicon-menu-hamburger").click()) {
    $("nav").addClass("hidden");
    $("nav img").attr("src", "logo.png");

}
else {
    $("nav").removeClass("scrolled");
    $("nav img").attr("src", "logo2.png");
}