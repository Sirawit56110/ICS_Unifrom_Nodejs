const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(selectProductlist) {
    const offset = (selectProductlist.pageon - 1) * selectProductlist.pagesize
    const pageSize = selectProductlist.pagesize
    const rows = await db.query(
        `   SELECT  po.pdl_id,pro.pd_name,pro.pd_image,pro.pd_amount,g.gd_name,c.cl_name,p.pt_name,f.fg_name,s.sz_name,po.pdl_price
            FROM tb_product_list po
            INNER JOIN tb_gender g on g.gd_id = po.gd_id
            INNER JOIN tb_color c on c.cl_id = po.cl_id
            INNER JOIN tb_pattern  p on p.pt_id = po.pt_id
            INNER JOIN tb_figure  f on f.fg_id = po.fg_id
            INNER JOIN tb_product  pro on pro.pd_id = po.pd_id
            INNER JOIN tb_size  s on s.sz_id = po.sz_id
            WHERE g.gd_name = '${selectProductlist.gd_name}'  
            or c.cl_name = '${selectProductlist.cl_name}' 
            or p.pt_name = '${selectProductlist.pt_name}'
            or f.fg_name = '${selectProductlist.fg_name}'
            or s.sz_name = '${selectProductlist.sz_name}'
            ORDER BY po.pdl_id ASC
            LIMIT ${pageSize} OFFSET ${offset}
        `
    );
    const data = helper.emptyOrRows(rows);


    return {
        data
    }
}

module.exports = {
    selects
}