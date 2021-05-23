import Router from 'next/router'

import { MainLayout } from 'layouts/Main'

export default function ProfilePage() {
  const handleClick = () => {
    Router.back()
  }
  return (
    <MainLayout title="Профиль">
      <h1>Профиль</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </MainLayout>
  )
}
