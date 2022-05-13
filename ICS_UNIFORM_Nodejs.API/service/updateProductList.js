const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function update(updateProductList) {
    const result = await db.query(
    `UPDATE  tb_product_list 
    SET pd_id=${updateProductList.pd_id},
    gd_id= ${updateProductList.gd_id},
    cl_id= ${updateProductList.cl_id},
    fg_id = ${updateProductList.fg_id},
    sz_id= ${updateProductList.sz_id},
    pdl_price= ${updateProductList.pdl_price},
    update_by= '${updateProductList.update_by}',
    update_date= '${updateProductList.update_date}'
    WHERE pdl_id = ${updateProductList.pdl_id}`
    );
    
    let message = 'Error in updating Product';

    if (result.affectedRows) {
        message = 'Product update successfully';
    }

    return { message };
}

module.exports = {
    update
}