import Router from 'next/router'

import { BaseLayout } from 'layouts/Base'

export default function SearchPage() {
  const handleClick = () => {
    Router.back()
  }

  return (
    <BaseLayout title="Поиск">
      <h1>Поиск</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </BaseLayout>
  )
}
