
setTimeout(function () {
    updateCountdown(10);
    setTimeout(function () {
        updateCountdown(9);
        setTimeout(function () {
            updateCountdown(8);
            setTimeout(function () {
                updateCountdown(7);
                setTimeout(function () {
                    updateCountdown(6);
                    setTimeout(function () {
                        updateCountdown(5);
                        setTimeout(function () {
                            updateCountdown(4);
                            setTimeout(function () {
                                updateCountdown(3);
                                setTimeout(function () {
                                    updateCountdown(2);
                                    setTimeout(function () {
                                        updateCountdown(1);
                                        setTimeout(function () {
                                            displayMessage("Happy Independence Day!");
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

function updateCountdown(number) {
    document.getElementById('countdown').innerText = number;
}

function displayMessage(message) {
    document.getElementById('countdown').innerText = message;
}
