const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertProductList) {
    const result = await db.query(
    `INSERT INTO tb_product_list (pd_id,gd_id,cl_id,fg_id,sz_id,pt_id,pdl_price, create_by,create_date)
     VALUES (${insertProductList.pd_id},
     ${insertProductList.gd_id},
     ${insertProductList.cl_id},
     ${insertProductList.fg_id},
     ${insertProductList.sz_id},
     ${insertProductList.pt_id},
     ${insertProductList.pdl_price},
    '${insertProductList.create_by}',
     '${insertProductList.create_date}')`
    );
    let message = 'Error in creating product';

    if (result.affectedRows) {
        message = 'product created successfully';
    }

    return { message };
}

module.exports = {
    create
}