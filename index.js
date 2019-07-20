const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000; // אם אנחנו בסביבת פיתוח תן לי את הפורט שחוזר מהירוקו אחרת שים אותי על פורט 5000
app.listen(PORT);

//auth flow:
//1 - app.get 'auth/google'
//2 - app.get 'auth/google/callback
//3 - הarrow function  נקראת מהgoogle strategy