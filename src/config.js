'use strict';


module.exports = function(set, get, has) {
  //服务器监听端口
  set('web.port', 3000);
  //设置session密钥
  set('web.session.secret', 'test');
}
