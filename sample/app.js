
(function ($) {
    $(document).ready(function () {
        $(".screen").page();
        $(".screen .page .navigate").click(function (ev) {
            var page  = $(ev.target).attr("data-page-name");
            var trans = $(ev.target).attr("data-page-trans");
            $(".screen").page().transit(page, trans);
        })
        $(".screen").page().transit("11", "none");
    });
})(jQuery);

