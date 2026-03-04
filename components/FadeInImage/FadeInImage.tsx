'use client'

import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import s from './FadeInImage.module.css'

interface FadeInImageProps extends Omit<ImageProps, 'onLoad' | 'onLoadingComplete'> {
  className?: string
}

// Panel animation duration (reduced for faster appearance)
const PANEL_ANIMATION_DURATION = 0.4

const FadeInImage: React.FC<FadeInImageProps> = ({ className, ...imageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [panelAnimationComplete, setPanelAnimationComplete] = useState(false)

  useEffect(() => {
    // Wait for panel animation to complete
    const timer = setTimeout(() => {
      setPanelAnimationComplete(true)
    }, PANEL_ANIMATION_DURATION * 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  // Only fade in when both panel animation is complete AND image is loaded
  const shouldFadeIn = panelAnimationComplete && isLoaded

  return (
    <div className={clsx(s['image-container'], className)}>
      <Image
        {...imageProps}
        className={clsx(s.image, {
          [s['image-visible']]: shouldFadeIn
        })}
        onLoadingComplete={handleImageLoad}
      />
    </div>
  )
}

export default FadeInImage
