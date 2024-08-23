import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/globalstyle.css';
import CSSLogo from '../images/logo.svg';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ButtonElement } from '../components/button/ButtonElement';
import iconDate from '../images/icons/calendar_icon.svg';
import iconTime from '../images/icons/gg_time.svg';
import iconCircle from '../images/icons/circle.svg';
import iconGift from '../images/gift_logo.png';
import iconHuman from '../images/man_logo.png';
import {
  FormBox,
  FormBoxImagesGiftLogo,
  FormBoxImagesHumanLogo,
  FormBoxImagesHumanSubTitle,
  FormBoxImagesHumanTitle,
  FormBoxImagesLogo,
  FormBoxText,
  FormTextFrontend,
  TextStyledComponent,
  TextStyledComponentFooter,
} from '../Index.style';
import Validate from '../components/Validate';
import ImageComponent from './ImageComponent';

const MainInfoPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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

  return (
    <>
      <Box style={{ minHeight: '820px' }}>
        <Container fluid className="generalContainer">
          <Container fluid className="mt-2">
            <Row className="align-items-center justify-content-between" style={{ marginTop: '20px' }}>
              <Col xs={12} sm={4} md={4} lg={6} className="text-center text-sm-left ">
                <img src={CSSLogo} alt="Logo" height="56px" width="182px" className="img-fluid" />
              </Col>
              <Col xs={12} sm={4} md={4} className="d-flex justify-content-center justify-content-sm-end">
                <ButtonElement
                  icon={iconDate}
                  showIcon={true}
                  text="28 декабря"
                  className="m-1 text-white"
                  customStyle={customStyleForBTNClockDate}
                  bgColor="#302E5A"
                  handleClick={() => {}}
                />

                <ButtonElement
                  icon={iconTime}
                  showIcon={true}
                  customStyle={customStyleForBTNClockDate}
                  bgColor="#302E5A"
                  text="3.5 часа"
                  className="m-1 text-white"
                  handleClick={() => {}}
                />
              </Col>
            </Row>
          </Container>

          <Container fluid style={{ marginTop: isMobile || isTablet ? '56px' : '116px' }}>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={4} className="d-flex flex-column mb-3 mb-md-0">
                <ButtonElement
                  text="Вебинар"
                  className="align-self-start m-lg-0"
                  icon={iconCircle}
                  showIcon={true}
                  customStyle={customStyleForBTNVebinar}
                />
                <FormTextFrontend>front-end</FormTextFrontend>
                <FormBox>
                  <ButtonElement
                    text="С НУЛЯ"
                    className="align-self-start m-lg-0"
                    bgColor="#FF3459"
                    customStyle={customStyleForBTNRotate}
                  />
                  <TextStyledComponent isMobile={isMobile} isTablet={isTablet}>
                    легкий старт в IT профессии
                  </TextStyledComponent>
                </FormBox>

                <FormBoxText isTablet={isTablet} isMobile={isMobile}>
                  <p>
                    Узнайте какими <strong>навыками должен обладать </strong> <br /> фронтенд разработчик в
                    2022 году и как начать
                    <br /> карьеру в востребованной профессии
                  </p>
                </FormBoxText>
                <FormBoxImagesLogo>
                  <FormBoxImagesHumanLogo>
                    <ImageComponent images={iconHuman} text="gift" width="37.8px" height="37.8px" />
                    <FormBoxImagesHumanTitle>
                      Кирилл <span> КАСАТОНОВ </span>
                      <FormBoxImagesHumanSubTitle>
                        6 лет коммерческого опыта с такими компаниями как <br /> Mercedes-Benz и другими
                        крупными корпорациями
                      </FormBoxImagesHumanSubTitle>
                    </FormBoxImagesHumanTitle>
                  </FormBoxImagesHumanLogo>

                  <FormBoxImagesHumanLogo>
                    <ImageComponent
                      images={iconGift}
                      text="Бонус за регистрацию"
                      width="37.8px"
                      height="37.8px"
                    />
                    <FormBoxImagesHumanTitle>
                      Бонус за регистрацию
                      <FormBoxImagesHumanSubTitle>
                        PDF-файл "5 преимуществ <br /> профессии фронтенд разработчика"
                      </FormBoxImagesHumanSubTitle>
                    </FormBoxImagesHumanTitle>
                  </FormBoxImagesHumanLogo>
                </FormBoxImagesLogo>
              </Col>
              <Col xs={12} md={4} lg={4} className="d-flex justify-content-center ">
                <Validate />
              </Col>
            </Row>
          </Container>

          <TextStyledComponentFooter isMobile={isMobile} isTablet={isTablet}>
            front-end developer
          </TextStyledComponentFooter>
        </Container>
      </Box>
    </>
  );
};

export default MainInfoPage;
