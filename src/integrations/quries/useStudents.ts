import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { students } from 'integrations/api/students'
import { GenericObject } from 'types/globals'

export const useStudentsQuery = () => {
  const query = useQuery({
    queryKey: ['STUDENTS_LIST'],
    queryFn: () => students(),
  })
  return query as UseQueryResult<GenericObject>
}
