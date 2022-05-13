const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function update(updatePattern) {
    const result = await db.query(
    `UPDATE  tb_pattern  
    SET pt_name='${updatePattern.pt_name}',
    pt_status= ${updatePattern.pt_status},
    update_by= '${updatePattern.update_by}',
    update_date= '${updatePattern.update_date}'
    WHERE pt_id = ${updatePattern.pt_id}`
    );
    
    let message = 'Error in updating Pattern';

    if (result.affectedRows) {
        message = 'Pattern update successfully';
    }

    return { message };
}

module.exports = {
    update
}