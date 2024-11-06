'use client'

import React, { FC, ReactNode, MouseEventHandler } from 'react';
import clsx from 'clsx'
import s from './Button.module.css'

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className = null, disabled = false, onClick = () => false }) => {
  return (
    <button
      className={clsx(s.root, {
        [`${className}`]: className,
        'disabled': disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
