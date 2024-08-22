import React from 'react';
import './Index.style';
import { HeaderAppStyle } from './Index.style';

import AdditionalInfo from './components/AdditionalInfo';
import { CustomButtonTextEnum } from './enam';
import { ButtonElement } from './components/button/ButtonElement';

export const App = () => {
  return (
    <>
      <HeaderAppStyle>
        <AdditionalInfo />
        <ButtonElement text={CustomButtonTextEnum.titleNext} variant="secondary" />
      </HeaderAppStyle>
    </>
  );
};

export default App;
