
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/تنزيل.jpg") {
    myImage.setAttribute("src", "images/images.png");
  } else {
    myImage.setAttribute("src", "images/تنزيل.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Did you pay a new books, ${myName}?`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Did you pay a new books, ${ storedName}?`;
  }
  myButton.addEventListener("click", () => {
    setUserName();
  });
  
