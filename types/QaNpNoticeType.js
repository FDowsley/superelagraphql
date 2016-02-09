import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaNpNoticeType = new GraphQLObjectType({
    name: 'QaNpNotice',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaNpNotice'),

        userid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        eventid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        flags: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaNpNoticeType);
export default QaNpNoticeType;