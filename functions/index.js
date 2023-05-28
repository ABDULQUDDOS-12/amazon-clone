// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NCHF9B7Kf7VS2uX7xcRGXi3fw1mmJSGGSUIUfvflMvnOdTIl9I9Cm0GhVejNiAFmkliKtokRwktVACqgHp1En2Y009GNjZu5P");
//API 

//app config
const app = express();
//Middleware
app.use(cors({origin:true}));
app.use(express.json());
//API routes
app.get('/',(request,response)=>response.status(200).send('Hello world'))
app.post('/payment/create',async (request,response)=>{
    const total = request.query.total;
    console.log("payment Request recieved BOOM! for this amount>>",total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    //ok - created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
   })
})
//Listencommand
exports.api=functions.https.onRequest(app)

//http://127.0.0.1:5001/clone-1a8ba/us-central1/api