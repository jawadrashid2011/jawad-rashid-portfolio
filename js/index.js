var clickedValue = '';
$(".mainnav a").on("click", function() {
    $(".mainnav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    clickedValue = $(this).attr('href').substring(1);
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
    var scrollVal = -50;
    if(clickedValue == 'contact-jumbotron') {
        scrollVal = 0;
    }
    else if(clickedValue == 'skills-jumbotron') {
        scrollVal = -45;
    }
    scrollBy(0, scrollVal)
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
