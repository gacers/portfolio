import img1Alteon from '@/public/alteon-3.jpg'
import img2Alteon from '@/public/alteon-2.jpg'
import img3Alteon from '@/public/alteon-1.jpg'
import img1OpenAI from '@/public/openai-3.jpg'
import img2OpenAI from '@/public/openai-2.jpg'
import img3OpenAI from '@/public/openai-1.jpg'
import img4OpenAI from '@/public/openai-4.jpg'
import img1Apple from '@/public/apple-1.jpg'
import img2Apple from '@/public/apple-6.jpg'
import img3Apple from '@/public/apple-3.jpg'
import img4Apple from '@/public/apple-2.jpg'
import img5Apple from '@/public/apple-9.jpg'
import img6Apple from '@/public/apple-13.jpg'
import img1AppleTvPr from '@/public/appletvpr-1.jpg'
import img2AppleTvPr from '@/public/appletvpr-2.jpg'
import img3AppleTvPr from '@/public/appletvpr-3.jpg'
import img4AppleTvPr from '@/public/appletvpr-4.jpg'

// Get the src URL from Next.js static imports
// Next.js static imports return objects with a 'src' property
const getImageSrc = (img: any): string => {
  if (typeof img === 'string') return img
  // Next.js static imports have .src property
  if (img?.src) return img.src
  // Handle default exports
  if (img?.default) {
    if (typeof img.default === 'string') return img.default
    if (img.default?.src) return img.default.src
  }
  return ''
}

// All images to preload
const allImages = [
  img1Alteon,
  img2Alteon,
  img3Alteon,
  img1OpenAI,
  img2OpenAI,
  img3OpenAI,
  img4OpenAI,
  img1Apple,
  img2Apple,
  img3Apple,
  img4Apple,
  img5Apple,
  img6Apple,
  img1AppleTvPr,
  img2AppleTvPr,
  img3AppleTvPr,
  img4AppleTvPr,
]

export const preloadImages = () => {
  // Only run in browser
  if (typeof window === 'undefined') return

  allImages.forEach((img) => {
    const src = getImageSrc(img)
    if (src) {
      // Use link preload for better performance
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)

      // Also preload using Image API for better browser support
      const image = new Image()
      image.src = src
    }
  })
}
