//
// script.js - Null Chronicle core behavior
// nothing complicated, just page functions
//

// cart-style placeholder (optional system state)
let state = {
  loaded: true,
  clicks: 0
};

// basic log (feels like a system console)
function log(msg) {
  console.log("[null chronicle]", msg);
}

// header interaction (optional small “system feel”)
function initHeader() {
  const title = document.querySelector(".blog-header-logo");

  if (!title) return;

  title.addEventListener("click", () => {
    state.clicks++;
    log("header clicked: " + state.clicks);
  });
}

// simple page status check
function checkSystem() {
  log("system running");
  log("state: " + JSON.stringify(state));
}

// fake “refresh entries” behavior hook
function refresh() {
  log("refresh triggered");
}

// init everything
function init() {
  initHeader();
  checkSystem();
  refresh();
}

// run
init();
