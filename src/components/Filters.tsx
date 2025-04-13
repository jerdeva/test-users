import { useRouter } from 'next/router'
import { useMemo } from 'react'
import type { User } from '@/types/user'

export default function Filters({ users }: { users: User[] }) {
  const router = useRouter()
  const { name = '', company = '', city = '' } = router.query

  const uniqueCompanies = useMemo(
    () => [...new Set(users.map((u) => u.company?.name))],
    [users]
  )

  const uniqueCities = useMemo(
    () => [...new Set(users.map((u) => u.address?.city))],
    [users]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    router.push({
      pathname: '/',
      query: { ...router.query, [name]: value },
    })
  }

  return (
    <div className="mb-6 p-4 bg-white border rounded-2xl shadow-md  ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
        <input
          type="text"
          name="name"
          value={name as string}
          onChange={handleChange}
          placeholder="🔍 Пошук за іменем"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          name="company"
          value={company as string}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">🏢 Усі компанії</option>
          {uniqueCompanies.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          name="city"
          value={city as string}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">🌍 Усі міста</option>
          {uniqueCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
