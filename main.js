    var aspect = 1920/1080;
    var visAccessibility = false;

    function toggleAccessibility(){
      visAccessibility = !visAccessibility;
      colouredTextElements = document.body.getElementsByClassName("sky-colour-text");
      for (var i=colouredTextElements.length; i--; i<=0)
        if (visAccessibility)
          colouredTextElements[i].className += " accessible";
        else
          colouredTextElements[i].classList.remove("accessible");
      renderAccessibilitySwitch();
    }

    function makeNewAccessibilitySwitch(){
      var toggle = document.createElement("Button");
      toggle.className = "noBgButton main-text";
      document.body.appendChild(toggle);
      toggle.id = "visAccSwitch";
      toggle.onclick = function() {
        toggleAccessibility();
      };
    }

    function renderAccessibilitySwitch() {
      if (document.getElementById('visAccSwitch') ==null)
        makeNewAccessibilitySwitch();
      toggle = document.getElementById('visAccSwitch');
      toggle.style = "top: 58vw; right:15px; position:absolute; z-index: 99; color: white; font-weight: bold; text-align: center; text-shadow: 2px -2px 8px black;";

      if (visAccessibility){
        toggle.innerHTML = "CLICK FOR<br>MELLOW TEXT";
      }
      else {
        toggle.innerHTML = "CLICK FOR<br>WHITE TEXT";
        toggle.className = "noBgButton main-text";
      }
    }

    function placeText (){
      var bgHeight = document.body.offsetWidth/ aspect;
      document.getElementById('topbit').style.height = bgHeight*0.83 + 'px';
      renderAccessibilitySwitch();
    }
