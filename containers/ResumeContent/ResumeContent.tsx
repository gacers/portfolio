import React, { FC, ReactNode } from 'react'
import { H } from '@/components'
import { afacad } from '@/styles/fonts'
import clsx from 'clsx'
import { useGlobalState } from '@/context/GlobalContext'
import ExperienceItem from '@/containers/ExperienceItem/ExperienceItem'
import s from './ResumeContent.module.css'

const Section: FC<{ children: ReactNode }> = ({ children }) => <div className={s.section}>{children}</div>

const Text: FC<{ children: ReactNode }> = ({ children }) => <span className={clsx(s.text, afacad.className)}>{children}</span>

const ResumeContent = () => {
  const { loggedIn } = useGlobalState()

  return (
    <div className={s.root}>
      <Section>
        <div className={s.container}>
          <H level={2} className={s.title}>Resume</H>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>TITLE:</span> <Text>Senior Front End Developer</Text>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>LOCATION:</span> <Text>Brooklyn, NY</Text>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>PROFILE:</span>

          <div className={s.content}>
            <Text>
              As a Senior Front End Developer, I have amassed numerous skills throughout the years including React, NextJS, GraphQL, Redux, Typescript, Tailwind, PostCSS, SASS, Storybook, and many more. These skills have been accrued over a multitude of projects for companies such as OpenAI, Apple, Google, Morgan Stanley, Comcast, Gucci, and Free People.
            </Text>

            <Text>
              Across all of these projects I have brought my passion for UI and UX and strive to create accurate, pixel perfect code that delivers a robust user experience. To help with this process, I bring a strong working knowledge of applications such as Figma, Sketch, and Photoshop as well as years of experience working hand in hand with designers to help bring their visions to life.
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>SKILLS:</span>

          <div className={s.content}>
            <ul className={clsx(s.list)}>
              <li className={s['list-item']}><Text>React</Text></li>

              <li className={s['list-item']}><Text>NextJS</Text></li>

              <li className={s['list-item']}><Text>Javascript</Text></li>

              <li className={s['list-item']}><Text>Typescript</Text></li>

              <li className={s['list-item']}><Text>Tailwind</Text></li>

              <li className={s['list-item']}><Text>Redux</Text></li>

              <li className={s['list-item']}><Text>GraphQL</Text></li>

              <li className={s['list-item']}><Text>Apollo</Text></li>

              <li className={s['list-item']}><Text>Storybook</Text></li>

              <li className={s['list-item']}><Text>PostCSS</Text></li>

              <li className={s['list-item']}><Text>Sass</Text></li>

              <li className={s['list-item']}><Text>Node.js</Text></li>

              <li className={s['list-item']}><Text>Vue</Text></li>

              <li className={s['list-item']}><Text>Shopify</Text></li>

              <li className={s['list-item']}><Text>Sanity</Text></li>

              <li className={s['list-item']}><Text>Contentful</Text></li>

              <li className={s['list-item']}><Text>Wordpress</Text></li>

              <li className={s['list-item']}><Text>Webpack</Text></li>

              <li className={s['list-item']}><Text>Github</Text></li>

              <li className={s['list-item']}><Text>Figma</Text></li>

              <li className={s['list-item']}><Text>Sketch</Text></li>

              <li className={s['list-item']}><Text>Jira</Text></li>

              <li className={s['list-item']}><Text>D3.js</Text></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>EXPERIENCE:</span>

          <div className={s.content}>
            <ul className={s['experience-list']}>
              <ExperienceItem
                company={loggedIn ? 'Coinbase' : 'Leading Crypto Exchange'}
                date="July 2025 - Current"
                description={[
                  'Build and maintain library for tracking security protocols for internal projects',
                  'Built reusable components around a very specific design spec/color match that were flexible across the site',
                  'Refactor existing front end site to be more consistent in structure and how tools are used',
                  'Refactor existing front end site to be more consistent in structure and how tools are used',
                  'Implement new features requested by users',
                  'Improve overall performance of project',
                  'Improve overall performance of project',
                  'Design UI',
                ]}
                skills="NextJS, Typescript, CSS Modules, Storybook"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company="Solana Foundation"
                date="March 2025 - May 2025"
                description={[
                  'Built reusable components around a very specific design spec/color match that were flexible across the site',
                  'Components were built, tested, and documented in Storybook',
                  'Components were built to match Sanity.io schema',
                ]}
                skills="NextJS, Typescript, Sanity, Tailwind, Storybook, Figma"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company={loggedIn ? 'OpenAI' : 'The Leading AI Company'}
                date="August 2024 - March 2025"
                description={[
                  'Build out reusable components to be used via content editors with Contentful',
                  'Build out custom components such as charts and tables that match the researchers data and can be populated in Contentful via json entries',
                  'Enhance page loading and performance utilizing tools lazy loading when it comes to media items',
                  'Build out documentation for handoff to other devs via Storybook',
                  'Work with designers to iron out design issues in a performant way',
                  'Utilize Contentful migrations scripts to keep environments aligned',
                  'Hook into OpenAI api to recreate ChatGPT functionality',
                ]}
                skills="NextJS, Typescript, Contentful, Tailwind, Storybook, Figma, Visx"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company="Nike"
                date="July 2024 - August 2024"
                description={['Working with the client to build out an app to allow customers to design custom t-shirts at events.']}
                skills="Javascript, Vue, Tailwind, Firebase"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company="Apple"
                date="August 2021 - March 2024"
                description={[
                  'Embedded in Apple projects',
                  'Responsible for converting old handlebar templates into more modern React and Vue templates',
                  'Refactor code base to limit duplicate code',
                  'Create more re-usable data driven components to remove logic from templates',
                  'Working with designers to take reusable components and make them more consistent across designs in Figma',
                ]}
                skills="Javascript, Vue, Handlebars, SASS, React"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company="AJ Madison"
                date="September 2021 - May 2023"
                description={[
                  'Refactored the current custom framework into Next.js',
                  'Lead the creation of components for a Next.js build in Storybook',
                  'Consolidated data from multiple CMS sources including Sanity and Contentful into a cleaner GraphQL implementation',
                ]}
                skills="Next.js, React, Storybook, Javascript, CSS Modules, Redux"
                title="Senior Front End Developer"
              />

              <ExperienceItem
                company="Third Summit"
                date="April 2020 - August 2021"
                description={[
                  'Lead front end developer in charge of setting up the front end architecture',
                  'Designed the UX wireframes for our designers',
                  'Architected a redux like system built with Context to deliver data seamlessly throughout the Next.js/React framework',
                  'Construct and test shared components in storybook to both isolate and create documentation simultaneously.',
                  'Connect aspects of Figma to Storybook to create seamless documentation.',
                  'Utilized Typescript to check and maintain large amounts of data in application.',
                  'Train team in Agile and Kanban workflows, Jira/Confluence training, and research.',
                  'Deployments through Kanban, Jenkins, and some AWS code pipelines. Main build through IBM Cloud',
                ]}
                skills="Next.js, React, Typescript, CSS Modules, Storybook, Redux"
                title="Principal Developer - UX"
              />

              <ExperienceItem
                company="HUGE"
                date="October 2013 - February 2020"
                description={[
                  'Built CMS driven fully customized sites and apps for a variety of clients and needs',
                  'Utilized tools/methods such as React, Redux, PostCSS, CSS Modules, Styled Components, Webpack, and Vue to help bring sites to life',
                  'Dealt with a variety of CMS implementations including Sitecore, Contentful, and AEM',
                  'Worked in Agile and Kanban workflows using products such as Jira to manage deadlines',
                ]}
                title="Web Engineer"
              />

              <ExperienceItem
                company="Free People"
                date="January 2013 - October 2013"
                description={[
                  'Designed the role of the front end developer within Free People',
                  'Worked directly with a small team of user experience and visual designers to transform a generic e-commerce site into a more organic product to enhance the visitor\'s experience',
                  'Built templates utilizing JSON that could be quickly updated in order to give the site a fresh look on a weekly basis',
                ]}
                title="Front End Developer"
              />

              <ExperienceItem
                company="Sides Media"
                date="June 2011 - January 2013"
                description={[
                  'Built wordpress based websites for clients of varying sizes',
                  'Design as well as QA skills were utilized due to the small size of the company',
                  'Worked closely with clients to help train their employees to be able to use the CMS to its full potential',
                ]}
                title="Front End Developer"
              />
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className={s.container}>
          <span className={s.label}>EDUCATION:</span>

          <div className={s['education-item']}>
            <Text><strong>NYU Tandon School of Engineering</strong> / MS Integrated Digital Media</Text>

            <Text>2008 - 2011, Brooklyn, NY</Text>

            <Text>
              Studies focused around building large format interactive/generative sound and video installations. Projects utilized content aggregated from social media to create unique experiences that focused on modern human communication. Tools such as Max/MSP, Jitter, Ableton Live, MadMapper, and Final Cut were used to achieve desired goals which included motion tracking and projection mapping.
            </Text>
          </div>

          <div className={s['education-item']}>
            <Text><strong>Temple University</strong> / BA Mass Media Theory</Text>

            <Text>2006 - 2008, Philadelphia, PA</Text>
            
            <Text>
              Studies focused around the role technology plays in modern day human communication. Areas such as the role of the burgeoning smartphone market would play a major part in research projects that would later be utilized in installation pieces built at NYU. Skills in sound and video editing also were gained within this field.
            </Text>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ResumeContent;
