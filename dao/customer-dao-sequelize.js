const { Customer } = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getAll = function getAll(callback){
    Customer.findAll()

    .then((customers)=>{
        return callback(null, customers);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.getById = function getById(id, callback){
    Customer.findById(id)
    .then((customer)=>{
        return callback(null, customer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.insert = function insert(data, callback){
    Customer.create(data)
    .then(customer=>{
        return callback(null, customer);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.update = function update(id, data, callback) {
    Customer.update(data, {
        where: { customerNumber: data.customerNumber },
        returning: true,
        plain: true
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, data);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

exports.del = function del(id, callback) {
    Customer.destroy({
        where: { customerNumber: id }
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, id);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

