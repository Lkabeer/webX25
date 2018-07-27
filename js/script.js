var spinnerX = document.querySelector('.spinnerX');
var pageX = document.querySelector('#pageX');
var inputX = document.getElementById('inputX');
var titleX = document.getElementById('titleX');

window.addEventListener('load', function () {
    spinnerX.style.display = 'none';
    pageX.style.display = 'block';
    console.log('All assets are loaded');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

setTimeout( function(){
    inputX.focus();
}, 3300);

inputX.addEventListener('blur', function() {
    if(this.value == 178) {
        console.log('right answer');
        titleX.innerText = "You got 10% off ツ"
    }
    this.value = "";
});