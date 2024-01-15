let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;        
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
// NAV Y FOOTER

// MENU Y SUBMENU
var openSubMenus = document.querySelectorAll('.open_submenu');
var subMenus = document.querySelectorAll('.submenu');

openSubMenus.forEach(function(openSubMenu, index) {
    openSubMenu.addEventListener('click', function() {
        subMenus[index].classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if(subMenus[index].classList.contains('show') 
            && !subMenus[index].contains(e.target) 
            && !openSubMenu.contains(e.target)) {
                subMenus[index].classList.remove('show');
            }
    });
});


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = ""; 
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("MySQL");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//CREACION DE PARTICULAS
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 150, // Aumentamos la cantidad de partículas
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#ff0000", "#00ff00", "#5B000E", "#ffff00", "#ff00ff", "#00ffff","#ffffff"], // Define un array de colores
        "random": true, // Hacemos que los colores sean aleatorios dentro del array
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.7, // Aumentamos la opacidad de las partículas
        "random": true, // Hacemos que la opacidad sea aleatoria
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5, // Reducimos el tamaño de las partículas
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#9EBF13",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4, // Aumentamos la velocidad de movimiento
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200, // Aumentamos la distancia para agarrar partículas
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100, // Aumentamos la distancia de repulsión
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
//MOSTRAR SECCIONES
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let autoScroll = true;
  let scrollDelay = 5000; // 5 segundos
  let stopScrollTimeout = null;

  function scrollToNextSection() {
      if (autoScroll) {
          let currentSection = document.querySelector(".active");
          let nextSection = currentSection.nextElementSibling;

          if (!nextSection) {
              nextSection = sections[0];
          }

          currentSection.classList.remove("active");
          nextSection.classList.add("active");

          let scrollTo = nextSection.offsetTop - 80; // 80px de compensación hacia abajo
          window.scrollTo({
              top: scrollTo,
              behavior: "smooth"
          });

          stopScrollTimeout = setTimeout(function () {
              scrollToNextSection();
          }, scrollDelay);
      }
  }

  function pauseScrollOnMouseOver() {
      autoScroll = false;
      if (stopScrollTimeout) {
          clearTimeout(stopScrollTimeout);
      }
  }

  function resumeScrollOnMouseOut() {
      autoScroll = true;
      stopScrollTimeout = setTimeout(function () {
          scrollToNextSection();
      }, 8000); // 8 segundos
  }

  sections[0].classList.add("active");
  scrollToNextSection();

  sections.forEach((section) => {
      section.addEventListener("mouseover", pauseScrollOnMouseOver);
      section.addEventListener("mouseout", resumeScrollOnMouseOut);
  });
});