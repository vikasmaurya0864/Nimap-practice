const express=require('express')
const app=express()
const bodyParser= require('body-parser')

app.use(bodyParser.json())

app.get('/test',(req,res)=>{
    res.send("ok")
})

const arr=[]

const create= (req,res)=>{
    const data= req.body
    arr.push(data)
    return res.send("successful created")
}

app.use('/create',create)

app.get('/get/:id',(req,res)=>{
    const id=req.params.id
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id) res.send(arr[i])
    }
    res.status(200).send("not found")
})

app.listen(3000,()=>{
    console.log("express is runningon 3000")
})