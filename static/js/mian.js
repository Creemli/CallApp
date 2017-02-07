import '../sass/main.css';
import '../sass/test.scss';
import './os';
import './callapp';
let envLibStr = JSON.stringify(window.envLib);
document.getElementById("envLibDiv").innerHTML = envLibStr;
const ua = navigator.userAgent;
document.getElementById("userAgent").innerHTML = ua;