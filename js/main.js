"use strict";

function getCookieData() {
    $.ajax({
        url: "../cookies.JSON"
    }).done((cookieData) => {

        console.log(cookieData);

   });
}


$(document).ready(function(){
    $('#carousel').carousel({
      interval: 12000
    });
  });   

getCookieData();