import { useState, useCallback } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { SectionView } from '../SectionView/SectionView'
import { SECTIONS } from '../../content/index'
import type { AppState } from '../../hooks/useAppState'
import styles from './Layout.module.css'

interface Props {
  state: AppState
}

export function Layout({ state }: Props) {
  const section = SECTIONS.find((s) => s.id === state.activeSectionId) ?? SECTIONS[0]
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSectionChange = useCallback(
    (id: string) => {
      state.setActiveSectionId(id)
      setMenuOpen(false)
    },
    [state],
  )

  return (
    <div className={styles.shell}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <Header
        fromLang={state.fromLang}
        toLang={state.toLang}
        onFromChange={state.setFromLang}
        onToChange={state.setToLang}
        onSectionChange={handleSectionChange}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((o) => !o)}
      />

      <div className={styles.body}>
        {menuOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        <Sidebar
          activeSectionId={state.activeSectionId}
          onSectionChange={handleSectionChange}
          mobileOpen={menuOpen}
        />
        <main id="main-content" className={styles.main} tabIndex={-1}>
          <SectionView
            section={section}
            fromLang={state.fromLang}
            toLang={state.toLang}
          />
        </main>
      </div>
    </div>
  )
}
