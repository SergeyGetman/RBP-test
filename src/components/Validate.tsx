import React, { useCallback, useState } from 'react';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Form, Container, Row, Col } from 'react-bootstrap';
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
import { ParsedCountry, PhoneInput } from 'react-international-phone';
import { Box, Modal, Typography } from '@mui/material';
import { DATA_ENV_API } from '../api';
import Spiners from './Spiners';
import { WindowModalStyle } from './modal/ModalWindow.style';
import { CUSTOM_STYLE_PARAM } from '../styles/custom';

const Validate = () => {
  const [stateModal, setStateModal] = useState<boolean>(false);

  const [validated, setValidated] = useState(false);
  const { customStyleForBTNR } = CUSTOM_STYLE_PARAM;
  const { TELEGRAM_CHAT_ID, APi } = DATA_ENV_API;

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
  const isValid = isPhoneValid(phone);

  const [form_Data, set_Form_Data] = useState<IFormData>({
    user: '',
    email: '',
    phoneNo: '',
  });

  const chngFn = (event: any) => {
    const { name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
      phoneNo: phone,
    });
  };

  const showAnswer = useCallback(
    (state: boolean, text?: string) => {
      return (
        <>
          <Modal
            open={state}
            onClose={() => {}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <WindowModalStyle width="100px">
              <Typography
                style={{
                  backgroundColor: stateModal ? 'green' : 'darkred',
                  fontSize: '25px',
                  textAlign: 'center',
                }}
              >
                {text}
              </Typography>
            </WindowModalStyle>
          </Modal>
        </>
      );
    },
    [stateModal],
  );

  async function sendDataOnTGChanges(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

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
        .then((dat) => {
          if (!!dat.ok) {
            setStateModal(true);
          }
        });
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
                    disabled={!isValid}
                    text="Записаться  бесплатно"
                    customStyle={customStyleForBTNR}
                    bgColor={isMobile || isTablet ? '#0048FF' : '#FF3459'}
                    handleClick={(e) => sendDataOnTGChanges(e)}
                  />
                  <Box className="d-flex justify-content-center align-items-center mt-2">
                    {loading && <Spiners />}
                  </Box>
                  {stateModal &&
                    showAnswer(
                      stateModal,
                      stateModal ? 'ДАННЫЕ ОТПРАВЛЕНЫ УСПЕШНО' : 'ДАННЫЕ НЕ ОТПРАВЛЕНЫ ',
                    )}
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
