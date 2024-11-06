import React, { ReactNode } from 'react';
import clsx from 'clsx'
import s from './Container.module.css'

interface ContainerProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'column';
}

const Container: React.FC<ContainerProps> = ({ children, className, direction }) => {
  return (
    <article className={clsx(s.root, {
      [`${className}`]: className,
      [s.column]: direction === 'column',
    })}>
      {children}
    </article>
  )
}

export default Container;
