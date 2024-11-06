import React, { FC, ReactNode } from 'react'
import clsx from 'clsx';
import s from './Content.module.css'

interface ContentProps {
  className?: string;
  left?: ReactNode;
  leftClassName?: string;
  right?: ReactNode;
  rightClassName?: string;
}

const Content: FC<ContentProps> = ({ className, left, leftClassName, right, rightClassName }) => {
  return (
    <section
      className={clsx(s.root, {
        [`${className}`]: className,
      })}
    >
      {left && 
        <div
          className={clsx(s.left, {
            [`${leftClassName}`]: leftClassName,
          })}
        >
          {left}
        </div>
      }
      {right &&
        <div
          className={clsx(s.right, {
            [`${rightClassName}`]: rightClassName,
          })}
        >
          {right}
        </div>
      }
    </section>
  )
}

export default Content;
