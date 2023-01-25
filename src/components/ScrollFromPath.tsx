import * as React from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

interface ElementOnWindow extends Element {
  offsetTop: number
}

export default function ScrollFromPath() {
  const location = useLocation()
  function scrollToSection() {
    const elementLocated: ElementOnWindow | null = document.querySelector(location.hash)
    elementLocated && window.scrollTo(0,elementLocated.offsetTop)
  }
  function scrollTop() {
  window.scrollTo(0, 0)
  }
  useEffect(() => {
    location.hash ? scrollToSection() : scrollTop()
  }, [location.pathname,location.hash])
  return (
    <></>
  )
}