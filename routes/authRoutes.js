
const passport = require('passport');

module.exports = (app) => {
    //נקרא בהתחלה כאשר היוזר לוחץ על לוגין ומגיעים לנתיב
    //בסטרינג גוגל שמועבר פספורט בעצם אנחנו אומרים לפספורט להשתמש בשיטה גוגל (בפונקציה הבאה)
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))


    //אחרי שהיוזר אישר את הפרמישנס מגוגל, גוגל מחזיר לנו קולבאק לנתיב שבחנו. מכאן נגיד לו להמשיך דרך הגוגל עם הסטרינג המועבר
    app.get('/auth/google/callback', passport.authenticate('google'));

    //ההבדל בין שתי הפקודות למעלה:
    //בגלל שמהקולבק חוזר גם קוד, פספורט ידע להפנות למקום הנכון
}



