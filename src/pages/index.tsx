import { useRouter } from 'next/router'
import { useUsers } from '@/hooks/useUsers'
import UserCard from '@/components/UserCard'
import Filters from '@/components/Filters'
import type { User } from '@/types/user'


export default function Home() {
    const { users, isLoading, error } = useUsers()
    const router = useRouter()
    const { name = '', company = '', city = '' } = router.query

    const filteredUsers = (users as User[])?.filter((user) => {
        return (
            user.name.toLowerCase().includes((name as string).toLowerCase()) &&
            (company ? user.company.name === company : true) &&
            (city ? user.address.city === city : true)
        )
    })


    if (isLoading) return <div className="p-4">Loading...</div>
    if (error) return <div className="p-4 text-red-500">Error loading users.</div>

    return (
<div className="p-4 bg-gray-50 min-h-screen">
  <Filters users={users} />
  
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {filteredUsers?.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
</div>

    )
}