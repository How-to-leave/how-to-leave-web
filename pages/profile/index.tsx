import Router from 'next/router'

import MainLayout from 'layouts/MainLayout'

export default function Profile() {
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
