import Router from 'next/router'

import { BaseLayout } from 'layouts/Base'

export default function ProfilePage() {
  const handleClick = () => {
    Router.back()
  }

  return (
    <BaseLayout title="Профиль">
      <h1>Профиль</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </BaseLayout>
  )
}
