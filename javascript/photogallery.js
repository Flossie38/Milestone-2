function showPhotos() {
    var i;
    var photos = document.getElementsByClassName("lakeimgs");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) 
    {
      photos[i].style.display = "none";  
    }
    photoIndex++;
    if (photoIndex > photos.length) {photoIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    photos[photoIndex-1].style.display = "block";  
    dots[photoIndex-1].className += " active";
    // setTimeout(showPhotos, 2000); // Change image every 2 seconds
  }