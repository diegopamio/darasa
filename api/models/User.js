/**
* User.js
*
* @description :: This model represents a user in the system (could be a teacher, a student or anything)
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    schema: true,
    attributes: {
        username  : { type: 'string', unique: true },
        email     : { type: 'email',  unique: true },
        passports : { collection: 'Passport', via: 'user' },
        sharedItems: {collection: 'SharedItem', via: 'sharedBy'},
        currentClassroom: {model: 'Classroom'}
  }
};

