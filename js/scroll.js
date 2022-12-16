const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1200,
  reset: true,
});

sr.reveal(
  `.countdown-section, .couple, .story-item, .story-text, .people-item-inner, .gallery-item-inner, .section-title, .title, .testimonial,
    .footer`,
  {
    interval: 200,
  }
);

const album = ScrollReveal({
  //   delay: 125,
  duration: 1500,
  opacity: 1,
  distance: "50%",
  origin: "right",
  reset: true,
});

album.reveal(`.#abc`, {});

const events = ScrollReveal({
  origin: "left",
  duration: 1500,
  interval: 200,
});
events.reveal(`#l1`, {});

const events2 = ScrollReveal({
  origin: "right",
  //   distance: "30px",
  duration: 1500,
  interval: 200,
});
events2.reveal(`#r1`, {});
