import React, { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { OPACITY_SEQUENCE, OPACITY_SEQUENCE_CLOSEBUTTON } from '@/constants'
import { useGlobalDispatch, useGlobalState } from 'context/GlobalContext'
import { Button } from '@/components'
import s from './Panel.module.css'

interface Props {
  className?: string | null
  menuOpen?: boolean
  siteSection?: string | null
}

const Panel: FC<Props> = ({ className = null, menuOpen, siteSection = null }) => {
  const { setSlidingPanelContent } = useGlobalDispatch()
  const { slidingPanelContent } = useGlobalState()

  const classes = clsx(s.root, {
    [`${className}`]: className,
    [s.open]: slidingPanelContent,
  })

  const handleClose = () => setSlidingPanelContent(null)

  return (
    <>
      <div className={classes}>
        <motion.div
          key="vertival-menu"
          initial="opacityInitial"
          animate="opacityEnter"
          exit="opacityExit"
          variants={OPACITY_SEQUENCE}
          className={s.body}
        >
          {slidingPanelContent && slidingPanelContent}
        </motion.div>
      </div>

      {slidingPanelContent &&
        <motion.div
          className={s.close}
          key="close-button"
          initial="opacityInitial"
          animate="opacityEnter"
          exit="opacityExit"
          variants={OPACITY_SEQUENCE_CLOSEBUTTON}
        >
          <Button
            className={s.button}
            onClick={handleClose}
          />
        </motion.div>
    }
    </>
  )
}

export default Panel
