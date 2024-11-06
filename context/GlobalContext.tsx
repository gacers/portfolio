'use client'

import React, { ReactNode, createContext, useCallback, useContext, useReducer } from 'react'
import { enablePageScrolling, preventPageScrolling } from '@/lib/scrolling-utils'

type State = {
  sidebarOpen: boolean
  slidingPanelContent: ReactNode | null
}

type Action = { payload: any; type: string }
type Dispatch = (action: Action) => void
type GlobalProviderProps = { children: ReactNode; initialState: State }

const GlobalStateContext = createContext<State | undefined>(undefined)
const GlobalDispatchContext = createContext<Dispatch | undefined>(undefined)

const DEFAULT_GLOBAL_STATE = {
  sidebarOpen: false,
  slidingPanelContent: null,
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
    default: {
      return state
    }
  }
}

const GlobalProvider = ({ children, initialState = DEFAULT_GLOBAL_STATE }: GlobalProviderProps): any => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
        slidingPanelContent: null
      },
      type: 'TOGGLE_PANEL',
    })
  }

  const setSlidingPanelContent = useCallback(
    (content: ReactNode) => {
      preventPageScrolling()

      dispatch({
        payload: {
          slidingPanelContent: content,
        },
        type: 'TOGGLE_PANEL',
      })
    },
    []
  )

  return {
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
