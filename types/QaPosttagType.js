import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaPosttagType = new GraphQLObjectType({
    name: 'QaPosttag',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaPosttag'),
        postid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        wordid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        postcreated: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaPosttagType);
export default QaPosttagType;
