"use strict";

function showButton() {
    const markAsRead = '<li class=\"menu-item mark-as-read\"><a class=\"menu-link msglist-msg-read\" href=\"#\" title=\"Позначити як прочитані\">Позначити як прочитані</a></li>';

    setInterval(function() {
        // Checking if there is a menu bar and checking if there is no button "Позначені як прочитані"(Mark as read).
        const topMenu = document.querySelector("#msglist-page > div.controls.controls-top > ul");
        const bottomMenu = document.querySelector("#msglist-page > div.controls.controls-bottom > ul");
        // check the top menu
        if (topMenu && !topMenu.querySelector(".mark-as-read")) {
            topMenu.insertAdjacentHTML("beforeend", markAsRead);
            // re-initialize menu. As a result the button has an event listener
            topMenu.click();
        }
         // check the bottom menu
        if (bottomMenu && !bottomMenu.querySelector(".mark-as-read")) {
            bottomMenu.insertAdjacentHTML("beforeend", markAsRead);
            bottomMenu.click();
        }
    }, 100);
}

window.addEventListener ("load", showButton, false);