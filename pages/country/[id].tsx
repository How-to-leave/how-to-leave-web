import { useRouter } from 'next/router'

import { MainLayout } from 'layouts/Main'

export default function CountryPage() {
  const router = useRouter()

  const countryId = router.query.id

  const handleClick = () => {
    router.push('/')
  }

  return (
    <MainLayout title={'Страна ' + countryId}>
      <h1>Страна {router.query.id}</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </MainLayout>
  )
}
