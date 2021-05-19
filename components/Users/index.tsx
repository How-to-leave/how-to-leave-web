import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  query {
    users {
      uid
      firstName
      lastName
      email
      emailVerified
    }
  }
`

export function Users() {
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }
  console.log(data)
  const users = data.users

  return (
    <div>
      {users.map((user) => (
        <div key={user.uid}>
          <h3>
            {user.firstName} | {user.lastName}
          </h3>
          <p>
            {user.email} - {user.emailVerified}
          </p>
        </div>
      ))}
    </div>
  )
}
