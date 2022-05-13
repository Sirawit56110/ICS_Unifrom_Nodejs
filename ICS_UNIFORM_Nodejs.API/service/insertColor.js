const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertColor) {
    const result = await db.query(
    `INSERT INTO tb_color (cl_name,cl_status,create_by, create_date)
     VALUES ('${insertColor.cl_name}'
     ,${insertColor.cl_status},
     '${insertColor.create_by}',
     '${insertColor.create_date}')`
    );
    let message = 'Error in creating color';

    if (result.affectedRows) {
        message = 'color created successfully';
    }

    return { message };
}

module.exports = {
    create
}