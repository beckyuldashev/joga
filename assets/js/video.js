function showVideos(nodes) {
  gsap.set(nodes, {
    opacity: 0
  });

  nodes.forEach(node => {
    ScrollTrigger.create({
      trigger: node,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(node, {
          opacity: 1
        });
        node.play();
      },
      onEnterBack: () => {
        node.play();
      },
      onLeave: () => {
        node.pause();
      },
      onLeaveBack: () => {
        node.pause();
      }
    });
  });
}