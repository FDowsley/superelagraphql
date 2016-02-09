import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLEnumType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaMessageType = new GraphQLObjectType({
    name: 'QaMessage',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaMessage'),

        qaMessagesType: {
            type: new GraphQLEnumType({
                name: 'QaMessageQaMessagesType',
                description: '@TODO DESCRIBE ME',

                values: {
                    'PUBLIC': {
                        value: 'PUBLIC',
                        description: '@TODO DESCRIBE ME'
                    },

                    'PRIVATE': {
                        value: 'PRIVATE',
                        description: '@TODO DESCRIBE ME'
                    }
                }
            }),

            description: '@TODO DESCRIBE ME'
        },

        fromuserid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        touserid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        format: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaMessageType);
export default QaMessageType;