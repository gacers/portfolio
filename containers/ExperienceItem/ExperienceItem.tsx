import React, { FC, ReactNode } from 'react'
import { afacad } from '@/styles/fonts'
import clsx from 'clsx'
import s from './ExperienceItem.module.css'

const Text: FC<{ children: ReactNode }> = ({ children }) => <span className={clsx(s.text, afacad.className)}>{children}</span>

export interface ExperienceItemProps {
  company: string
  date: string
  description: string[]
  skills?: string
  title: string
}

const ExperienceItem: FC<ExperienceItemProps> = ({ company, date, description, skills, title }) => {
  return (
    <li className={s['experience-item']}>
      <Text>
        <strong>{company}</strong> / {title}
      </Text>

      <Text>{date}</Text>

      {skills && (
        <Text>{skills}</Text>
      )}

      <ul className={s['description-list']}>
        {description.map((item, index) => (
          <li key={index} className={s['description-item']}>
            <Text>{item}</Text>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default ExperienceItem
