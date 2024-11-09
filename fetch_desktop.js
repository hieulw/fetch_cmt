function fetchComments() {
  let data = [];
  let comments = document.querySelectorAll(".x169t7cy");

  comments.forEach((div) => {
    let content = div.querySelector("div.x1mh8g0r.x1vvkbs")?.innerText;
    let profile_url = div.querySelector("a.x1s688f")?.href;
    let profile_name = div.querySelector("a.x1s688f")?.innerText;
    let photo_url = div.querySelector("a.x1a2a7pz img")?.parentNode?.href;
    let reaction_count = div.querySelector("span.xuxw1ft")?.innerText;
    let comment_url = div.querySelector("a.xi81zsa.x1s688f")?.href;
    let date = div.querySelector(".html-li > .x1qrby5j");
    let fulldate = date
      ? date[Object.keys(date)[0]]?.memoizedProps.children.props.children[1]
          .props.tooltip.props.children.props.content[0]
      : null;

    data.push({
      profile_url: profile_url || null,
      profile_name: profile_name || null,
      comment_url: comment_url || null,
      comment_content: content || null,
      photo_url: photo_url || null,
      reaction_count: reaction_count || null,
      comment_date: fulldate || date?.innerText || null,
    });

    // console.log(data);
  });

  fetch("http://localhost:3103/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fetchShares() {
  let data = [];
  let shares = document.querySelectorAll(".x179dxpb .x1yztbdb");

  shares.forEach((div) => {
    let content = div.querySelector("div.x1mh8g0r.x1vvkbs")?.innerText;
    let profile_url = div.querySelector("a.x1s688f")?.href;
    let date = div.querySelector(
      ".xu06os2.x1ok221b:nth-child(2) span.x1qrby5j",
    );
    let share_url = date
      ? date[Object.keys(date)[0]]?.memoizedProps.children.props.children[0]
          .props.href
      : null;
    let fulldate = date
      ? date[Object.keys(date)[0]]?.memoizedProps.children.props.children[1]
          .props.tooltip.props.children.props.content[0]
      : null;

    if (profile_url) {
      data.push({
        profile_url: profile_url || null,
        share_url: share_url || null,
        share_content: content || null,
        share_date: fulldate || date?.innerText || null,
      });
    }

    // console.log(data);
  });

  fetch("http://localhost:3103/shares", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
