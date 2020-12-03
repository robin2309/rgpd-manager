import React from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

const Welcome = () => (
  <Wrapper>
    <Intro />
    <SearchForm />
  </Wrapper>
);

export default React.memo(Welcome);
