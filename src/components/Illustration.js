import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 12px;
`;

const Illustration = () => (
  <Wrapper>
    <img src="/power_girl.png" alt="illustration" />
  </Wrapper>
);

export default React.memo(Illustration);
