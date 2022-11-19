/******************************
脚本功能：彩云天气解锁超级会员
更新时间：2022-11-19
使用声明：搬运脚本，仅供交流学习
（随时可能会失效）
*******************************
[rewrite_local]
# > 彩云天气解锁超级会员
^https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-request-header https://raw.githubusercontent.com/githubdulong/Script/master/cytq.js
[mitm] 
hostname = caiyunapp.com
*******************************/
