import React from 'react'
import styles from './MainButton.module.css'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  hasEntered: boolean
}

const MainButton = ({ onClick, hasEntered }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={(e) => onClick(e)}
        type='button'
      >
        { hasEntered ? 'Exit sphere' : 'Enter sphere' }
      </button>
    </div>
  )
}

export default MainButton
