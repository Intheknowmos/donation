$(function () {
    $("#donation-form").validate({
        rules:{
            first_name:{
                minlength: 3
            },
            last_name:{
                minlength: 3
            },
            client_email:{
                email: true
            },
        },
        messages:{
           first_name:{
                required: "Please enter your First Name",
                minlength: "Name should be at least 3 characters"
           },
           last_name:{
            required: "Please enter your Last Name",
            minlength: "Name should be at least 3 characters"
           },
           client_email:"Please enter your email address",
        },
        
        
        submitHandler: function(form) {
          form.submit();
        }
    
    });

    // $("#donation-form").on("submit", function (e) {
    //     e.preventDefault();

    //     let dataString = $(this).serialize();

    //     $.ajax({
    //         type: 'POST',
    //         url: 'bin/process.php',
    //         data: dataString,
    //         success: function(){
    //             $("#donation-form").html("<div id='message'></div>");

    //             $("#message")
    //                 .html("<h2>We are expecting your donation!</h2>")
    //                 .append("<p>We are grateful for your efforts towards curbing the humanitarian crisis in Ukraine at the moment and urge you to share this fundraiser with your friends and family.</p>")
    //                 .hide()
    //                 .fadeIn(1500);
    //         }
    //     })
    // })
})




