export const GET_ME = `
query Query {
    getSingleUser {
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
      username
    }
  }`