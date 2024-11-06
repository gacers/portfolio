import React, { ReactNode } from 'react'
import clsx from 'clsx'
import s from './ListItem.module.css'

interface ListItemProps {
  children: ReactNode
  className?: string | null
}

const ListItem = ({ children, className = null }: ListItemProps) => {
  return (
    <li
      className={clsx(s.root, {
        [`${className}`]: className,
      })}
    >
      {children}
    </li>
  )
}

export default ListItem