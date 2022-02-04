"use strict";
var links = document.querySelectorAll('a');
links.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = 'kakao';
    }
});
