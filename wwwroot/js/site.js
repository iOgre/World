//site.js
let $ = require('jquery');

    
   let z = $("#username");
    let main = document.getElementById("main");
    main.onmouseenter = function () {
        main.style.backgroundColor = "#404040";

    };


    main.onmouseleave = function () {
        main.style.backgroundColor = "";

    };


   