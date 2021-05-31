/* Hello world example
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!'); //displays a pop-up box with the message
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me-small.jpg') {
      myImage.setAttribute('src','images/me-red.jpg');
    } else {
      myImage.setAttribute('src','images/me-small.jpg');
    }
}

let myButton = document.getElementById('change-user'); //gets by element
let myHeading = document.querySelector('h1');

function setUserName() { //setting username
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Kingmamba is smexy, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) { //if no username, then create one
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kingmamba is smexy, ' + storedName;
  }

  myButton.onclick = function() { //click on website to switch username
    setUserName();
  }