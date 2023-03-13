import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuDesplegable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
        fontSize: "15px",  
        textTransform: "lowercase",          
        marginTop:3,    
        marginLeft:10, 
        paddingRight:0,
    },    
    upperText: {
        textTransform: "uppercase",
      },
    link: {
      color: "black",
      fontSize: 15,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>P</span>roductos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/gaming-producto/Notebook" style={styles.link}>
            NoteBook
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/gaming-producto/Placadevideo" style={styles.link}>
            Placas de Video
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/gaming-producto/Procesador" style={styles.link}>
            Procesador
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/gaming-producto/Monitor" style={styles.link}>
            Monitor
          </Link>
        </MenuItem>        
      </Menu>
    </div>
  );
};

export default MenuDesplegable;