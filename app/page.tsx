'use client'

import React from 'react'
import { Container, H } from '@/components'
import { afacad } from '@/styles/fonts'
import clsx from 'clsx'
import s from './page.module.css'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <main className={s.root}>
      <Container className={s.container}>
        <H appearance="h2">Gary Acers</H>

        <footer className={s.footer}>
          <p className={clsx(s.legal, afacad.className)}>copyright © {currentYear} Gary Acers - all rights reserved</p>
          <p className={clsx(s.legal, afacad.className)}>designed and developed by Gary Acers</p>
        </footer>
      </Container>
    </main>
  )
}
