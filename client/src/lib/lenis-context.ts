import { createContext, useContext } from 'react'

export type ScrollApi = {
  /** Smooth-scroll to a section id (without '#') or any element/selector */
  scrollTo: (target: string | HTMLElement, opts?: { offset?: number }) => void
  stop: () => void
  start: () => void
}

const noop: ScrollApi = { scrollTo: () => {}, stop: () => {}, start: () => {} }

export const LenisContext = createContext<ScrollApi>(noop)

export const useScroll = () => useContext(LenisContext)
