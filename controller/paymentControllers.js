const stripe = require("stripe");
const {STRIPE_API_KEY} = require('../config')

exports.processPayment = async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Ecommerce",
      },
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method: 'pm_card_visa',
    });
  
    res
      .status(200)
      .send({client_secret: myPayment.client_secret});
  };
  
  exports.sendStripeApiKey = async (req, res, next) => {
    res.status(200).json({ stripeApiKey: STRIPE_API_KEY });
  };
