import React from 'react'
import Typography from "@mui/material/Typography/Typography";
import AppBar from "@mui/material/AppBar/AppBar";






const Header = () => {
  return (
    
    <AppBar sx={{ backgroundColor:'black'}}>
      <Typography variant="h1" align="center" sx={{ fontSize: 40, margin: 2 }}>
      Information about cryptocurrencies
      </Typography>
    </AppBar>
   

  )
}

export default Header