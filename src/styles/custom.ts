let isMobile;
let isTablet;

const customStyleForBTNR = {
  width: '248px',
  height: '51px',
  fontSize: '15px',
  fontWeight: '700',
  fontFamily: 'Gilroy',
  lineHeight: '24px',
  margin: '0 auto',
};
const customStyleForBTNRotate = {
  rotate: '-3.51deg',
  fontSize: isTablet || isMobile ? '16px' : '23px',
  fontWeight: '800',
  fontFamily: 'Gilroy',
  lineHeight: '28.75px',
};

const customStyleForBTNVebinar = {
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Gilroy',
  lineHeight: '24px',
  margin: isMobile || isTablet ? '0 auto' : 'auto auto',
};
const customStyleForBTNClockDate = {
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Gilroy',
  lineHeight: '14px',
};

export const CUSTOM_STYLE_PARAM = {
  customStyleForBTNR,
  customStyleForBTNRotate,
  customStyleForBTNVebinar,
  customStyleForBTNClockDate,
};
