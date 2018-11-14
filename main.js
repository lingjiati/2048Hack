var hack;
window.requestAnimationFrame(function () {
  hack = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  var storage           = new LocalStorageManager;
  var noticeClose       = document.querySelector(".notice-close-button");
  var notice            = document.querySelector(".app-notice");
  var cookieNotice      = document.querySelector(".cookie-notice");
  var cookieNoticeClose = document.querySelector(".cookie-notice-dismiss-button");
  
  if (storage.getNoticeClosed()) {
    notice.parentNode.removeChild(notice);
  } else {
    noticeClose.addEventListener("click", function () {
      notice.parentNode.removeChild(notice);
      storage.setNoticeClosed(true);
      if (typeof gtag !== undefined){
        gtag("event", "closed", {
          event_category: "notice",
        });
      }
    });
  }

  if (storage.getCookieNoticeClosed()) {
    cookieNotice.parentNode.removeChild(cookieNotice);
  } else {
    cookieNoticeClose.addEventListener("click", function () {
      cookieNotice.parentNode.removeChild(cookieNotice);
      storage.setCookieNoticeClosed(true);
      if (typeof gtag !== undefined){
        gtag("event", "closed", {
          event_category: "cookie-notice",
        });
      }
    })
  }
});
var tile = new Tile({x:0,y:0},2048);
setTimeout(function(){hack.grid.cells[0]=[null,null,null,tile]},10000)
