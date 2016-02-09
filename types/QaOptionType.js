import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaOptionType = new GraphQLObjectType({
    name: 'QaOption',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaOption'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaOptionType);
export default QaOptionType;