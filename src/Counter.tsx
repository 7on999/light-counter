import React from 'react';
import s from './Counter.module.css';
import SuperButton from './SuperButton';

const Counter = () => {

  const topLimit = 7;
  const botLimit=0;

  const [count, setCount] = React.useState<number>(botLimit)
  const [dangerBottomValue, setDangerBottomValue] = React.useState<boolean>(false)
  const [warnIncorrectInput, setWarnIncorrectInput] = React.useState<boolean>(false)
  const [valueInput, setInputValue] = React.useState<number>(topLimit)
  const [limit, setLimit] = React.useState<number>(topLimit)

  const increaseCount = () => {
    setDangerBottomValue(false);
    setWarnIncorrectInput(false);
    setCount(prevCount => prevCount + 1)
  }

  const decrementCount = () => {
    if (count === 1) {
      setDangerBottomValue(true);
    }
    setCount(prevCount => prevCount - 1)
    setWarnIncorrectInput(false);
  }


  const setLimitOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > count) {
      setWarnIncorrectInput(false)
      setInputValue(+e.currentTarget.value)
      setLimit(+e.currentTarget.value)
    } else {
      setWarnIncorrectInput(true)
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className={s.mainDiv} >
        <textarea value={count} className={`${s.textareaDefolt} ${count === +limit || dangerBottomValue ? s.textareaWarn : ''}`} />
        <div>
          <SuperButton onClick={increaseCount} disabled={count === +limit} tittle={'+'} />
          <SuperButton onClick={decrementCount} disabled={count === botLimit} tittle={'-'} />
          <div>
            <span style={{ fontSize: '10px' }}> введите верхний предел счетчика </span>
            <div>
              <input type='number' onChange={(e) => { setLimitOnChange(e) }} className={s.input} value={valueInput} />
            </div>
          </div>
          <SuperButton disabled={count===botLimit} onClick={reset} tittle={'reset'} />
        </div>
      </div>
      {count === +limit && <span className={s.spanWarn}> Превышен предел. Дальше счетчик не пойдет </span>}
      {dangerBottomValue &&  <span className={s.spanWarn}> Спуститься вниз тоже не получится </span>}
      {warnIncorrectInput && <span className={s.spanWarn}> Введите корректное значение </span>}
    </>
  )
}

export default Counter








// import React from 'react';
// import s from './Counter.module.css';

// const Counter = () => {
//   const [count, setCount] = React.useState<number>(0)

//   const increaseCount = ()=>{
//     setCount(prevCount=>prevCount+1)
//   }

//   const decrementCount = ()=>{
//     setCount(prevCount=>prevCount-1)
//   }

//   return (
//     <>
//     <div style={{ margin: '20px', display: 'inline-block', border: '2px solid blue', width: '100px', height: '100px' }} >
//       <textarea value={count} className={`${s.textareaDefolt} ${count===5?s.textareaWarn:''}`} />
//       <div>
//         <button style={{margin:'10px', width:'25px', textAlign:'center'}} onClick={increaseCount} disabled={count===5}> + </button>
//         <button style={{margin:'10px', width:'25px', textAlign:'center'}} onClick={decrementCount} disabled={count===0}> - </button>
//       </div>
//     </div>
//     { count===5 &&<div>
//       <span style={{color: 'orange'}}> Превышен предел. Дальше счетчик не пойдет </span>
//     </div>}
//     </>
//   )
// }

// export default Counter