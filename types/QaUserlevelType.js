import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaUserlevelType = new GraphQLObjectType({
    name: 'QaUserlevel',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaUserlevel'),

        level: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaUserlevelType);
export default QaUserlevelType;