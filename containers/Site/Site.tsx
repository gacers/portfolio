import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { afacad } from '@/styles/fonts'
import { H, List, ListItem } from '@/components'
import s from './Site.module.css'

const Section: FC<{ children: ReactNode }> = ({ children }) => <div className={s.section}>{children}</div>

const Text: FC<{ children: ReactNode }> = ({ children }) => <span className={clsx(s.text, afacad.className)}>{children}</span>

const RenderURLS: FC<{ url: string | Array<string> }> = ({ url }) => {
  if (Array.isArray(url)) {
    return (
      <List className={s.list}>
        {url.map((url, index) => (
          <ListItem key={index} className={s.item}>
            <Link href={url}><Text>{url}</Text></Link>
          </ListItem>
        ))}
      </List>
    )
  }

  return <Link href={url} className={s.item}><Text>{url}</Text></Link>
}

interface SiteProps {
  className?: string;
  description?: string;
  role?: string
  skills?: string;
  title?: string;
  url?: string | Array<string>;
  years?: string;
}

const Site: FC<SiteProps> = ({ className, description, role, skills, title, url, years }) => {
  const URL_TITLE = Array.isArray(url) ? 'URLS' : 'URL'

  return (
    <div
      className={clsx(s.root, {
        [`${className}`]: className
      })}
    >
      {title && 
        <Section>
          <H level={2} className={s.title}>{title}</H>
        </Section>
      }

      {url && 
        <Section>
          <span>{URL_TITLE}</span>: <RenderURLS url={url} />
        </Section>
      }

      {years && 
        <Section>
          <p className={s.years}>YEARS:  <Text>{years}</Text></p>
        </Section>
      }

      {role && 
        <Section>
          <p className={s.role}>ROLE:  <Text>{role}</Text></p>
        </Section>
      }
      
      {description && 
        <Section>
          <p className={s.description}>DESCRIPTION:  <Text>{description}</Text></p>
        </Section>
      }

      {skills && 
        <Section>
          <p className={s.skills}>SKILLS:  <Text>{skills}</Text></p>
        </Section>
      }
    </div>
  )
}

export default Site;
