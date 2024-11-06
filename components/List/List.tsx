import React, { ReactNode } from 'react'
import clsx from 'clsx'
import s from './List.module.css'

interface ListProps {
  children: ReactNode
  className?: string | null
}

const List = ({ children, className = null }: ListProps) => {
  return (
    <ul
      className={clsx(s.root, {
        [`${className}`]: className,
      })}
    >
      {children}
    </ul>
  )
}

export default List
