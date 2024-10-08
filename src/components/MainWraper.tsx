import React, { FC, ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeaderList from './HeaderList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

type IMainWrapper = {
  children: ReactNode;
};

const MainWrapper: FC<IMainWrapper> = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <HeaderList />
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        {children}
      </Grid>
    </>
  );
};

export default MainWrapper;
