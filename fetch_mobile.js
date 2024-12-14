let post_url =
  "https://www.facebook.com/BaohiemFWDVietnam/posts/928436439321450";

function fetchComments(post_url) {
  let data = [];
  let cmtdivs = document.querySelectorAll(".eq");

  cmtdivs.forEach((div) => {
    if (!Number.parseInt(div.id)) return;

    let comment_id = div?.id;
    let profile_url = div.querySelector(".bg")?.href;
    let profile_name = div.querySelector(".bg")?.innerText;
    let content = div.querySelector("div")?.childNodes[1]?.innerText;
    let photo_url = div.querySelector(".ey")?.src;
    let reaction_count = div.querySelector(".fe")?.innerText;
    let date = div.querySelector("abbr")?.innerText;

    data.push({
      profile_url: profile_url || null,
      profile_name: profile_name || null,
      comment_url: `${post_url}?comment_id=${comment_id}` || null,
      content: content || null,
      photo_url: photo_url || null,
      reaction_count: reaction_count || null,
      date: date || null,
    });

    // console.log(data);
  });

  fetch("http://localhost:3103/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      cmtdivs[cmtdivs.length - 1].querySelector("a").click();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let randomNum = Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000;

setTimeout(() => {
  fetchComments(post_url);
}, randomNum);
