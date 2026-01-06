import { useQuery } from '@tanstack/react-query'
import { labelsService } from '@/services/labels'

export interface LabelFilters {
  search?: string
  ordering?: string
  page?: number
}

export function useLabels(filters: LabelFilters) {
  return useQuery({
    queryKey: ['labels', filters],
    queryFn: () => labelsService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
