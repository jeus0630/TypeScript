"use strict";
{
    var printLoginState = function (obj) {
        switch (obj.state) {
            case 'loading':
                console.log(obj.state);
                break;
            case 'success':
                console.log(obj.response.body);
                break;
            case 'fail':
                console.log(obj.reason);
                break;
            default:
                throw new Error('not defined');
        }
    };
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
