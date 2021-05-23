import { gql } from '@apollo/client'

export const GetUsersQuery = gql`
  query GetUsers {
    users {
      uid
      firstName
      lastName
      email
      emailVerified
    }
  }
`

export const GetUserQuery = gql`
  query GetUser($id: ID!) {
    user(uid: $id) {
      email
      firstName
      lastName
    }
  }
`

export const CreateUserMutation = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(input: $user) {
      uid
      firstName
      lastName
    }
  }
`

export const UpdateUserMutation = gql`
  mutation UpdateUser($id: ID!, $user: UserInput!) {
    updateUser(uid: $id, input: $user) {
      email
      firstName
      lastName
    }
  }
`

export const DeleteUserMutation = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(uid: $id) {
      email
      firstName
      lastName
    }
  }
`
