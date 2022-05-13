const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(selectOrder) {
    const offset = (selectOrder.pageon - 1) * selectOrder.pagesize
    const pageSize = selectOrder.pagesize
    const rows = await db.query(
        `   SELECT  od_id,od_status,od_address,od_phone,od_date
            FROM tb_order
            WHERE   od_date between '${selectOrder.od_date_start}' and '${selectOrder.od_date_end}' 
            and od_status = '${selectOrder.od_status}'
            ORDER BY od_id ASC
            LIMIT ${pageSize} OFFSET ${offset}` 
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    selects
}