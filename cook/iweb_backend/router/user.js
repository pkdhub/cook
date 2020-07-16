const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router

//用户名是否存在get
/**
 *接口URL
{{url}}/user/check_uname
请求方式
GET
请求查询字符串参数
参数	示例值	必填	参数描述
uname	zhangsan	必填	-用户名
成功响应示例
{
    "code": 200,
    "msg": "exists"
}
失败响应示例
{
    "code": 401,
    "msg": "non-exists"
}

 */
router.get("/check_uname",(req,res,next)=>{
	let uname = req.query.uname
	if(!uname){
		let output = {
			code: 401,
			msg: 'uname required'
		}
		res.send(output)
		return
	}
	let sql = 'SELECT uid FROM user WHERE uname=?'
	pool.query(sql,uname,(err,result)=>{
		if(err){
			//throw err   //抛错在测试阶段可以使用  但在上线后绝不能使用
		next(err)
		return
		}
//		res.send(result)
		if(result.length===0){
			let output={
				code:401,
				msg:"not-existe"
			}
			res.send(output)
		}else{
			let output={
				code:200,
				msg:"用户名存在"
			}
			res.send(output)
		}
	})
})
//用户注册
/**
 *接口URL
{{url}}/user/register
请求方式
POST
请求 Content-Type
application/json
请求Body参数
参数	示例值	必填	参数描述
uname	zhangsan	必填	-用户名
upwd	123456	必填	-密码
phone	13333333333	必填	-手机号
captcha	ad31	必填	-验证码
成功响应示例
{
    "code": 200,
    "msg": "register success",
    "uid": 7
}

 */
router.post("/register",(req,res,next)=>{
 	//res.send(req.body)
 	let uname=req.body.uname
    let phone=req.body.phone
    let upwd=req.body.upwd
 	if(!uname){
 		let output={
 			code:401,
 			msg:"uname kong"
 		}
 		res.send(output)
 		return
 	}
 	if(!phone){
 		let output={
 			code:401,
 			msg:"phone kong"
 		}
 		res.send(output)
 		return
 	}
 	if(!upwd){
 		let output={
 			code:401,
 			msg:"upwd kong"
 		}
 		res.send(output)
 		return
 	}
 		let captcha=req.body.captcha
	if(!captcha){
		let output={
			code:404,
			msg:"验证码不能为空"
		}
		res.send(output)
		return
	}else if(captcha.toLowerCase()!==req.session.registerCaptcha){
		let output={
			code:405,
			msg:"验证码输入错误"
		}
		res.send(output)
		return
	}
	//用户输入的验证码通过，服务器输入的验证码只能使用一次  需要跟新服务器验证码
	delete req.session.registerCaptcha
 	let sql1 = 'SELECT uid FROM user WHERE uname=? OR phone=?'  //查询uname和phone是否已经存在了
	pool.query(sql1, [uname, phone], (err, result)=>{
		if(err){
			next(err)
			return
		}
		if(result.length>0){	//根据客户端提交的uname和phone查询到相关记录
			let output = {		//uname或phone已被占用，则不再继续执行插入操作
				code: 400,
				msg: 'uname or phone already  taken'
			}
			res.send(output)
			return 
		}
 	let sql2="insert into user(uname,upwd,phone) values(?,?,?)"
 	pool.query(sql2,[uname,upwd,phone],(err,result)=>{
 		if(err){
 			next(err)
 			return
 		}
 	let output={
 		code:200,
 		msg:"success",
 		uid:result.insertId
 	}
 	res.send(output)
 	})
 })
})

//用户登录
router.post("/login",(req,res,next)=>{
	let uname=req.body.uname
	let upwd=req.body.upwd
	if(!uname){
		let output={
			code:400,
			msg:"用户名不能为空"
		}
		res.send(output)
		return
	}
	if(!upwd){
		let output={
			code:400,
			msg:"密码不能为空"
		}
		res.send(output)
		return
	}

	
let sql="select uid,uname,nickname from user where uname=? and upwd=?"
pool.query(sql,[uname,upwd],(err,result)=>{
	if(err){
		next(err)
		return
	}
	console.log(result)
//	res.send(result)
if(result.length>0){
	let output={
		code:200,
		msg:"登录成功",
		userInfo:result[0]
	}
	res.send(output)
//	console.log('session',req.session)
req.session.userInfo=result[0]
req.session.save()   //手动保存下session数据
	
}else{
	let output={
		code:400,
		msg:"用户不存在"
	}
	res.send(output)

}
})
})

