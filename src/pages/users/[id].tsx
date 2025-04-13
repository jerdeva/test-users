import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { User } from '@/types/user'


export default function UserDetails() {
  const { query } = useRouter()
  const { id } = query
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(setUser)
    }
  }, [id])

  if (!user) return <div className="p-4">Завантаження...</div>

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold ">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
      <p>Website: {user.website}</p>
      <p>Address: {user.address?.city}, {user.address?.street}</p>

      <Link href={{ pathname: '/', query }} className="text-blue-500 mt-4 inline-block">
        ← Назад до списку
      </Link>
    </div>
  )
}
