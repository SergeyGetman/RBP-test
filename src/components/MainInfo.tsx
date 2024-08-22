import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/globalstyle.css';
import CSSLogo from '../images/logo.svg';
import Validation from './Validate';
import ImageComponent from './ImageComponent';
import { Box, Typography } from '@mui/material';
import { ButtonElement } from '../components/button/ButtonElement';
import iconDate from '../images/icons/calendar_icon.svg';
import iconTime from '../images/icons/gg_time.svg';
import { FormTextFrontend } from '../Index.style';

const MainInfoPage = () => {
  const objGeneralCss = {
    color: 'yellow',
    fontSize: '25px',
    fontWeight: '800',
  };

  return (
    <>
      <Box>
        <Container fluid className="generalContainer">
          <Container fluid className="mt-5">
            <Row className="align-items-center justify-content-between">
              <Col xs={12} sm={6} md={4} lg={6} className="text-center text-sm-start">
                <img src={CSSLogo} alt="Logo" height="56px" width="182px" className="img-fluid" />
              </Col>
              <Col xs={12} sm={6} md={4} className="d-flex justify-content-center justify-content-sm-end">
                <ButtonElement
                  icon={iconDate}
                  showIcon={true}
                  text="28 декабря"
                  className="m-1 text-white"
                  bgColor="#302E5A"
                  handleClick={() => {}}
                />

                <ButtonElement
                  icon={iconTime}
                  showIcon={true}
                  bgColor="#302E5A"
                  text="3.5 часа"
                  className="m-1 text-white"
                  handleClick={() => {}}
                />
              </Col>
            </Row>
          </Container>
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center align-items-center mb-3 mb-md-0"
            >
              <ButtonElement text="Hi there" />
              <FormTextFrontend>front-end</FormTextFrontend>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              className="d-flex justify-content-center align-items-center"
              style={{ marginLeft: '70px' }}
            >
              <Validation />
            </Col>
          </Row>

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
