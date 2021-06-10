import { useRouter } from 'next/router'

import { BaseLayout } from 'layouts/Base'

export default function CountryPage() {
  const router = useRouter()

  const countryId = router.query.id

  const handleClick = () => {
    router.push('/')
  }

  return (
    <BaseLayout title={'Страна ' + countryId}>
      <h1>Страна {router.query.id}</h1>
      <div>
        <button onClick={handleClick}>Назад</button>
      </div>
    </BaseLayout>
  )
}
