"use strict";

function showButton() {
    let markAsRead = '<li id=\"mark-as-read\" class=\"menu-item\"><a class=\"menu-link msglist-msg-read\" href=\"#\" title=\"Позначити як прочитані\">Позначити як прочитані</a></li>';

    setInterval(function() {
        // Checking if there is a menu bar and checking if there is no button "Позначені як прочитані".
        if (document.querySelector("#msglist-page > div.controls.controls-top > ul") && !document.querySelector("#mark-as-read")) {
            document.querySelector("#msglist-page > div.controls.controls-top > ul").insertAdjacentHTML("beforeend", markAsRead);
            document.querySelector("#msglist-page > div.controls.controls-top > ul").click();
        }
    }, 100);
}

window.addEventListener ("load", showButton, false);
