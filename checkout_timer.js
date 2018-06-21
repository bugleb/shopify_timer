function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}
window.onload = function () {
    // var discount = create('<div style="text-align:center;background:#EBE9E0;padding:10px 20px;border:1px solid #F4743C;font-size:20px;color:#2c2c2c;font-weight: bold;-moz-border-radius: 5px;border-radius: 5px;margin:10px 0px 20px 0px;">Use coupon <span style="color:#F4743C;">LASTMINUTE</span> in the next <span id="time">09:18</span> minutes to receive 10% off your order!*<br><br><span style="font-size:12px;">* Offer not valid on discounted items (excluding sale items).<span></span></span></div>');
    // document.getElementsByClassName('main__header')[0].appendChild(discount);
    // var shipping = create('<div style="font-size:0.75em;">Note: ﻿Once you place your order, please allow 3-5 business days to process your orders. After that, it will take 12 - 20 business days for delivery in the United States, and 15-40 business days for international orders (depending on location).</div>');
    // document.getElementsByClassName('order-summary__sections')[0].appendChild(shipping);

    // var ten = 60 * 10,
    // display = document.querySelector('#time');
    // startTimer(ten, display);

    var badges = create('<div style="text-align:center;"><img style="max-width:100%; max-height:125px;" src="https://raw.githubusercontent.com/bugleb/shopify_timer/20561e0c37900efe3b440b9eb6d36250210b2e66/safe_checkout.png" /></div>');
    // document.getElementsByClassName('order-summary__sections')[0].appendChild(badges);
    document.getElementsByClassName('alt-payment-list-container')[0].appendChild(badges);

    var payments = document.getElementsByClassName('alt-payment-list-container');
    console.log('payments', payments);
    var paymentsParent = payments[0].parentElement;
    var div = document.createElement('div');
    var span = document.createElement('span');
    span.innerHTML = 'We offer <strong>Google Pay</strong> and <strong>PayPal</strong> for your convenience. You may also pay using a credit card by entering your shipping address and clicking "Continue to shipping method".';
    div.append(span);
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    paymentsParent.prepend(div);
};