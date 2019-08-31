
var up, down, bigger, smaller;
var pad = 10;
var menuItems;
var menuButton = $("#menu_button")[0];
var fillIn = $("#fill_in")[0];

$("#visitTswelopele").click(function(){
    window.open("https://tswelopelecpf.co.za");
});
$("#downloadTrendies").click(function(){
    window.open("https://play.google.com/store/apps/details?id=com.earlyupdates.kondie.earlyupdates&hl=en_ZA");
});
$("#downloadLapoza").click(function(){
    window.open("https://play.google.com/store/apps/details?id=com.kondie.lapoza&hl=en_ZA");
});
$("#to_twitter_f").click(function(){
    window.open("https://twitter.com/Kondie101");
});
$("#to_twitter_c").click(function(){
    window.open("https://twitter.com/Kondie101");
});
$("#to_fb_f").click(function(){
    window.open("https://www.facebook.com/kondie101");
});
$("#to_fb_c").click(function(){
    window.open("https://www.facebook.com/kondie101");
});

$("#portfolioButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "webPortfolio"){
        $('html, body').animate({
            scrollTop: $("#webPortfolio").offset().top
        }, 1000);
    }
    showMenu();
});

$("#servicesButton").click(function() {
    page_url = window.location.href;
    page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    if (page_id != "services"){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    }
    showMenu();
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
    showMenu();
});

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