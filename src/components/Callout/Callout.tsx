import type { CalloutVariant } from '../../types/content'
import styles from './Callout.module.css'

interface Props {
  variant: CalloutVariant
  content: string
}

/**
 * Renders markdown-lite: **bold** and `code` spans.
 */
function renderContent(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let m: RegExpExecArray | null

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const raw = m[0]
    if (raw.startsWith('**')) {
      parts.push(<strong key={m.index}>{raw.slice(2, -2)}</strong>)
    } else {
      parts.push(<code key={m.index}>{raw.slice(1, -1)}</code>)
    }
    last = m.index + raw.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export function Callout({ variant, content }: Props) {
  return (
    <div className={styles.callout} data-variant={variant} role="note">
      {renderContent(content)}
    </div>
  )
}
