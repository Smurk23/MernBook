import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation loginUser($username: String, $email: String, $password: String) {
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

  export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
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

  export const SAVED_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
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

  export const REMOVE_BOOK = gql`
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