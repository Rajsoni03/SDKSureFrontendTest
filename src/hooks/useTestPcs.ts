import { useQuery } from '@tanstack/react-query'
import { testPcsService } from '@/services/testPcs'

export interface TestPcFilters {
  search?: string
  ordering?: string
  page?: number
  status?: string
}

export function useTestPcs(filters: TestPcFilters) {
  return useQuery({
    queryKey: ['test-pcs', filters],
    queryFn: () => testPcsService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
