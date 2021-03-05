let toggleMenu = document.querySelector(".menu");
let headerStatus = document.querySelector(".header");

toggleMenu.addEventListener( "click", () => {
    console.log('click');
    if (headerStatus.classList.contains("open")) {
      headerStatus.classList.remove("open");
    } else {
      headerStatus.classList.add("open");
    }
  },
  false
);
