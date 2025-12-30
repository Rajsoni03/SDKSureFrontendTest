import { useQuery } from '@tanstack/react-query'
import { capabilitiesService } from '@/services/capabilities'

export interface CapabilityFilters {
  search?: string
  ordering?: string
  page?: number
  is_active?: boolean
}

export function useCapabilities(filters: CapabilityFilters) {
  return useQuery({
    queryKey: ['capabilities', filters],
    queryFn: () => capabilitiesService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
