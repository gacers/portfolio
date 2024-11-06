import React from 'react'
import Image from 'next/image';
import img1 from '@/public/apple-1.jpg'
import img2 from '@/public/apple-2.jpg'
import img3 from '@/public/apple-3.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const Apple = () => {
  return (
    <PageLayout
      left={
        <>
          <Image
            src={img1}
            alt="Apple"
            width={600}
          />

          <Image
            src={img2}
            alt="Apple"
            width={600}
          />

          <Image
            src={img3}
            alt="Apple"
            width={600}
          />
        </>
      }
      right={
        <Site
          title="Apple"
          role="Senior Front End Developer"
          description="Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services."
          years='2021 - 2024'
          skills="iOS, macOS, watchOS, tvOS, iPadOS, HomePod, Apple Watch, AirPods, HomePod, Apple TV, Apple Music, Apple Pay, iCloud, Apple Arcade, Apple Fitness+, Apple News+, Apple TV+, Apple Card, Apple One, Apple Books, Apple Podcasts, Apple Store, AppleCare, AppleCare+, Apple Developer, Apple ID, Apple Pay Cash"
          url={[
            'https://www.apple.com/newsroom',
            'https://www.apple.com/tv-pr',
          ]}
        />
      }
    />
  )
}

export default Apple;
