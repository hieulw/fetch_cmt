// Auto scroll comments
scrollDown = setInterval(() => {
  let scrollDiv = document.querySelector(".xb57i2i.xy5w88m");
  scrollDiv.scrollTo(0, scrollDiv.scrollHeight);
  if (document.querySelectorAll(".x169t7cy").length > 2000) {
    clearInterval(scrollDown);
    console.log("done");
  }
}, 1000);

// Auto scroll shares
scrollDown = setInterval(() => {
  let scrollDiv = document.querySelector(".x179dxpb");
  scrollDiv.scrollTo(0, scrollDiv.scrollHeight - 1000);
  if (document.querySelectorAll(".x179dxpb .x1yztbdb").length > 2000) {
    clearInterval(scrollDown);
    console.log("done");
  }
}, 1000);

// Stop scrolling
clearInterval(scrollDown);
document.querySelectorAll(".x169t7cy").length;
document.querySelectorAll(".x179dxpb .x1yztbdb").length;
