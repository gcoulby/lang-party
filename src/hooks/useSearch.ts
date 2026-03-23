import { useState, useEffect, useRef, useCallback } from 'react'
import type { SearchResult } from '../workers/searchIndex'

const DEBOUNCE_MS = 120

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const workerRef = useRef<Worker | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/search.worker.ts', import.meta.url),
      { type: 'module' },
    )
    workerRef.current = worker

    worker.onmessage = (e: MessageEvent<SearchResult[]>) => {
      setResults(e.data)
    }

    return () => {
      worker.terminate()
      workerRef.current = null
    }
  }, [])

  const handleQuery = useCallback((q: string) => {
    setQuery(q)

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    if (q.trim().length === 0) {
      setResults([])
      return
    }

    timerRef.current = setTimeout(() => {
      workerRef.current?.postMessage(q)
    }, DEBOUNCE_MS)
  }, [])

  const clear = useCallback(() => {
    setQuery('')
    setResults([])
  }, [])

  return { query, results, setQuery: handleQuery, clear }
}
