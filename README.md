# Nodemailer Email Sender

A simple Node.js project that uses **Nodemailer** to send emails using a Gmail account and App Password authentication.


## Nodemailer
![Logo](https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1)

A npm package which is used to send mail from node js server.


## Use case of Nodemailer
- For User Registration 
- For Password Reset
- Notifications
- Feedback Requests
- Customer Support
- Event Invitation

## Alternative of Nodemailer 
We have some other tools which can be used instead of Nodemailer
- SendGrid
- Amazon SES
- SMTP.js
- Mailgun
- Email JS

### Reason to use Nodemailer
The main reason to chose nodemailer is that it is easy to implement with node js. We don't have to install any other packages for it. It works on every platform. We can send HTML content and files. Nodemailer supports unicode.  

### Install 
```bash
npm i nodemailer
```

Explore the official website :https://nodemailer.com/

---

## Features

- Send emails using Gmail
- Uses environment variables for security
- Easy setup
- Beginner friendly

---

## Technologies Used

- Node.js
- Nodemailer
- dotenv

---

## Main points 
Sending an email with Nodemailer involves three simple steps:

- Create a transporter: Configure your SMTP server or another supported transport method.
- Compose your message: Define the sender, recipient(s), subject, and content.
- Send the email: Call transporter.sendMail() with your message options.

---

# How to send attachments with mail
### put this in mail.js as new method 
```javascript

     //syntax for sending attachments
     setAttachments(attachment){
        let attachments = this.mailOptions.attachments || []; 
        //if mailoptions has attachments option then keep it in the varaible otherwise give empty array
        attachments.push(attachment);
        this.mailOptions.attachments = attachments;
     }
```

### In index.js -add following code
```javascript
 mail.setAttachments({
        filename:'img1.png',
        path:'./images/img1.png'
    })
```
---

# How to send img along with html content
### In index.html 
#### Add the following 
```html
<!--email clients can't access local folders so we convert to cid embeded one --->
<div class="image-container">
  <img class="img" src="cid:welcomeimg" alt="related img">
</div>
```

### In index.js
#### Add the following lines:
```javascript
mail.setAttachments({
    filename: 'img1.png',
    path: './images/img1.png',
    cid: 'welcomeimg'
})

```

###
# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
