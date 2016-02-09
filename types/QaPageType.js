import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaPageType = new GraphQLObjectType({
    name: 'QaPage',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaPage'),

        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        nav: {
            type: new GraphQLNonNull(GraphQLString),
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
        },

        tags: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        heading: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaPageType);
export default QaPageType;