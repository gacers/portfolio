
import React from 'react'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { GlobalProvider } from '@/context/GlobalContext'
import Nav from '@/containers/Nav/Nav'
import { afacad, philosopher } from '@/styles/fonts'
import '@/styles/variables.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  description: 'Gary acers Portfolio',
  title: 'Gary Acers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(afacad.className, philosopher.className)}>
        <GlobalProvider initialState={{ sidebarOpen: false, slidingPanelContent: null }}>
          {children}

          <Nav />
        </GlobalProvider>
      </body>
    </html>
  )
}
