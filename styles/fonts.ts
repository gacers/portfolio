import { Afacad, Philosopher } from 'next/font/google'

// define your variable fonts
const afacad = Afacad({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '700'],
})

const afacadRegular = Afacad({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
})

const afacadBold = Afacad({
  subsets: ['latin'],
  variable: '--font-sans-bold',
  weight: '700',
})

const philosopher = Philosopher({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
})

const philosopherRegular = Philosopher({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

const philosopherBold = Philosopher({
  subsets: ['latin'],
  variable: '--font-serif-bold',
  weight: '700',
})

export { afacad, philosopher, afacadBold, afacadRegular, philosopherBold, philosopherRegular }
