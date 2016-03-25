'use strict';

import express from 'express';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import path from 'path';
import multipart from 'connect-multiparty';


module.exports = function(done) {
  const debug = $.createDebug('init:express');
  debug('initing Express...');
  const app = express();
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(multipart());

  const router = express.Router();

  const routerWrap = {};
  ['get', 'head', 'post', 'put', 'del', 'delete'].forEach(method => {
    routerWrap[method] = function(path, ...fnList) {
      fnList = fnList.map(fn => {
        return function(req, res, next) {
          const ret = fn(req, res, next);
          if (ret.catch) ret.catch(next);
        };
      });
      router[method](path, ...fnList);
    };
  });
  $.router = routerWrap;
  app.use(router);



  app.use('/static', serveStatic(path.resolve(__dirname, '../../static')));
  app.listen($.config.get('web.port'), (err) => {
    done(err);
  })
}
