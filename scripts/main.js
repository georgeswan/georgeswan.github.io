const myImage = document.querySelector("img"); //

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/george.jpg") {
    myImage.setAttribute("src", "images/the_thinker.jpg");
  } else {
    myImage.setAttribute("src", "images/george.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my website, ${myName}!`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my website, ${myName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my website, ${myName}!`;
    }
  }
  
