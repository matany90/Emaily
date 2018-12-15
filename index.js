const express = require('express');

const app = express();

app.get('/', (req,res) => { // הסלאש מייצג את היו-אר-רל שבו יבוצע הפאט ארו פאנקשיין
    res.send({hi: 'there1234'});
});

const PORT = process.env.PORT || 5000; // אם אנחנו בסביבת פיתוח תן לי את הפורט שחוזר מהירוקו אחרת שים אותי על פורט 5000
app.listen(PORT);