jQuery(document).ready(function ($) {
    // Open galleries on menu click
    $(".open-gallery, .open-gallery2, .open-gallery3, .open-gallery4, .open-gallery5, .open-gallery6, .open-gallery7, .open-gallery8, .open-gallery9, .open-gallery10, .open-gallery11, .open-gallery12").click(function (e) {
        e.preventDefault();
        $("." + $(this).attr("class").split(" ")[0].replace("open-", "popup-") + " a:first").click();
    });

    // Initialize Magnific Popup for all galleries
    $(".popup-gallery, .popup-gallery2, .popup-gallery3, .popup-gallery4, .popup-gallery5, .popup-gallery5, .popup-gallery6, .popup-gallery7, .popup-gallery8, .popup-gallery9, .popup-gallery10, .popup-gallery11, .popup-gallery12").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        closeBtnInside: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
            tPrev: "Previous",
            tNext: "Next"
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: (item) => item.el.attr("title") || ""
        }
    });
});
