import { PREVENT_SCROLLING } from '@/constants'

export const getBody = (): HTMLBodyElement => {
  return document.getElementsByTagName('body')[0]
}

export const preventPageScrolling = (): any => {
  getBody().style.top = `-${window.scrollY}px`
  getBody().classList.add(PREVENT_SCROLLING)
}

export const enablePageScrolling = (): any => {
  if (getBody().classList.contains(PREVENT_SCROLLING)) {
    const scrollY = parseInt(getBody().style.top, 10) * -1 || 0

    getBody().classList.remove(PREVENT_SCROLLING)
    getBody().style.top = ''

    window.scrollTo(0, scrollY)
  }
}