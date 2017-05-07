/**
 * Created by zhuguoqing on 2017/5/5.
 */

import  colors from './colors'
import  styles from './styles'

function styleWithCombine(target,from1,from2,from3,from4) {
  return {...target,...from1,...from2,...from3,...from4}
}

module.exports = {
  themeColors:colors,
  themeStyles:styles,
  styleCombine:styleWithCombine,
}