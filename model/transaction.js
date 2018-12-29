
module.exports = (sequelize, type) => {
    return sequelize.define('transaction', {
        idTransaction: {
            field:'IdTransaction',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            field:'Type',
            type: type.STRING
        },
        amount: {
            field:'Amount',
            type: type.STRING
        },

        amountSign: {
            field:'AmountSign',
            type: type.STRING
        },
        accountId: {
            field: 'Account_id',
            type: type.INTEGER
            // onDelete: 'CASCADE',

            // references:{
            //     model:'account',
            //     key: 'AccountNumber'
            // }
        }
    }, {
        tableName: 'transaction',
        timestamps: false
    })
}