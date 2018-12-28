module.exports = (sequelize, type) => {
    return sequelize.define('account', {
        accountNumber: {
            field:'AccountNumber',
            type: type.INTEGER,
            primaryKey: true,
        },
        openDate: {
            field:'OpenDate',
            type: type.DATE
        },
        balance: {
            field:'Balance',
            type: type.INTEGER
        },
        customerId: {
            field: 'Customer_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',

            references:{
                model:'customer',
                key: 'customerNumber'
            }
        }
    }, {
        tableName: 'account',
        timestamps: false
    })
}