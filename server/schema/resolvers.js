const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({}).select('_v -password');
                return userData;
            }

            throw new AuthenticationError('Not logged in!');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {

        },
        login: async (parent, {email, password}) => {

        },
        saveBook: async (parent, args, context) => {

        },
        removeBook: async (parent, args, context)=> {

        },
    },

};

module.exports = resolvers;