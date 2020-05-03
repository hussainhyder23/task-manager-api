const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'hussainhyder23@gmail.com',
        subject:'Welcome to the app',
        text:`Welcome to the app, ${name}. Let me know how get along with the app.`
    })
}
// sgMail.send({
//     to:'hussainhyder23@gmail.com',
//     from:'hussainhyder23@gmail.com',
//     subject:'First mail using backend',
//     text:'I hope this one actually gets to you!'
// })
//Is there anything we could've done to keep you onboard
const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'hussainhyder23@gmail.com',
        subject:'Cancellation of subscription',
        text:`Goodbye, ${name}. Is there anything we could've done to keep you onboard`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}