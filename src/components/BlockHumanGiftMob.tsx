import React from 'react';
import {
  FormBoxImagesHumanLogo,
  FormBoxImagesHumanSubTitle,
  FormBoxImagesHumanTitle,
  FormBoxImagesLogo,
  FormBoxImagesLogoForMob,
} from '../Index.style';
import ImageComponent from '../components/ImageComponent';
import iconHuman from '../images/man_logo.png';
import iconGift from '../images/gift_logo.png';
import UseAnotherDevises from '../hooks/useAnotherDevises';

const BlockHumanGiftMob = () => {
  const { isMobile, isTablet } = UseAnotherDevises();
  return (
    <>
      <FormBoxImagesLogoForMob>
        <FormBoxImagesHumanLogo>
          <ImageComponent images={iconHuman} text="gift" width="37.8px" height="37.8px" />
          <FormBoxImagesHumanTitle>
            Кирилл <span> КАСАТОНОВ </span>
            <FormBoxImagesHumanSubTitle>
              6 лет коммерческого опыта с такими компаниями как <br /> Mercedes-Benz и другими крупными
              корпорациями
            </FormBoxImagesHumanSubTitle>
          </FormBoxImagesHumanTitle>
        </FormBoxImagesHumanLogo>

        <FormBoxImagesHumanLogo>
          <ImageComponent images={iconGift} text="Бонус за регистрацию" width="37.8px" height="37.8px" />
          <FormBoxImagesHumanTitle>
            Бонус за регистрацию
            <FormBoxImagesHumanSubTitle>
              PDF-файл "5 преимуществ <br /> профессии фронтенд разработчика"
            </FormBoxImagesHumanSubTitle>
          </FormBoxImagesHumanTitle>
        </FormBoxImagesHumanLogo>
      </FormBoxImagesLogoForMob>
    </>
  );
};

export default BlockHumanGiftMob;
