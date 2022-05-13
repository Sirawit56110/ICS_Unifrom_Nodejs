const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertFigure) {
    const result = await db.query(
    `INSERT INTO tb_figure (fg_name,fg_status,create_by, create_date)
     VALUES ('${insertFigure.fg_name}'
     ,${insertFigure.fg_status},
     '${insertFigure.create_by}',
     '${insertFigure.create_date}')`
    );
    let message = 'Error in creating figure';

    if (result.affectedRows) {
        message = 'figure created successfully';
    }

    return { message };
}

module.exports = {
    create
}