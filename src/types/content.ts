export type Lang = 'java' | 'cpp' | 'python' | 'go' | 'js' | 'ts'
export type DiffTag = 'breaking' | 'similar' | 'gotcha'
export type CalloutVariant = 'warn' | 'info' | 'alert'

export interface CodePanel {
  lang: Lang
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

/** A tool/concept mapping from one language to another ecosystem's equivalent. */
export interface EcoMapping {
  /** Tool or concept name in the source language (e.g. "Maven") */
  from: string
  /** Source language label (e.g. "Java") */
  fromLabel: string
  /** Target language equivalents. Prefix with ★ to mark as recommended. */
  to: string[]
  note?: string
}

export interface Section {
  id: string
  slug: string
  group: 'basics' | 'differences' | 'ecosystem'
  title: string
  description: string
  concepts: ConceptEntry[]
  /** Ecosystem mapping cards — for group: 'ecosystem' sections */
  ecoMappings?: EcoMapping[]
}
