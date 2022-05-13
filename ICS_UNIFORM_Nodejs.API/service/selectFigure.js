const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(){
  const rows = await db.query(
    `SELECT  fg_name,fg_id,fg_status
    FROM tb_figure WHERE  fg_status = 1 `
  );
  const data = helper.emptyOrRows(rows);


  return {
    data
  }
}

module.exports = {
    selects
}