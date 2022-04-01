import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { Lesson } from '../types/types'

export const useCourses = (): UseQueryResult<any, unknown> => {
  const query = useQuery('lessons', async (): Promise<Lesson> => {
    const res = await axios('http://localhost:4000/courses')
    return res.data
  })
  return query
}
