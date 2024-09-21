
// Close the modal when clicking outside of it
     window.onclick = function(event) {
         var modal = document.getElementById('loginModal');
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }

     function showRegisterForm() {
         document.getElementById('loginForm').style.display = 'none';
         document.getElementById('registerForm').style.display = 'block';
         document.getElementById('modalTitle').innerText = 'Register';
     }


     function showloginForm() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('modalTitle').innerText = 'Login';
    }

     function toggleMenu() {
         var menu = document.getElementById('dropdownMenu');
         if (menu.style.display === 'block') {
             menu.style.display = 'none';
         } else {
             menu.style.display = 'block';
         }
     }

     // Carousel image change
     var images = [
         'indus\ vallley.jpg',
         'https://3.bp.blogspot.com/-4U3eMLoTsgQ/WFD3zxm0bII/AAAAAAAAuAE/h69CnnW6gGAcbVl92kHhN4JtqaiiRSupACLcB/s1600/bharatha%2Bnatyam.JPG',
         'https://thumbs.dreamstime.com/b/bas-relief-au-temple-antique-c%C3%A9l%C3%A8bre-dans-khajuraho-inde-102487153.jpg',
         'https://1.bp.blogspot.com/-Ujhi-C3OdSs/XuMQFhZWuVI/AAAAAAAAA7k/xId3omwTrWQWYdbb9MrcyMWLN6dRfZSGgCK4BGAsYHg/s1024/aloo-paratha.jpg',
         'ranthambore.jpg',
         'elephanta.jpg'
     ];
     var currentIndex = 0;
     var interval;

     function changeImage() {
         var carouselImage = document.getElementById('carouselImage');
         carouselImage.style.backgroundImage = 'url(' + images[currentIndex] + ')';
     }

     function nextImage() {
         currentIndex = (currentIndex + 1) % images.length;
         changeImage();
     }

     function prevImage() {
         currentIndex = (currentIndex - 1 + images.length) % images.length;
         changeImage();
     }

     function startImageChange() {
         interval = setInterval(nextImage, 4000); // Change image every 4 seconds
     }

     function stopImageChange() {
         clearInterval(interval);
     }

     // Initial image load
     window.onload = function() {
         changeImage();
         startImageChange();
     }
