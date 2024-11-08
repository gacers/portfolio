import React from 'react'
import Image from 'next/image';
import img1 from '@/public/openai-3.jpg'
import img2 from '@/public/openai-2.jpg'
import img3 from '@/public/openai-1.jpg'
import img4 from '@/public/openai-4.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const imageData = [
  {
    image: img1,
    alt: 'openai',
    width: 600
  },
  {
    image: img2,
    alt: 'openai',
    width: 600
  },
  {
    image: img3,
    alt: 'openai',
    width: 600
  },
  {
    image: img4,
    alt: 'openai',
    width: 600
  },
]

const OpenAI = () => {
  return (
    <PageLayout
      left={
        imageData.map((image, index) => (
          <Image
            key={`openai-${index}`}
            src={image.image}
            alt={image.alt}
            width={image.width}
            placeholder="blur"
          />
        ))
      }
      right={
        <Site
          title="OpenAI"
          role="Senior Front End Developer"
          description='Built on top of NextJS, OpenAi utilizes Tailwind to handle styling and animations. The Site also heavily relies on D3 the build out charts and graphs. Documentation is handled in Storybook.'
          years='2024 - Present'
          skills='NextJS, React, Tailwind, D3, Storybook, Javascript, Figma, Contentful'
          url="https://www.openai.com/"
        />
      }
    />
  )
}

export default OpenAI;
