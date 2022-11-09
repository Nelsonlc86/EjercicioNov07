function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!";
}

const myTimeout = () => {
  setTimeout(myGreeting, 5000);
};
