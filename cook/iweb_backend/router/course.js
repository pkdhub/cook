const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router
/*
 * 2.2	获取课程列表
接口URL
{{url}}/course/list?pageNum=1&typeId=3
请求方式
GET
请求查询字符串参数
参数	示例值	必填	参数描述
pageNum	1	可选	-当前页码
typeId	3	可选	-课程分类id
成功响应示例
{
    "pageNum": "1",
    "pageSize": 3,  //一页里面有几个数据
    "pageCount": 2,//共几页
    "totalCount": 4,//有几条满足条件
    "list": [
        {
            "cid": 12,
            "typeId": 3,
            "title": "12HTML零基础入门",
            "teacherId": 4,
            "cLength": "1天",
            "startTime": "每周一开课",
            "address": "i前端各校区 ",
            "pic": "img-course\/01.png",
            "price": 399,
            "tpid": 3,
            "tpname": "进阶课程",
            "tid": 4,
            "tname": "纪盈鑫",
            "maincourse": "JS框架专家",
            "tpic": "img-teacher\/zzl.jpg"
        },
       .....
    ]
}
 */
router.get('/list',(req,res,next)=>{
	
	let pageNum=req.query.pageNum  //拿到的都是字符串
	if(!pageNum){
		pageNum=1
	}else{
		pageNum=parseInt(pageNum)
	}
	let typeId=req.query.typeId
	if(!typeId){
		typeId=0
	}else{
		typeId=parseInt(typeId)
	}
	
	let output={
		pageNum: pageNum,
        pageSize: 3,  //一页里面有几个数据
        pageCount: 0,//共几页
        totalCount: 0,//共有几条满足条件
        list:[],
	}
	
	let condition=''   //where 语句的查询条件
	let planceholder=[]   //为占位符提供的数据
	if(typeId!==0){
		condition+=' AND typeId=? '
		planceholder.push(typeId)
	}
	//if(teacherId!==0){}
	//if(price!==0){}
	//查询满足条件记录的总数  并计算出总页数
	let sql1='select count(*) as c from course where 1'+condition  
	pool.query(sql1,planceholder,(err,result)=>{
		if(err){
			next(err)
			return
		}
//		console.log(result)
		output.totalCount=result[0].c  //满足条件的总记录
		output.pageCount=Math.ceil(output.totalCount/output.pageSize)
		let sql2='select cid,typeId,title,teacherId,cLength,startTime,address,pic,price,tpid,tpname,tid,tname,maincourse,tpic from course AS c, type AS t, teacher AS h where c.typeId=t.tpid And c.teacherid=h.tid '+condition +' LIMIT ?,? '
		planceholder.push((output.pageNum-1)*output.pageSize)  //limit后的第一个？ 从那一条记录开始读取
		planceholder.push(output.pageSize)  //limit后的第二个？ 一次性最多读取记录数量
		//console.log(planceholder)
        pool.query(sql2,planceholder,(err,result)=>{
        	if(err){
        		next(err)
        		return
        	}
        	//console.log(result)
        	output.list=result
        	res.send(output)
        })
	})
})


/*
 * 2.3	获取课程详情
接口URL
{{url}}/course/detail?cid=1
请求方式
GET
请求查询字符串参数
参数	示例值	必填	参数描述
cid	1	必填	-课程id
成功响应示例
{
        "cid": 1,
        "typeId": 1,
        "title": "01HTML零基础入门",
        "teacherId": 1,
        "cLength": "1天",
        "startTime": "每周一开课",
        "address": "i前端各校区 ",
        "pic": "img-course\/01.png",
        "price": 399,
        "details": "<p>本课程详细讲解了HTML5的各个方面，课程从环境搭建开始，依次讲述了HTML5新元素、Canvas、SVG、Audio、GPS定位、拖拽效果、WEB存储、App Cache、HTML5 多线程和HTML5消息推送等内容。.....<\/p>",
        "tid": 1,
        "tname": "成亮",
        "maincourse": "Web开发讲师",
        "tpic": "img-teacher\/zx.jpg",
        "experience": "达内集团web讲师， 主讲 HTML5、Jquery、 Ajax 等课程。先后在一汽启明、日本インタセクト等公司担任系统开发工程师，从事软件开发和设计工作，迄今已积累5年以上的开发及教学经验，兼具技术和教学两方面的培训能力。",
        "style": "教学思路严谨，课堂气氛活跃。讲解时善于运用生活当中的例子，使学员能够快速理解。着重培养学员的动手能力，奉行实践是检验真理的唯一标准，教学能力受到学员们的一致好评。"
}
 */
router.get('/detail',(req,res,next)=>{
	let cid=req.query.cid
	if(!cid){
		let output={
			code:400,
			msg:"不能为空 课程编号"
		}
		res.send(output)
		return
	}
	let sql= 'select cid,typeId,title,teacherId,cLength,startTime,address,pic,price,details,tid,tname,maincourse,tpic,experience,style from course as c, teacher as t where c.teacherId=t.tid and cid=?'
	pool.query(sql,cid,(err,result)=>{
		if(err){
			next(err)
			result
		}
		console.log(result)
		if(result.length>0){
			res.send(result[0])
		}else{
			res.send({})
		}
	})
})
/*
 * 2.4	获取最新课程
接口URL
{{url}}/course/newest?count=4
请求方式
GET
请求Query参数
参数	示例值	必填	参数描述
count	4	可选	-返回结果数量，默认为4
成功响应示例
[
		{
			"cid": 12,
			"title": "12HTML零基础入门",
			"pic": "img-course/01.png",
			"price": 399,
			"tname": "纪盈鑫"
		}，
		.......
]

 */
router.get('/newest',(req,res,next)=>{
	let count=req.query.count
	if(!count){
		count=4
	}else{
		count=parseInt(count)
	}
	let sql='select cid,title,pic,price,tname from course as c, teacher as t where c.teacherId=t.tid ORDER BY cid DESC limit ?'
	//一个参数是要几条的意思
	pool.query(sql,count,(err,result)=>{
	if(err){
		next(err)
		return
	}
	res.send(result)
})
})

/*
 * 2.5	获取热门课程
接口URL
{{url}}/course/hottest?count=4
请求方式
GET
请求查询字符串参数
参数	示例值	必填	参数描述
count	4	可选	-返回结果数量，默认值为4
成功响应示例
[
		{
			"cid": 12,
			"title": "12HTML零基础入门",
			"pic": "img-course/01.png",
			"price": 399,
			"tname": "纪盈鑫"
		},
		......
]

 */
router.get('/hottest',(req,res,next)=>{
	let count=req.query.count
	if(!count){
		count=4
	}else{
		count=parseInt(count)
	}
	let sql='select cid,title,pic,price,tname from course as c, teacher as t where c.teacherId=t.tid ORDER BY buyCount DESC limit ?'
	//一个参数是要几条的意思
	pool.query(sql,count,(err,result)=>{
	if(err){
		next(err)
		return
	}
	res.send(result)
})
})