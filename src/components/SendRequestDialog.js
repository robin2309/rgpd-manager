import { Input, Modal, Radio, Typography } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import qs from 'qs';
import styled from 'styled-components';

import { enConf, frConf, requestTypes } from '../data/mail';
import languages from '../data/languages';

const { TextArea } = Input;
const { Text } = Typography;

const FieldWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Label = styled(Text)`
  && {
    display: block;
  }
`;

const ErrorText = styled(Text)`
  && {
    display: block;
    font-size: 12px;
    color: #f44336;
  }
`;

const getMailConf = (language, requestType) =>
  language === 'fr' ? frConf[requestType] : enConf[requestType];

const SendRequestDialog = ({ isVisible, onClose, email }) => {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [language, setLanguage] = useState(languages[0].id);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [requestType, setRequestType] = useState(requestTypes[0].id);

  const hasErrors = () => {
    let formHasErrors = false;
    if (!fullName) {
      setFullNameError('Veuillez renseigner votre nom et prénom ');
      formHasErrors = true;
    }
    return formHasErrors;
  };

  const onSendRequest = () => {
    if (hasErrors()) {
      return;
    }
    onClose();
    const { object: subject, content } = getMailConf(language, requestType);
    const urlMailTo = `mailto:${email}?${qs.stringify({
      subject,
      body: content(fullName, additionalInfo),
    })}`;
    window.open(urlMailTo, '_blank');
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
        <Label>Type de requête</Label>
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
          placeholder="Prénom, nom *"
          required
          value={fullName}
          onChange={onChangeFullName}
        />
        {fullNameError && <ErrorText>{fullNameError}</ErrorText>}
      </FieldWrapper>
      <FieldWrapper>
        <Label>Langue de la requête</Label>
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
          placeholder="Informations additionnelles afin de faciliter l'identification de votre profil par le destinataire de la requête (ID d'utilisateur, pseudonyme, email, ...)"
          value={additionalInfo}
          onChange={onChangeAdditionalInfo}
          rows={5}
        />
      </FieldWrapper>
    </Modal>
  );
};

SendRequestDialog.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default React.memo(SendRequestDialog);
