const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(cl_id) {
    const result = await db.query(
    `DELETE FROM tb_color  
    WHERE cl_id = ${cl_id}`
    );
    
    let message = 'Error in Deleting  Color';

    if (result.affectedRows) {
        message = 'Color Deleting  successfully';
    }

    return { message };
}

module.exports = {
    deletes
}