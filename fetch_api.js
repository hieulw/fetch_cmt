function formatDate(date) {
  // Get the parts individually
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date,
  );
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date,
  );
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    date,
  );
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  // Combine the parts
  return `${dayName} ${day} ${month} ${year} at ${time}`;
}

cursor =
  "MToxNzM0MTk2OTE4OgF1TrhGqzSZtA24wFfwhTzMBUuURjelCFI4nwPGimAVVWJKbpzalU3AUdvSLGGUbsEKX_1UoRSwTMFA8weOgMcyS9uzRxvairhDpyW2Zzg3Gjf5GR1e6YlXyepXqW1NS7wpG4pYvJYDQNYNCFErH6AEXlj0FHigzauzNnkMXrZb4o2nbJN_EmYmEr2mx2YZJTeOjomPUBGAKnNVy5jUyqhJA50U4WX4SCkzbdq3diy69S8ob7fpyxOgMqA-dagvdSCV12ukB0VNQLJP";
fetchComments = setInterval(() => {
  data = {
    // av: "61552863561599",
    // __aaid: "0",
    __user: "100006446497241",
    __a: "1",
    // __req: "44",
    // __hs: "20038.HYP:comet_pkg.2.1..2.1",
    // dpr: "2",
    // __ccg: "EXCELLENT",
    // __rev: "1018091739",
    // __s: "8wfgf3:5y0zl9:xk54zh",
    // __hsi: "7436057089734390749",
    // __dyn:
    //   "7AzHK4HwBgDx-5Q1hyoyEqxd4Ag5S3G2O5U4e2C3-ubyQdwSAx-bwyzE2qwJyEiwsobo5a58e8hw8u2a0Z82_CxS320qafwwwto88422y11wBz822wtU4a3a4oaEnxO0Bo4O2-2l2UtwxwhUb82kwiE567Udo5qfK0zEkxe2Gexe5E5e7oqBwJK14xm3y3aexfxmu3W3rwxwhFVovUaU6a0BEbXCwLyESE2KwwwOg2cwMwhA4UjyUaUcojxK2B08-269wkopg6C13whEeE-3WVU-4EdrxG1fBG2-2K0UEmw",
    // __csr:
    //   "gkgbAj131jf9MxkhOn24dhafbGYox6GqRlTeNldkRljsx9btHHFsz8GjZq44KAKICOXA_GAjVyAAKJXGmh5iSi9i9jAy-qXJeVZaVdyX-mHGdkRkQF4l2m46m4ohAWTGEx-8iG64il6BF7pqz-HKtql4K59BByk8Gex2qmeypk4qyFoO2TBDGHAgiAyUC5k7bxG-44i9AzaGE9UpKqaADCgC698gGqA6UJem4FU9kbx3zFoqCx64989Gz9WGfx216yU4-icyESayopyEvxBG1hCz8nAwwwj8myU-2y2S3Gi1RCwUAh-2C48C2G4pojxi4oSq2KaBgmwhUhCLU2Wwf5a-3h7Bm1bwBz8gGSGocVayL4am4l62MJ9wau2y13Ao1x8booW8EGfGE5rg42oIk6Ay7yGOltGA1OwkE1VO1a4EW1BXzaxC4kbxW362W1LximtiljAx20xEOEV3mi18y4m1swTBoSKboc80q-xB00IhkC9V5dU0gTyo0oPw56wAw0Bswpo3Rxh0ea01L-z80nfw3YJAwro5m5o0hUxa0nKaDw5_w2co4-lO068way_Hyo19U2Aw5BwbO37w3vOzo2zw2p85qcmu5bwWwjE1-oeU3xwNw18-0QEfu04oQ1my80Xm0oG0gi0hRwci02XRaE14U0Cq04VEbi082awkE0jbw15y0jmteE0OG05cE2DwjE",
    // __comet_req: "15",
    fb_dtsg:
      "NAcNOuJZE1PNsDzubVFqXuXrwncwYuoZJ6hm0GR9SDuza5E0WQ0jYtg:20:1725462654",
    // jazoest: "25548",
    // lsd: "FhT3t3r4iBrgupDR4JEXy6",
    __spin_r: "1018882924",
    __spin_b: "trunk",
    __spin_t: "1734195828",
    fb_api_caller_class: "RelayModern",
    fb_api_req_friendly_name: "CommentsListComponentsPaginationQuery",
    variables: JSON.stringify({
      commentsAfterCount: null,
      commentsAfterCursor: cursor,
      commentsBeforeCount: null,
      commentsBeforeCursor: null,
      commentsIntentToken: null,
      feedLocation: "COMET_MEDIA_VIEWER",
      focusCommentID: null,
      scale: 2,
      useDefaultActor: false,
      id: "ZmVlZGJhY2s6OTkxOTAzOTg5NjQxMzYx",
      __relay_internal__pv__IsWorkUserrelayprovider: false,
    }),
    server_timestamps: "true",
    doc_id: "9152476188133470",
  };

  request = new URLSearchParams(data);

  fetch("https://www.facebook.com/api/graphql/", {
    credentials: "include",
    headers: {
      // Accept: "*/*",
      // "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded",
      // "X-FB-Friendly-Name": "CommentsListComponentsPaginationQuery",
      // "X-FB-LSD": "FhT3t3r4iBrgupDR4JEXy6",
      // "X-ASBD-ID": "129477",
      // "Sec-GPC": "1",
      // "Sec-Fetch-Dest": "empty",
      // "Sec-Fetch-Mode": "cors",
      // "Sec-Fetch-Site": "same-origin",
      // Priority: "u=0",
    },
    // referrer:
    //   "https://www.facebook.com/photo?fbid=968002082031552&set=a.608213854677045",
    body: request.toString(),
    method: "POST",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((json_data) => {
      comments_data =
        json_data["data"]["node"][
          "comment_rendering_instance_for_feed_location"
        ]["comments"]["edges"];
      paging_data =
        json_data["data"]["node"][
          "comment_rendering_instance_for_feed_location"
        ]["comments"]["page_info"];

      data = [];
      for (comment of comments_data) {
        data.push({
          profile_url: comment.node.author?.url ?? null,
          profile_name: comment.node.author?.name ?? null,
          comment_url: comment.node.feedback?.url ?? null,
          comment_content: comment.node.body?.text ?? null,
          photo_url:
            comment.node.attachments[0]?.style_type_renderer?.attachment?.url ??
            null,
          reaction_count:
            comment.node.feedback?.reactors?.count_reduced ?? null,
          comment_date: formatDate(new Date(comment.node.created_time * 1000)),
        });
      }

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

      if (paging_data["has_next_page"] == false) {
        clearInterval(fetchComments);
      }

      cursor = paging_data["end_cursor"];
      console.log(cursor);
    });
}, 5000);
