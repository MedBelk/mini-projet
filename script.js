function darkmod() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var image = document.getElementById("dark");
  if (image.getAttribute("src") === "./assets/darkmod.png") {
    image.setAttribute("src", "./assets/lightmod.png");
    document.querySelector(".heroText").setAttribute("dark", "");
    // document.getElementsByTagName("form")[0].style.backgroundColor = "#252525";
    // document.getElementsByClassName("images")[0].style.backgroundColor =
    //   "#252525";
    // document.getElementsByClassName("navbar")[0].style.fontWeight = "700";
  } else {
    image.setAttribute("src", "./assets/darkmod.png");
    document.querySelector(".heroText").removeAttribute("dark");
  }
}

var productItems = document.querySelectorAll(".product");

productItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.classList.add("animate");
  });

  item.addEventListener("mouseout", function () {
    this.classList.remove("animate");
  });
});

lightGallery(document.querySelector(".gallery"));

// I need dark mode
