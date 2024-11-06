import React, { FC, ReactNode } from 'react'
import clsx from 'clsx';
import { Content } from '@/components';
import s from './PageLayout.module.css'


interface PageLayoutProps {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const PageLayout: FC<PageLayoutProps> = ({ left, right, className }) => {
  return (
    <Content
      className={clsx(s.root, {
        [`${className}`]: className,
      })}
      left={left}
      right={right}
      leftClassName={s.left}
    />
  )
}

export default PageLayout;
