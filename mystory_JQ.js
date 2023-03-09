$(document).ready(function() {
    // Get all paragraphs in the story container
    const paragraphs = $('.story_container p');
    
    $(window).scroll(function() {
      paragraphs.each(function() {
        // If the top of the paragraph is in view
        if ($(this).offset().top - $(window).scrollTop() < $(window).height() * 0.75) {
          // Add the fade-in class to the paragraph
          $(this).addClass('fade-in');
        }
      });
    });
  });
  