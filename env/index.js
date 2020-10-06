import { parallel, series } from 'gulp'
import { copy } from './tasks/misc'
import { scripts } from './tasks/scripts'
import { serve } from './tasks/serve'
import { styles } from './tasks/styles'
import { templating } from './tasks/templating'

export const dev = series(copy, parallel(templating, styles, scripts), serve)
export const build = series(copy, parallel(templating, styles, scripts))
export default dev
