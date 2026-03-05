'use client'

import React, { ReactNode, createContext, useCallback, useContext, useReducer } from 'react'
import { enablePageScrolling, preventPageScrolling } from '@/lib/scrolling-utils'

type State = {
  panelClassName: string | null
  sidebarOpen: boolean
  slidingPanelContent: ReactNode | null
  loggedIn: boolean
}

type Action = { payload: any; type: string }
type Dispatch = (action: Action) => void
type GlobalProviderProps = { children: ReactNode; initialState?: Partial<State> }

const GlobalStateContext = createContext<State | undefined>(undefined)
const GlobalDispatchContext = createContext<Dispatch | undefined>(undefined)

const getInitialLoggedInState = (): boolean => {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem('loggedIn')
  return stored === 'true'
}

const DEFAULT_GLOBAL_STATE = {
  panelClassName: null,
  sidebarOpen: false,
  slidingPanelContent: null,
  loggedIn: getInitialLoggedInState(),
}

const reducer = (state: State, action: Action) => {
  const { payload, type } = action

  switch (type) {
    /* -------------------------------------------------------------------------- */
    /*                               Global Actions                               */
    /* -------------------------------------------------------------------------- */
    case 'TOGGLE_PANEL': {
      return { ...state, ...payload }
    }
    case 'LOGIN': {
      return { ...state, ...payload }
    }
    default: {
      return state
    }
  }
}

const GlobalProvider = ({ children, initialState = {} }: GlobalProviderProps): any => {
  const mergedInitialState = {
    ...DEFAULT_GLOBAL_STATE,
    ...initialState,
  }
  const [state, dispatch] = useReducer(reducer, mergedInitialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

/* -------------------------------------------------------------------------- */
/*                               Global State                              */
/* -------------------------------------------------------------------------- */
const useGlobalState = () => {
  const state = useContext(GlobalStateContext)

  if (state === undefined) {
    throw new Error('useGlobalState must be used within GlobalStateContext')
  }

  return state
}

/* -------------------------------------------------------------------------- */
/*                               Global Dispatch                              */
/* -------------------------------------------------------------------------- */
const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalDispatchContext)

  if (dispatch === undefined) {
    throw new Error('useGlobalDispatch must be used within GlobalDispatchContext')
  }

  const closePanel = () => {
    enablePageScrolling()

    dispatch({
      payload: {
        panelClassName: null,
        slidingPanelContent: null
      },
      type: 'TOGGLE_PANEL',
    })
  }

  const setSlidingPanelContent = useCallback(
    (content: ReactNode, className?: string | null) => {
      preventPageScrolling()

      dispatch({
        payload: {
          panelClassName: className || null,
          slidingPanelContent: content,
        },
        type: 'TOGGLE_PANEL',
      })
    },
    []
  )

  const login = useCallback(
    () => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('loggedIn', 'true')
      }
      dispatch({
        payload: {
          loggedIn: true
        },
        type: 'LOGIN',
      })
    }, []
  )

  return {
    login,
    closePanel,
    dispatch,
    setSlidingPanelContent,
  }
}

export {
  GlobalProvider,
  useGlobalState,
  useGlobalDispatch,
}
