import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/globalstyle.css';
import CSSLogo from '../images/logo.svg';
import { Box, Typography } from '@mui/material';
import { ButtonElement } from '../components/button/ButtonElement';
import iconDate from '../images/icons/calendar_icon.svg';
import iconTime from '../images/icons/gg_time.svg';
import iconCircle from '../images/icons/circle.svg';
import iconBlade from '../images/icons/bnt_logo.svg';
import { FormBox, FormBoxText, FormTextFrontend, TextStyledComponent } from '../Index.style';
import Validate from '../components/Validate';

const MainInfoPage = () => {
  const customStyleForBTNRotate = {
    rotate: '-3.51deg',
    fontSize: '23px',
    fontWeight: '800',
    fontFamily: 'Gilroy',
    lineHeight: '28.75px',
  };

  const customStyleForBTNVebinar = {
    fontSize: '24px',
    fontWeight: '600',
    fontFamily: 'Gilroy',
    lineHeight: '24px',
  };
  const customStyleForBTNClockDate = {
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: 'Gilroy',
    lineHeight: '14px',
  };

  return (
    <>
      <Box>
        <Container fluid className="generalContainer">
          <Container fluid className="mt-2">
            <Row className="align-items-center justify-content-between" style={{ marginTop: '20px' }}>
              <Col xs={12} sm={6} md={4} lg={6} className="text-center text-sm-start">
                <img src={CSSLogo} alt="Logo" height="56px" width="182px" className="img-fluid" />
              </Col>
              <Col xs={12} sm={6} md={4} className="d-flex justify-content-center justify-content-sm-end">
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

          <Container fluid style={{ marginTop: '116px' }}>
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
                  <TextStyledComponent>легкий старт в IT профессии</TextStyledComponent>
                </FormBox>

                <FormBoxText>
                  <p>
                    Узнайте какими <strong>навыками должен обладать </strong> <br /> фронтенд разработчик в
                    2022 году и как начать
                    <br /> карьеру в востребованной профессии
                  </p>
                </FormBoxText>
              </Col>
              <Col
                xs={12}
                md={4}
                lg={4}
                className="d-flex justify-content-center "
                style={{ marginLeft: '70px' }}
              >
                <Validate />
              </Col>
            </Row>
          </Container>

          <footer>
            <Row className="justify-content-center">
              <Col md={8} sm={12} className="text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
              </Col>
            </Row>
          </footer>
        </Container>
      </Box>
    </>
  );
};

export default MainInfoPage;
