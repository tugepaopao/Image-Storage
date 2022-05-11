/*
提醒色花签到领金币，该脚本适用于QuanX。
30 8 * * * sehau.js
点击通知即可跳转网页进行签到。
by tugepaopao
*/

const $ = new compatibility()
const wait_mayi = $.read('Alipay_wait_mayi') * 1000 || 5000
const mayi = "https://sehuatang.net/plugin.php?id=dd_sign:index"

let delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s)
    })
}

delay().then(function(){
    $.notify("色花堂", "", "今天似乎忘记签到了哦😊", mayi)
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
