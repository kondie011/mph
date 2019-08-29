
var up, down, bigger, smaller;
var pad = 10;
var menuItems;
var menuButton = $("#menu_button")[0];
var fillIn = $("#fill_in")[0];
var zeLight = $("#ze_light")[0];
var fade = $("#fade")[0];
var per = 0;
var croll = null;
var isCalled = false;
var modal = $("#modal_background")[0];

$("#visitTswelopele").click(function(){
    window.open("https://tswelopelecpf.co.za");
});
$("#downloadTrendies").click(function(){
    window.open("https://play.google.com/store/apps/details?id=com.earlyupdates.kondie.earlyupdates&hl=en_ZA");
});
$("#downloadLapoza").click(function(){
    window.open("https://play.google.com/store/apps/details?id=com.kondie.lapoza&hl=en_ZA");
});

$("#portfolioButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "webPortfolio"){
        $('html, body').animate({
            scrollTop: $("#webPortfolio").offset().top
        }, 1000);
    }
});
$("#webPortfolioButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "webPortfolio"){
        $('html, body').animate({
            scrollTop: $("#webPortfolio").offset().top
        }, 1000);
    }
});
$("#androidPortfolioButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "androidPortfolio"){
        $('html, body').animate({
            scrollTop: $("#androidPortfolio").offset().top
        }, 1000);
    }
});


$("#aboutButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "about"){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    }
});

$("#floating_button").click(function() {
    // modal.style.display = "block";
    showModal();
});
$("#close_modal").click(function() {
    // modal.style.display = "none";
    showModal();
});

window.addEventListener("mousemove", function(e)
{
    if (e.y <= 400){
        if (isCalled){
            clearInterval(croll);
            isCalled = false;
        }
        zeLight.style.display = "block";
        zeLight.style.top = e.y + "px";
        zeLight.style.left = e.x + "px";
        per = getPercentage(e.x);
        fade.style = "background-image: linear-gradient(" + getAngle(e.y) + "deg, #000000b5, #000000de, #28a74500 " + per + "%); padding-bottom: 40px; padding-right: 10%; padding-left: 10%; padding-top: 61px;";
    }
    else{
        zeLight.style.display = "none";
        if (!isCalled && per != 0){
            isCalled = true;
            crollBackIn();
        }
    }
});

function crollBackIn(){

    croll = setInterval(crollBack, 10);

    function crollBack(){

        if (per < 90)
        {
            fade.style = "background-image: linear-gradient(" + 155 + "deg, #000000b5, #000000de, #28a74500 " + per + "%); padding-bottom: 40px; padding-right: 10%; padding-left: 10%; padding-top: 61px;";
            per++;
        }
        else{
            clearInterval(scroll);
        }
    }
    if (per >= 90){
        clearInterval(scroll);
    }
}

function getAngle(y){
    return (y/450) * 180;
}

function getPercentage(x)
{
    var w = window.innerWidth;
    return (x/w) * 100;
}

function showModal()
{
    var modalBox = $("#modal")[0];
    var count;

    if (modal.style.display != "block")
    {
        bigger = setInterval(makeBigger, 5)
        count = -50;
    }
    else{
        smaller = setInterval(makeSmaller, 5)
        count = 110;
    }

    function makeBigger(){

        if (count <= 100){
            modal.style.display = "block";
            modalBox.style = "margin-top: " + count + "px; background-color: white; width: 50%; padding: 10px; border-radius: 10px; min-width: 330px; padding-bottom: 20px;";
            count += 5;
        }
        else{
            clearInterval(bigger);
        }
    }

    function makeSmaller(){

        if (count > -50){
            modalBox.style = "margin-top: " + count + "px; background-color: white; width: 50%; padding: 10px; border-radius: 10px; min-width: 330px; padding-bottom: 20px;";
            count -= 5;
        }
        else{
            modal.style.display = "none";
            clearInterval(smaller);
        }
    }
}


function showMenu()
{
    var menuItems = $('#menu_items')[0];

    if (menuItems.style.display == "block")
    {
        up = setInterval(moveUp, 5)
    }
    else{
        menuItems.style.display = "block";
        fillIn.style.display = "block";
        down = setInterval(moveDown, 5)
    }

    function moveUp()
    {
        if (pad > 10)
        {
            pad--;
            menuButton.style = "width: 40px; cursor: pointer; transform: rotate(0deg); z-index: 5; position: fixed; top: 10px; left: 10px; transform: rotate(" + ((pad - 10) * 4.5) + "deg);";
            menuItems.style.top = pad + "px";
        }
        else{
            clearInterval(up);
            menuItems.style.display = "none";
            fillIn.style.display = "none";
        }
    }

    function moveDown()
    {
        if (pad < 30)
        {
            pad++;
            menuButton.style = "width: 40px; cursor: pointer; transform: rotate(0deg); z-index: 5; position: fixed; top: 10px; left: 10px; transform: rotate(" + ((pad - 10) * 4.5) + "deg);";
            menuItems.style.top = pad + "px";
        }
        else{
            clearInterval(down);
        }
    }
}