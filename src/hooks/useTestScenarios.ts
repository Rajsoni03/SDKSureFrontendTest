import { useQuery } from '@tanstack/react-query'
import { testScenariosService } from '@/services/testScenarios'

export interface TestScenarioFilters {
  search?: string
  ordering?: string
  page?: number
}

export function useTestScenarios(filters: TestScenarioFilters) {
  return useQuery({
    queryKey: ['test-scenarios', filters],
    queryFn: () => testScenariosService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
