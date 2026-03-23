import type { Section, Lang } from '../../types/content'
import { ConceptCard } from '../ConceptCard/ConceptCard'
import { EcoCard } from '../EcoCard/EcoCard'
import { TagLegend } from '../TagLegend/TagLegend'
import styles from './SectionView.module.css'

const GROUP_LABELS: Record<string, string> = {
  basics: 'Language Basics',
  differences: 'Key Differences',
  ecosystem: 'Ecosystem',
}

interface Props {
  section: Section
  fromLang: Lang
  toLang: Lang
}

export function SectionView({ section, fromLang, toLang }: Props) {
  const hasTags = section.concepts.some((c) => c.tag)

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.group}>{GROUP_LABELS[section.group]}</div>
        <h1 className={styles.title}>{section.title}</h1>
        <p className={styles.description}>{section.description}</p>
        {hasTags && <TagLegend />}
      </div>

      {section.ecoMappings && section.ecoMappings.length > 0 && (
        <div className={styles.ecoGrid}>
          {section.ecoMappings.map((mapping) => (
            <EcoCard key={`${mapping.fromLabel}-${mapping.from}`} mapping={mapping} />
          ))}
        </div>
      )}

      {section.concepts.map((concept) => (
        <ConceptCard
          key={concept.id}
          concept={concept}
          fromLang={fromLang}
          toLang={toLang}
        />
      ))}
    </div>
  )
}
