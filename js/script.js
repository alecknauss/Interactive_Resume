function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav";
  }
}

const nav = document.querySelector('.topnav');
const topTonav = nav.offsetTop;
const main = document.querySelector('.main-content');