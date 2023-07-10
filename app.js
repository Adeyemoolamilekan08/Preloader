// Wait for the page to load
window.addEventListener("load", function() {
    // Set a timeout of 3 seconds
    setTimeout(function() {
      // Get references to the preloader and content elements
      var preloader = document.getElementById("preloader");
      var content = document.getElementById("content");
  
      // Hide the preloader and show the content
      preloader.style.display = "none";
      content.classList.add("loaded");
    }, 3000); // 3 seconds delay
  });
  