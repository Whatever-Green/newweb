  //Darkmode
  // Get the theme toggle input
  const currentTheme = localStorage.getItem("theme");// If the current local storage item can be found

  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme() {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      // Set the user's theme preference to dark
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      // Set the user's theme preference to light
      localStorage.setItem("theme", "dark");
    }
  }


  // Get the current theme from local storage
  if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);// If the current theme is dark, check the theme toggle
    if (currentTheme === "dark") {
      themeToggle.click();
    }
  }

//HTML includes
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "The Crickets Tell Me There Is Nothing Here 404 error page not found!!";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
 includeHTML();
