import React from 'react'
import Image from 'next/image';
import img1 from '@/public/alteon-1.jpg'
import PageLayout from '@/containers/PageLayout/PageLayout';
import Site from '@/containers/Site/Site';

const Alteon = () => {
  return (
    <PageLayout
      left={
        <>
          <Image
            src={img1}
            alt="Alteon"
            width={600}
          />
        </>
      }
      right={
        <Site
          title="Alteon"
          role="Principal Front End Developer"
          description="Alteon is a global leader in application delivery networking with over 20 years of experience. Alteon's application delivery networking solutions are designed to ensure the availability, performance, and security of mission-critical applications."
          years='2020 - 2021'
          skills="CSS, HTML, JavaScript, React, Angular, Vue, Node.js, Express, MongoDB, SQL, REST, GraphQL, WebSockets, Docker, Kubernetes, AWS, Azure, GCP, CI/CD, Git, Agile, Scrum, Kanban, Jira, Confluence, Slack, Zoom"
          url="https://www.alteon.io/"
        />
      }
    />
  )
}

export default Alteon;
