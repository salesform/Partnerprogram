<script>
document.onreadystatechange = function () {
if (document.readyState == "complete") {
function getParameterByName(name, url = window.location.href) {
name = name.replace(/[[]]/g, '\$&');
var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/+/g, ' '));
}
var utmsource = getParameterByName('utm_source');
//var anchors = document.getElementsByClassName("aff-link");
var anchors = document.querySelectorAll('.aff-link a');
if (utmsource!=null) {
setCookie('reseller',utmsource,365);
for (var i = 0; i < anchors.length; i++) {
var url = new URL(anchors[i].href);
var search_params = url.searchParams;
search_params.set('utm_source', utmsource);
url.search = search_params.toString();
anchors[i].href = url.toString();
}
} else {
utmsource = getCookie('reseller');
if (utmsource!='') {
for (var i = 0; i < anchors.length; i++) {
var url = new URL(anchors[i].href);
var search_params = url.searchParams;
search_params.set('utm_source', utmsource);
url.search = search_params.toString();
anchors[i].href = url.toString();
}
}
}
}
}

function setCookie(cname, cvalue, exdays) {
const d = new Date();
d.setTime(d.getTime() + (exdays2460601000));
let expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
let name = cname + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for(let i = 0; i <ca.length; i++) {
let c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}
</script>
