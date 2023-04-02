import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import React from "react";
import { Icon } from "@mui/material";
import { UrlNamed } from "../../features/proyects/proyectsData";

interface MyProps {
  options: Array<UrlNamed>;
}

export default function SplitButtonHref({
  options,
  children,
}: React.PropsWithChildren<MyProps>): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef(null);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        size='small'
        aria-expanded={open ? "true" : undefined}
        aria-label='select merge strategy'
        aria-haspopup='menu'
        onClick={handleToggle}
        endIcon={
          <Icon>{open ? "arrow_drop_up_icon" : "arrow_drop_down_icon"}</Icon>
        }
        ref={anchorRef}
        variant='contained'
        sx={{ textTransform: "none" }}>
        {children}
      </Button>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem key={index} component='a' href={option.url}>
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
