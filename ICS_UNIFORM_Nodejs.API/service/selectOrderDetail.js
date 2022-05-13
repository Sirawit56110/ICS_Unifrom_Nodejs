const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(selectOrderDetail) {
    const rows = await db.query(
        `   SELECT  odd_id,gd_name,cl_name,pt_name,fg_name,pd_name,odd_amount,odd_sell
            FROM tb_order_detail 
            WHERE  od_id = '${selectOrderDetail.od_id}'`
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    selects
}