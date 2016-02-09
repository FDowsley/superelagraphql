import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaTagmetaType = new GraphQLObjectType({
    name: 'QaTagmeta',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaTagmeta'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaTagmetaType);
export default QaTagmetaType;