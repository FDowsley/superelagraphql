import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaNpEventType = new GraphQLObjectType({
    name: 'QaNpEvent',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaNpEvent'),

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        ipaddress: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        userid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        handle: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        cookieid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        event: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        params: {
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

registerType(QaNpEventType);
export default QaNpEventType;