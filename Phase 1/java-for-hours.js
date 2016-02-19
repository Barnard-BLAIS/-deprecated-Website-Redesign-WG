// http://hours.library.columbia.edu/?callback=jQuery&whichlib=barnard&device=json
// jQuery({"hours":"8:30AM&mdash;12:00AM"})

$(document).ready(function(){
    CUL.getLibraryHours('.cul-location-insert-hours-here');
});


CUL.getLibraryHours = function(a) {
    $(a).each(function() {
        if (void 0 == $(this).attr("data-initialized")) {
            $(this).attr("data-initialized", "true");
            var a = $(this).attr("data-location-id")
              , b = $(this)
              , c = "http://hours.library.columbia.edu/";
            if (void 0 != a) {
                var d = $.ajax({
                    url: c,
                    data: {
                        whichlib: a,
                        device: "json"
                    },
                    dataType: "jsonp",
                    timeout: 1e4
                });
                d.success(function(a) {
                    "" != a.hours && b.html(a.hours)
                })
            }
        }
    })
}