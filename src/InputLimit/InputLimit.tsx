import React from 'react';
import s from './InputLimit.module.css';

type SuperInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: number
  title:string

}
const SuperInput = ({ onChange, value, title }: SuperInputProps) => {
  return (
  <div className={s.mainDiv}> 
    <span className={s.span}> {title} </span>
    <div style={{display:'inline-block'}}>
      <input type='number' onChange={onChange} className={s.input} value={value} />
    </div>
    </div>
  )
}
export default SuperInput