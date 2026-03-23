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

  return (
    <div className={styles.shell}>
      <Header
        sourceFilter={state.sourceFilter}
        targetLang={state.targetLang}
        onSourceChange={state.setSourceFilter}
        onTargetChange={state.setTargetLang}
      />
      <div className={styles.body}>
        <Sidebar
          activeSectionId={state.activeSectionId}
          onSectionChange={state.setActiveSectionId}
        />
        <main className={styles.main}>
          <SectionView
            section={section}
            sourceFilter={state.sourceFilter}
            targetLang={state.targetLang}
          />
        </main>
      </div>
    </div>
  )
}
