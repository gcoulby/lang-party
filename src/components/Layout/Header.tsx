import type { AppState, Lang } from '../../hooks/useAppState'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Header.module.css'

interface Props {
  fromLang: AppState['fromLang']
  toLang: AppState['toLang']
  onFromChange: (v: Lang) => void
  onToChange: (v: Lang) => void
  onSectionChange: (id: string) => void
  menuOpen: boolean
  onMenuToggle: () => void
}

const LANG_OPTIONS: { value: Lang; label: string }[] = [
  { value: 'java',   label: 'Java' },
  { value: 'cpp',    label: 'C++' },
  { value: 'python', label: 'Python' },
  { value: 'go',     label: 'Go' },
  { value: 'js',     label: 'JavaScript' },
  { value: 'ts',     label: 'TypeScript' },
]

export function Header({
  fromLang,
  toLang,
  onFromChange,
  onToChange,
  onSectionChange,
  menuOpen,
  onMenuToggle,
}: Props) {
  function handleFromChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value as Lang
    if (val === toLang) onToChange(fromLang)
    onFromChange(val)
  }

  function handleToChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value as Lang
    if (val === fromLang) onFromChange(toLang)
    onToChange(val)
  }

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
        <label className={styles.label} htmlFor="from-lang">from</label>
        <select
          id="from-lang"
          className={styles.select}
          value={fromLang}
          onChange={handleFromChange}
          data-lang={fromLang}
          aria-label="Source language"
        >
          {LANG_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <span className={styles.arrow} aria-hidden="true">→</span>

        <label className={styles.label} htmlFor="to-lang">to</label>
        <select
          id="to-lang"
          className={styles.select}
          value={toLang}
          onChange={handleToChange}
          data-lang={toLang}
          aria-label="Target language"
        >
          {LANG_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    </header>
  )
}
