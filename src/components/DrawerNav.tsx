import React from 'react'
import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useLocation, useNavigate } from 'react-router'
import ChangeThemeButton from './buttons/ChangeThemeButton'
import { LinkForButton } from './NavBar'
import DrawerNavStyled from './StyledComponents/DrawerNavStyled'

interface MyProps {
  list: LinkForButton[]
}

export default function DrawerNav({list}:MyProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    setIsOpen(false)
  },[location.pathname,location.hash])

  const printListItems = (l:LinkForButton) => {
    let active = false
        if (location.hash) {
            location.hash === l.to.slice(1)? active = true:null
        } else if(location.pathname === l.to){
            active = true
        }
    return (
      <ListItem key={l.name} disablePadding>
        <ListItemButton
          onClick={() => navigate(l.to)}
          selected={active}
          dense
        >
          <ListItemText primary={l.name}/>
        </ListItemButton>
      </ListItem>
    )
  }


  return (
    <>
      <IconButton aria-label="open menu" className='menu-button'
        onClick={() => setIsOpen(true)}>
        <Icon>menu_rounded_icon</Icon>
      </IconButton>
      <DrawerNavStyled
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box role="presentation">
          <List>
            {list.map(printListItems)}
            <Divider />
            <ChangeThemeButton isFor="List" />
          </List>
        </Box>
      </DrawerNavStyled>
    </>
  )
}