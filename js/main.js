"use strict";

function getCookieData() {
    return $.ajax({
        url: "../cookies.JSON"
        // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
    }).done((cookieData) => {

        console.log(cookieData);

   });
}

getCookieData();