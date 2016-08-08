/*!
**  jQuery Page -- jQuery Page Transitions for HTML5 Single-Page-Apps
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

/// <reference path="../jquery/jquery.d.ts"/>

/*  the jQuery Page API  */
interface JQueryPage {
    /*  STRUCTURE: insert page element under unique id  */
    insert(
        pageId: string,
        pageEl: HTMLElement
    ): jQueryPage;

    /*  STRUCTURE: remove page element by unique id  */
    remove(
        pageId: string
    ): jQueryPage;

    /*  STRUCTURE: fetch page element by unique id  */
    fetch(
        pageId: string
    ): HTMLElement;

    /*  STATUS: get unique ids of all page elements  */
    existing(): string[];

    /*  STATUS: get unique id of currently active page element  */
    active(): string;

    /*  VISUAL EFFECT: shake the currently active page element  */
    shake(
        complete?: () => void
    ): jQueryPage;

    /*  VISUAL EFFECT: transition to a particular page element.
        Known transition types are:
        - none
        - slide-in-from-left
        - slide-in-from-right
        - slide-in-from-top
        - slide-in-from-bottom
        - flip-towards-left
        - flip-towards-right
     */
    transition(
        pageId: string,
        transitionType: string,
        complete?: (pageId: string) => void
    ): jQueryPage;
}

/*  the (extended) jQuery API  */
interface JQuery {
    /*  create and attach or just retrieve jQuery Page API of queried element(s)  */
    page(): JQueryPage;
}

