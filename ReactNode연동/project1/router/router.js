const express = require('express')
const router = express.Router()

const mysql = require('mysql')
const path = require('path')


let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "4511to",
    port : "3306",
    database : "nodejs_db"
})



router.post('/joinData', (req,res)=>{
    console.log('joinData 라우터')
    console.log(req.body.user)

   let sql = 'insert into memebr values (?,?,hello)'
   conn.query(sql,[req.body.user.id, req.body.user.pw],(err,rows)=>{
    if(rows) {
        console.log('회원가입 성공')
        res.json({
            result : 'success'
        })
    }else {
        console.log('회원가입 실패')
        res.json({
            result : 'fail'
        })
    }

    res.end()
   })
})


router.get('*',(req,res)=>{
    console.log('happy hacking')
    res.sendFile(path.join(__dirname,'..','react-project','bulid','index.html'))
});




module.exports = router;