import { useState } from 'react'
import { useQuery } from '@apollo/client'

import {
  AppModal,
  CreateCountryWindow,
  DeleteCountryWindow,
} from 'components/app-modal'
import { GetCountriesQuery } from '@/graphql/Countries'

export function AdminCountries() {
  const { data, loading, error } = useQuery(GetCountriesQuery)
  const [isModal, setModal] = useState(false)

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const countries = data.countries

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }
  return (
    <>
      <div>
        <button onClick={handleOpenModal}>Добавить+</button>
        <input placeholder="Поиск..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Страна</th>
            <th>Столица</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.uid}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>
                <span>👁️</span> | <span>🖊️</span> | <span>🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModal && (
        <AppModal isOpen={isModal} handleClose={handleCloseModal}>
          <CreateCountryWindow handleClose={handleCloseModal} />
          <DeleteCountryWindow handleClose={handleCloseModal} countryId="ss" />
        </AppModal>
      )}
    </>
  )
}
