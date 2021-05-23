import { useMutation, useQuery } from '@apollo/client'

import { Window } from './styles'
import { GetCountryQuery, DeleteCoutryMutation } from '@/graphql/Countries'

interface DeleteCountryWindowProps {
  handleClose: () => void
  countryId: string
}

export function DeleteCountryWindow({
  handleClose,
  countryId,
}: DeleteCountryWindowProps) {
  const { data, loading, error } = useQuery(GetCountryQuery, {
    variables: countryId,
  })
  const [DeleteCountry] = useMutation(DeleteCoutryMutation)

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const country = data.country

  const handleCreate = () => {
    DeleteCountry({
      variables: {
        user: {
          uid: countryId,
        },
      },
    })
    handleClose()
  }

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Удалить страну</div>
      <hr />
      <div>
        <h2>Вы дествительно хотите удалить страну: {country.name}</h2>
        <hr />
        <button onClick={handleCreate}>Удалить</button>
        <button onClick={handleClose}>Отмена</button>
      </div>
    </Window>
  )
}
