let Name = "Jessica";
console.log(Name);

let age = 20;
console.log(age);

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
function greetUser() {
  console.log("Hello, " + userName + "!");
}

document.getElementById('greetme').addEventListener('click', () => {
    document.getElementById('message').innerText="Hello Welcome!";
})