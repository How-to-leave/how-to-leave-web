import { MainLayout } from 'layouts/Main'
import { AppButton } from 'components/app-button'

export default function HomePage() {
  return (
    <MainLayout title="Главная">
      <h1>СЪЕБИСЬ ПОСКОРЕЕ</h1>
      <AppButton />
      <hr />
    </MainLayout>
  )
}
