import React from 'react';
import s from './SuperButton.module.css';

type buttonProps = {
  onClick: ()=>void
  disabled?:boolean
  tittle: string
}

const SuperButton:React.FC<buttonProps> = ({onClick, disabled, tittle}) => {
  return (
      <button className={s.defolt} 
      onClick={onClick} disabled={disabled}> {tittle} </button>
  )
}

export default SuperButton;