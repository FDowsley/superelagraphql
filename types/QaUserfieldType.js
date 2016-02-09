import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUserfieldType = new GraphQLObjectType({
    name: 'QaUserfield',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUserfield'),

        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        position: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        flags: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        permit: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUserfieldType);
export default QaUserfieldType;