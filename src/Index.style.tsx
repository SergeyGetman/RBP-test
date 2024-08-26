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

export const FormTextFrontend = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    margin: isMobile && isTablet ? '0 auto' : '0',
    fontFamily: 'gilroyextrabold, sans-serif',
    fontWeight: 800,
    width: '309px',
    height: '64px',
    fontSize: '53px',
    lineHeight: '66.25px',
    color: '#FF3459',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  }),
);

export const TextStyledComponentFooter2 = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: 'flex',
  }),
);

export const TextStyledComponent = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'gilroyextrabold, sans-serif',
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
  height: '101px',
  padding: '15px',

  '& p': {
    fontSize: isMobile || isTablet ? '14px' : '18px',
  },
  '& strong': {
    fontSize: isMobile || isTablet ? '14px' : '18px',
    fontWeight: isMobile || isTablet ? 700 : 800,
  },
}));

export const FormBoxTextConfirm = styled(Typography)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    color: '#958989',
    fontSize: '12px',
    fontWeight: 700,
    fontFamily: 'gilroyextraboldextrabold',
    lineHeight: '16.8px',
    textAlign: 'center',
    marginTop: '20px',
    '& span': {
      textDecoration: 'underline',
      color: '#958989',
    },
    '& span:hover': {
      cursor: 'pointer',
      color: '#fefcfc',
    },
  }),
);

export const FormBoxImagesLogo = styled(Box)<ITextStyledComponentFooterProps>(({ isMobile, isTablet }) => ({
  marginTop: isMobile || isTablet ? '5px' : '58px',
  padding: '10px',
}));

export const FormBoxImagesLogoForMob = styled(Box)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    marginTop: isMobile || isTablet ? '5px' : '58px',
    padding: '10px',
    position: 'absolute',
    top: '69rem',
    zIndex: '2',
  }),
);

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
  fontFamily: 'gilroyextrabold',
  lineHeight: '16.8px',
  marginTop: '20px',
}));

export const FormBoxImagesHumanSubTitle = styled(Box)(() => ({
  color: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 400,
  fontFamily: 'gilroyextrabold',
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
    opacity: '.5',

    position: 'absolute',
    left: '10%',
    right: '0',
    bottom: '0',
    fontFamily: 'gilroyextrabold, sans-serif',
    fontWeight: 800,
    maxWidth: '100%',
    marginLeft: '30px',
    fontSize: '130px',
    letterSpacing: '-1px',
    lineHeight: '162.5px',
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
    color: '#4d5e5e',
    fontSize: '13px',
    fontWeight: 400,
    fontFamily: 'gilroyextrabold, sans-serif',

    '&::placeholder': {
      color: '#D7D7D7',
      fontSize: '13px',
      fontWeight: 400,
      fontFamily: 'gilroyextrabold, sans-serif',
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
  fontFamily: 'gilroyextrabold, sans-serif',
  color: '#FFFFFF',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));

export const BoxFormContentTitleRef = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'gilroyextrabold, sans-serif',
  color: '#FF3459',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));

export const BoxFormContentSubTitle = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'gilroyextrabold, sans-serif',
  color: '#FFFFFF',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '25.99px',
  whiteSpace: 'nowrap',
}));

export const FormBoxIconHead = styled(Box)<ITextStyledComponentFooterProps>(({ isMobile, isTablet }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  backgroundColor: 'white',

  height: '500px',
  width: '200px ',
}));

export const FormBoxIconLeftSide = styled(Box)<ITextStyledComponentFooterProps>(({ isMobile, isTablet }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '50px',

  '& img:nth-child(1) ': {
    padding: '10px',
    margin: '10px',
  },
  '& img:nth-child(2) ': {
    padding: '10px',
  },
}));

export const FormBoxIconRightSide = styled(Box)<ITextStyledComponentFooterProps>(
  ({ isMobile, isTablet }) => ({
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& img': {
      marginTop: '40px',
    },
  }),
);

export const FormBoxMap = styled(Box)<ITextStyledComponentFooterProps>(({ isMobile, isTablet }) => ({
  width: '100%',
  color: 'white',

  '& button ': {
    backgroundColor: 'transparent',
    border: 'none',
    width: '50px',
    height: '50px',
  },
  '& input ': {
    border: 'none',
    color: '#4d5e5e',
    fontSize: '13px',
    fontWeight: 400,
    fontFamily: 'gilroyextrabold, sans-serif',
  },
  '& input:focus ': {
    border: 'none',
    backgroundColor: '#f9f8f9',
    color: '#4d5e5e',
  },

  '& ul img ': {
    height: '50px',
    width: '100px',
  },

  '& li ': {
    wordWrap: 'break-word',
  },
}));
