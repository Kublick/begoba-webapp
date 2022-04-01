import React from 'react'
import { useQuery } from 'react-query'

export const VideoApi = () => {
  //   const queryClient = useQueryClient()

  const query = useQuery(
    'courses',
    async () => {
      const response = await fetch('http://localhost:4000/courses')
      const data = await response.json()
      return data
    },
    {
      staleTime: 1000,
      retry: false,
      cacheTime: 1000,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )

  return (
    <div>
      <h1>{query.status}</h1>
    </div>
  )
}
