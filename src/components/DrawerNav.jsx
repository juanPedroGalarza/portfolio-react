import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import ChangeThemeButton from './buttons/ChangeThemeButton'
import DrawerNavStyled from './StyledComponents/DrawerNavStyled'


export default function DrawerNav(props) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const list = props.list

  const printListItems = l => {
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