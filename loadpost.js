scrollDown = setInterval(() => {
  let scrollDiv = document.querySelector(".xb57i2i.xy5w88m");
  scrollDiv.scrollTo(0, scrollDiv.scrollHeight);
  if (document.querySelectorAll(".x169t7cy").length > 2000) {
    clearInterval(scrollDown);
    console.log("done");
  }
}, 1000);

clearInterval(scrollDown);
document.querySelectorAll(".x169t7cy").length;
