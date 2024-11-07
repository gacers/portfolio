import React from 'react'
import Image from 'next/image';
import img1 from '@/public/appletvpr-1.jpg'
import img2 from '@/public/appletvpr-2.jpg'
import img3 from '@/public/appletvpr-3.jpg'
import img4 from '@/public/appletvpr-4.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const imageData = [
  {
    image: img1,
    alt: 'Apple',
    width: 600
  },
  {
    image: img2,
    alt: 'Apple',
    width: 600
  },
  {
    image: img3,
    alt: 'Apple',
    width: 600
  },
  {
    image: img4,
    alt: 'Apple',
    width: 600
  },
]

const Apple = () => {
  return (
    <PageLayout
      left={
        imageData.map((image, index) => (
          <Image
          key={`appletvpr-${index}`}
            src={image.image}
            alt={image.alt}
            width={image.width}
            placeholder="blur"
          />
        ))
      }
      right={
        <Site
          title="Apple TV PR"
          role="Senior Front End Developer"
          description="Apple TV PR involved building out a component based system in Vue.js. Styling was done with SCSS and animations were based on Apple's internally library."
          years='2021 - 2024'
          skills="Vue, HTML, SCSS, JavaScript, Webpack, Sketch"
          url="https://www.apple.com/tv-pr"
        />
      }
    />
  )
}

export default Apple;
