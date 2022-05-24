import React from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
  display:flex;
  flex-direction:column ;

`
function App() {
  return (
    <AppContainer>
      <div>Header</div>
      <div>Pages</div>
    </AppContainer>
  );
}

export default App;
