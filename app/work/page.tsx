'use client'

import React, { ReactNode, useState } from 'react'
import Form from 'next/form'
import { Button, Container, Content, H, List, ListItem } from '@/components'
import { useGlobalDispatch, useGlobalState } from '@/context/GlobalContext'
import Alteon from '@/containers/Alteon/Alteon'
import Apple from '@/containers/Apple/Apple'
import AppleTvPr from '@/containers/AppleTvPr/AppleTvPr'
import OpenAI from '@/containers/OpenAI/OpenAI'
import s from './Work.module.css'

function Work() {
  const { setSlidingPanelContent, login } = useGlobalDispatch()
  const { loggedIn } = useGlobalState()
  const [formValid, setFormValid] = useState(true)

  const launchSite = (site: ReactNode) => setSlidingPanelContent(site)

  const buttonData = [
    {
      label: 'OpenAI Frontend Development', 
      onClick: () => launchSite(<OpenAI />)
    },
    { 
      label: 'Apple Newsroom Front End Development',
      onClick: () => launchSite(<Apple />)
    },
    { 
      label: 'Apple TV PR Front End Development',
      onClick: () => launchSite(<AppleTvPr />)
    },
    {
      label: 'Alteon Front End Development',
      onClick: () => launchSite(<Alteon />)
    },
  ]

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

    if (passwordInput?.value === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      login()
    } else {
      setFormValid(false)
    }
  }

  return (
    <main>
      <Container direction='column'>
        <H>Work</H>

        <Content
          className={s.content}
          right={
            loggedIn ? (
              <List>
                {buttonData.map(({ label, onClick }) => (
                  <ListItem key={label} className={s.item}>
                    <Button className={s.button} onClick={onClick}>
                      {label}
                    </Button>
                  </ListItem>
                ))}
              </List>
              ) : (
                <div>
                  {formValid ? (
                    <p>Please Enter Password</p>
                  ) : (
                    <p>***Please Enter a Valid Password</p>
                  )}

                  <Form action="#" onSubmit={handleLogin} className={s.form}>
                    <input type="password" id="password" placeholder='password' className={s.input} />

                    <Button type="submit" className={s.submit}>Submit</Button>
                  </Form>
                </div>
              )
            }  
        />
      </Container>
    </main>
  )
}

export default Work
