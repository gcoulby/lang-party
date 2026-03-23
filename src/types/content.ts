export type SourceLang = 'java' | 'cpp'
export type TargetLang = 'js' | 'ts'
export type DiffTag = 'breaking' | 'similar' | 'gotcha'
export type CalloutVariant = 'warn' | 'info' | 'alert'

export interface CodePanel {
  lang: SourceLang | TargetLang
  code: string
}

export interface ConceptEntry {
  id: string
  title: string
  tag?: DiffTag
  note?: string
  panels: CodePanel[]
  callout?: {
    variant: CalloutVariant
    content: string
  }
}

export interface Section {
  id: string
  slug: string
  group: 'basics' | 'differences' | 'ecosystem'
  title: string
  description: string
  concepts: ConceptEntry[]
}
