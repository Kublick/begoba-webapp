import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'

export const useCourses = (): UseQueryResult<any, unknown> => {
  const query = useQuery('courses', async () => {
    const res = await axios('http://localhost:4000/courses')
    return res.data
  })
  return query
}
