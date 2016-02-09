import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUsermetaType = new GraphQLObjectType({
    name: 'QaUsermeta',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUsermeta'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUsermetaType);
export default QaUsermetaType;