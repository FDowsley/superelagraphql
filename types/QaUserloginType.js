import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUserloginType = new GraphQLObjectType({
    name: 'QaUserlogin',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        userid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        source: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        identifier: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        identifiermd5: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    //interfaces: [nodeInterface]
});

registerType(QaUserloginType);
export default QaUserloginType;
