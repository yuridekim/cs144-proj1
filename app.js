document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("your-name");
    
    var counter = document.createElement("span");
    counter.textContent = "0/50 characters written";
    counter.style.display = "block";
    
    nameInput.parentNode.insertBefore(counter, nameInput.nextSibling);
    
    nameInput.addEventListener("input", function() {
      var charCount = nameInput.value.length;
      counter.textContent = charCount + "/50 characters";
      
      if (charCount > 50) {
        counter.style.color = "red";
      } else {
        counter.style.color = "";
      }
    });
  });