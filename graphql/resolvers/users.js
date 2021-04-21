const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(_, args, context, info){
            //TODO: Validate user data
            //TODO: Make suer user doesn't already exist
            //TODO: Hash password and create auth token
        }
    }
}