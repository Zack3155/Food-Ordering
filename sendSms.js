require('dotenv').load();


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const customerNumber = process.env.BUYER_NUMBER;
const restaurantNumber = process.env.REST_NUMBER;


const client = require('twilio')(accountSid, authToken);

const sendSms = (messageToSend) => {
  client.messages
    .create({
      body: messageToSend,
      from: restaurantNumber,
      to: customerNumber
    })
    .then(message => console.log(message.sid));
};

module.exports = { sendSms };