import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUsereventType = new GraphQLObjectType({
    name: 'QaUserevent',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        userid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

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

    //interfaces: [nodeInterface]
});

registerType(QaUsereventType);
export default QaUsereventType;
