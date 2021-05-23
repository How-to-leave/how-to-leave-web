import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { Window } from './styles'
import { CreateUserMutation } from '@/graphql/Users'

interface CreateUserWindowProps {
  handleClose: () => void
}

export function CreateUserWindow({ handleClose }: CreateUserWindowProps) {
  const [createUser] = useMutation(CreateUserMutation)
  const [inputEmail, setInputEmail] = useState('email@her.com' + Math.random())
  const [inputFirstName, setInputFirstName] = useState('Yaro' + Math.random())
  const [inputLastName, setInputLastName] = useState('Tata' + Math.random())

  const handleCreate = () => {
    createUser({
      variables: {
        user: {
          email: inputEmail,
          firstName: inputFirstName,
          lastName: inputLastName,
        },
      },
    })
    handleClose()
  }

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Добавить страну</div>
      <hr />
      <div>
        <input
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <input
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
        />
        <br />
        <input
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
        />
        <hr />
        <button onClick={handleCreate}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  )
}
