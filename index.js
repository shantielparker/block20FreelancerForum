function main() {
  // Grab the "root" element
  const rootElement = document.getElementById("root");

  // Create an <h1> element and give it text of "FREELANCERS"
  const h1Element = document.createElement("h1");
  h1Element.textContent = "FREELANCERS";

  // Append the <h1> element to the HTML document
  rootElement.appendChild(h1Element);

  // Create an unordered list element
  const ulElement = document.createElement("ul");

  // Array of users
  const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
  ];

  // Loop through the users array creating <li> elements
  users.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
    ulElement.appendChild(liElement);
  });

  // Append the <ul> element to the HTML document
  rootElement.appendChild(ulElement);
}

// Call the main function when the page finishes loading
window.addEventListener("load", main);
