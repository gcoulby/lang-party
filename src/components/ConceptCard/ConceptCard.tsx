import type { ConceptEntry } from '../../types/content'
import type { SourceFilter } from '../../hooks/useAppState'
import type { TargetLang } from '../../types/content'
import { CodePanel } from '../CodePanel/CodePanel'
import { Callout } from '../Callout/Callout'
import styles from './ConceptCard.module.css'

interface Props {
  concept: ConceptEntry
  sourceFilter: SourceFilter
  targetLang: TargetLang
}

const TAG_LABELS: Record<string, string> = {
  breaking: 'breaking',
  similar: 'similar',
  gotcha: 'gotcha',
}

export function ConceptCard({ concept, sourceFilter, targetLang }: Props) {
  const visiblePanels = concept.panels.filter((p) => {
    if (p.lang === 'java' && sourceFilter === 'cpp') return false
    if (p.lang === 'cpp' && sourceFilter === 'java') return false
    if (p.lang === 'js' && targetLang === 'ts') return false
    if (p.lang === 'ts' && targetLang === 'js') return false
    return true
  })

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{concept.title}</h3>
        {concept.tag && (
          <span className={styles.tag} data-tag={concept.tag}>
            {TAG_LABELS[concept.tag]}
          </span>
        )}
        {concept.note && <span className={styles.note}>{concept.note}</span>}
      </div>

      <div
        className={styles.panels}
        data-count={String(visiblePanels.length)}
      >
        {visiblePanels.map((panel) => (
          <CodePanel key={panel.lang} panel={panel} />
        ))}
      </div>

      {concept.callout && (
        <div className={styles.calloutWrap}>
          <Callout variant={concept.callout.variant} content={concept.callout.content} />
        </div>
      )}
    </article>
  )
}
