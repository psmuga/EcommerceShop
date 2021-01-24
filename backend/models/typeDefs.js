import mongoose from 'mongoose';
import { gql } from 'apollo-server-express';

export const Cat = mongoose.model('Cat', { name: String });

export const typeDefs = gql`
    scalar DateTime
    type Query {
        cats: [Cat!]!
        products: [Product!]!
    }
    type Cat {
        id: ID!
        name: String!
    }
    type Mutation {
        createCat(name: String!): Cat!
    }

    type Product {
        name: String!
        image: String!
        brand: String!
        category: String!
        description: String!
        rating: Float!
        numReviews: Int!
        price: Float!
        countInStock: Int!
        createdAt: DateTime!
        updatedAt: DateTime!
    }
`;
