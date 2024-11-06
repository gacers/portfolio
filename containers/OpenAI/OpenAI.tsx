import React from 'react'
import Image from 'next/image';
import img from '@/public/openai-1.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const OpenAI = () => {
  return (
    <PageLayout
      left={
        <Image
          src={img}
          alt="OpenAI"
          width={600}
        />
      }
      right={
        <Site
          title="OpenAI"
          role="Senior Front End Developer"
          description='OpenAI is an artificial intelligence research laboratory consisting of the for-profit OpenAI LP and the non-profit OpenAI Inc. The company aims to "ensure that artificial general intelligence benefits all of humanity".'
          years='2024 - Present'
          skills='AI, Machine Learning, Research'
          url="https://www.openai.com/"
        />
      }
    />
  )
}

export default OpenAI;
