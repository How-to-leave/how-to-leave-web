import Router from 'next/router'

import { BaseLayout } from 'layouts/Base'

export default function ErrorPage() {
  const handleClick = () => Router.back()

  return (
    <BaseLayout title="Страница не найдена">
      <h1>Страница не найдена</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </BaseLayout>
  )
}
