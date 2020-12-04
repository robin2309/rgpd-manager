import { Input, Modal, Radio, Typography } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import languages from '../data/languages';
import requestTypes from '../data/requestTypes';

const { TextArea } = Input;
const { Text } = Typography;

const FieldWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const SendRequestDialog = ({ isVisible, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [language, setLanguage] = useState(languages[0].id);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [requestType, setRequestType] = useState(requestTypes[0].id);

  const onSendRequest = () => {
    onClose();
  };

  const onChangeFullName = e => {
    setFullName(e.target.value);
  };

  const onChangeRequestType = e => {
    setRequestType(e.target.value);
  };

  const onChangeAdditionalInfo = e => {
    setAdditionalInfo(e.target.value);
  };

  const onChangeLanguage = e => {
    setLanguage(e.target.value);
  };

  return (
    <Modal
      title="Finaliser la requête"
      visible={isVisible}
      onOk={onSendRequest}
      onCancel={onClose}
    >
      <FieldWrapper>
        <Text>Type de requête</Text>
        <Radio.Group onChange={onChangeRequestType} value={requestType}>
          {requestTypes.map(reqType => (
            <Radio key={reqType.id} value={reqType.id}>
              {reqType.value}
            </Radio>
          ))}
        </Radio.Group>
      </FieldWrapper>
      <FieldWrapper>
        <Input
          id="fullName"
          placeholder="Nom, Prénom*"
          required
          value={fullName}
          onChange={onChangeFullName}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Text>Langue de la requête</Text>
        <Radio.Group onChange={onChangeLanguage} value={language}>
          {languages.map(lang => (
            <Radio key={lang.id} value={lang.id}>
              {lang.value}
            </Radio>
          ))}
        </Radio.Group>
      </FieldWrapper>
      <FieldWrapper>
        <TextArea
          id="additionalInfo"
          placeholder="Informations additionnelles"
          value={additionalInfo}
          onChange={onChangeAdditionalInfo}
          rows={4}
        />
      </FieldWrapper>
    </Modal>
  );
};

SendRequestDialog.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(SendRequestDialog);
