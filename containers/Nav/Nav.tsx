'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ROOT_ANIMATIONS, SIDEBAR_BODY_ANIMATIONS, SIDEBAR_LIST_ANIMATIONS } from '@/constants'
import { useGlobalDispatch, useGlobalState } from 'context/GlobalContext'
import useClickOutside from '@/hooks/useClickOutside'
import useKeyAction from '@/hooks/useKeyAction'
import { Button, List, ListItem } from '@/components'
import Panel from '@/containers/Panel/Panel'
import ResumeContent from '@/containers/ResumeContent/ResumeContent'
import { afacad } from '@/styles/fonts'
import s from './Nav.module.css'

const navItems = [
  { href: '/about', label: 'About', disabled: true },
  { href: '/work', label: 'Work' },
  { component: ResumeContent, label: 'Resume' },
  { href: '/contact', label: 'Contact', disabled: true },
]

const Nav = () => {
  const pathname = usePathname();
  const { setSlidingPanelContent } = useGlobalDispatch()
  const { slidingPanelContent } = useGlobalState()
  const ref = useClickOutside(slidingPanelContent ? () => setSlidingPanelContent(null) : () => {});

  const handlePanelSet = (content: ReactNode, label: string) => {
    const className = label.toLowerCase()
    setSlidingPanelContent(content, className)
  }

  useKeyAction(slidingPanelContent ? () => setSlidingPanelContent(null) : () => {}, { key: 'Escape', listener: slidingPanelContent })

  return (
    <motion.div
      initial="closed"
      animate={slidingPanelContent ? 'open' : 'closed'}
      variants={NAV_ROOT_ANIMATIONS}
      className={s.root}
      ref={ref as any}
    >
      <motion.div
        className={s.body}
        initial="closed"
        animate={slidingPanelContent ? 'open' : 'closed'}
        variants={SIDEBAR_BODY_ANIMATIONS}
      >
        <motion.nav
          className={s.nav}
          initial="closed"
          animate={slidingPanelContent ? 'open' : 'closed'}
          variants={SIDEBAR_LIST_ANIMATIONS}
        >
          <List >
            {navItems.map(({ component, disabled, href, label }) => {
              if (component) {
                const Component = component
                return (
                  <ListItem key={label} className={clsx(afacad.className, s.resume)}>
                    <Button onClick={() => handlePanelSet(<Component />, label)} disabled={disabled}>{label}</Button>
                  </ListItem>
                )
              } else {
                if (href) {
                  return (
                    <ListItem key={href} className={afacad.className}>
                      {href && 
                        <Link
                          href={href}
                          className={disabled ? 'disabled': ''} 
                          aria-disabled={disabled} 
                          tabIndex={disabled ? -1 : undefined}
                        >
                          { label }
                        </Link>
                      }
                    </ListItem>
                  )
                } else {
                  return null
                }
              }
            })}
          </List>

          {pathname !== '/' && (
            <Link href="/" className={s.home}>GA</Link>
          )}
        </motion.nav>
      </motion.div>

      <Panel />
    </motion.div>
  )
}

export default Nav