/**
 * 1.1	注册用验证码
接口URL
{{url}}/user/register/captcha
请求方式
GET
请求参数
无
成功响应示例
 <svg>...</svg>

同时在服务器端session中保存 captcha.register 字段，值为显示给客户端的随机验证码内容。

 */
//地址 npmjs.com  输入captcha=》svg-captcha
var svgCaptcha = require('svg-captcha')
router.get('/register/captcha',(req,res,next)=>{
//	var captcha = svgCaptcha.create()
//	console.log(captcha)
//res.send(captcha) {text:'随机文本',data:'svg图片内容'
let options={
	size:5,
	noise:4,
	width:139,  //图片宽高
	height:38,
}
let captcha = svgCaptcha.create(options)
//1. 在服务器端回话中存储生成的验证码
//req.session.registerCaptcha=captcha.text
req.session.registerCaptcha=captcha.text.toLowerCase()
//2.向客户端输出此验证码图片类容
res.type('svg')
res.send(captcha.data)
})

/**
 * 1.6	上传用户头像
接口URL
{{url}}/user/upload/avatar
请求方式
POST
请求 Content-Type
multipart/form-data
请求主体数据
参数	示例值	必填	参数描述
avatar		必填	-二进制图片文件数据
成功响应示例
{
    "code": 200,
    "msg": "upload succ",
    "fileName": "/images/avatar/158632317406812345.jpg"
}

 */
//使用第三方的中间件处理客户端上传的文件、文本域
const multer=require('multer')
const fs=require('fs')   //使用Node.js官方提供的fs模块 地址nodejs.cn
let uplod=multer({
	dest:'./temp/',  //客户端上传的文件零时存储的地方  index所在的目录
})
router.post('/upload/avatar',uplod.single('avatar'),(req,res,next)=>{ 
	//uplod处理中间间 也能router。use   single头像名

	console.log(req.body)  //客户端提交的文本域
	console.log(req.file)  //客户端提交的文件域
	//把零时的目录后缀的下切没有的文件转存到一个有意义的文件夹下
	let oldName=req.file.path  //客户端上传的文件临时路径
	let newName=generateNewFilePath(req.file.originalname)
	fs.rename(oldName,newName,(err)=>{
	if(err){
	   next(err)
	   return
	}
	let output={
	   code:200,
	   msg:"上传成功",
	   fileName:newName
	}
	res.send(output)
	})
})
function generateNewFilePath(originalFileName){
	//生成的文件名型如 ./images/avatar/时间戳+五喂随机数+源文件后缀名
	let path='./images/avatar/'   //目录名
    path+=Date.now()     //时间戳
    path+=Math.floor(Math.random()*90000+10000)  //5位随机数
    let lastDotIndex=originalFileName.lastIndexOf('.')
    let extName=originalFileName.substring(lastDotIndex)
    path+=extName
    return path
}



// 无验证码注册
router.post("/registers",(req,res,next)=>{
 	//res.send(req.body)
 	let uname=req.body.uname
    let phone=req.body.phone
    let upwd=req.body.upwd
 	if(!uname){
 		let output={
 			code:401,
 			msg:"uname kong"
 		}
 		res.send(output)
 		return
 	}
 	if(!phone){
 		let output={
 			code:401,
 			msg:"phone kong"
 		}
 		res.send(output)
 		return
 	}
 	if(!upwd){
 		let output={
 			code:401,
 			msg:"upwd kong"
 		}
 		res.send(output)
 		return
 	}
 		
 	let sql1 = 'SELECT uid FROM user WHERE uname=? OR phone=?'  //查询uname和phone是否已经存在了
	pool.query(sql1, [uname, phone], (err, result)=>{
		if(err){
			next(err)
			return
		}
		if(result.length>0){	//根据客户端提交的uname和phone查询到相关记录
			let output = {		//uname或phone已被占用，则不再继续执行插入操作
				code: 400,
				msg: 'uname or phone already  taken'
			}
			res.send(output)
			return 
		}
 	let sql2="insert into user(uname,upwd,phone) values(?,?,?)"
 	pool.query(sql2,[uname,upwd,phone],(err,result)=>{
 		if(err){
 			next(err)
 			return
 		}
 	let output={
 		code:200,
 		msg:"success",
 		uid:result.insertId
 	}
 	res.send(output)
 	})
 })
})