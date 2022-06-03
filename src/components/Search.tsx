import React from 'react'
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";



const Search: React.FC<{ setSearch: (search: string) => void }> = (props) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setSearch(e.currentTarget.value);
   
  };

  return (
    <div>
     
     <Grid container justifyContent="center" alignItems="center" direction="column" >
     <Grid item xs={12}>
      <Typography variant="h2"  sx={{ fontSize: 22, fontWeight:500, marginTop:20, marginBottom:2}}   >
        What cryptocurrency do you want to search for?
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <TextField sx={{marginBottom:5, backgroundColor:'#eee' }}
        type="text"
        placeholder="Search"
        onChange={inputChangeHandler}
      />
      </Grid>
    </Grid>
   
   
    </div>
  );
};

export default Search;
