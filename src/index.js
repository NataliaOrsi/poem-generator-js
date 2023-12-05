function displayPoem (response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });

}

function generatePoem (event) {
    event.preventDefault();

    let apiKey = "5b303bcbffcb9458t34a63o545f3d664";
    let instructions = document.querySelector("#user-instructions")
    let prompt = `User instructions: Generate a poem about ${instructions.value}`;
    let context =
      "You're a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with <br />. Make sure to follow the user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
    
}

let formElement = document.querySelector("#poem-generator-form");

formElement.addEventListener("submit", generatePoem);