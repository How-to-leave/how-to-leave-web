import MainLayout from 'layouts/MainLayout'
import { Button } from 'components/Button'
import { Users } from 'components/Users'

export default function Home({ users }) {
  return (
    <MainLayout title="Главная">
      <h1>СЪЕБИСЬ ПОСКОРЕЕ</h1>
      <Button />
      <hr />
      <div>
        <Users />
      </div>
    </MainLayout>
  )
}
