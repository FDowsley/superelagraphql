import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaBlobType = new GraphQLObjectType({
    name: 'QaBlob',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        //id: globalIdField('QaBlob'),

        format: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        filename: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        userid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        cookieid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        createip: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        created: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        }
    }),

    // interfaces: [nodeInterface]
});

registerType(QaBlobType);
export default QaBlobType;
