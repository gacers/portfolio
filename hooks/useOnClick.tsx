import { ReactEventHandler, RefObject, useEffect } from 'react'

const useOnClick = (ref: RefObject<HTMLElement>, handler: ReactEventHandler<{ e: MouseEvent }>): void => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useOnClick
