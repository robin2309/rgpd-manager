import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Title } = Typography;

const StyledTitle = styled(Title)`
  && {
    text-align: center;
  }
`;

const Intro = () => (
  <StyledTitle level={3}>Contrôlez vos données personnelles !</StyledTitle>
);

export default React.memo(Intro);
