import Link from 'next/link'
import type { User } from '@/types/user'

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg p-5 h-full flex flex-col justify-between transition-all duration-300">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 text-sm mb-1">📧 <span className="font-medium">{user.email}</span></p>
        <p className="text-gray-600 text-sm mb-1">🏢 <span className="font-medium">{user.company?.name}</span></p>
        <p className="text-gray-600 text-sm">📍 <span className="font-medium">{user.address?.city}</span></p>
      </div>

      <Link
        href={{ pathname: `/users/${user.id}` }}
        className="mt-4 text-sm text-blue-600 font-medium hover:underline"
      >
        Детальніше →
      </Link>
    </div>
  )
}
