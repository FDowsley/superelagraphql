import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUserfavoriteType = new GraphQLObjectType({
    name: 'QaUserfavorite',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUserfavorite'),

        nouserevents: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUserfavoriteType);
export default QaUserfavoriteType;