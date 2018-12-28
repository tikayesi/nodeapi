var express = require('express'),
    app = express(),
    cors = require('cors')
    const port = process.env.PORT || 3000
    const bodyParser = require('body-parser')
    const morgan = require('morgan');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    var logger = require("./util/logging/winston-logger");

    app.use(morgan('combined', {'stream': logger.stream}));
    logger.debug("Overriding 'Express' logger");

    var customerRoute = require('./router/routes-customer');
    customerRoute(app);

    var accountRoute = require('./router/routes-account');
    accountRoute(app);

    var transactionRoute = require('./router/routes-transaction');
    transactionRoute(app);

    app.listen(port);
    logger.debug('learn Node JS with Kiddy, RESTful API server on' + port);