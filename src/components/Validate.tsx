import React, { ReactEventHandler, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BoxForm,
  BoxFormContent,
  BoxFormContentSubTitle,
  BoxFormContentTitle,
  BoxFormContentTitleRef,
} from '../Index.style';
import { Box } from '@mui/material';
import { ButtonElement } from '../components/button/ButtonElement';

const Validate = () => {
  const customStyleForBTNR = {
    width: '248px',
    height: '51px',
    fontSize: '15px',
    fontWeight: '700',
    fontFamily: 'Gilroy',
    lineHeight: '24px',
    margin: '0 auto',
  };

  const [validated, set_Validated] = useState(false);
  const [form_Data, set_Form_Data] = useState({
    user: '',
    email: '',
    phoneNo: '',
  });
  const submitFn = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    set_Validated(true);
  };
  const chngFn = (event: any) => {
    const { name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
    });
  };
  return (
    <>
      <BoxForm>
        <Container fluid className="mt-5">
          <Row>
            <Col>
              <BoxFormContentTitle>
                Запишитесь <BoxFormContentTitleRef>бесплатно</BoxFormContentTitleRef> <br />
              </BoxFormContentTitle>
              <BoxFormContentSubTitle>и получите подарок</BoxFormContentSubTitle>

              <BoxFormContent>
                <Form noValidate validated={validated} onSubmit={submitFn}>
                  <Form.Group controlId="username">
                    <Form.Control
                      placeholder="Ваша имя и фамилия"
                      type="text"
                      name="user"
                      value={form_Data.user}
                      onChange={chngFn}
                      pattern="^[a-zA-Z0-9]+$"
                      required
                      isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(form_Data.user)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid username (alphanumeric characters only).
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Control
                      placeholder="+38"
                      type="number"
                      name="phoneNo"
                      value={form_Data.phoneNo}
                      onChange={chngFn}
                      pattern="^\d{10}$"
                      required
                      isInvalid={validated && !/^\d{10}$/.test(form_Data.phoneNo)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid 10-digit phone number.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control
                      placeholder="Ваш Email"
                      type="email"
                      name="email"
                      value={form_Data.email}
                      onChange={chngFn}
                      required
                      isInvalid={validated && !/^\S+@\S+\.\S+$/.test(form_Data.email)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <ButtonElement
                    text="Записаться бесплатно"
                    customStyle={customStyleForBTNR}
                    bgColor="#FF3459"
                    type="submit"
                  />
                </Form>
              </BoxFormContent>
            </Col>
          </Row>
        </Container>
      </BoxForm>
    </>
  );
};
export default Validate;
