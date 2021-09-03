require('dotenv').config()
const express = require('express')
const app = express()

const ACCOUNT_SID = process.env.ACCOUNT_SID
const AUTH_TOKEN = process.env.AUTH_TOKEN

const MessagingResponse = require('twilio').twiml.MessagingResponse;
//setting
app.set('port',process.env.PORT || 3000)

//middlewares
/* app.use(express.json())*/
app.use(express.urlencoded({extended:false})) 

//routes
app.post('/sms',(req,res)=>{
    const twiml = new MessagingResponse();
    twiml.message('he recibido tu mensaje')
    res.writeHead(200,{'Content-type':'text/xml'})
    res.end(twiml.toString())
})

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
})


// const client = require('twilio')(ACCOUNT_SID,AUTH_TOKEN)
/* 
client.messages.create({
    to:process.env.MY_PHONE_NUMBER,
    from:'+17176960091',
    body:'hola desde twilio'
}).then(message=>console.log(message.sid)) */