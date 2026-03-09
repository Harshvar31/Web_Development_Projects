const reels = [
  {
    ismuted: true,
    username: "UrbanTadkaKitchen",
    likeCount: 12540,
    isLiked: true,
    commentCount: 1020,
    caption: "Life is better with extra cheese on your pizza 🍕✨",
    video: "./Videos/Vid6.mp4",
    userProfile: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    isSaved: false,
    shareCount: 3081,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "SpiceCraftHouse",
    likeCount: 32961,
    isLiked: true,
    commentCount: 2143,
    caption: "Chasing flavors, one spicy bite at a time 🌶️🔥",
    video: "./Videos/Vid2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    isSaved: true,
    shareCount: 8510,
    isFollowed: false
  },
   { 
    ismuted : true,
    username: "SweetCravingsCo",
    likeCount: "18590",
    isLiked: false,
    commentCount: "980",
    caption: "Dessert isn’t a course, it’s a lifestyle 🍰💖",
    video: "./Videos/Vid3.mp4",
    userProfile: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: true,
    shareCount: "4021",
    isFollowed: false
  },
  { 
    ismuted : true,
    username: "TandoorTrails",
    likeCount: "25035",
    isLiked: true,
    commentCount: "1080",
    caption: "Smoky tandoori vibes and good times 🍗🔥",
    video: "./Videos/Vid5.mp4",
    userProfile: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: true,
    shareCount: "6142",
    isFollowed: true
  },
  { 
    ismuted : true,
    username: "BurgerDistrict",
    likeCount: "41375",
    isLiked: false,
    commentCount: "3013",
    caption: "Stacked high, dripping cheese, zero regrets 🍔🤤",
    video: "./Videos/Vid4.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: false,
    shareCount: "9567",
    isFollowed: true
  },
  { 
    ismuted : true,
    username: "GreenBowlKitchen",
    likeCount: "9080",
    isLiked: false,
    commentCount: "620",
    caption: "Fresh bowl, fresh mood, fresh energy 🥗💚",
    video: "./Videos/Vid1.mp4",
    userProfile: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: true,
    shareCount: "2189",
    isFollowed: false
  },
  { 
    ismuted : true,
    username: "MidnightBitesHub",
    likeCount: "27599",
    isLiked: true,
    commentCount: "3278",
    caption: "Midnight cravings hit different 🌙",
    video: "./Videos/Vid8.mp4",
    userProfile: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: false,
    shareCount: "7030",
    isFollowed: true
  },
  // keep your remaining objects same (counts should be numbers)
];

const allReels = document.querySelector(".all-reels");


// =======================
// INITIAL RENDER ONLY ONCE
// =======================
function addData() {

  let sum = "";

  reels.forEach((elem, idx) => {

    sum += `
      <div class="reels">
        <video autoplay loop ${elem.ismuted ? "muted" : ""} src="${elem.video}"></video>

        <div id="${idx}" class="mute">
          <i class="${elem.ismuted ?
        "ri-volume-mute-fill" :
        "ri-volume-up-fill"}"></i>
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${elem.userProfile}" alt="">
            <h4>${elem.username}</h4>
            <button id="${idx}" class="follow">
              ${elem.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h3>${elem.caption}</h3>
        </div>

        <div class="right">

          <div id="${idx}" class="like">
            <h4>
              <i class="${elem.isLiked ?
        "ri-heart-3-fill love" :
        "ri-heart-3-line"}"></i>
            </h4>
            <h6>${elem.likeCount}</h6>
          </div>

          <div id="${idx}" class="comment">
            <h4><i class="ri-chat-3-line"></i></h4>
            <h6>${elem.commentCount}</h6>
          </div>

          <div class="share">
            <h4><i class="ri-share-forward-line"></i></h4>
            <h6>${elem.shareCount}</h6>
          </div>

          <div id="${idx}" class="save">
            <h4>
              <i class="${elem.isSaved ?"ri-bookmark-fill":"ri-bookmark-line"}"></i>
            </h4>
          </div>
          <div class="menu">
            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
          </div>
       </div>
      </div>`;
  });

  allReels.innerHTML = sum;
}

addData();


// =======================
// INDEPENDENT UPDATE FUNCTIONS
// =======================

function toggleLike(idx, likeDiv) {

  reels[idx].isLiked = !reels[idx].isLiked;
  reels[idx].likeCount += reels[idx].isLiked ? 1 : -1;

  const icon = likeDiv.querySelector("i");
  const count = likeDiv.querySelector("h6");

  if (reels[idx].isLiked) {
    icon.classList.remove("ri-heart-3-line");
    icon.classList.add("ri-heart-3-fill", "love");
  } else {
    icon.classList.remove("ri-heart-3-fill", "love");
    icon.classList.add("ri-heart-3-line");
  }

  count.textContent = reels[idx].likeCount;
}


function toggleFollow(idx, button) {

  reels[idx].isFollowed = !reels[idx].isFollowed;
  button.textContent = reels[idx].isFollowed ? "Unfollow" : "Follow";
}


function toggleSave(idx, saveDiv) {

  reels[idx].isSaved = !reels[idx].isSaved;

  const icon = saveDiv.querySelector("i");

  if (reels[idx].isSaved) {
    icon.classList.remove("ri-bookmark-line");
    icon.classList.add("ri-bookmark-fill");
  } else {
    icon.classList.remove("ri-bookmark-fill");
    icon.classList.add("ri-bookmark-line");
  }
}


function toggleMute(idx, muteDiv) {

  reels[idx].ismuted = !reels[idx].ismuted;

  const video = muteDiv.closest(".reels").querySelector("video");
  const icon = muteDiv.querySelector("i");

  video.muted = reels[idx].ismuted;

  if (reels[idx].ismuted) {
    icon.classList.remove("ri-volume-up-fill");
    icon.classList.add("ri-volume-mute-fill");
  } else {
    icon.classList.remove("ri-volume-mute-fill");
    icon.classList.add("ri-volume-up-fill");
  }
}


// =======================
// EVENT DELEGATION
// =======================

allReels.addEventListener("click", function (e) {

  const likeDiv = e.target.closest(".like");
  const followBtn = e.target.closest(".follow");
  const saveDiv = e.target.closest(".save");
  const muteDiv = e.target.closest(".mute");

  if (likeDiv) toggleLike(likeDiv.id, likeDiv);

  if (followBtn) toggleFollow(followBtn.id, followBtn);

  if (saveDiv) toggleSave(saveDiv.id, saveDiv);

  if (muteDiv) toggleMute(muteDiv.id, muteDiv);

});