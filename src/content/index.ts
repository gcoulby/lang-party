import type { Section } from '../types/content'
import { variables } from './variables'
import { functions } from './functions'
import { classes } from './classes'
import { interfaces } from './interfaces'
import { generics } from './generics'
import { errors } from './errors'
import { async_ } from './async'
import { collections } from './collections'
import { modules } from './modules'
import { conceptual } from './conceptual'
import { gotchas } from './gotchas'
import { ecosystem } from './ecosystem'
import { frameworks } from './frameworks'

export const SECTIONS: Section[] = [
  variables,
  functions,
  classes,
  interfaces,
  generics,
  errors,
  async_,
  collections,
  modules,
  conceptual,
  gotchas,
  ecosystem,
  frameworks,
]
