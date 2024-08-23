import React from 'react';
import './Index.style';
import { HeaderAppStyle } from './Index.style';

import { CustomButtonTextEnum } from './enam';
import { ButtonElement } from './components/button/ButtonElement';

export const App = () => {
  return (
    <>
      <HeaderAppStyle>
        <ButtonElement text={CustomButtonTextEnum.titleNext} variant="secondary" />
      </HeaderAppStyle>
    </>
  );
};

export default App;
