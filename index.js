const express = require("express")
const app = express();
const path = require("path");
const fs= require("fs");
require('dotenv').config();
const Mail = require('./mail');


app.use(express.json());


// //making transporter 
// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:process.env.EMAIL,
//         pass:process.env.PASSWORD
//     }
// });


app.get("/",(req,res)=>{
    res.send("Hello World");

    const mail = new Mail();
    mail.setTo(process.env.EMAIL);
    mail.setSubject("Hello from Manish Rajak ");
    mail.setText("I am now sending email by using mail class more advance way of using nodemailer");
    mail.send();



}
);

//sending html content with text from frontend to the email
app.post("/mail", async (req,res)=>{

    let{ receiver_id, subject, text, name } = req.body;
    
    //reading file index.html 
    let data = fs.readFileSync(path.join(__dirname,'spotify.html'),'utf8');
    data= data.replace('[user]',name);


    const mail = new Mail();
    mail.setTo(receiver_id);
    mail.setSubject(subject);
    mail.setText(text);
    mail.setHTML(data);
    //email clients can't access local folder so we use cid img attachments
  mail.setAttachments([
  {
    filename: 'spotifyy.png',
    path: path.join(__dirname,'images','spotifyy.png'),
    cid: 'topimg'
  },
  {
    filename: 'img1.png',
    path: path.join(__dirname,'images','img1.png'),
    cid: 'img1'
  },
  {
    filename: 'img2.png',
    path: path.join(__dirname,'images','img2.png'),
    cid: 'img2'
  },
  {
    filename: 'img3.png',
    path: path.join(__dirname,'images','img3.png'),
    cid: 'img3'
  },
  {
    filename: 'img1.png',
    path: path.join(__dirname,'images','img1.png'),
    cid: 'img4'
  },
  {
    filename: 'img2.png',
    path: path.join(__dirname,'images','img2.png'),
    cid: 'img5'
  },
  {
    filename: 'img3.png',
    path: path.join(__dirname,'images','img3.png'),
    cid: 'img6'
  }
]);



    mail.send();
    res.send("Email sent !");
})

//     const mailOptions ={
//     from:process.env.EMAIL,
//     to:"rajakman14@gmail.com",
//     subject:"Sending Email using NodeJs",
//     text:"That was easy !"
// }
//   transporter.sendMail(mailOptions, (error,info)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('Email sent :'+ info.response);
//     }
//   })
// })

//the comment work is done by using mail class coming from Mail.js



const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`);
});

//transporter is the delivery boy
//mailoption is the package to deliver
//sendmail is the way of delivering the mail