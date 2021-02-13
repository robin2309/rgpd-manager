import React from 'react';
import styled from 'styled-components';

import Illustration from './Illustration';
import Intro from './Intro';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
`;

const Welcome = () => (
  <Wrapper>
    <Intro />
    <SearchForm />
    <Illustration />
  </Wrapper>
);

export default React.memo(Welcome);
