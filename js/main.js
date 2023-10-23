window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".contenedor-navbar");
  const links = navbar.querySelectorAll("a");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#f5f5f5"; // Cambia el color de fondo a tu preferencia
    links.forEach(link => {
      link.style.color = "#000"; // Cambia el color de texto a tu preferencia
    });
  } else {
    navbar.style.backgroundColor = "transparent"; // Vuelve al fondo transparente
    links.forEach(link => {
      link.style.color = "#f9f9f9"; // Cambia el color de texto a tu preferencia
    });
  }
});

const navLinks = document.querySelectorAll(".contenedor-navbar a");

navLinks.forEach(link => {
  link.addEventListener("mouseover", function() {
    if (window.scrollY > 0) {
      this.style.color = "#ff0048"; // Cambia el color de hover a tu preferencia
    } else {
      this.style.color = "#ff0048"; // Cambia el color de hover a tu preferencia
    }
  });

  link.addEventListener("mouseout", function() {
    if (window.scrollY > 0) {
      this.style.color = "#000"; // Cambia el color de texto a tu preferencia
    } else {
      this.style.color = "#f9f9f9"; // Cambia el color de texto a tu preferencia
    }
  });
});