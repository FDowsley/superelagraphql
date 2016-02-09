import getEntityResolver from '../util/entity-resolver';
import {getType, registerType} from '../resolve-map';
import {GraphQLObjectType, GraphQLEnumType, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLFloat} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Node';

const QaPostType = new GraphQLObjectType({
    name: 'QaPost',
    description: '@TODO DESCRIBE ME',

    fields: () => ({
        id: globalIdField('QaPost'),

        qaPostsType: {
            type: new GraphQLEnumType({
                name: 'QaPostQaPostsType',
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

                    'Q_HIDDEN': {
                        value: 'Q_HIDDEN',
                        description: '@TODO DESCRIBE ME'
                    },

                    'A_HIDDEN': {
                        value: 'A_HIDDEN',
                        description: '@TODO DESCRIBE ME'
                    },

                    'C_HIDDEN': {
                        value: 'C_HIDDEN',
                        description: '@TODO DESCRIBE ME'
                    },

                    'Q_QUEUED': {
                        value: 'Q_QUEUED',
                        description: '@TODO DESCRIBE ME'
                    },

                    'A_QUEUED': {
                        value: 'A_QUEUED',
                        description: '@TODO DESCRIBE ME'
                    },

                    'C_QUEUED': {
                        value: 'C_QUEUED',
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

        parentid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        categoryid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        catidpath1: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        catidpath2: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        catidpath3: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        acount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        amaxvote: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        selchildid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        closedbyid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        userid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        cookieid: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        createip: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        lastuserid: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        lastip: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        upvotes: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        downvotes: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        netvotes: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        lastviewip: {
            type: GraphQLInt,
            description: '@TODO DESCRIBE ME'
        },

        views: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        hotness: {
            type: GraphQLFloat,
            description: '@TODO DESCRIBE ME'
        },

        flagcount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: '@TODO DESCRIBE ME'
        },

        format: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        created: {
            type: new GraphQLNonNull(GraphQLString),
            description: '@TODO DESCRIBE ME'
        },

        updated: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        updatetype: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        title: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        content: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        tags: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        name: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        },

        notify: {
            type: GraphQLString,
            description: '@TODO DESCRIBE ME'
        }
    }),

    interfaces: [nodeInterface]
});

registerType(QaPostType);
export default QaPostType;