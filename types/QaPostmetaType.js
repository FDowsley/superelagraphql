import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaPostmetaType = new GraphQLObjectType({
    name: 'QaPostmeta',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaPostmeta'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaPostmetaType);
export default QaPostmetaType;