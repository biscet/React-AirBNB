const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');
const config = require('../config/config');

const cookieExtractor = function(req) {
  let token = null;
  if (req.cookies['Authorization']) {
    token = req.cookies['Authorization'];
  }
  return token;
};

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: Buffer.from(config.jwt, 'base64'),
};

module.exports = (passport) => {
  passport.use(
      new JwtStrategy(options, async (payload, done) => {
        try {
            await User.findById(payload.userId, (err, user)=>{
              if (err) {
                done(err, false);
              } else if (user) {
                done(null, user);
              } else {
                done(null, false);
              }
            });
        } catch (e) {
          console.log(e);
        }
      })
  );
};
