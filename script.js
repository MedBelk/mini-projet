function darkmod() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var image = document.getElementById("dark");
  if (image.getAttribute("src") === "./assets/darkmod.png") {
    image.setAttribute("src", "./assets/lightmod.png");
  } else {
    image.setAttribute("src", "./assets/darkmod.png");
  }
  document.getElementsByClassName("heroText")[0].style.backgroundColor =
    "#252525";
}

var productItems = document.querySelectorAll('.product');
          
          
productItems.forEach(function (item) {
  
  item.addEventListener('mouseover', function () {
    
    this.classList.add('animate');
  });

  
  item.addEventListener('mouseout', function () {
    
    this.classList.remove('animate');
  });
});

lightGallery(document.querySelector(".gallery"));