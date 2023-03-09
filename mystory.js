// Get all paragraphs in the story container
const paragraphs = document.querySelectorAll('.story_container p');

// Set up an IntersectionObserver to trigger when a paragraph is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the fade-in class to the paragraph
      entry.target.classList.add('fade-in');
      // Stop observing the paragraph so that the animation only plays once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.7 // Trigger when paragraph is 50% in view
});

// Observe each paragraph
paragraphs.forEach(p => observer.observe(p));
