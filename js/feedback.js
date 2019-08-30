var modal = $("#modal_background")[0];

$("#send_feedback").click(sendEmailUsingPhp)

$("#floating_button").click(function() {
  // modal.style.display = "block";
  showModal();
});
$("#close_modal").click(function() {
  // modal.style.display = "none";
  showModal();
});

// $(window).click(showModal);

// function sendEmail(){
//     $.ajax({
//         type: "POST",
//         url: "https://mandrillapp.com/api/1.0/messages/send.json",
//         data: {
//           'key': "9f0e83417200f3f3fc585e170fbec53c-us4",
//           'message': {
//             'from_email': "www.kondie@live.com",
//             'to': [
//                 {
//                   'email': "knedzing@student.wethinkcode.co.za",
//                   'name': "KONDIE",
//                   'type': 'to'
//                 }
//               ],
//             'autotext': 'true',
//             'subject': "Test",
//             'html': "This is my email to you: if you are reading this it works"
//           }
//         }
//        }).done(function(response) {
//          console.log(response); // if you're into that sorta thing
//        });
//   showModal();
// }

function sendEmailUsingPhp()
{
  var msg = $("#comment").val();
  var email = $("#email").val();
  if (msg != "")
  {
    console.log(msg);
    $.ajax({
      type: "POST",
      url: "./php/mailer.php",
      data: {
        "msg": msg,
        "email": email
        },
      success: function (results)
      {
        console.log("it worked: " + results);
        showModal();
      },
      failure: function (result){
        console.log("That did not work: " + results);
      }
      }).done(function(response) {
        console.log(response);
      });
  }
  else{
    alert("No message");
  }
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