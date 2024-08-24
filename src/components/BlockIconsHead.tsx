import React from 'react';
import { Box } from '@mui/material';
import { FormBoxIconHead, FormBoxIconLeftSide, FormBoxIconRightSide } from '../Index.style';

import CSS_logo from '../images/vector_logo/1452px-CSS3_logo_and_wordmark.svg';
import Sublime_logo from '../images/vector_logo/1505369583_sublime-text 1.svg';
import HTML_logo from '../images/vector_logo/1024px-HTML5_logo_and_wordmark.svg';
import JS_logo from '../images/vector_logo/javascript.svg';
import VS_logo from '../images/vector_logo/Visual_Studio_Code_1.35_icon.svg';
import ImageComponent from './ImageComponent';
import { Col, Container, Row } from 'react-bootstrap';
import useAnotherDevises from '../hooks/useAnotherDevises';

const BlockIconsHead = () => {
  const { isMobile, isTablet } = useAnotherDevises();

  return (
    <>
      <Container fluid className="d-flex">
        <Row className="mt-5" style={{ marginLeft: '20px' }}>
          <Col>
            <FormBoxIconLeftSide>
              <ImageComponent images={CSS_logo} text="CSS_logo" />
              <ImageComponent images={Sublime_logo} text="Sublime_logo" />
            </FormBoxIconLeftSide>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormBoxIconRightSide>
              <ImageComponent images={HTML_logo} text="HTML_logo" />
              <ImageComponent images={JS_logo} text="JS_logo" />
              <ImageComponent images={VS_logo} text="VS_logo" />
            </FormBoxIconRightSide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlockIconsHead;
