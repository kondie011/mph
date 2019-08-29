var isCalled = false;
var zeLight = $("#ze_light")[0];
var fade = $("#fade")[0];
var per = 0;
var croll = null;

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
