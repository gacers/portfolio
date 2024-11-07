import React from 'react'
import Image from 'next/image';
import img1 from '@/public/apple-1.jpg'
import img2 from '@/public/apple-6.jpg'
import img3 from '@/public/apple-3.jpg'
import img4 from '@/public/apple-2.jpg'
import img5 from '@/public/apple-9.jpg'
import img6 from '@/public/apple-13.jpg'
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
  {
    image: img5,
    alt: 'Apple',
    width: 600
  },
  {
    image: img6,
    alt: 'Apple',
    width: 600
  }
]

const Apple = () => {
  return (
    <PageLayout
      left={
        imageData.map((image, index) => (
          <Image
            key={`apple-${index}`}
            src={image.image}
            alt={image.alt}
            width={image.width}
          />
        ))
      }
      right={
        <Site
          title="Apple"
          role="Senior Front End Developer"
          description="The Newsroom project mainly consisted of building out new landing pages while getting the site ready fro a transition between handlebars to React. The project also included building out new features and maintaining the existing site."
          years='2021 - 2024'
          skills="HTML, CSS, SASS, JavaScript, Handlebars, React, Gulp, Sketch, Figma"
          url="https://www.apple.com/newsroom"
        />
      }
    />
  )
}

export default Apple;
