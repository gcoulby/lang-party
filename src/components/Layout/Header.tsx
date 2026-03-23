import type { AppState, SourceFilter } from '../../hooks/useAppState'
import type { TargetLang } from '../../types/content'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Header.module.css'

interface Props {
  sourceFilter: AppState['sourceFilter']
  targetLang: AppState['targetLang']
  onSourceChange: (v: SourceFilter) => void
  onTargetChange: (v: TargetLang) => void
  onSectionChange: (id: string) => void
  menuOpen: boolean
  onMenuToggle: () => void
}

const SOURCE_PILLS: { value: SourceFilter; label: string }[] = [
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'both', label: 'Both' },
]

const TARGET_PILLS: { value: TargetLang; label: string }[] = [
  { value: 'js', label: 'JS' },
  { value: 'ts', label: 'TS' },
]

export function Header({
  sourceFilter,
  targetLang,
  onSourceChange,
  onTargetChange,
  onSectionChange,
  menuOpen,
  onMenuToggle,
}: Props) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuBtn}
        onClick={onMenuToggle}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="sidebar-nav"
      >
        <span className={styles.menuIcon} aria-hidden="true">
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      <div className={styles.logo} aria-label="lang.party">
        lang<span>.</span>party
      </div>

      <SearchBar onSelect={onSectionChange} />

      <div className={styles.controls}>
        <span className={styles.label}>from</span>
        <div className={styles.pillGroup} role="group" aria-label="Source language">
          {SOURCE_PILLS.map(({ value, label }) => (
            <button
              key={value}
              className={styles.pill}
              data-active={sourceFilter === value ? 'true' : 'false'}
              data-lang={value}
              onClick={() => onSourceChange(value)}
              aria-pressed={sourceFilter === value}
            >
              {label}
            </button>
          ))}
        </div>

        <span className={styles.label}>to</span>
        <div className={styles.pillGroup} role="group" aria-label="Target language">
          {TARGET_PILLS.map(({ value, label }) => (
            <button
              key={value}
              className={styles.pill}
              data-active={targetLang === value ? 'true' : 'false'}
              data-lang={value}
              onClick={() => onTargetChange(value)}
              aria-pressed={targetLang === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
