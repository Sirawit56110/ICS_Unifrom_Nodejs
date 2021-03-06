const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function update(updateOrder) {
    const result = await db.query(
    `UPDATE  tb_order 
    SET od_status='${updateOrder.od_status}',
    od_active= ${updateOrder.od_active},
    od_sell= '${updateOrder.od_sell}',
    od_address= '${updateOrder.od_address}',
    od_phone = ${updateOrder.od_phone},
    od_date= '${updateOrder.od_date}',
    update_by= '${updateOrder.update_by}',
    update_date= '${updateOrder.update_date}'
    WHERE od_id = ${updateOrder.od_id}`
    );
    
    let message = 'Error in updating Order';

    if (result.affectedRows) {
        message = 'Order update successfully';
    }

    return { message };
}

module.exports = {
    update
}