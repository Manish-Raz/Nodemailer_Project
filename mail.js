const nodemailer = require("nodemailer");

require('dotenv').config();


//making transporter 
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

//creating mail class
class Mail{
    constructor(){
        this.mailOptions = {
            from:{
                address:process.env.EMAIL, 
                name:"Manish Rajak Nodemailing"
            }
        };
    }

    /**
     * sets the name of the company that is sending the email
     * @param{string} name --the name of the company
     */
    setCompanyName(name){
        //set the name of the company of the company in the mail options
        this.mailOptions.from.name = name;
    }

    /**
     * sets the email address of the sender
     * @param {string} email --- the email address of the sender
     */

    setSenderEmail(email){
        //sets the email address of the sender in the mail optons
        this.mailOptions.from.address = email;

    }

    /**
     * sets the recipient email address
     * @param {string} receiver - the email address of the recipient
     */
    setTo(receiver){
        this.mailOptions.to =receiver;
    }

    /**
     * sets the subject of the email
     * @param {string} subject - the sub of the email
     */
    setSubject(subject){
        /**
         * the text content of the email.
         * @type {string}
         */
        this.mailOptions.subject= subject;
    }

    /**
     * sets the text content of the email
     * @param {string} text - the text content of the email
     */
    setText(text){
        /**
         * the text content of the email.
         * @type {string}
         */
        this.mailOptions.text = text;
    }

    /**
     * sets the html content of the email
     * @param {string} html - the html content of the email
     */
    setHTML(html){
        /**
         * The HTML content of the email.
         * @type {string}
         */
        this.mailOptions.html = html;
    }

    /**
     * send the email using teh configured options
     * this function uses the nodemailer transporter to send the email.
     * If an error occurs during sending, it logs the error
     * if the email is sent successfully, it logs the response from the server
     * @return {void}  does not return anything
     */
    send(){
        transporter.sendMail(this.mailOptions, (error, info)=>{
            if(error){
        console.log(error);
    }
    else{
        console.log('Email sent :'+ info.response);
    }
        })
    }
}




module.exports = Mail;