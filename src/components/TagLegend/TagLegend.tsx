import styles from './TagLegend.module.css'

const TAGS = [
  {
    tag: 'similar',
    label: 'similar',
    desc: 'Same concept, different syntax. Works the way you expect.',
  },
  {
    tag: 'breaking',
    label: 'breaking',
    desc: 'Same name or idea — but behavior differs significantly. High bug risk.',
  },
  {
    tag: 'gotcha',
    label: 'gotcha',
    desc: 'Easy mistake coming from another language. Read carefully.',
  },
] as const

export function TagLegend() {
  return (
    <dl className={styles.legend} aria-label="Tag legend">
      {TAGS.map(({ tag, label, desc }) => (
        <div key={tag} className={styles.item}>
          <dt>
            <span className={styles.tag} data-tag={tag}>{label}</span>
          </dt>
          <dd className={styles.desc}>{desc}</dd>
        </div>
      ))}
    </dl>
  )
}
