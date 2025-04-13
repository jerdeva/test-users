import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export const useUsers = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
  return { users: data, error, isLoading }
}
