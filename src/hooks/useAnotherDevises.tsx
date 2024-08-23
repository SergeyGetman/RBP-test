import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

const UseAnotherDevises = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return {
    isMobile,
    isTablet,
  };
};

export default UseAnotherDevises;
