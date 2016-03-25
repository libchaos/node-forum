'use strict';

module.exports = function(done) {

  $.router.post('/api/login', async function(req, res, next) {
    if (!req.body.password) return next(new Error('missing password'));
    const user = $.method('user.get').call(req.body);
    if (!user) return (new Error('uesr does not exists'));

    if (!$.utils.validatePassword(req.body.password, user.password)) {
      return next(new Error('inncoreact password'));
    }
    res.json({
      success: true
    });
  });

  $.router.post('/api/logout', function(req, res, next) {

  });

  $.router.post('/api/signup', function(req, res, next) {

  });

  done();
}
