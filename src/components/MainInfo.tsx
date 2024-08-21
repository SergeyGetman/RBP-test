import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/globalstyle.css';
import CSSLogo from '../images/vector_logo/1452px-CSS3_logo_and_wordmark.svg';
import Validation from './Validate';
import ImageComponent from './ImageComponent';
import { Box, Typography } from '@mui/material';

const MainInfoPage = () => {
  const objGeneralCss = {
    color: 'yellow',
    fontSize: '25px',
    fontWeight: '800',
  };

  return (
    <>
      <Box>
        <Box>
          <Typography style={objGeneralCss}>Layout</Typography>
        </Box>
        <Container fluid className="generalContainer">
          <header>
            <Row className="align-items-center justify-content-center">
              <Col md={8} sm={12}>
                <h1>Your Header Content</h1>
                <Validation />
              </Col>
            </Row>
          </header>

          <main>
            <Row>
              <Col md={8} sm={12} className="mx-auto">
                <section className="main-content">
                  <h2>Main Content Area</h2>
                  <p>This is where your main content goes.</p>
                </section>
              </Col>
            </Row>
            <div className="titleAutor">
              <p> TEXT CONTENT </p>
              <ImageComponent images={CSSLogo} text="css-logo" />
            </div>
          </main>

          <section className="additional-content">
            <Row>
              <Col md={4} sm={12}>
                <div className="content-box">
                  <h3>Additional Content 1</h3>
                  <p>Some additional information.</p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="content-box">
                  <h3>Additional Content 2</h3>
                  <p>More additional information.</p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="content-box">
                  <h3>Additional Content 3</h3>
                  <p>Even more additional information.</p>
                </div>
              </Col>
            </Row>
          </section>

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
