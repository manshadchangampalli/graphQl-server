export const typeDefs = `
    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        title: String!
        publishedYear:Int
    }
    
    type Query {
        authors : [Author]
        books: [Book]
    }
`;
