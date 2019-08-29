var modal = $("#modal_background")[0];

$("#send_feedback").click(sendEmail)

$("#floating_button").click(function() {
  // modal.style.display = "block";
  showModal();
});
$("#close_modal").click(function() {
  // modal.style.display = "none";
  showModal();
});

// $(window).click(showModal);

function sendEmail(){
  $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        "key": "9f0e83417200f3f3fc585e170fbec53c-us4",
        "message": {
          "from_email": "knedzing@student.wethinkcode.co.za",
          "to": [
              {
                "email": "www.kondie@live.com",
                "name": "kondelelani",
                "type": "to"
              }
            ],
          "autotext": "true",
          "subject": "Test",
          "html": "<h1>IT WORKS</h1>"
        }
      }
      }).done(function(response) {
        console.log(response); // if you're into that sorta thing
      });
      sendEmailUsingPhp();
  showModal();
}

function sendEmailUsingPhp()
{
  $.ajax({
    type: "POST",
    url: "./php/mailer.php",
    data: {
      "key": "9f0e83417200f3f3fc585e170fbec53c-us4",
      "message": {
        "from_email": "knedzing@student.wethinkcode.co.za",
        "to": [
            {
              "email": "www.kondie@live.com",
              "name": "kondelelani",
              "type": "to"
            }
          ],
        "autotext": "true",
        "subject": "Test",
        "html": "<h1>IT WORKS</h1>"
      }
    }
    }).done(function(response) {
      console.log(response); // if you're into that sorta thing
    });
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

function saveToDB(){
  jQuery.ajax({
    type: "POST",
    url: './php/config.php',
    dataType: 'json',
    data: {functionname: 'add', arguments: [1, 2]},

    success: function (obj, textstatus) {
                  if( !('error' in obj) ) {
                      yourVariable = obj.result;
                  }
                  else {
                      console.log(obj.error);
                  }
            }
    });
}