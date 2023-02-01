import * as React from "react";
import { Icon, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";
import { StoreInterface } from "../../features/store";

export default function ChangeThemeButton({isFor}:{isFor?:string}) {
  const dispatch = useDispatch()
  const {themeName} = useSelector((state:StoreInterface)=>state.theme)
  const [theme, setTheme] = React.useState(themeName)
  React.useEffect(() => {
    dispatch(changeTheme(theme))
  },[theme])
  const turnTheme = () => {
    themeName === "dark"?setTheme("light"):setTheme("dark")
  }
  if (isFor === "List") {
    return (
      <ListItem disablePadding>
        <ListItemButton onClick={turnTheme}
          dense
        >
          <ListItemIcon>
            <Icon color="success"
            >{themeName === "dark" ?
              "dark_mode_rounded_icon" :
              "light_mode_rounded_icon"}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Change Theme"}
             />
        </ListItemButton>
      </ListItem>
    )
  }
  return (
    <IconButton aria-label="change theme"
      color="warning"
      onClick={turnTheme}>
      <Icon color="warning"
      >{themeName === "dark" ?
        "dark_mode_rounded_icon" :
        "light_mode_rounded_icon"}</Icon>
    </IconButton>
  )
}