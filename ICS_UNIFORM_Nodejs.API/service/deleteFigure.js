const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function deletes(fg_id) {
    const result = await db.query(
    `DELETE FROM tb_figure  
    WHERE fg_id = ${fg_id}`
    );
    
    let message = 'Error in Deleting  Figure';

    if (result.affectedRows) {
        message = 'Figure Deleting  successfully';
    }

    return { message };
}

module.exports = {
    deletes
}