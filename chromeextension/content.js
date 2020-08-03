// eslint-disable-next-line quotes
const markAsRead = `<li class="menu-item mark-as-read"><a class="menu-link msglist-msg-read" href="#" title="Позначити як прочитані">Позначити як прочитані</a></li>`;
const targetNode = document.querySelector("#msglist-page");
const observerOptions = {
  childList: true,
  subtree: true,
};
// eslint-disable-next-line no-use-before-define
const observer = new MutationObserver(onMutation);

function disableObserver() {
  observer.disconnect();
}

function enableObserver() {
  observer.observe(targetNode, observerOptions);
}

function onMutation(mutations) {
  const menus = [];
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (!node.tagName) return;
      if (node.classList.contains("menu") && !node.querySelector(".mark-as-read")) {
        menus.push(node);
      }
    });
  });
  if (menus.length) {
    // need to prevent a recursive function call
    disableObserver();
    menus.forEach((menu) => menu.insertAdjacentHTML("beforeend", markAsRead));
    // re-initialize menu. As a result the button has an event listener
    document.querySelector("#msglist-page > div.controls.controls-top > ul").click();
    enableObserver();
  }
}

enableObserver();
