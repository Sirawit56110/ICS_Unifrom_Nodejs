const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function update(updateFigure) {
    const result = await db.query(
    `UPDATE  tb_figure  
    SET fg_name='${updateFigure.fg_name}',
    fg_status= ${updateFigure.fg_status},
    update_by= '${updateFigure.update_by}',
    update_date= '${updateFigure.update_date}'
    WHERE fg_id = ${updateFigure.fg_id}`
    );
    
    let message = 'Error in updating Figure';

    if (result.affectedRows) {
        message = 'Figure update successfully';
    }

    return { message };
}

module.exports = {
    update
}