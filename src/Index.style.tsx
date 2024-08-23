import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './enam';

interface ITextStyledComponentFooterProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

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

export const TextStyledComponentFooter2 = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: 'flex',
  }),
);

export const TextStyledComponent = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 600,
    padding: '15px',
    height: '27px',
    fontSize: isMobile || isTablet ? '15px' : '22px',
    lineHeight: '26.25px',
    color: '#FFFFFF',

    whiteSpace: 'nowrap',
  }),
);

export const FormBox = styled(Box)(() => ({
  display: 'flex',
  padding: '5px',
}));

export const FormBoxText = styled(Typography)<ITextStyledComponentFooterProps>(({ isMobile, isTablet }) => ({
  display: 'flex',
  height: '81px',
  padding: '15px',

  '& p': {
    fontSize: isMobile || isTablet ? '14px' : '18px',
  },
  '& strong': {
    fontSize: isMobile || isTablet ? '14px' : '18px',
    fontWeight: isMobile || isTablet ? 700 : 800,
  },
}));

export const FormBoxImagesLogo = styled(Box)(() => ({
  marginTop: '59px',
  padding: '10px',
}));
export const FormBoxImagesHumanLogo = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gridGap: '20px',
}));

export const FormBoxImagesHumanTitle = styled(Box)(() => ({
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: 700,
  fontFamily: 'Gilroy',
  lineHeight: '16.8px',
  marginTop: '20px',
}));

export const FormBoxImagesHumanSubTitle = styled(Box)(() => ({
  color: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'Gilroy',
  lineHeight: '19.2px',
}));

export const FormBoxImagesGiftLogo = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
}));

export const TextStyledComponentFooter = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: isMobile || isTablet ? 'none' : 'flex',
    margin: '0 auto',
    position: 'fixed',
    bottom: '0',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 800,
    maxWidth: '100%',
    marginLeft: '30px',
    fontSize: '135px',
    letterSpacing: '-1px',
    lineHeight: '172.5px',
    color: '#242731',
    textShadow: '0 0 2px #fff',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
);

export const BoxForm = styled(Box)(() => ({
  width: '366px',
  height: '474px',
  borderRadius: '10px',

  backgroundColor: '#303A53',
}));

export const BoxFormContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  height: '374px',

  '& input': {
    width: '248px',
    height: '51px',
    margin: '14px',
    backgroundColor: '#272D3D',
    border: 'none',

    '&::placeholder': {
      color: '#D7D7D7',
      fontSize: '13px',
      fontWeight: 400,
      fontFamily: 'Gilroy, sans-serif',
      lineHeight: '19.2px',
    },
    '& button': {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      height: '200px',
    },
  },
}));

export const BoxFormContentTitle = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Gilroy, sans-serif',
  color: '#FFFFFF',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));

export const BoxFormContentTitleRef = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Gilroy, sans-serif',
  color: '#FF3459',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));

export const BoxFormContentSubTitle = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Gilroy, sans-serif',
  color: '#FFFFFF',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));
