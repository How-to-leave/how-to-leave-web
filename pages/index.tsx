import { HomeContainer } from 'containers/Home'
import { BaseLayout } from 'layouts/Base'

export default function HomePage() {
  return (
    <BaseLayout title="Главная">
      <HomeContainer />
    </BaseLayout>
  )
}
