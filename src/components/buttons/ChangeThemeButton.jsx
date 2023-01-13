import { Icon, IconButton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";

export default function ChangeThemeButton() {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("dark")
  useEffect(() => {
    dispatch(changeTheme(theme))
  },[theme])
  const turnTheme = () => {
    theme === "dark"?setTheme("light"):setTheme("dark")
  }
  return (
    <IconButton aria-label="change theme"
      onClick={turnTheme}>
      <Icon>{theme === "dark" ?
        "dark_mode_rounded_icon" :
        "light_mode_rounded_icon"}</Icon>
    </IconButton>
  )
}