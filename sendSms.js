
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const restaurant = process.env.REST_NUMBER;
const 
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  body: "your order will be ready in 30",
  from: '+12292796560',
  to: '+13433332320'
})
  .then(message => console.log(message.sid));


// const sendTextMessage = (messageToSend) => {
//   client.messages.create({
//     body: "your order will be ready in 30",
//     from: '+12292796560',
//     to: '+13433332320'
//   })
//     .then(message => console.log(message.sid));
// };


// module.exports = { sendTextMessage };