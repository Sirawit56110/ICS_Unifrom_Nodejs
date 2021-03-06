const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertOrder) {
    const result = await db.query(
    `INSERT INTO tb_order (od_status,od_active,od_sell,od_address,od_phone,od_date,create_by,create_date)
     VALUES (
        '${insertOrder.od_status}',
        ${insertOrder.od_active},
        ${insertOrder.od_sell},
        '${insertOrder.od_address}',
        ${insertOrder.od_phone},
        '${insertOrder.od_date}',  
        '${insertOrder.create_by}',
        '${insertOrder.create_date}')`
    );
    let message = 'Error in creating order';

    if (result.affectedRows) {
        message = 'order created successfully';
    }

    return { message };
}

module.exports = {
    create
}