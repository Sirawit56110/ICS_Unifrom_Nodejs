const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(pt_id) {
    const result = await db.query(
    `DELETE FROM tb_pattern 
    WHERE pt_id = ${pt_id}`
    );
    
    let message = 'Error in Deleting  Pattren';

    if (result.affectedRows) {
        message = 'Pattren Deleting  successfully';
    }

    return { message };
}

module.exports = {
    deletes
}