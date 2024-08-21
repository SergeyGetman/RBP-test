import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';
import AdditionalInfo from './components/AdditionalInfo';
import { CustomButtonTextEnum } from './enam';
import { ButtonElement } from './components/button/ButtonElement';

import SearchField from './components/SearcField';

export const App = () => {


  return (
    <>
      <HeaderAppStyle >
        <SearchField />
        <AddPage />
        <AdditionalInfo />
        <ButtonElement text={CustomButtonTextEnum.titleNext} variant="contained" />
      </HeaderAppStyle>
    </>
  );
};

export default App;
