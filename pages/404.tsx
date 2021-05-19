import Router from 'next/router'

import MainLayout from 'layouts/MainLayout'

export default function ErrorPage() {
  const handleClick = () => Router.back()

  return (
    <MainLayout title="Страница не найдена">
      <h1>Страница не найдена</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </MainLayout>
  )
}
