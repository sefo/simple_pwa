(function() {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', {
            scope: '/simple_pwa'
        });
    }

    var bg = document.getElementById('bg');
    var callme = document.getElementById('callme');
    var arrow = document.getElementById('arrow');
    var swipeMe = document.getElementById('swipeMe');

    arrow.addEventListener('click', swipe);
    callme.addEventListener('click', call);
    
    function swipe() {
        bg.classList.toggle('blurred');
        swipeMe.classList.toggle('close');
        arrow.classList.toggle('up');
    }

    function call() {
        swipe();
        console.log("calling...");
    }

})();