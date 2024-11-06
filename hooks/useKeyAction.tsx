import { ReactEventHandler, useEffect } from 'react'

interface KeyProps {
  key?:
    | 'AltLeft'
    | 'AltRight'
    | 'Backspace'
    | 'ControlLeft'
    | 'ControlRight'
    | 'Enter'
    | 'Escape'
    | 'MetaLeft'
    | 'MetaRight'
    | 'ShiftLeft'
    | 'ShiftRight'
    | 'Tab'
    | null
  keyAction?: 'keydown' | 'keypress' | 'keyup' | null
  listener?: any
}

const useKeyAction = (
  handler: ReactEventHandler<{ e: KeyboardEvent }>,
  { key = 'Enter', keyAction = 'keyup', listener = null }: KeyProps = {}
): void => {
  useEffect(() => {
    const handleKeyAction = (e?: any) => {
      if (e.key === key) {
        handler(e)
      }
    }

    document.addEventListener(keyAction, handleKeyAction)

    return () => {
      document.removeEventListener(keyAction, handleKeyAction)
    }
  }, [listener])
}

export default useKeyAction
