var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
$.getJSON(coinURL, function(data){
    document.getElementById("currentTime").innerHTML = "Last updated: " + data.time.updated;
    document.getElementById("footer").innerHTML = data.disclaimer;
    document.getElementById("USDPrice").innerHTML = " USD per Bitcoin: " + data.bpi.USD.rate;
   })