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
	
	var fragment3 = create('<div style="text-align:center;background:#EBE9E0;padding:10px 20px;border:1px solid #F4743C;font-size:20px;color:#2c2c2c;font-weight: bold;-moz-border-radius: 5px;border-radius: 5px;margin:10px 0px 20px 0px;">Use coupon <span style="color:#F4743C;">LASTMINUTE</span> in the next <span id="time">09:18</span> minutes to receive 15% off your order!*<br><br><span style="font-size:12px;">* Offer not valid on discounted items (excluding sale items).<span></span></span></div>');
	document.getElementsByClassName('main__header')[0].appendChild(fragment3);

	var ten = 60 * 10,
	display = document.querySelector('#time');
	startTimer(ten, display);
};