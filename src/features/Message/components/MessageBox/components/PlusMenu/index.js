import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Button, Tooltip } from '@material-ui/core';
import GifIcon from '@material-ui/icons/Gif';

export default function MenuListComposition() {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="RootClass">
      <div>
        <div
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Tooltip title="More option">
          <span className="fas fa-plus-circle btn-color"/>
          </Tooltip>
        </div>
        <Popper
         open={open}
          anchorEl={anchorRef.current} 
          role={undefined} 
          transition 
          disablePortal
           >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose} style={{paddingLeft:"0",paddingRight:"0"}}>
                      <Button style={{paddingTop:"1px",paddingBottom:"1px"}}>
                      {/* <IconButton> */}
                        <span className="fas fa-paperclip" style={{color:"#1c9dea"}}></span>
                      {/* </IconButton> */}
                      
                      <span style={{marginLeft:"10px",textTransform:"none"}}> Attach</span>
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={{paddingLeft:"0",paddingRight:"0"}}>
                      <Button style={{paddingTop:"1px",paddingBottom:"1px",width:"100%",display:"flex",justifyContent:"space-between"}}>
                      {/* <IconButton> */}
                        <GifIcon fontSize="medium" style={{color:"#1c9dea"}}/>
                      {/* </IconButton> */}
                      <span style={{marginLeft:"10px"}}>  Gif</span>
                      </Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}