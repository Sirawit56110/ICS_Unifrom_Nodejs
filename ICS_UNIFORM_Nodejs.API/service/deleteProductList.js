const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(pdl_id) {
    const result = await db.query(
    `DELETE FROM tb_product_list 
    WHERE pdl_id = ${pdl_id}`
    );
    
    let message = 'Error in Deleting  Order';

    if (result.affectedRows) {
        message = 'Order Deleting  successfully';
    }

    return { message };
}

module.exports = {
    deletes
}