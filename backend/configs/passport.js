const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt'); // !!!
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({
    username
  }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, {
        message: 'Incorrect username.'
      });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, {
        message: 'Incorrect password.'
      });
      return;
    }

    next(null, foundUser);
  });
}));

// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://www.example.com/auth/google/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
// ));

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_KEY,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: "http://localhost:5000/auth/linkedin/callback",
  profileFields: [
    "first-name",
    "last-name",
    "email-address",
    "headline",
    "summary",
    "industry",
    "picture-url",
    "positions",
    "public-profile-url",
    "location"
  ],
  scope: ['r_basicprofile', 'r_emailaddress'],
  state: true,
  passReqToCallback: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  console.log('linkedin auth');
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));