import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaCookyType = new GraphQLObjectType({
    name: 'QaCooky',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaCooky'),

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        createip: {
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
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaCookyType);
export default QaCookyType;