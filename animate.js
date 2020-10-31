const milestones = document.querySelectorAll('.timeline-item');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
});

milestones.forEach(milestone => {
  observer.observe(milestone);
});
