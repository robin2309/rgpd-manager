import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { primary } from '../theme';

const StyledHeader = styled(PageHeader)`
  && {
    background-color: ${primary[300]};
  }
`;

const Text = styled.h1`
  color: ${primary[100]};
  font-size: 16px;
  margin-bottom: 0;
`;

const Layout = ({ children }) => (
  <div>
    <StyledHeader title={<Text>Vos droits numériques</Text>} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
