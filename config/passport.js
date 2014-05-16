/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {

//  local: {
//    strategy: require('passport-local').Strategy
//  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'myk4XP8L9Z24vJ2FXkxzex6D1',
      consumerSecret: 'ZSKRSNyHditIqa01WBXELN63QdXiiVeGKQuvLdgM7gykVQI9kL',

    },
    callback: "http://127.0.0.1:8080/auth/twitter/callback"
  },
  linkedin: {
      name: 'LinkedIn',
      protocol: 'oauth',
      strategy: require('passport-linkedin').Strategy,
      options: {
          consumerKey: '75666zy446g9v3',
          consumerSecret: 'sfCQNKCJYOGTudsk',
          profileFields: ['id', 'first-name', 'last-name', 'email-address','public-profile-url'],
      }
  }
/*  github: {
    name: 'GitHub',
    protocol: 'oauth2',
    strategy: require('passport-github').Strategy,
    options: {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret'
    }
  },

  google: {
    name: 'Google',
    protocol: 'openid',
    strategy: require('passport-google').Strategy
  }*/

};
