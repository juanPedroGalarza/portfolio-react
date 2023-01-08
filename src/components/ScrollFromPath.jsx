import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollFromPath() {
  const location = useLocation()
  function scrollToSection() {
    window.scrollTo(0,document.querySelector(location.hash).offsetTop)
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