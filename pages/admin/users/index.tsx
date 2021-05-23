import { AdminLayout } from 'layouts/Admin'
import { AdminUsers } from 'components/admin-users'
import { ClientOnly } from 'graphql/ClientOnly'

export default function UsersPage() {
  return (
    <AdminLayout title="Пользователи">
      <ClientOnly>
        <AdminUsers />
      </ClientOnly>
    </AdminLayout>
  )
}
