const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertPattern) {
    const result = await db.query(
    `INSERT INTO tb_pattern  (pt_name,pt_status,create_by, create_date)
     VALUES ('${insertPattern.pt_name}',
     ${insertPattern.pt_status},
     '${insertPattern.create_by}',
     '${insertPattern.create_date}')`
    );
    let message = 'Error in creating pattern';

    if (result.affectedRows) {
        message = 'pattern created successfully';
    }

    return { message };
}

module.exports = {
    create
}