/*  
AUTHOR: tugepaopao (原脚本作者：king)
脚本功能：傲软抠图解锁会员
软件版本：1.5.9（商店最新版）
下载地址：http://t.cn/A6xBOE5d
更新时间：2022.5.17
声明：方便自用，搬运自@king，如有冒犯，联系删除
       ⚠️⚠️⚠️此脚本仅供学习与交流，
         请勿转载与贩卖！⚠️⚠️⚠️

更新日志：2022.5.17                1.5.9                  
        2021.11.20               1.5.1
使用方法: 打开规则 登录账号即可

************ QX ***************

[rewrite_local]

# 傲软抠图解锁会员
^https?:(.+).aoscdn.com/app/aimage/usersInfo$ url script-response-body https://raw.githubusercontent.com/tugepaopao/Image-Storage/master/rewrite/arkt.js
[mitm] 

hostname = *.aoscdn.com
********** 小火箭 **************

[Script]

傲软抠图 = type=http-response,script-path=https://raw.githubusercontent.com/tugepaopao/Image-Storage/master/rewrite/arkt.js,pattern=^https?:(.+).aoscdn.com/app/aimage/usersInfo$,max-size=131072,requires-body=true,timeout=10,enable=true

[mitm] 

hostname = *.aoscdn.com
*******************************

*/


var body = $response.body
      .replace(/\"is_activated\":\d/g, "\"is_activated\":1")
      .replace(/\"expired_at\":\d/g, "\"expired_at\":4476655324");
$done({ body });
