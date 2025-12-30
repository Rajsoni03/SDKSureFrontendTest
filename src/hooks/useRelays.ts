import { useQuery } from '@tanstack/react-query'
import { relaysService } from '@/services/relays'

export interface RelayFilters {
  search?: string
  ordering?: string
  page?: number
  status?: string
}

export function useRelays(filters: RelayFilters) {
  return useQuery({
    queryKey: ['relays', filters],
    queryFn: () => relaysService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
