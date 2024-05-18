const { STRIPE_API_KEY,STRIPE_SECRET_KEY } = require('../config')
const stripe = require("stripe")(STRIPE_SECRET_KEY);

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
    .send({ client_secret: myPayment.client_secret });
};

exports.sendStripeApiKey = async (req, res) => {

  res.status(200).json({ stripeApiKey: STRIPE_API_KEY });
};
