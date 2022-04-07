




function changeAmount (count) {
    document.getElementById('id_amount').value = count; 
};

function copyMe () {
    var copyText = document.getElementById('payaddress');

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to Clipboard");
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};

function copyMee () {
    var copyText = document.getElementById('payaddress1');

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to Clipboard");
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};



function copyMeee () {
    var copyText = document.getElementById('payaddress2');

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to Clipboard");
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};



function copyMeeee () {
    var copyText = document.getElementById('payaddress3');

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to Clipboard");
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};



function copyMeeeee () {
    var copyText = document.getElementById('payaddress4');

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to Clipboard");
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
};




$(function (){
    $(".next").click(function (){
        console.log("Next button clicked");
        var scrollWidth = $(".step").width();
        var contentPos = $(".content").scrollLeft();
        $("#myIframe").height("1100px");
        console.log("Scroll Width: "+scrollWidth+" scroll Pos: "+contentPos);
        $(".content").animate({
            scrollLeft:contentPos + scrollWidth
        }, 200);
    });
});

$(function (){
    $(".back").click(function (){
        console.log("Back button clicked");
        var scrollWidth = $(".step").width();
        var contentPos = $(".content").scrollLeft();
        console.log("Scroll Width: "+scrollWidth+" scroll Pos: "+contentPos);
        $(".content").animate({
            scrollLeft:contentPos - scrollWidth
        }, 200);
    });
});


$(function (){
    var $currency_dict = {
        GBP: '£',
        USD: '$',
        EUR: '€'
    };


    var update_donation_amount = function(changedVar) {
        var $donation_summary = $('.js-donation-amount'),
            $amounts = $('input[name=amounts]'),
            $currency = $('#id_currency'),
            $custom_amount = $('#id_amount'),
            donation_amount = 0,
            $amount_selected = $('input[name=amounts]') 
                .filter(':checked')
                .val(),
            $recurrence_selected = $('input[name=recurrence]')
                .filter(':checked')
                .val(),
            donation_currency = $currency.val();

            $amounts.each(function() {
                var val = $(this).val();
    
                $('label[for=' + $(this).attr('id') + ']').text(
                    $currency_dict[donation_currency] + val
                );
            });

            if (changedVar === 'custom') {
                donation_amount = $custom_amount.val() || 0;
                $amounts.each(function() {
                    if ($custom_amount.val() === $(this).val()) {
                        $(this).prop('checked', true);
                    } else {
                        $(this).prop('checked', false);
                    }
                });
            } else if (changedVar === 'amount' || changedVar === '') {
                if ($amount_selected) {
                    donation_amount = $amount_selected;
                    $custom_amount.val(donation_amount);
                } else {
                    donation_amount = $custom_amount.val();
                }
            } else {
                donation_amount = $custom_amount.val() || 0;
            };

            $donation_summary.html(
                $currency_dict[donation_currency] + donation_amount + ', ' + $recurrence_selected
            );


    }
    update_donation_amount('');

    var $amount = $('input[name=amounts]'),
        $custom_amount = $('#id_amount'),
        $recurrence = $('input[name=recurrence]'),
        $currency = $('#id_currency'),
        $postcode = $('#post_code'),
        $country = $('#country');
    
        $postcode.on('change', function() {
            if ($country.val() === 'GB' && $postcode.val()) {
                var formatted_postcode = validate_postcode($postcode.val());
                $postcode.val(formatted_postcode);
            }
        });

        $amount.on('change', function() {
            update_donation_amount('amount');
        });
    
        $custom_amount.on('change', function() {
            update_donation_amount('custom');
        });
    
        $currency.on('change', function() {
            update_donation_amount('currency');
        }); 

        $recurrence.on('change', function() {
            update_donation_amount('recurrence');
        });
})

