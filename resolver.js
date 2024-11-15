export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Manshad",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "My Name is Manshad",
        },
      ];
    },
  },
};
