import React from 'react';
import {
  Icon,
  Button,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  Paper,
  Grow,
  ButtonPropsColorOverrides,
  ButtonPropsVariantOverrides,
} from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { UrlNamed } from '../../features/data/proyectsData.js';

interface MyProps {
  options: Array<UrlNamed>;
  disableBlankTarget?: Boolean;
  color?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    ButtonPropsColorOverrides
  >;
  variant?: OverridableStringUnion<
    'text' | 'contained' | 'outlined',
    ButtonPropsVariantOverrides
  >;
  endIcon?: React.ReactNode;
}

export default function SplitButtonHref({
  options,
  children,
  disableBlankTarget,
  color,
  variant = 'contained',
  endIcon,
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
        color={color}
        size='small'
        aria-expanded={open ? 'true' : undefined}
        aria-label='select merge strategy'
        aria-haspopup='menu'
        onClick={handleToggle}
        endIcon={
          endIcon || (
            <Icon>{open ? 'arrow_drop_up_icon' : 'arrow_drop_down_icon'}</Icon>
          )
        }
        ref={anchorRef}
        variant={variant}
        sx={{ textTransform: 'none' }}>
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
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={index}
                      component='a'
                      target={disableBlankTarget ? null : '_blank'}
                      href={option.url}>
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
