import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { philosopher } from '@/styles/fonts'
import s from './H.module.css'

interface HProps {
  appearance?: string | null
  children?: ReactNode
  className?: string
  color?: string | null
  size?: string | null
  theme?: string | null
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: string | null
}

const H: FC<HProps> = ({ appearance = null, children, className, size = null, level = 1, weight = null }) => {
  const classes = clsx(s.root, philosopher.className, {
    [`${className}`]: className,
    [s[`h${level}`]]: level && !appearance,
    [s[`${appearance}-style`]]: appearance,
    [s[`${size}`]]: size,
    [s[`${weight}`]]: weight,
  })

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return <Tag className={classes}>{children}</Tag>
}

export default H
