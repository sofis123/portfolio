var carouselScrollingTest = function() {
  let current = 0; 
  setInterval(function() {
      current = current == 0 ? 1 : 0;
      document.querySelectorAll(".carousel-indicators label")[current].click()
  }, 8000);
}

carouselScrollingTest();