import React, { ReactEventHandler, useState } from 'react';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BoxForm,
  BoxFormContent,
  BoxFormContentSubTitle,
  BoxFormContentTitle,
  BoxFormContentTitleRef,
  FormBoxMap,
  FormBoxTextConfirm,
} from '../Index.style';
import { ButtonElement } from '../components/button/ButtonElement';
import useAnotherDevises from '../hooks/useAnotherDevises';

import flags from 'react-phone-number-input/flags';
import { CountrySelector, ParsedCountry, PhoneInput } from 'react-international-phone';
import { Box } from '@mui/material';
import { DATA_ENV_API } from '../api';
import Spiners from './Spiners';

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

  interface IPhone {
    (phone: string, meta: { country: ParsedCountry; inputValue: string }): void;
    setPhone: () => void;
  }
  interface IPhone {
    phone: string;
    meta?: {
      country?: ParsedCountry;
      inputValue?: string;
    };
  }

  interface IFormData {
    user: string;
    email: string;
    phoneNo: string;
  }

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const { isTablet, isMobile } = useAnotherDevises();
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  console.log('phone', phone);
  const isValid = isPhoneValid(phone);
  const [validated, set_Validated] = useState(false);
  const [form_Data, set_Form_Data] = useState<IFormData>({
    user: '',
    email: '',
    phoneNo: '',
  });

  const { TELEGRAM_CHAT_ID, APi } = DATA_ENV_API;

  const chngFn = (event: any) => {
    console.log('EVENT', event);
    const { name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
      phoneNo: phone,
    });
  };

  async function sendDataOnTGChanges(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    setLoading(true);

    const { user, email, phoneNo } = form_Data;
    const text = `ЗАЯВКА ОТ ${user}: ТЕЛЕФОН: ${phoneNo} email: ${email}`;
    try {
      await fetch(APi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': ' *',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      })
        .then((response) => response.json())
        .then((dat) => console.log('DATA', dat));
    } catch (error) {
      console.error('error', error);
    }
  }

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
                <Form noValidate validated={validated}>
                  <Form.Group controlId="username">
                    <Form.Control
                      placeholder="Ваша имя и фамилия"
                      type="text"
                      name="user"
                      value={form_Data.user}
                      onChange={chngFn}
                      pattern="^[a-zA-ZА-Яа-яЁё]+(?:\s[a-zA-ZА-Яа-яЁё]+)+$"
                      required
                      isInvalid={
                        validated && !/^[a-zA-ZА-Яа-яЁё]+(?:\s[a-zA-ZА-Яа-яЁё]+)+$/.test(form_Data.user)
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid username (alphanumeric characters only).
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <FormBoxMap>
                      <PhoneInput
                        defaultCountry="UA"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputStyle={{ width: '100%' }}
                      />
                    </FormBoxMap>

                    {!isValid && (
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid phone number.
                      </Form.Control.Feedback>
                    )}
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
                    // disabled={!isValid}
                    text="Записаться  бесплатно"
                    customStyle={customStyleForBTNR}
                    bgColor={isMobile || isTablet ? '#0048FF' : '#FF3459'}
                    // type="submit"
                    handleClick={(e) => sendDataOnTGChanges(e)}
                  />
                  {loading && <Spiners />}

                  <FormBoxTextConfirm>
                    Нажимая на кнопку я согашаюсь <br /> <span> с политикой конфидециальности</span>
                  </FormBoxTextConfirm>
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
