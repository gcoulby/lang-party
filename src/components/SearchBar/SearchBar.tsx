import { useEffect, useRef, useState, useCallback } from 'react'
import { useSearch } from '../../hooks/useSearch'
import type { SearchResult } from '../../workers/searchIndex'
import styles from './SearchBar.module.css'

interface Props {
  onSelect: (sectionId: string) => void
}

export function SearchBar({ onSelect }: Props) {
  const { query, results, setQuery, clear } = useSearch()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // Open on / key or Cmd/Ctrl+K when input not focused
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      const inInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'

      if ((e.key === '/' && !inInput) || ((e.metaKey || e.ctrlKey) && e.key === 'k')) {
        e.preventDefault()
        inputRef.current?.focus()
        setOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Sync open state with results
  useEffect(() => {
    if (results.length > 0) setOpen(true)
    setActiveIndex(-1)
  }, [results])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleFocus() {
    if (query.length > 0 && results.length > 0) setOpen(true)
  }

  function handleBlur() {
    // Delay so click on result fires first
    setTimeout(() => setOpen(false), 150)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const target = results[activeIndex >= 0 ? activeIndex : 0]
      if (target) selectResult(target)
    } else if (e.key === 'Escape') {
      clear()
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const selectResult = useCallback(
    (result: SearchResult) => {
      onSelect(result.sectionId)
      clear()
      setOpen(false)
      inputRef.current?.blur()
    },
    [onSelect, clear],
  )

  return (
    <div className={styles.wrapper} role="search">
      <div className={styles.inputWrapper}>
        <span className={styles.icon} aria-hidden="true">⌕</span>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search… (/ or ⌘K)"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          aria-label="Search sections and concepts"
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            className={styles.clear}
            onClick={() => { clear(); setOpen(false); inputRef.current?.focus() }}
            aria-label="Clear search"
            tabIndex={-1}
          >
            ×
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <ul
          id="search-results"
          ref={listRef}
          className={styles.dropdown}
          role="listbox"
          aria-label="Search results"
        >
          {results.map((result, i) => (
            <li
              key={`${result.sectionId}-${result.conceptId ?? 'section'}`}
              id={`search-result-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              className={styles.item}
              data-active={i === activeIndex ? 'true' : 'false'}
              onMouseDown={(e) => { e.preventDefault(); selectResult(result) }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {result.conceptTitle ? (
                <>
                  <span className={styles.itemConcept}>{result.conceptTitle}</span>
                  <span className={styles.itemSection}>{result.sectionTitle}</span>
                </>
              ) : (
                <span className={styles.itemSection}>{result.sectionTitle}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
