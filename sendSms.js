// require('dotenv').config();

// const accountSid = process.env.TWILIO_ACC;
// console.log("sid :", accountSid);
// const authToken = process.env.TWILIO_AUT;
// const restaurantNumber = process.env.RES_NUMBER;
// const customerNumber = process.env.CUST_NUMBER;
// const client = require('twilio')(accountSid, authToken);

// // client.messages.create({
// //   body: "your order will be ready in 30",
// //   from: '+12292796560',
// //   to: '+13433332320'
// // })
// //   .then(message => console.log(message.sid));

// const sendTextMessage = (messageToSend) => {
//   client.messages.create({
//     body: messageToSend,
//     from: restaurantNumber,
//     to: customerNumber
//   })
//     .then(message => console.log(message.sid));
// };


// module.exports = { sendTextMessage };
