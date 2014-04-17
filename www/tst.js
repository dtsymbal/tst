var tst = {
    send: function(successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'Sms',
            'send',
            []
        );
    }
};

module.exports = tst;