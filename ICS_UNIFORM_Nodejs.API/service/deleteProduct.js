const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(pd_id) {
    const result = await db.query(
    `DELETE FROM tb_product
    WHERE pd_id = ${pd_id}`
    );
    
    let message = 'Error in Deleting  Product';

    if (result.affectedRows) {
        message = 'Product Deleting  successfully';
    }

    return { message };
}

module.exports = {
    deletes
}