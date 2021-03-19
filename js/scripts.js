$(function() {

    $(".carousel").carousel( { interval: 3000, pause: "false" });

    $("#carouselButton").on("click", function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // The class answer used .modal("show"), but it works w/o show as well: .modal()

    $("#subscribeButton").on("click", function() {
        $("#subscribeModal").modal("show");
    });

   });