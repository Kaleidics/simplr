import React from 'react';
import SignUp from './components/SignUp';

import styled from "styled-components";

const AppWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
      <SignUp />
    </AppWrapper>
  );
}

export default App;
