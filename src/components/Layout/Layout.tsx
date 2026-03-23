import { Header } from './Header'
import { Sidebar } from './Sidebar'
import type { AppState } from '../../hooks/useAppState'
import styles from './Layout.module.css'

interface Props {
  state: AppState
}

export function Layout({ state }: Props) {
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
          <div className={styles.placeholder}>
            <strong>{state.activeSectionId}</strong>
            <span>Content coming in M3.</span>
          </div>
        </main>
      </div>
    </div>
  )
}
