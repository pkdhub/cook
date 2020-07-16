const express = require('express')
let port = 9090
let app = express()
//启动Web服务器
app.listen(port, ()=>{
	console.log('Server Listening on PORT: ' + port)
})



//一.请求正式处理前的前置中间件
//1.请求主体的处理中间件r
let bodyParser=require('body-parser')
app.use(bodyParser.json())//处理请求主题中的JSON数据 保存到req.body中
//2.cors跨域处理中间件
let cors=require('cors')  //Access-Control-Allow-Origin
app.use(cors({
	origin:['http://127.0.0.1:8080','http://localhost:8080'],
	credentials:true //请求携带凭证
}))//设置运行客户端跨域请求相关的响应消息头部
//3.处理客户端上传文件的中间件
//4.服务器端session处理中间件
let session=require('express-session')
app.use(session({  //cookies
	secret:'iwebsecret123',//指定生成sid所用的加密钥匙
	saveUninitialized:true,//是否保存为初始化session数据
	resave:true,  //是否重新保存session数据 session.save()
}))

//二.处理请求路由&路由器
//1.处理所有以/user开头的请求的路由器
const userRouter = require('./router/user.js')
app.use('/user', userRouter)

const loginCheckMiddleware=require('./middleware/loginCheck.js')
//app.use('/favorite',loginCheckMiddleware)
const favoriteRouter=require('./router/favorite.js')
//app.use('/favorite',favoriteRouter)
app.use('/favorite',loginCheckMiddleware,favoriteRouter)

const typeRouter=require('./router/type.js')
app.use('/type',typeRouter)

const courseRouter=require('./router/course.js')
app.use('/course',courseRouter)

const teacherRouter=require('./router/teacher.js')
app.use('/teacher',teacherRouter)

app.use('/cart',loginCheckMiddleware)
const cartRouter=require('./router/cart.js')
app.use('/cart',cartRouter)
//三.请求处理完成后的后置中间件
//1.异常处理完成后的后置中间件
app.use((err,req,res,next)=>{
	res.status(500)
	let output={
		code:500,
		msg:"浏览器崩溃",
		err:err
	}
	res.send(output)
})
