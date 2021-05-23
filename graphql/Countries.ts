import { gql } from '@apollo/client'

export const GetCountriesQuery = gql`
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

export const GetCountryQuery = gql`
  query GetCountry($id: ID!) {
    country(uid: $id) {
      name
      capital
    }
  }
`

export const CreateCountryMutation = gql`
  mutation CreateCountry($country: CountryInput!) {
    createCountry(input: $country) {
      uid
      name
      capital
    }
  }
`

export const UpdateCountryMutation = gql`
  mutation UpdateCountry($id: ID!, $country: CountryInput!) {
    updateCountry(uid: $id, input: $country) {
      uid
      name
      capital
    }
  }
`

export const DeleteCoutryMutation = gql`
  mutation DeleteCountry($id: ID!) {
    deleteCountry(uid: $id) {
      uid
      name
    }
  }
`
