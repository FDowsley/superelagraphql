import getEntityResolver from './util/entity-resolver';
import {GraphQLObjectType, GraphQLSchema, GraphQLList} from 'graphql';
import {nodeField} from './types/Node';
import {registerType} from './resolve-map';
import * as types from './types';
import co from 'co';

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        fields: () => ({
            node: nodeField,            
        })
    })
});

module.exports = schema;
