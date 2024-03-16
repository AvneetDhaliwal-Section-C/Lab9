$(document).ready(function () {
    $("#dogCategory").click(function () {
        $(".cat").fadeOut("fast");
        $(".dog").fadeIn("fast");
        $(".bird").fadeOut("fast");
        $(this).css({ "background-color": "#ebebc8", "color": "black" });
        $("#catCategory, #birdCategory, #All").css({ "color": "#ebebc8", "background-color": "black" });
    });
    $("#catCategory").click(function () {
        $(".cat").fadeIn("fast");
        $(".dog").fadeOut("fast");
        $(".bird").fadeOut("fast");
        $(this).css({ "background-color": "#ebebc8", "color": "black" });
        $("#dogCategory, #birdCategory, #All").css({ "color": "#ebebc8", "background-color": "black" });
    });
    $("#birdCategory").click(function () {
        $(".bird").fadeIn("fast");
        $(".cat").fadeOut("fast");
        $(".dog").fadeOut("fast");
        $(this).css({ "background-color": "#ebebc8", "color": "black" });
        $("#catCategory, #dogCategory, #All").css({ "color": "#ebebc8", "background-color": "black" });
    });
    $("#All").click(function () {
        $(".cat").fadeIn("fast");
        $(".dog").fadeIn("fast");
        $(".bird").fadeIn("fast");
        $(this).css({ "background-color": "#ebebc8", "color": "black" });
        $("#catCategory, #birdCategory, #dogCategory").css({ "color": "#ebebc8", "background-color": "black" });
    });

    $("img").click(function () {
        $(window).scrollTop(0)
        let lightbox = $(".lightbox");
        lightbox.fadeIn(800);
        $("#lightboxImage").attr("src", this.src);

        $("html body").css({ "overflow": "hidden" });

    });

    $("#closeLightBox").click(function () {
        $(".lightbox").fadeOut(800);
        $(".lightbox").promise().done(function () {
            $("html body").css({ "overflow": "visible" });
        });
    });

    $(".grid").hover(function () {
        $(this).css("border", "2px solid #ebebc8");
    }, function () {

        $(this).css("border", "0.8px solid #ebebc8");
    });
});