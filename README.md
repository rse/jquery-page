
jQuery Page
===========

jQuery Page Transitions for HTML5 Single-Page-Apps

Abstract
--------

jQuery Page is a [jQuery](http://jquery.com/) plugin for
mobile-style slide/flip-transitioning between page elements in HTML5
Single-Page-Apps.

Demo
----

See the included [sample/index.html](http://rawgit.com/rse/jquery-page/master/sample/index.html)
for a small demonstration of jQuery Page.

Motivation
----------

Mobile HTML5 Single-Page Applications (SPA) usually place their app
content onto individual pages and switch between those pages with slide
and flip transition effects. jQuery Page provides the required raw page
transitions only.

Solution
--------

jQuery Page allows arbitrary page elements to be added to an invisible
intermediate container element which is in turn placed into a visible
constraining outmost screen container element. At each time only one
page element is visible. On transitioning jQuery Page enables both the
from/old and the to/new page element and uses the intermediate container
element to provide a visually appealing transition effect. jQuery Page
under the hood uses CSS transitions to perform the visual effect.

API
---

The Application Programming Interface (API) of jQuery Page is
(in TypeScript definition syntax):

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

Getting jQuery-Page
-------------------

You can conveniently get jQuery-Page in various ways:

- Git: directly clone the official jQuery-Page repository

  `$ git clone https://github.com/rse/jquery-page.git`

- NPM: install as client component via the NPM package manager:

  `$ npm install jquery-page`

- Bower: install as client component via the Bower component manager:

  `$ bower install jquery-page`

- cURL: downloading only the main file from the repository

  `$ curl -O https://raw.github.com/rse/jquery-page/master/jquery.page.js`

Building jQuery Page
---------------------

You can pick the jQuery plugin in file "jquery.page.js" as is for use,
but for linting and minifying it yourself you need Node.js ("node") and
its Node.js Package Manager ("npm") globally installed.

    # approach 1: use convenient Makefile (author preference)
    $ make

    # approach 2: use Grunt locally (contributor recommendation)
    $ npm install
    $ node_modules/grunt-cli/bin/grunt

    # approach 3: install and use Grunt globally (contributor alternative)
    $ npm install -g grunt-cli
    $ npm install
    $ grunt

License
-------

Copyright (c) 2016 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

