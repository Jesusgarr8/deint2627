import React from 'react'

interface IProps{
    title: string,
    active: boolean,
    styles: string,
    onClickButton: () => void
}
export default function Button({title, active, styles, onClickButton}: IProps) {
  return (
    <div>
        <button className={styles}
        disabled={!active}
        onClick={onClickButton}
        >{title}</button>

    </div>
  )
}
