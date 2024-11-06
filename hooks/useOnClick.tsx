import { ReactEventHandler, RefObject, SyntheticEvent, useEffect } from 'react'

const useOnClick = (ref: RefObject<HTMLElement>, handler: ReactEventHandler<{ e: MouseEvent }>): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler({ e: event } as unknown as SyntheticEvent<{ e: MouseEvent }, Event>)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useOnClick
