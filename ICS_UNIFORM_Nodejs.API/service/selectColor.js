const db = require('./db_context');
const helper = require('../helper');
const config = require('../config');

async function selects(){
  const rows = await db.query(
    `SELECT  cl_name,cl_id,cl_status
    FROM tb_color WHERE cl_status = 1 `
  );
  const data = helper.emptyOrRows(rows);


  return {
    data
  }
}

module.exports = {
    selects
}