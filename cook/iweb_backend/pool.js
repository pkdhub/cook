const mysql=require("mysql")
let pool=mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  port            :"3306",
  user            : 'root',
  password        : '',
  database        : 'iweb'
})
//pool.query('select 1+2',(err,result)=>{
//	if(err){
//		throw err
//	}
//	console.log(result)
//})
module.exports=pool