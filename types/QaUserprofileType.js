import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUserprofileType = new GraphQLObjectType({
    name: 'QaUserprofile',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUserprofile'),

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUserprofileType);
export default QaUserprofileType;