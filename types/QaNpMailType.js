import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaNpMailType = new GraphQLObjectType({
    name: 'QaNpMail',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaNpMail'),

        userid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        eventid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        fromemail: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        fromname: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        toemail: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        toname: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        subject: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        body: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        htmlbody: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        html: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        retrycount: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        errorinfo: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        flags: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaNpMailType);
export default QaNpMailType;