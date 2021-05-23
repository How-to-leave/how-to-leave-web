import { useRouter } from 'next/router'

export default function AdminPage() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/admin/countries')
  }

  return (
    <div>
      <form>
        <input placeholder="Email" />
        <input placeholder="Пароль" />
        <button onClick={handleClick}>Войти</button>
      </form>
    </div>
  )
}
