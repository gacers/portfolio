export const FULL_PAGE_WIDTH = '100vw'
export const SIDEBAR_DESKTOP_WIDTH = '100px'

export const PREVENT_SCROLLING = 'prevent-scrolling'

export const TWEEN = {
  damping: 40,
  stiffness: 400,
  type: 'tween',
}

export const PANEL_BODY_RIGHT_ANIMATION = {
  panelClosed: {
    transform: `translateX(${FULL_PAGE_WIDTH})`,
    transition: TWEEN,
  },
  panelExit: {
    transform: `translateX(${FULL_PAGE_WIDTH})`,
    transition: TWEEN,
  },
  panelOpen: {
    transform: 'translateX(0%)',
    transition: TWEEN,
  },
}

const sideBarClosed = {
  transition: TWEEN,
  left: 'calc(100% - 100px)',
  width: SIDEBAR_DESKTOP_WIDTH,
}

export const NAV_ROOT_ANIMATIONS = {
  closed: {
    ...sideBarClosed,
    background: 'var(--green-100)'
  },
  open: {
    transition: TWEEN,
    width: `calc(${FULL_PAGE_WIDTH} - ${SIDEBAR_DESKTOP_WIDTH})`,
    left: SIDEBAR_DESKTOP_WIDTH,
    background: 'var(--cream)',
    // background: 'linear-gradient(90deg, rgba(0,0,0,1) 75%, rgba(1,60,10,1) 100%)',
    display: 'grid'
  }
}

export const SIDEBAR_LIST_ANIMATIONS = {
  closed: {
    transition: TWEEN,
    opacity: 1,
    transform: 'translateX(0)',
  },
  open: {
    transition: TWEEN,
    opacity: 0,
    transform: 'translateX(100vw)',
  }
}

export const SIDEBAR_BODY_ANIMATIONS = {
  closed: sideBarClosed,
  open: {
    transition: TWEEN,
    width: '100%'
  }
}

export const OPACITY_SEQUENCE = {
  opacityEnter: {
    opacity: 1,
    transition: TWEEN,
  },
  opacityExit: {
    opacity: 0,
    transition: {
      ...TWEEN,
      delay:0.3
    },
  },
  opacityInitial: {
    opacity: 0,
    transition: TWEEN,
  },
}

export const OPACITY_SEQUENCE_CLOSEBUTTON = {
  opacityEnter: {
    opacity: 1,
    transition: {
      ...TWEEN,
      delay: 0.4,
    },
  },
  opacityExit: {
    opacity: 0,
    transition: {
      ...TWEEN,
    },
  },
  opacityInitial: {
    opacity: 0,
    transition: TWEEN,
  },
}