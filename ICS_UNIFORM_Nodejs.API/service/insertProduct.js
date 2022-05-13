const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');


async function create(insertProduct) {
    const result = await db.query(
    `INSERT INTO tb_product (pd_name,pd_image,pd_status,pd_amount,pd_detail,create_by, create_date)
     VALUES ('${insertProduct.pd_name}',
     '${insertProduct.pd_image}',
     '${insertProduct.pd_status}',
     ${insertProduct.pd_amount},
     '${insertProduct.pd_detail}',
     '${insertProduct.create_by}',
     '${insertProduct.create_date}')`
    );
    let message = 'Error in creating product';

    if (result.affectedRows) {
        message = 'product created successfully';
    }

    return { message };
}

module.exports = {
    create
}