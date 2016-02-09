import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList,} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';
import QaPostType from './QaPostType'

const QaUserType = new GraphQLObjectType({
    name: 'QaUser',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUser'),

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        createip: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        handle: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        avatarblobid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        avatarwidth: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        avatarheight: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        passsalt: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        passcheck: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        level: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        loggedin: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        loginip: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        written: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        writeip: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        emailcode: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        sessioncode: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        sessionsource: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        flags: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        wallposts: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        mobileid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        posts : {
          type : new GraphQLList(QaPostType)
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUserType);
export default QaUserType;
