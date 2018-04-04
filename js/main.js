"use strict";

function getCookieData() {
    $.ajax({
        url: "../cookies.JSON"
    }).done((cookieData) => {

        console.log(cookieData);

   });
}

$("#cookie-1").hover(() =>{
    $("#best-banner-home").addClass("is-hidden");
});

$("#cookie-1").mouseleave(() =>{
    $("#best-banner-home").removeClass("is-hidden");
});

$("#cookie-3").hover(() =>{
    $("#new-banner-home").addClass("is-hidden");
});

$("#cookie-3").mouseleave(() =>{
    $("#new-banner-home").removeClass("is-hidden");
});


$(document).ready(function(){
    $('#carousel').carousel({
      interval: 12000
    });
  });   

getCookieData();