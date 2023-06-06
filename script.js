function darkmod() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var image = document.getElementById("dark");
  if (image.getAttribute("src") === "./assets/darkmod.png") {
      image.setAttribute("src", "./assets/lightmod.png");
     document.querySelector(".heroText").setAttribute("dark", "");
     document.querySelector(".images").setAttribute("dark", "");
     document.querySelector("form").setAttribute("dark", "");
     document.querySelector("footer").setAttribute("dark","");

     
   





  } else {
    image.setAttribute("src", "./assets/darkmod.png");
    document.querySelector(".heroText").removeAttribute("dark");
    document.querySelector(".images").removeAttribute("dark");
    document.querySelector("form").removeAttribute("dark", "");
    document.querySelector("footer").removeAttribute("dark","");
    
  
  }
}

var productItems = document.querySelectorAll(".product");

productItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    item.classList.add("animate");
  });

  item.addEventListener("mouseout", function () {
    item.classList.remove("animate");
  });
});

lightGallery(document.querySelector(".gallery"));

// I need dark mode
