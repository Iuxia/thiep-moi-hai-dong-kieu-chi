const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.countdown-section, .couple, .story-item, .story-text, .gallery-item-inner, .title, .testimonial,
    .footer`,
  {
    // interval: 200,
  }
);

// ScrollReveal.reveal(``, {
//   origin: "top",
//   distance: "30px",
//   duration: 1005,
//   reset: true,
// });
