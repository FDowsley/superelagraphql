import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaCategoryType = new GraphQLObjectType({
    name: 'QaCategory',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaCategory'),

        parentid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        tags: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        qcount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        position: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        backpath: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaCategoryType);
export default QaCategoryType;