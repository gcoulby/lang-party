import { useState } from 'react'
import type { SourceLang, TargetLang } from '../types/content'

export type SourceFilter = SourceLang | 'both'

export interface AppState {
  sourceFilter: SourceFilter
  targetLang: TargetLang
  activeSectionId: string
  setSourceFilter: (v: SourceFilter) => void
  setTargetLang: (v: TargetLang) => void
  setActiveSectionId: (id: string) => void
}

export function useAppState(): AppState {
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('both')
  const [targetLang, setTargetLang] = useState<TargetLang>('ts')
  const [activeSectionId, setActiveSectionId] = useState<string>('variables')

  return {
    sourceFilter,
    targetLang,
    activeSectionId,
    setSourceFilter,
    setTargetLang,
    setActiveSectionId,
  }
}
