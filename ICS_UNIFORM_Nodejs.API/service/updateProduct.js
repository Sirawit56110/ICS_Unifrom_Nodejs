const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function update(updateProduct) {
    const result = await db.query(
    `UPDATE  tb_product 
    SET pd_name='${updateProduct.cl_name}',
    pd_image= '${updateProduct.pd_image}',
    pd_status= ${updateProduct.pd_status},
    pd_amount = ${updateProduct.pd_amount},
    pd_detail= '${updateProduct.pd_detail}',
    update_by= '${updateProduct.update_by}',
    update_date= '${updateProduct.update_date}'
    WHERE pd_id = ${updateProduct.pd_id}`
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