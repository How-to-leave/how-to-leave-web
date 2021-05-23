import { useQuery } from '@apollo/client'

export const Query = ({ children, query }) => {
  const { data, loading, error } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  return children({ data })
}
