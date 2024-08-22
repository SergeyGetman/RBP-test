import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './enam';

export const HeaderAppStyle = styled(Typography)(({ step }: { step?: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
  background: !step
    ? 'linear-gradient(#e66465, #9198e5);'
    : 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
}));

export const CircularStyle = styled(Box)(() => ({
  color: '#b5a13c',
  height: '100px',
  width: '100%',
  margin: '10px',
  marginTop: '30%',
}));

export const FormStyle = styled(Box)(() => ({
  margin: '10px',
  marginTop: '10px',
  color: '#fff',
}));

export const FormTextFrontend = styled(Typography)(() => ({
  fontFamily: 'Gilroy, sans-serif',
  fontWeight: 800,
  width: '309px',
  height: '64px',
  fontSize: '53px',
  lineHeight: '66.25px',
  color: '#FF3459',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
}));

export const TextStyledComponent = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Gilroy, sans-serif',
  fontWeight: 600,
  padding: '15px',
  height: '27px',
  fontSize: '22px',
  lineHeight: '26.25px',
  color: '#FFFFFF',

  whiteSpace: 'nowrap',
}));

export const FormBox = styled(Box)(() => ({
  display: 'flex',
  padding: '5px',
}));

export const FormBoxText = styled(Box)(() => ({
  display: 'flex',
  height: '81px',
  padding: '15px',
}));
