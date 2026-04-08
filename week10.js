const button = document.getElementById("loadBtn");
const output = document.getElementById("output");
const errorMsg = document.getElementById("error");

button.addEventListener("click", fetchData);

function fetchData() {
  output.innerHTML = "Loading...";
  errorMsg.textContent = "";

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      return response.json();
    })
    .then(data => {
      output.innerHTML = `<img src="${data.message}" width="300"/>`;
        
    })
    .catch(error => {
      errorMsg.textContent = error.message;
      output.innerHTML = "";
    });
}