/*
提醒蚂蚁森林收能量，该脚本适用于QuanX。
30 7 * * * Alipay.js
点击通知即可跳转收能量。
by tugepaopao（感谢@zZPiglet）
*/

const $ = new compatibility()
const wait_mayi = $.read('Alipay_wait_mayi') * 1000 || 5000
const mayi = "alipay://platformapi/startapp?appId=60000002"

let delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s)
    })
}

delay().then(function(){
    $.notify("支付宝", "", "你今天似乎忘记收能量了哦", mayi)
}).finally(() => $done())

function compatibility() {
    _isQuanX = typeof $task != "undefined"
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
    }
}
