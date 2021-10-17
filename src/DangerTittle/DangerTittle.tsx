import React from 'react';
import s from './DangerTittle.module.css'

type DangerTittleProps = {
  count: number
  realLimitTop: number
  warnExtremeBottomValue: boolean
  warnIncorrectInputBotLimit: boolean
  warnIncorrectInputTopLimit: boolean
}

const DangerTittle = ({ count, realLimitTop, warnExtremeBottomValue, warnIncorrectInputTopLimit, warnIncorrectInputBotLimit }: DangerTittleProps) => {
  return (
    <div className={s.title}>
      {!(count === realLimitTop) && !warnExtremeBottomValue && !warnIncorrectInputTopLimit && !warnIncorrectInputBotLimit && <span style={{ visibility: 'hidden' }} className={s.spanWarn}> nothingToSay </span>}
      {count === realLimitTop && <span className={s.spanWarn}> Превышен предел. Дальше счетчик не пойдет </span>}
      {warnExtremeBottomValue && <span className={s.spanWarn}> Спуститься вниз тоже не получится </span>}
      {warnIncorrectInputTopLimit && <span className={s.spanWarn}> Установленное в счетчик значение превышает верхний предел, который вы пытаетесь задать. Введите корректное значение </span>}
      {warnIncorrectInputBotLimit && <span className={s.spanWarn}> Установленное в счетчик значение меньше чем нижняя граница, который вы пытаетесь задать. Введите корректное значение </span>}
    </div>

  )
}

export default DangerTittle