import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { primary } from '../theme';

const { Title } = Typography;

const StyledTitle = styled(Title)`
  && {
    text-align: center;
    color: ${primary[500]};
  }
`;

const HighlightText = styled.span`
  && {
    color: ${primary[300]};
  }
`;

const Intro = () => (
  <StyledTitle level={3}>
    Contrôlez <HighlightText>vos données personnelles</HighlightText> sur le web
  </StyledTitle>
);

export default React.memo(Intro);
