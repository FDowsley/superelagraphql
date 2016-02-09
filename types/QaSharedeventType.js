import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaSharedeventType = new GraphQLObjectType({
    name: 'QaSharedevent',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
      id: globalIdField('QaSharedevent'),
        entitytype: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        entityid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        questionid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        lastpostid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        updatetype: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        lastuserid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        updated: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaSharedeventType);
export default QaSharedeventType;
