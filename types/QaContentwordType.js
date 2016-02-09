import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLEnumType, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaContentwordType = new GraphQLObjectType({
    name: 'QaContentword',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
      id: globalIdField('QaContentword'),
        postid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        wordid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        count: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        qaContentwordsType: {
            type: new GraphQLEnumType({
                name: 'QaContentwordQaContentwordsType',
                description: '@TODO DESCRIBE ME',

                values: {
                    'Q': {
                        value: 'Q',
                        description: '@TODO DESCRIBE ME'
                    },

                    'A': {
                        value: 'A',
                        description: '@TODO DESCRIBE ME'
                    },

                    'C': {
                        value: 'C',
                        description: '@TODO DESCRIBE ME'
                    },

                    'NOTE': {
                        value: 'NOTE',
                        description: '@TODO DESCRIBE ME'
                    }
                }
            }),

            description: '@TODO DESCRIBE ME'
        },

        questionid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaContentwordType);
export default QaContentwordType;
