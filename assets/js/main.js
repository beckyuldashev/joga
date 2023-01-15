(() => {
  const hamburgerBtn = document.querySelector('.hamburger-icon');
  const videos = gsap.utils.toArray('.video');

  // Menu
  hamburgerBtn.addEventListener('click', () => {
    showAndHideMenu(hamburgerBtn);
  });


  // Videos
  showVideos(videos);
})();