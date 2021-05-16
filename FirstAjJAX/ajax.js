let todayDate = new Date();

$(document).ready(function(){
    generator();
    
    $(".randomButton").click(function(){
        generator();
    });

    $(".date").html(todayDate.toDateString());
    setInterval(time, 1000);
})

function renderQuote (data){
    let quote = data[0].q;
    return quote;
}


function renderAuthor(data){
    let quote = data[0].a;
    return quote;
}

function generator(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://zenquotes.io/api/random');
    request.onload = function(){
        let data = JSON.parse(request.responseText);
        $(".quote").html(renderQuote(data));
        $(".author").html(renderAuthor((data)));
    }
    request.send();
}


function time(){
    let date = new Date();
    let amOrPmHours = date.getHours();
    let [hours, minutes, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
    let amOrPm = (amOrPmHours > 12) ? "PM" : "AM";
    let newTime = Math.floor(hours) + ":" + minutes + " " + amOrPm;
    $(".time").html(newTime);
}