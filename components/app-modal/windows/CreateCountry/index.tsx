import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { Window } from './styles'
import { CreateCountryMutation } from '@/graphql/Countries'

interface CreateCountryWindowProps {
  handleClose: () => void
}

export function CreateCountryWindow({ handleClose }: CreateCountryWindowProps) {
  const [createCountry, { data }] = useMutation(CreateCountryMutation)
  const [inputName, setInputName] = useState('Страна' + Math.random())
  const [inputCapital, setInputCapital] = useState('Столица' + Math.random())

  const handleCreate = () => {
    createCountry({
      variables: {
        country: {
          name: inputName,
          capital: inputCapital,
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
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <input
          value={inputCapital}
          onChange={(e) => setInputCapital(e.target.value)}
        />
        <hr />
        <button onClick={handleCreate}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  )
}
