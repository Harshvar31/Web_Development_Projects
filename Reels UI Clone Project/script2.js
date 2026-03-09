const reels = [
  { 
    ismuted : true,
    username: "UrbanTadkaKitchen",
    likeCount: "12540",
    isLiked: true,
    commentCount: "1020",
    caption: "Life is better with extra cheese on your pizza 🍕✨",
    video: "./Videos/Vid6.mp4",
    userProfile: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: false,
    shareCount: "3081",
    isFollowed: true
  },
  { 
    ismuted : true,
    username: "SpiceCraftHouse",
    likeCount: "32961",
    isLiked: true,
    commentCount: "2143",
    caption: "Chasing flavors, one spicy bite at a time 🌶️🔥",
    video: "./Videos/Vid2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: true,
    shareCount: "8510",
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
  { 
    ismuted : true,
    username: "StreetFlavorsIndia",
    likeCount: "15467",
    isLiked: false,
    commentCount: "1121",
    caption: "Potato therapy solves everything 🥙😋",
    video: "./Videos/Vid7.mp4",
    userProfile: "https://images.unsplash.com/photo-1645673197548-9adfa2ea55dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: false,
    shareCount: "3897",
    isFollowed: true
  },
  { 
    ismuted : true,
    username: "RoyalHouse",
    likeCount: "22356",
    isLiked: false,
    commentCount: "1345",
    caption: "Powered by bread and big dreams 🍛✨",
    video: "./Videos/Vid8.mp4",
    userProfile: "https://images.unsplash.com/photo-1559054663-e8d23213f55c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSaved: false,
    shareCount: "5067",
    isFollowed: true
  }
];

let allReels = document.querySelector('.all-reels');

function addData() {
  let sum = ''
reels.forEach(function(elem,idx){
    sum += `<div class="reels">
                  <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                  <div id=${idx} class="mute">
                    ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}                 
                  </div>
                  <div class="bottom">
                     <div class="user">
                        <img src="${elem.userProfile}" alt="">
                        <h4>${elem.username}</h4>
                        <button id=${idx} class='follow'>${elem.isFollowed?"Unfollow":"Follow"}</button>
                     </div>
                     <h3>${elem.caption}</h3>
                  </div>
                  <div class="right">
                     <div id=${idx} class="like">
                        <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                     </div>
                     <div id=${idx} class="comment">
                        <h4 class="comment-icon">
                        <i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                     </div>
                     <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                     </div>
                     <div class="save" id=${idx}>
                        <h4 class="save-icon">${elem.isSaved?'<i class="ri-bookmark-fill"></i>':'<i class="ri-bookmark-line"></i>'}</h4>
                     </div>
                     <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                     </div>
                  </div>
               </div>`
})

allReels.innerHTML = sum
}

addData();

allReels.addEventListener('click',function(dets){
  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
     reels[dets.target.id].likeCount++;
     reels[dets.target.id].isLiked = true;
    } else {
     reels[dets.target.id].likeCount--;
     reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
     reels[dets.target.id].isFollowed = true;
    } else {
     reels[dets.target.id].isFollowed = false;
    }
    addData();
  }

  if(dets.target.className == 'save'){
    if(!reels[dets.target.id].isSaved){
     reels[dets.target.id].isSaved = true;
    } else {
     reels[dets.target.id].isSaved = false;
    }
    addData();
  }

  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].ismuted){
     reels[dets.target.id].ismuted = true;
    } else {
     reels[dets.target.id].ismuted = false;
    }
    addData();
  }
  
})

