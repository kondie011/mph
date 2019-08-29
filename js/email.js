
$("#send_feedback").click(sendEmail)

function sendEmail(){

    $.ajax({
        type: POST,
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          key: "9f0e83417200f3f3fc585e170fbec53c-us4",
          message: {
            from_email: "knedzing@student.wethinkcode.co.za",
            to: [
                {
                  email: "www.kondie@live.com",
                  name: "kondelelani",
                  type: "to"
                }
              ],
            autotext: true,
            subject: "Test",
            html: "<h1>IT WORKS</h1>"
          }
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
       });
}