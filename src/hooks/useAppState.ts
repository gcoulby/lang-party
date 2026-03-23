import { useState } from 'react'
import type { Lang } from '../types/content'

export type { Lang }

export interface AppState {
  fromLang: Lang
  toLang: Lang
  activeSectionId: string
  setFromLang: (v: Lang) => void
  setToLang: (v: Lang) => void
  setActiveSectionId: (id: string) => void
}

export function useAppState(): AppState {
  const [fromLang, setFromLang] = useState<Lang>('java')
  const [toLang, setToLang] = useState<Lang>('ts')
  const [activeSectionId, setActiveSectionId] = useState<string>('variables')

  return {
    fromLang,
    toLang,
    activeSectionId,
    setFromLang,
    setToLang,
    setActiveSectionId,
  }
}
