import { Grid } from '@mui/material';
import React from 'react';
import { HeaderListStyle } from '../Index.style';
import MainWrapper from './MainWraper';

const HeaderList = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <HeaderListStyle>xs=6 md=8</HeaderListStyle>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderList;
