const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function update(updateOrderDetail) {
    const result = await db.query(
    `UPDATE  tb_order_detail 
    SET pd_name='${updateOrderDetail.pd_name}',
    gd_name= '${updateOrderDetail.gd_name}',
    cl_name= '${updateOrderDetail.cl_name}',
    pt_name = '${updateOrderDetail.pt_name}',
    fg_name= '${updateOrderDetail.fg_name}',
    odd_amount= ${updateOrderDetail.odd_amount},
    odd_sell= ${updateOrderDetail.odd_sell},
    update_by= '${updateOrderDetail.update_by}',
    update_date= '${updateOrderDetail.update_date}'
    WHERE odd_id = ${updateOrderDetail.odd_id}`
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