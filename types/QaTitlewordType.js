import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaTitlewordType = new GraphQLObjectType({
    name: 'QaTitleword',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        postid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        wordid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        }
    }),

    //interfaces: [nodeInterface]
});

registerType(QaTitlewordType);
export default QaTitlewordType;
