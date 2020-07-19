"use strict";

const markAsRead = '<li class=\"menu-item mark-as-read\"><a class=\"menu-link msglist-msg-read\" href=\"#\" title=\"Позначити як прочитані\">Позначити як прочитані</a></li>';
const targetNode = document.querySelector("#msglist-page");
const observerOptions = {
    childList: true,
    subtree: true
};
const observer = new MutationObserver(onMutation);

function onMutation(mutations) {
    const menus = [];
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            if (!node.tagName) continue; // not an element
            // Check if .menu exists and .mark-as-read does not
            if (node.classList.contains("menu") && !node.querySelector(".mark-as-read")) {
                menus.push(node);
            }
        }
    }
    if (menus.length) {
        // stop observing, this is required to prevent a recursive function call
        disableObserver();
        menus.forEach(menu => menu.insertAdjacentHTML("beforeend", markAsRead));
        // re-initialize menu. As a result the button has an event listener
        document.querySelector("#msglist-page > div.controls.controls-top > ul").click();
        enableObserver();
    }
}

function disableObserver() {
    observer.disconnect();
}

function enableObserver() {
    observer.observe(targetNode, observerOptions);
}

enableObserver();