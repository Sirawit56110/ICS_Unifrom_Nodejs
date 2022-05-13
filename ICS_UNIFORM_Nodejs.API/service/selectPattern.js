const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(){
  const rows = await db.query(
    `SELECT  pt_name,pt_id,pt_status
    FROM tb_pattern WHERE  pt_status = 1 `
  );
  const data = helper.emptyOrRows(rows);


  return {
    data
  }
}

module.exports = {
    selects
}