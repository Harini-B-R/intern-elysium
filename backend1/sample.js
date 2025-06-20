const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'harinipriyanka8887@gmail.com',
        pass:'pyir rdjt flri hhxd'
    }
});
let mailOptions={
    from:"harinipriyanka8887@gmail.com",
    to:"harinipriyanka8887@gmail.com",
    subject:'hello from node.js',
    text:'This is a test email send '
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log('error',error);
    }
    console.log('message sent',info.response);

});