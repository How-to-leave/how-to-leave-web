import { AdminLayout } from 'layouts/Admin'
import { AdminCountries } from 'components/admin-countries'
import { ClientOnly } from 'graphql/ClientOnly'

export default function CountriesPage() {
  return (
    <AdminLayout title="Страны">
      <ClientOnly>
        <AdminCountries />
      </ClientOnly>
    </AdminLayout>
  )
}
