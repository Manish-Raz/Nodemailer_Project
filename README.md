# Nodemailer Email Sender

A simple Node.js project that uses **Nodemailer** to send emails using a Gmail account and App Password authentication.

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
