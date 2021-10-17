import React from 'react';
import s from './Counter.module.css';
import SuperButton from './SuperButton/SuperButton';
import SuperInput from './InputLimit/InputLimit';
import WarnTittle from './DangerTittle/DangerTittle'


type CounterType = {
  count: number
  realLimitTop: number
  warnExtremeBottomValue: boolean
  increaseCount: () => void
  decrementCount: () => void
  realLimitBot: number
  setLimitOnChangeTopLimit: (e: React.ChangeEvent<HTMLInputElement>) => void
  reset: () => void
  warnIncorrectInputBotLimit: boolean
  warnIncorrectInputTopLimit: boolean
  setLimitOnChangeBotLimit: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Counter = ({ count, realLimitTop, warnExtremeBottomValue,
  increaseCount, realLimitBot, decrementCount, setLimitOnChangeTopLimit, setLimitOnChangeBotLimit, reset,
  warnIncorrectInputTopLimit, warnIncorrectInputBotLimit }: CounterType) => {

  return (
    <>
      <div className={s.mainDiv} >
        <textarea value={count} read-only='true' className={`${s.textareaDefolt} ${count === realLimitTop || 
          warnExtremeBottomValue ? s.textareaWarn : ''}`} />
        <div>
          <SuperButton onClick={increaseCount} disabled={count === realLimitTop} tittle={'+'} />
          <SuperButton onClick={decrementCount} disabled={count === realLimitBot} tittle={'-'} />

          <SuperInput onChange={setLimitOnChangeTopLimit} value={realLimitTop} title={'установите верхний предел счетчика:'} />
          <SuperInput onChange={setLimitOnChangeBotLimit} value={realLimitBot} title={'установите нижний предел счетчика:'} />

          <SuperButton disabled={count === 0} onClick={reset} tittle={'reset'} />
        </div>
      </div>
      <WarnTittle count={count} realLimitTop={realLimitTop} warnExtremeBottomValue={warnExtremeBottomValue}
        warnIncorrectInputTopLimit={warnIncorrectInputTopLimit} warnIncorrectInputBotLimit={warnIncorrectInputBotLimit} />
    </>
  )
}

export default Counter






