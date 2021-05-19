import MainLayout from 'layouts/MainLayout'
import Router from 'next/router'

export default function Search() {
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
