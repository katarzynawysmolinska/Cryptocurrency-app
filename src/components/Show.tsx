import React from "react";
import Table from "@mui/material/Table/Table"; // <table>
import TableHead from "@mui/material/TableHead/TableHead"; // <thead>
import TableCell from "@mui/material/TableCell/TableCell"; // <th>
import TableRow from "@mui/material/TableRow/TableRow"; // <tr>
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import TableBody from "@mui/material/TableBody/TableBody";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Grid from "@mui/material/Grid/Grid";

const Show = (props: any) => {
  return (
    <div>
      {/* <Grid container>
      <TableContainer>
        <Table sx={{ maxWidth:800}} aria-label="simple table">
          <TableBody>
            <TableRow>
            <Grid item md={4}>
              <TableCell sx={{width:30 }} >
                <ImageList>
                  <ImageListItem sx={{ width: 40 }}>
                    <img src={props.image} alt="cryptocurrency" />
                  </ImageListItem>
                </ImageList>
              </TableCell >
              </Grid>
              <Grid item md={2}>
              <TableCell align="left" sx={{width:30}}>
                <p>{props.name}</p>
              </TableCell>
              </Grid>
              <Grid item md={2}>
              <TableCell align="left" sx={{width:30}}>
                <p>{props.symbol.toUpperCase()}</p>
              </TableCell>
              </Grid>
              <Grid item md={2}>
              <TableCell align="left" sx={{width:30}}>
                <p>${props.price}</p>
              </TableCell>
              </Grid>
              <Grid item xs={12} md={2}>
              <TableCell align="left" sx={{width:30}}>
                <p>{props.priceChange}%</p>
              </TableCell>
              </Grid>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid> */}

      <Grid container direction="row" justifyContent="flex-end">
        <Grid item md={2.4}>
          <ImageList>
            <ImageListItem sx={{ width: 40 }}>
              <img src={props.image} alt="cryptocurrency" />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item md={2.4}>
          <p>{props.name}</p>
        </Grid>
        <Grid item md={2.4}>
          <p>{props.symbol.toUpperCase()}</p>
        </Grid>
        <Grid item md={2.4}>
          <p>${props.price}</p>
        </Grid>
        <Grid item md={2.4}>
          <p>{props.priceChange}%</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Show;
