import axios from 'axios'
import { useQuery } from 'react-query'

export const useCourses = () => {
  const query = useQuery('courses', async () => {
    const res = await axios('http://localhost:4000/courses')
    return res.data
  })
  return query
}
