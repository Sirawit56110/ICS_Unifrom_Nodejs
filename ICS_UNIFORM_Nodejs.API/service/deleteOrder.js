const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(od_id) {
    const result = await db.query(
    `DELETE FROM tb_order  
    WHERE od_id = ${od_id}`
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