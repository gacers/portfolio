import React from 'react'
import Image from 'next/image';
import img1 from '@/public/alteon-3.jpg'
import img2 from '@/public/alteon-2.jpg'
import img3 from '@/public/alteon-1.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const imageData = [
  {
    image: img1,
    alt: 'Alteon',
    width: 600
  },
  {
    image: img2,
    alt: 'Alteon',
    width: 600
  },
  {
    image: img3,
    alt: 'Alteon',
    width: 600
  },
]

const Alteon = () => {
  return (
    <PageLayout
      left={
        imageData.map((image, index) => (
          <Image
            key={`alteon-${index}`}
            src={image.image}
            alt={image.alt}
            width={image.width}
          />
        ))
      }
      right={
        <Site
          title="Alteon"
          role="Principal Front End Developer / UX Designer"
          description="Alteon was built on top of NextJS and Framer Motion. The site utilized Redux to track global state and to trigger animations and page transitions. Documentation was handled in Storybook."
          years='2020 - 2021'
          skills="NextJS React, Redux, Framer Motion, Storybook, PostCSS, CSS Modules, Javascript, Figma, Context, Contentful"
          url="https://www.alteon.io/"
        />
      }
    />
  )
}

export default Alteon;
