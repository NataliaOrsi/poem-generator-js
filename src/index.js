function generatePoem (event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "La tombe dit a la Rose",
      autoStart: true,
      delay: 20,
      cursor:"",
    });
    
}

let formElement = document.querySelector("#poem-generator-form");

formElement.addEventListener("submit", generatePoem);