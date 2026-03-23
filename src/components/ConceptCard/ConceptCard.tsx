import type { ConceptEntry, Lang } from '../../types/content'
import { CodePanel } from '../CodePanel/CodePanel'
import { Callout } from '../Callout/Callout'
import styles from './ConceptCard.module.css'

interface Props {
  concept: ConceptEntry
  fromLang: Lang
  toLang: Lang
}

const TAG_LABELS: Record<string, string> = {
  breaking: 'breaking',
  similar: 'similar',
  gotcha: 'gotcha',
}

export function ConceptCard({ concept, fromLang, toLang }: Props) {
  const visiblePanels = concept.panels.filter(
    (p) => p.lang === fromLang || p.lang === toLang,
  )

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
