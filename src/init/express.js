'use strict';

import express from 'express';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import multiparty from 'multiparty';
import path from 'path';

module.exports = function (done){
  const app = express();
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  const router = express.Router();
  $.router = router;
  app.use(router);

  app.use('/static', serveStatic(path.resolve(__dirname, '../../static')));
  app.listen($.config.get('web.port'), (err) => {
    done(err);
  })
}
