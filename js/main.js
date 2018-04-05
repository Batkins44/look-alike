"use strict";

let callBackFunction;

function getCookieData(callBackFunction,id) {
    $.ajax({
        url: "../cookies.JSON"
    }).done((cookieData) => {
        callBackFunction(cookieData,id);

   });
}



function printCookieData(cookieData){
            let count = 0;
        $("print").html("");
        for(let i=0;i<cookieData.Cookies.length;i++){

            console.log("made it",count);
            let currentCookie = cookieData.Cookies[i];
            console.log("currentCookie",currentCookie);
            $("#products").append(`<div class="flex-cookie" id="cookie-${count}">
            <div id="quick-${count}" class="quick is-hidden">
                QUICK VIEW
            </div>
            <div class=flex-item id="item-${count}">${currentCookie.Name}<br>${currentCookie.Price}</div>
        </div>`);
        count = count + 1;
        }

}

// function changeCookie(cookieData,id){

//     setTiemlet currentCookie = cookieData.Cookies[id];
//     console.log("THIS IS THE COOKIE DATA",currentCookie,"id",id);
//     let cookieID = `cookie-${id}`;
//     $('#' + cookieID).html(`<div class="flex-cookie" id="cookie-${id}">
//     <img src="${currentCookie.image2}" height="318px" width="288px">
//     <div id="quick-${id}" class="quick is-hidden">
//         QUICK VIEW
//     </div>
//     <div class=flex-item id="item-${id}">${currentCookie.Name}<br>${currentCookie.Price}</div>
// </div>`);

// }

getCookieData(printCookieData);

$("#cookie-home-1").hover(() =>{
    $("#best-banner-home").addClass("is-hidden");
});

$("#cookie-home-1").mouseleave(() =>{
    $("#best-banner-home").removeClass("is-hidden");
});

$("#cookie-home-3").hover(() =>{
    $("#new-banner-home").addClass("is-hidden");
});

$("#cookie-home-3").mouseleave(() =>{
    $("#new-banner-home").removeClass("is-hidden");
});
$(document).ready(function(){
$(".flex-cookie").hover((element) =>{
    console.log("yes");
   let id=element.target.id;
   id=id.replace( /^\D+/g, '');
   id=`quick-${id}`;
   console.log(id);
   $('#'+id).removeClass("is-hidden");
});
});   
$(document).ready(function(){
$(".flex-cookie").mouseleave((element) =>{
    console.log("yes");
    let id=element.target.id;
    id=id.replace( /^\D+/g, '');
    id=`quick-${id}`;
    console.log(id);
    $('#'+id).addClass("is-hidden");
 });
});   
$(document).ready(function(){
    $('#carousel').carousel({
      interval: 12000
    });
  });   

//   $(document).ready(function() {
//     $('.flex-cookie').hover(function(element) {
//         let id=element.target.id;
//         console.log("preid",id);
//         id=id.replace( /^\D+/g, '');
//         // id=`quick-${id}`;
//         console.log("id",id);
//         // getCookieData(changeCookie,id);


//         // $('#'+id).removeClass("is-hidden");
//     });
//   });

//   $(document).ready(function() {
//     $('.flex-cookie').mouseleave(function(element) {
//         console.log("yes");
//         let count=element.target.id;
//         count=count.replace( /^\D+/g, '');
//         // id=`quick-${id}`;
//         console.log(count);
//         getCookieData(printCookieData,count);
//         // $('#'+id).addClass("is-hidden");
//     });
//   });

// getCookieData();