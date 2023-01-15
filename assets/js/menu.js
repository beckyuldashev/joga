function showAndHideMenu(node) {
  if (node.classList.contains('show')) {
    gsap.to('.nav__list', {
      x: '100%'
    });

    gsap.to('.line', {
      stroke: '#fff'
    });

    gsap.set('body', {
      overflow: 'hidden auto'
    });

  } else {
    gsap.to('.nav__list', {
      x: '0%'
    });

    gsap.to('.line', {
      stroke: '#000'
    });

    gsap.fromTo('.nav__link', {
      opacity: 0,
    }, {
      opacity: 1,
      delay: .25,
      stagger: .25
    });

    gsap.set('body', {overflow: 'hidden'});
  }

  node.classList.toggle('show');
}