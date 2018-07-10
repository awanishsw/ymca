$(window).on('load', function() {
    if ($(window).width() > 767) {
        var topHeader = $(".headersection").innerHeight();
        //var navSection = $(".main-breadcrumb").height();
        var footer = $(".footersection").innerHeight();
        var windowHeight = $(window).innerHeight();

        var newHeight = windowHeight - (footer + topHeader) - 1;
        $("#main-height").css('margin-top', topHeader);
        $("#main-height").css("min-height", newHeight);
        //alert (newHeight);
    };
})