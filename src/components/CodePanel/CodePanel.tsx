import { highlight } from '../../utils/highlight'
import type { CodePanel as CodePanelData } from '../../types/content'
import styles from './CodePanel.module.css'

const LANG_LABELS: Record<string, string> = {
  java: 'Java',
  cpp: 'C++',
  js: 'JavaScript',
  ts: 'TypeScript',
}

interface Props {
  panel: CodePanelData
}

export function CodePanel({ panel }: Props) {
  const tokens = highlight(panel.code, panel.lang)
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.dot} data-lang={panel.lang} aria-hidden="true" />
        <span className={styles.langName}>{LANG_LABELS[panel.lang] ?? panel.lang}</span>
      </div>
      <pre
        className={styles.pre}
        tabIndex={0}
        aria-label={`${LANG_LABELS[panel.lang] ?? panel.lang} code example`}
      >
        {tokens.map((tok, i) => (
          <span key={i} className={styles[`token-${tok.type}`]}>
            {tok.value}
          </span>
        ))}
      </pre>
    </div>
  )
}
