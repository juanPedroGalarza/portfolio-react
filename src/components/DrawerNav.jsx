import { Icon } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import ChangeThemeButton from './buttons/ChangeThemeButton'
import DrawerNavStyled from './StyledComponents/DrawerNavStyled'


export default function DrawerNav(props) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsOpen(false)
  },[location.pathname,location.hash])
  return (
    <>
      <IconButton aria-label="open menu" className='menu-button' onClick={() => setIsOpen(true)}>
        <Icon>menu_rounded_icon</Icon>
      </IconButton>
      <DrawerNavStyled
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {props.children}
        <ChangeThemeButton />
      </DrawerNavStyled>
    </>
  )
}