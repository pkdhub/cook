const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router
/*
 * 2.1	获取课程分类
接口URL
{{url}}/type
请求方式
GET
成功响应示例
 [
        {
            "tpid": 1,
            "tpname": "基础课程"
        },
        {
            "tpid": 2,
            "tpname": "核心课程"
        },
        {
            "tpid": 3,
            "tpname": "进阶课程"
        }
]

 */
router.get('/',(req,res,next)=>{
	let sql="select tpid,tpname from type order by tpid"
	pool.query(sql,(err,result)=>{
		if(err){
			next(err)
			return
		}
		res.send(result)
	})
})

