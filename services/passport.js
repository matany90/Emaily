const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); //pull out 'users' collection

//generate user to cookie
passport.serializeUser((user, done) => {
    done(null, user.id); //user.id in NOT profile.id, its the identifier mongo gives every record
});

//generate cookie to user
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    })
});

//define authGoogle via passport API
 passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (!existingUser) {
                //User not exists, create it in MongoDB, call done() when finish
                new User({ googleId: profile.id })
                .save()
                .then(user => done(null, user));
            }
            else {
                //user already exists
                done(null, existingUser);
            }
        });
    }
));
