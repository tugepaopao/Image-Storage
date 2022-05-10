/*
qx(tf 1.0.11(316)) 、 loon(tf 2.1.1(163))、 surge(tf 4.10.0(1807)) 及更新版本可用。
提醒蚂蚁森林收能量。
30 7 * * * Alipay.js
到时候点击通知即可跳转领积分。

搬运于 zZPiglet
*/

const $ = new compatibility()
const wait_family = $.read('Alipay_wait_family') * 1000 || 5000
const wait_mayi = $.read('Alipay_wait_mayi') * 1000 || 5000
const point = "alipays://platformapi/startapp?appId=20000160&url=/www/pointSignIn.html"
const familypoint = "alipays://platformapi/startapp?appId=2019052365379124"
const mayi = "alipay://platformapi/startapp?appId=60000002"

let delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s)
    })
}

delay().then(function(){
    $.notify("支付宝", "", "收能量啦", mayi)
}).finally(() => $done())

function compatibility() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isLoon) return $persistentStore.read(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
