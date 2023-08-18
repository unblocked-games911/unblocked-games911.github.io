window.addEventListener('load', function() {
  var html_cat = `<ul class="category-list-wrapper">
  <a href="/fnf-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/other.svg" alt="FNF Unblocked" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">FNF</span>
        <div class="cat-game-amount">47 games</div>
      </div>
    </li>
  </a>
  <a href="/2-player-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/2-player.svg" alt="2 Player" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">2 Player</span>
        <div class="cat-game-amount">3 games</div>
      </div>
    </li>
  </a>
  <a href="/simulator-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/3d.svg" alt="Simulator Games Unblocked" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Simulator</span>
        <div class="cat-game-amount">25 games</div>
      </div>
    </li>
  </a>
  <a href="/action-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/actions.svg" alt="Action" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Action</span>
        <div class="cat-game-amount">22 games</div>
      </div>
    </li>
  </a>
  <a href="/adventure-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/adventure.svg" alt="Adventure" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Adventure</span>
        <div class="cat-game-amount">50 games</div>
      </div>
    </li>
  </a>
  <a href="/idle-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/arcade.svg" alt="Arcade" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Idle</span>
        <div class="cat-game-amount">106 games</div>
      </div>
    </li>
  </a>
  <a href="/skill-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/puzzle.svg" alt="Skill Games Unblocked" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Skill</span>
        <div class="cat-game-amount">100 games</div>
      </div>
    </li>
  </a>
  <a href="/car-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/racing.svg" alt="Car Games Unblocked" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Car</span>
        <div class="cat-game-amount">2 games</div>
      </div>
    </li>
  </a>
  <a href="/shooting-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/other.svg" alt="Shooting" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Shooting</span>
        <div class="cat-game-amount">5 games</div>
      </div>
    </li>
  </a>
  <a href="/stickman-games-unblocked">
    <li class="cat-item">
      <span class="icon-category">
        <img src="/images/icon/other.svg" alt="Stickman" width="40" height="40">
      </span>
      <div class="cat-info">
        <span class="cat-name">Stickman</span>
        <div class="cat-game-amount">5 games</div>
      </div>
    </li>
  </a>
  
</ul>`;
document.querySelector('#list-cat').innerHTML = html_cat;
    var file_name = document.querySelector('#all-item').dataset.item;
    fetch(`/data/${file_name}.json`).then(response => response.json())
    .then(data => {
        var html = "";
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            var slug = item.slug;
            if(item.hasOwnProperty("cat")){
              slug = `${item.cat}/${item.slug}`;
            }
            var img = `/images/${item.slug}.png`;
            if(item.hasOwnProperty("img")){
              if(item.img.indexOf("https") !== -1){
                img = item.img;
              } else {
                img = `/images/${item.img}`;
              }
             
            }
            var domain = item.domain;
            if(domain <= 5){
              
            }
            html += `<div class="col-lg-2 col-md-4 col-6 grid-3">
            <a href="/${slug}">
              <div class="game-item">
                <div class="list-game">
                  <div class="list-thumbnail">
                    <img src="${img}" alt="${item.title}">
                  </div>
                  <div class="list-info">
                    <div class="list-title">${item.title}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>`;
        }
       
        this.document.querySelector('#all-item').innerHTML = html;
    })
    var file_name = document.querySelector('#new-item').dataset.item;
    fetch(`/data/${file_name}.json`).then(response => response.json())
    .then(data => {
        var html = "";
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            var slug = item.slug;
            if(item.hasOwnProperty("cat")){
              slug = `${item.cat}/${item.slug}`;
            }
            var img = `/images/${item.slug}.png`;
            if(item.hasOwnProperty("img")){
              if(item.img.indexOf("https") !== -1){
                img = item.img;
              } else {
                img = `/images/${item.img}`;
              }
             
            }
            var domain = item.domain;
            if(domain <= 5){
              
            }
            html += `<div class="col-lg-2 col-md-4 col-6 grid-3">
            <a href="/${slug}">
              <div class="game-item">
                <div class="list-game">
                  <div class="list-thumbnail">
                    <img src="${img}" alt="${item.title}">
                  </div>
                  <div class="list-info">
                    <div class="list-title">${item.title}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>`;
        }
       
        this.document.querySelector('#new-item').innerHTML = html;
    })
    checkStore();
    if(window.location.href.indexOf("localhost") == -1 && window.location.href.indexOf("127.0.0.1") == -1 && window.location.href.indexOf("tunnel-rush.html") == -1 && window.location.href.indexOf("monkey-mart.html") == -1){
      loadGA();
      loadAds();
  }
})
//
function loadGA(){
    
  var  r = document.createElement("script");
r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-M3MLF0HSW8"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-M3MLF0HSW8');

  },document.head.appendChild(r);
  
}
function loadAds(){
  var  r = document.createElement("script");
  r.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8136533182122624"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function (){
    // if(document.querySelector('.adsbygoogle')){
    //   (adsbygoogle = window.adsbygoogle || []).push({});
    //   (adsbygoogle = window.adsbygoogle || []).push({});
    // }
  },document.head.appendChild(r);
  
}
//
function checkStore(){
  var title = localStorage.getItem('title');
  if(title){
      document.title = title;
  }
  var icon = localStorage.getItem('icon');
  if(icon){

      setIcoLink(icon);
  }
  
}
function setIcoLink(linkIcon){
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = linkIcon;
}
//