const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)
const requiredLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
//route handler for billing req
    app.post('/api/stripe',requiredLogin, async(req, res) => { 
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            source: req.body.id,
            description: '$5 for 5 credits'
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    })
}

