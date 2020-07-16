const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router

/**
 * 添加收藏记录
 * 接口URL
{{url}}/favorite/add
请求方式
POST
请求 Content-Type
application/json
请求Body参数
参数	示例值	必填	参数描述
uid	3	必需	-用户id 从服务器端session中读取登录的用户编号
cid	7	必填	-课程id
成功响应示例
{
    "code": 200,
    "msg": "success",
    "fid": 2
}
失败响应示例
{
    "code": 403,
    "msg": "failed"
}

 */
router.post('/add',(req,res,next)=>{
//	if(!req.session.userInfo){ //当前用户没有登录
//		let output={
//			code:499,
//			msg:"未登录"
//		}
//		res.send(output)
//		return
//	}
//	let uid=req.session.userInfo.uid
    let uid=req.uid
	let cid=req.body.cid
	if(!cid){
		let output={
			code:403,
			msg:'cid为空'
		}
		res.send(output)
		return
	}
	let fTime=new Date().getTime()
	let sql1='select fid from favorite where userId=? and courseId=?'
	pool.query(sql1,[uid,cid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		if(result.length===0){  //没有添加课程
			let sql2="insert into favorite values(NULL,?,?,?)"
			pool.query(sql2,[uid,cid,fTime],(err,result)=>{
				if(err){
					next(err)
					return
				}
				let output={
					code:200,
					msg:"添加成功",
					fid:result.insertId //insert 生成的自增编号
				}
				res.send(output)
			})
		}else{
			let sql3='update favorite set fTime=? where fid=?'
			pool.query(sql3,[fTime,result[0].fid],(err,result)=>{
				if(err){
					next(err)
					return
				}
				let output={
					code:201,
					msg:"时间修改成功"
				}
				res.send(output)
			})
		}
	})
})


/**
 * 1.8	收藏列表
接口URL
{{url}}/favorite/list
请求方式
GET
请求查询字符串参数
参数	示例值	必填	参数描述
uid	4	必需	-用户id从session中读取登录的用户编号即可
成功响应示例
 [
        {
            "title": "07HTML零基础入门",
            "pic": "img-course\/06.png",
            "price": 399,
            "courseId": 7,
            "fid": 2,
            "fTime": 1578015036
        },
       ....
]
失败响应示例
[  ]
 */
router.get('/list',(req,res,next)=>{
	let uid=req.uid
	let sql="select title,pic,price,courseId,fid,fTime from favorite as f,course as c where c.cid=f.courseId and f.userId=?"
	pool.query(sql,uid,(err,result)=>{
		if(err){
			next(err)
			return
		}
		res.send(result)
	})
})
