function toggleNav() {
  if (document.getElementById("mobilenav").style.height != "100%") {
    document.getElementById("mobilenav").style.height = "100%";
    document.getElementById("mobilenav").style.opacity = "100%";
    document.getElementById("mobilenav").style.paddingTop = "50px";
    document.getElementById("navigation").style.backgroundColor = 'rgba(0,0,0, 0.8)';
  }
  else {
    document.getElementById("mobilenav").style.height = "0";
    document.getElementById("mobilenav").style.opacity = "0";
    document.getElementById("mobilenav").style.paddingTop = "0";
    document.getElementById("navigation").style.backgroundColor = null;
  }
}