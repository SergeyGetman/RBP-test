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
  FormBoxText,
  FormTextFrontend,
  TextStyledComponent,
  TextStyledComponentFooter,
} from '../Index.style';
import Validate from '../components/Validate';
import ImageComponent from './ImageComponent';
import BlockHumanGiftMob from '../components/BlockHumanGiftMob';
import BlockHumanGift from '../components/BlockHumanGift';
import BlockIconsHead from '../components/BlockIconsHead';

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
      <Box style={{ minHeight: '920px' }}>
        <Container fluid className="generalContainer">
          <Container fluid className="mt-2">
            <Row className="align-items-center " style={{ marginTop: '20px' }}>
              <Col xs={12} sm={4} md={4} lg={3} className="text-center text-sm-left ">
                <img src={CSSLogo} alt="Logo" height="56px" width="182px" className="img-fluid" />
              </Col>
              <Col
                xs={12}
                sm={4}
                md={4}
                className="d-flex justify-content-center justify-content-sm-end"
                style={{ gridGap: '10px' }}
              >
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
              <Col xs={12} md={6} lg={3} className="d-flex flex-column mb-3 mb-md-0">
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
                    Узнайте, какими <strong>навыками должен обладать </strong> <br /> фронтенд разработчик в
                    2022 году и как начать
                    <br /> карьеру в востребованной профессии
                  </p>
                </FormBoxText>
                {isMobile || isTablet ? <BlockHumanGiftMob /> : <BlockHumanGift />}
              </Col>

              <Col xs={12} md={4} lg={4} className="d-flex justify-content-center">
                <Validate />
              </Col>
              {isMobile ||
                (isTablet && (
                  <Col xs={12} md={12} lg={3} style={{ marginLeft: '-5rem' }}>
                    <BlockIconsHead />
                  </Col>
                ))}
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
