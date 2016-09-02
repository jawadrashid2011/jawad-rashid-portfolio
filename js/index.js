$(".mainnav a").on("click", function() {
    $(".mainnav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

$(function() {
    $.widget("ui.tooltip", $.ui.tooltip, {
        options: {
            content: function() {
                return $(this).prop('title');
            }
        }
    });

    $(document).tooltip();
});

$(document).ready(function() {
    //$('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').tooltip({
        track: true
    });
    $('[data-toggle="skills"]').tooltip({
        track: true
    });
    $('[data-toggle="contact"]').tooltip({

    });
    $('body').scrollspy({
        target: '#navbar-div',
        offset: 50
    })
});

var shiftWindow = function() {
    scrollBy(0, -50)
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
