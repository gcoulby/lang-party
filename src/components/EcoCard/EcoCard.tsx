import type { EcoMapping } from '../../types/content'
import styles from './EcoCard.module.css'

interface Props {
  mapping: EcoMapping
}

export function EcoCard({ mapping }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.from}>{mapping.fromLabel}</div>
      <div className={styles.label}>{mapping.from}</div>
      <div className={styles.chips}>
        {mapping.to.map((tool) => {
          const recommended = tool.startsWith('★')
          const label = recommended ? tool.slice(1).trim() : tool
          return (
            <span
              key={tool}
              className={styles.chip}
              data-recommended={recommended ? 'true' : 'false'}
            >
              {label}
            </span>
          )
        })}
      </div>
      {mapping.note && <div className={styles.note}>{mapping.note}</div>}
    </div>
  )
}
