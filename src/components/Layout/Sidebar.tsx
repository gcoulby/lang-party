import type { AppState } from '../../hooks/useAppState'
import styles from './Sidebar.module.css'

interface NavSection {
  id: string
  title: string
  group: 'basics' | 'differences' | 'ecosystem'
}

const NAV_SECTIONS: NavSection[] = [
  { id: 'variables',   title: 'Variables & Types',  group: 'basics' },
  { id: 'functions',   title: 'Functions',           group: 'basics' },
  { id: 'classes',     title: 'Classes & OOP',       group: 'basics' },
  { id: 'interfaces',  title: 'Interfaces',          group: 'basics' },
  { id: 'generics',    title: 'Generics',            group: 'basics' },
  { id: 'errors',      title: 'Error Handling',      group: 'basics' },
  { id: 'async',       title: 'Async',               group: 'basics' },
  { id: 'collections', title: 'Collections',         group: 'basics' },
  { id: 'modules',     title: 'Modules',             group: 'basics' },
  { id: 'conceptual',  title: 'Conceptual Gaps',     group: 'differences' },
  { id: 'gotchas',     title: 'Gotchas',             group: 'differences' },
  { id: 'ecosystem',   title: 'Tool Equivalents',    group: 'ecosystem' },
  { id: 'frameworks',  title: 'UI Frameworks',       group: 'ecosystem' },
]

const GROUP_LABELS: Record<string, string> = {
  basics: 'Language Basics',
  differences: 'Key Differences',
  ecosystem: 'Ecosystem',
}

const GROUPS = ['basics', 'differences', 'ecosystem'] as const

interface Props {
  activeSectionId: AppState['activeSectionId']
  onSectionChange: (id: string) => void
}

export function Sidebar({ activeSectionId, onSectionChange }: Props) {
  return (
    <nav className={styles.sidebar} aria-label="Section navigation">
      {GROUPS.map((group) => {
        const sections = NAV_SECTIONS.filter((s) => s.group === group)
        return (
          <div key={group} className={styles.group}>
            <div className={styles.groupLabel}>{GROUP_LABELS[group]}</div>
            {sections.map(({ id, title }) => (
              <button
                key={id}
                className={styles.navItem}
                data-active={activeSectionId === id ? 'true' : 'false'}
                onClick={() => onSectionChange(id)}
                aria-current={activeSectionId === id ? 'page' : undefined}
              >
                {title}
              </button>
            ))}
          </div>
        )
      })}
    </nav>
  )
}
