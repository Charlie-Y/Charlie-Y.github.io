function isScrolledIntoView(elem, index) {
    var percent = 0.15;
    var buffer = window.innerHeight * percent;
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if (index === 0) {
        // console.log(docViewTop, docViewBottom, elemTop, elemBottom);
        // console.log(elemBottom <= docViewBottom, elemTop >= docViewTop);
    }
    return (
        elemBottom + buffer <= docViewBottom && elemTop - buffer >= docViewTop
    );
}

function resetHoverClasses() {
    if (window.innerWidth > 600) {
        $(".home-nav-block").removeClass("hover");
        return true;
    }
    return false;
}
$(document).ready(function() {
    // console.log("READY");
    $(window).resize(function() {
        resetHoverClasses();
    });

    $(window).scroll(function() {
        if (resetHoverClasses()) return;

        $(".home-nav-block").each(function(index, elem) {
            var $elem = $(elem);
            if (isScrolledIntoView(elem, index)) {
                if (!$elem.hasClass("hover")) {
                    // console.log("add");
                    $elem.addClass("hover");
                }
            } else {
                $elem.removeClass("hover");
            }
        });
    });
});
