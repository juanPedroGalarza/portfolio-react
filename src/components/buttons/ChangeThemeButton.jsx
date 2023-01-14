import { Icon, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";

export default function ChangeThemeButton() {
  const dispatch = useDispatch()
  const {themeName} = useSelector(state=>state.theme)
  const [theme, setTheme] = useState(themeName)
  useEffect(() => {
    dispatch(changeTheme(theme))
  },[theme])
  const turnTheme = () => {
    themeName === "dark"?setTheme("light"):setTheme("dark")
  }
  return (
    <IconButton aria-label="change theme"
      onClick={turnTheme}>
      <Icon>{themeName === "dark" ?
        "dark_mode_rounded_icon" :
        "light_mode_rounded_icon"}</Icon>
    </IconButton>
  )
}