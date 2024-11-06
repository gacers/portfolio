'use client'

import React, { ReactPortal, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
import FocusLock from 'react-focus-lock'
import clsx from 'clsx'
// import {
//   desktopBlur,
//   mobileBlur,
//   panelBodyLeft,
//   panelBodyMobile,
//   panelBodyRight,
//   panelMobile,
// } from 'const/animations/slidingPanel'
// import useBreakpoint from 'hooks/useBreakpoint'
import { PANEL_BODY_RIGHT_ANIMATION } from '@/constants'
import useKeyAction from 'hooks/useKeyAction'
import useOnClick from 'hooks/useOnClick'
import { useGlobalDispatch, useGlobalState } from 'context/GlobalContext'
import s from './SlidingPanel.module.css'

interface Props {
  bodyClassName?: string | null
  className?: string | null
  mobileOffset?: number
  offsetComponent?: any
}

const SlidingPanel = ({ bodyClassName = null, className = null, mobileOffset }: Props): null | ReactPortal => {
  const [isPresent, safeToRemove] = usePresence()
  const { closePanel } = useGlobalDispatch()
  const { slidingPanelContent } = useGlobalState()
  // const { isMobile } = useBreakpoint()
  const ref = useRef(null)

  const classes = clsx(s.root, {
    [`${className}`]: className,
    // [s.desktop]: !isMobile && slidingPanelSide,
  })

  const bodyClasses = clsx(s.body, {
    [`${bodyClassName}`]: bodyClassName,
    // [s[`desktop-body`]]: !isMobile,
    // [s[`${slidingPanelSide}`]]: !isMobile && slidingPanelSide,
    // [s[`${slidingPanelSize}`]]: !isMobile && slidingPanelSize,
  })

  const blurClasses = clsx(s.blur, {
    // [s[`desktop-blur`]]: !isMobile,
  })

  const handleModalClose = () => {
    closePanel()
  }

  useOnClick(ref, () => handleModalClose())

  useKeyAction(() => closePanel(), { key: 'Escape', listener: slidingPanelContent })

  useEffect(() => {
    if (!isPresent) {
      setTimeout(safeToRemove, 1000)
    }
  }, [isPresent])

  const desktopBodyAnimations = () => {
    return PANEL_BODY_RIGHT_ANIMATION
  }

  if (typeof window === 'object') {
    return ReactDOM.createPortal(
      <AnimatePresence>
        {slidingPanelContent ? (
          <motion.div
            className={classes}
            initial="panelClosed"
            animate="panelOpen"
            exit="panelExit"
            key="panel"
            // variants={isMobile ? panelMobile : undefined}
            style={{
              // height: isMobile ? `calc(100vh - ${mobileOffset}px)` : '100vh',
              // top: isMobile ? `${mobileOffset}px` : '0',
              height: '100vh',
              top: '0',
            }}
          >
            {/* <motion.div className={blurClasses} variants={isMobile ? mobileBlur : desktopBlur} key="panel-blur" /> */}

            <motion.div
              className={bodyClasses}
              ref={ref}
              // variants={isMobile ? panelBodyMobile : desktopBodyAnimations()}
              variants={desktopBodyAnimations()}
              key="panel-content"
            >
              <FocusLock>{slidingPanelContent}</FocusLock>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.querySelector('body') as Element
    )
  }

  return null
}

export default SlidingPanel
