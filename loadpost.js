scrollDown = setInterval(() => {
  window.scrollTo(0, document.body.scrollHeight);
  if (document.querySelectorAll(".x169t7cy").length > 2000) {
    clearInterval(scrollDown);
    console.log("done");
  }
}, 1000);

clearInterval(scrollDown);
document.querySelectorAll(".x169t7cy").length;
