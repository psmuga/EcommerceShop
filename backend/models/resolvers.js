import { Cat } from './typeDefs.js';
import Product from './productModel.js';

export const resolvers = {
    Query: {
        cats: () => Cat.find(),
        products: () => Product.find(),
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const cat = new Cat({ name });
            await cat.save();
            return cat;
        },
    },
};
