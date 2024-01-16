export const LOGIN_USER = `
mutation Mutation($username: String, $email: String, $password: String) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        username
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
      }
    }
  }`

  export const ADD_USER = `
  mutation Mutation($username: String, $email: String, $password: String) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
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
      }
    }
  }`

  export const SAVED_BOOK = `
  mutation Mutation($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
    saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      username
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
    }
  }`

  export const REMOVE_BOOK = `
  mutation Mutation($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      username
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
    }
  }`