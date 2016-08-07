/*!
**  jQuery Page -- jQuery Page Transitions
**  Copyright (c) 2016 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* global jQuery: false */
(function ($) {
    /*  the API method  */
    var Page = function (root, options) {
        this.root    = root;
        this.options = options;
        if (this.options.dataName === undefined)
            this.options.dataName = "page";
    };
    Page.prototype = {
        transit: function (pageId, transition) {
            var self = this;
            var pageFr = $(".jquery-page-container > .jquery-page-active", self.root);
            var pageTo = $(".jquery-page-container > *", self.root).filter(function (idx, el) {
                return $(el).attr("data-" + self.options.dataName) === pageId;
            });
            if (transition === "none") {
                $(pageFr)
                    .removeClass("jquery-page-active")
                    .addClass("jquery-page-disabled");
                $(pageTo)
                    .removeClass("jquery-page-disabled")
                    .addClass("jquery-page-active");
            }
            else {
                var pageWidth  = $(self.root).width();
                var pageHeight = $(self.root).height();
                var pageCo = $(".jquery-page-container", self.root);
                if (transition === "slideInFromLeft") {
                    $(pageCo)
                        .width(pageWidth * 2)
                        .css("left", -pageWidth)
                        .addClass("jquery-page-horizontal");
                    $(pageFr)
                        .width(pageWidth)
                        .addClass("jquery-page-right");
                    $(pageTo)
                        .width(pageWidth)
                        .addClass("jquery-page-left")
                        .removeClass("jquery-page-disabled");
                    $(pageCo)
                        .addClass("jquery-page-slide")
                        .css("transform", "translate(" + pageWidth + "px,0)")
                        .one("transitionend", function () {
                            $(pageFr)
                                .addClass("jquery-page-disabled")
                                .removeClass("jquery-page-right")
                                .removeClass("jquery-page-active")
                                .css("width", "");
                            $(pageTo)
                                .removeClass("jquery-page-left")
                                .addClass("jquery-page-active")
                                .css("width", "");
                            $(pageCo)
                                .css("width", "")
                                .css("transform", "")
                                .css("left", "")
                                .removeClass("jquery-page-horizontal")
                                .removeClass("jquery-page-slide");
                        });
                }
                else if (transition === "slideInFromRight") {
                    $(pageCo)
                        .width(pageWidth * 2)
                        .addClass("jquery-page-horizontal");
                    $(pageFr)
                        .width(pageWidth)
                        .addClass("jquery-page-left");
                    $(pageTo)
                        .width(pageWidth)
                        .addClass("jquery-page-right")
                        .removeClass("jquery-page-disabled");
                    $(pageCo)
                        .addClass("jquery-page-slide")
                        .css("transform", "translate(-" + pageWidth + "px,0)")
                        .one("transitionend", function () {
                            $(pageFr)
                                .addClass("jquery-page-disabled")
                                .removeClass("jquery-page-left")
                                .removeClass("jquery-page-active")
                                .css("width", "");
                            $(pageTo)
                                .removeClass("jquery-page-right")
                                .addClass("jquery-page-active")
                                .css("width", "");
                            $(pageCo)
                                .css("width", "")
                                .css("transform", "")
                                .removeClass("jquery-page-horizontal")
                                .removeClass("jquery-page-slide");
                        });
                }
                else if (transition === "slideInFromTop") {
                    $(pageCo)
                        .addClass("jquery-page-vertical")
                        .height(pageHeight * 2)
                        .css("top", -pageHeight);
                    $(pageFr)
                        .addClass("jquery-page-bottom")
                        .height(pageHeight);
                    $(pageTo)
                        .addClass("jquery-page-top")
                        .removeClass("jquery-page-disabled")
                        .height(pageHeight);
                    $(pageCo)
                        .addClass("jquery-page-slide")
                        .css("transform", "translate(0," + pageHeight + "px)")
                        .one("transitionend", function () {
                            $(pageFr)
                                .addClass("jquery-page-disabled")
                                .removeClass("jquery-page-bottom")
                                .removeClass("jquery-page-active")
                                .css("height", "");
                            $(pageTo)
                                .removeClass("jquery-page-top")
                                .addClass("jquery-page-active")
                                .css("height", "");
                            $(pageCo)
                                .css("height", "")
                                .removeClass("jquery-page-vertical")
                                .removeClass("jquery-page-slide")
                                .css("transform", "")
                                .css("top", 0);
                        });
                }
                else if (transition === "slideInFromBottom") {
                    $(pageCo)
                        .addClass("jquery-page-vertical")
                        .height(pageHeight * 2);
                    $(pageFr)
                        .addClass("jquery-page-top")
                        .height(pageHeight);
                    $(pageTo)
                        .addClass("jquery-page-bottom")
                        .removeClass("jquery-page-disabled")
                        .height(pageHeight);
                    $(pageCo)
                        .addClass("jquery-page-slide")
                        .css("transform", "translate(0,-" + pageHeight + "px)")
                        .one("transitionend", function () {
                            $(pageFr)
                                .addClass("jquery-page-disabled")
                                .removeClass("jquery-page-top")
                                .removeClass("jquery-page-active")
                                .css("height", "");
                            $(pageTo)
                                .removeClass("jquery-page-bottom")
                                .addClass("jquery-page-active")
                                .css("height", "");
                            $(pageCo)
                                .css("height", "")
                                .removeClass("jquery-page-vertical")
                                .removeClass("jquery-page-slide")
                                .css("transform", "");
                        });
                }
                else if (transition === "flip") {
                    $(pageCo)
                        .addClass("jquery-page-stacked")
                        .width(pageWidth);
                    $(pageFr)
                        .addClass("jquery-page-front")
                        .width(pageWidth);
                    $(pageTo)
                        .addClass("jquery-page-back")
                        .removeClass("jquery-page-disabled")
                        .width(pageWidth);
                    $(pageCo)
                        .addClass("jquery-page-flip")
                        .one("transitionend", function () {
                            $(pageFr)
                                .addClass("jquery-page-disabled")
                                .removeClass("jquery-page-front")
                                .removeClass("jquery-page-active")
                                .css("width", "");
                            $(pageTo)
                                .removeClass("jquery-page-back")
                                .addClass("jquery-page-active")
                                .css("width", "");
                            $(pageCo)
                                .css("width", "")
                                .removeClass("jquery-page-stacked")
                                .removeClass("jquery-page-flip");
                        });
                }
            }
        }
    };

    /*  hook into jQuery (locally)  */
    $.fn.extend({
        /*  API: subscribe to a stage event  */
        page: function (options) {
            if (arguments.length === 1 && typeof options === "object") {
                this.each(function () {
                    var page = new Page(this, options);
                    $(this)
                        .data("jquery-page", page)
                        .addClass("jquery-page");
                    $("> *", this)
                        .addClass("jquery-page-container");
                    $("> * > *", this)
                        .addClass("jquery-page-disabled");
                    $("> * > *:first", this)
                        .removeClass("jquery-page-disabled")
                        .addClass("jquery-page-active");
                });
                return this;
            }
            else if (arguments.length === 0)
                return $(this).data("jquery-page");
            else
                throw new Error("invalid arguments");
        }
    });
})(jQuery);

