const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//connect mongo to use mongoose
mongoose.connect(keys.mongoURI);

//define instance of express library
const app = express();

/* app middleware*/
//define usage of cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days expiried
        keys: [keys.cookieKey]
    })
);

//tells app use cookies to manage auth
app.use(passport.initialize());
app.use(passport.session());
/* app middleware*/

//call login flow with express instance
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // אם אנחנו בסביבת פיתוח תן לי את הפורט שחוזר מהירוקו אחרת שים אותי על פורט 5000
app.listen(PORT);
