const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function update(updateColor) {
    const result = await db.query(
    `UPDATE  tb_color  
    SET cl_name='${updateColor.cl_name}',
    cl_status= ${updateColor.cl_status},
    update_by= '${updateColor.update_by}',
    update_date= '${updateColor.update_date}'
    WHERE cl_id = ${updateColor.cl_id}`
    );
    
    let message = 'Error in updating Color';

    if (result.affectedRows) {
        message = 'color update successfully';
    }

    return { message };
}

module.exports = {
    update
}