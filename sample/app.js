
(function ($) {
    $(document).ready(function () {
        $(".screen").page();
        $(".screen .page .navigate").click(function (ev) {
            var page  = $(ev.target).attr("data-page-name");
            var trans = $(ev.target).attr("data-page-trans");
            if ($(".screen").page().fetch(page) === null)
                $(".screen").page().shake();
            else
                $(".screen").page().transition(page, trans);
        });
        $(".screen").page().transition("11", "none");
        $(".remove-button").click(function () {
            var id = $(".remove-input").val();
            $(".screen").page().remove(id);
        });
        $(".shake-button").click(function () {
            $(".screen").page().shake();
        });
    });
})(jQuery);

