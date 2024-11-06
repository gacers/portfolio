'use client'

import React, { ReactNode } from 'react'
import { Button, Container, Content, H, List, ListItem } from '@/components'
import { useGlobalDispatch } from '@/context/GlobalContext'
import Alteon from '@/containers/Alteon/Alteon'
import Apple from '@/containers/Apple/Apple'
import OpenAI from '@/containers/OpenAI/OpenAI'
import s from './Work.module.css'

function Work() {
  const { setSlidingPanelContent } = useGlobalDispatch()

  const launchSite = (site: ReactNode) => setSlidingPanelContent(site)

  const buttonData = [
    {
      label: 'OpenAI Frontend Development', 
      onClick: () => launchSite(<OpenAI />)
    },
    { 
      label: 'Apple Front End Development',
      onClick: () => launchSite(<Apple />)
    },
    {
      label: 'Alteon Front End Development',
      onClick: () => launchSite(<Alteon />)
    },
  ]

  return (
    <main>
      <Container direction='column'>
        <H>Work</H>

        <Content
          className={s.content}
          right={
            <List>
              {buttonData.map(({ label, onClick }) => (
                <ListItem key={label} className={s.item}>
                  <Button className={s.button} onClick={onClick}>
                    {label}
                  </Button>
                </ListItem>
              ))}
            </List>
          }
        />
      </Container>
    </main>
  )
}

export default Work
