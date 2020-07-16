module.exports=(req,res,next)=>{
	if(!req.session){
		let output={
			code:500,
			msg:"没有使用session中间件"
		}
		res.send(output)
		return
	}
	if(!req.session.userInfo){ //当前用户没有登录
		let output={
			code:499,
			msg:"未登录"
		}
		res.send(output)
		return
	}
	req.uid=req.session.userInfo.uid
	next()//中间件放行  执行后续代码
}
