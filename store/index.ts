import { IConfig } from 'overmind'
import { namespaced } from 'overmind/config'
import { createHook } from 'overmind-react'

import * as ui from './ui'
import * as pages from './pages'

export const config = namespaced({
  pages,
  ui,
})

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>()
