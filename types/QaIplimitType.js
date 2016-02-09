import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaIplimitType = new GraphQLObjectType({
    name: 'QaIplimit',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaIplimit'),

        period: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        count: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaIplimitType);
export default QaIplimitType;