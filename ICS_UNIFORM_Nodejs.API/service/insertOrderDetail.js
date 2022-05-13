const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertOrderDetail) {
    const result = await db.query(
    `INSERT INTO tb_order_detail (od_id,pd_name,gd_name,cl_name,pt_name,fg_name, odd_amount, odd_sell, create_by, create_date)
     VALUES (${insertOrderDetail.od_id}
     ,'${insertOrderDetail.pd_name}',
     '${insertOrderDetail.gd_name}',
     '${insertOrderDetail.cl_name}',
     '${insertOrderDetail.pt_name}',
     '${insertOrderDetail.fg_name}',
     ${insertOrderDetail.odd_amount},
     ${insertOrderDetail.odd_sell},
     '${insertOrderDetail.create_by}',
     '${insertOrderDetail.create_date}')`
    );
    let message = 'Error in creating orderdetail';

    if (result.affectedRows) {
        message = 'orderdetail created successfully';
    }

    return { message };
}

module.exports = {
    create
}