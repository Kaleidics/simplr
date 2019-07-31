import React from 'react';
import SignUp from './components/SignUp';

import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
    <main className="App">
      <SignUp />
    </main>
    </AppWrapper>
  );
}

export default App;
