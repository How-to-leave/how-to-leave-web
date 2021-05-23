import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { AppModal, CreateUserWindow } from 'components/app-modal'
import { GetUsersQuery } from '@/graphql/Users'

export function AdminUsers() {
  const { data, loading, error } = useQuery(GetUsersQuery)
  const [isModal, setModal] = useState(false)

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }
  const users = data.users

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
            <th>Почта</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {user.email} {user.emailVerified ? '✔️' : '❌'}
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <span>🖊️</span> | <span>🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModal && (
        <AppModal isOpen={isModal} handleClose={handleCloseModal}>
          <CreateUserWindow handleClose={handleCloseModal} />
        </AppModal>
      )}
    </>
  )
}
