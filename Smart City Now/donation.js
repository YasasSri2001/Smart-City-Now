document.getElementById("donate-btn").addEventListener("click", function() {
  
    var amount = document.getElementById("amount").value;
    
  
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.classList.remove("hidden");
   
    document.getElementById("amount").value = "";
    
   
    setTimeout(function() {
        confirmationMessage.classList.add("hidden");
    }, 3000);
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}
