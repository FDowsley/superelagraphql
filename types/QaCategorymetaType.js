import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaCategorymetaType = new GraphQLObjectType({
    name: 'QaCategorymeta',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaCategorymeta'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaCategorymetaType);
export default QaCategorymetaType;