import Router from 'next/router'

import { MainLayout } from 'layouts/Main'

export default function SearchPage() {
  const handleClick = () => {
    Router.back()
  }

  return (
    <MainLayout title="Поиск">
      <h1>Поиск</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </MainLayout>
  )
}
