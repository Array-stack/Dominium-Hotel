document.addEventListener("DOMContentLoaded", function () {
    // Get the testimonials and gallery sections
    const testimonials = document.querySelector(".testimonials");
    const gallery = document.querySelector(".gallery"); 
  
    // Get the images in the gallery
    const images = gallery.querySelectorAll("img");
  
   
  
    // Set the current image index
    let currentImageIndex = 0;
  
    // Set the interval for changing images
    let interval = setInterval(changeImage, 5000);
  
    // Change the image
    function changeImage() {
      // Hide the current image
      images[currentImageIndex].classList.remove("active");
  
      // Increment the current image index
      currentImageIndex++;
  
      // If the current image index is greater than the number of images, reset it to 0
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
  
      // Show the new image
      images[currentImageIndex].classList.add("active");
    }
  
    // Get the testimonials
    const testimonialList = testimonials.querySelector(".testimonial-list");
  
    // Get the testimonial items
    const testimonialItems =
      testimonialList.querySelectorAll(".testimonial-item");
  
    // Set the current testimonial index
    let currentTestimonialIndex = 0;
  
    // Set the interval for changing testimonials
    let testimonialInterval = setInterval(changeTestimonial, 5000);
  
    // Change the testimonial
    function changeTestimonial() {
      // Hide the current testimonial
      testimonialItems[currentTestimonialIndex].classList.remove("active");
  
      // Increment the current testimonial index
      currentTestimonialIndex++;
  
      // If the current testimonial index is greater than the number of testimonials, reset it to 0
      if (currentTestimonialIndex >= testimonialItems.length) {
        currentTestimonialIndex = 0;
      }
  
      // Show the new testimonial
      testimonialItems[currentTestimonialIndex].classList.add("active");
    }
  });