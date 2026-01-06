import { useQuery } from '@tanstack/react-query'
import { testRunsService } from '@/services/testRuns'

export interface TestRunFilters {
  label?: number
  name?: string
  search?: string
  ordering?: string
  page?: number
  scenario?: number
}

export function useTestRuns(filters: TestRunFilters) {
  return useQuery({
    queryKey: ['test-runs', filters],
    queryFn: () => testRunsService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
