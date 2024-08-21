import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import   "../styles/globalstyle.css";

import { ReactComponent as SelectArrowDown } from "../images/vector_logo/1505369583_sublime-text 1.svg"
import Validation from './Validate';
import ImageComponent from './ImageComponent';

const MainInfoPage = () => {
  return (
    <Container fluid>
      {/* Header Section */}
      <header>
        <Row className="align-items-center justify-content-center">
          <Col md={8} sm={12}>
            <h1>Your Header Content</h1>
            <Validation />
          </Col>
        </Row>
      </header>

      {/* Main Content Section */}
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
          <ImageComponent />
        </div>
      </main>

      {/* Additional Content Section */}
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

      {/* Footer Section */}
      <footer>
        <Row className="justify-content-center">
          <Col md={8} sm={12} className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default MainInfoPage;
