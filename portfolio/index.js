document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("loader").style.display = "block";
  setTimeout(function(){
    document.getElementById("portfolio").style.display = "block";
    document.getElementById('portfolio').className += 'fade-in-css'
    document.getElementById("loader").style.display = "none";
  }, 10000);
});
