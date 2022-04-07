




var col = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < col.length; i++) {
    col[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var contents = this.nextElementSibling;
        if (contents.style.display === "block") {
            contents.style.display = "none";
        }else {
            contents.style.display = "block";
        }

    });
};


const iframe = document.getElementById('myIframe');

const next1 = document.getElementById('next1');
const nexttt = document.getElementById('nexttt');

console.log(iframe, next1, nexttt)

// next1.addEventListener('click', (e) => {
//     console.log('click');
//     iframe.height = "100vh";
//     iframe.overflowY = "scroll";
// });


nexttt.addEventListener('click', (e) => {
    console.log('click');
    iframe.height = "60vh";
    iframe.overflowY = "scroll";
});






$(function() {
    var donate_options = $('.donation__item'),
        donate_iframe = $('#donation_panel iframe'),
        read_more = $('#readmore'),
        campaign_body = $('.bodymini');

    donate_options.on('click', function() {
        var amount = $(this).data('amount');
        $amounts = donate_iframe.contents().find('input[name=amounts]');
        $custom_amount = donate_iframe.contents().find('#id_amount');

        $('html, body').animate(
            {
                scrollTop: donate_iframe.offset().top
            },
            500
        );

        $custom_amount.val(amount);
        $amounts.each(function() {
            if ($custom_amount.val() === $(this).val()) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    });


    read_more.on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        campaign_body.toggleClass('minimised');
    });
});










