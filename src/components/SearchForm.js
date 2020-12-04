import { Input, Typography } from 'antd';
import Autosuggest from 'react-autosuggest';
import React, { useState } from 'react';
import styled from 'styled-components';

import companies from '../data/companies';

import SendRequestDialog from './SendRequestDialog';

const { Text } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px 36px;

  & {
    .suggestions_container {
    }

    .suggestions_list {
      list-style-type: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      padding: 0;
      margin: 0;
      background: #f0f8ff;
    }

    .container {
      width: 100%;
      max-width: 500px;
    }
  }
`;

const StyledInput = styled(Input)`
  && {
    width: 100%;
  }
`;

const SuggestionWrapper = styled.div`
  && {
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const getSuggestions = search => {
  const inputValue = search.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : companies.filter(
        company =>
          company.name.toLowerCase().slice(0, inputLength) === inputValue,
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <SuggestionWrapper>
    <Text>{suggestion.name}</Text>
  </SuggestionWrapper>
);

const SearchForm = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isRequestDialogVisible, setIsRequestDialogVisible] = useState(false);

  const onChange = (event, { newValue }) => {
    setFieldValue(newValue);
  };

  const fetchSuggestions = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const suggestInputProps = {
    value: fieldValue,
    onChange,
  };

  const renderInput = inputProps => (
    <StyledInput placeholder="Entreprise, site web, ..." {...inputProps} />
  );

  const onSelect = () => {
    setIsRequestDialogVisible(true);
  };

  const onClose = () => {
    setIsRequestDialogVisible(false);
  };

  return (
    <Wrapper>
      <Text>Choisissez l&apos;entreprise:</Text>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={fetchSuggestions}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={suggestInputProps}
        renderInputComponent={renderInput}
        theme={{
          container: 'container',
          suggestionsContainer: 'suggestions_container',
          suggestionsList: 'suggestions_list',
        }}
        onSuggestionSelected={onSelect}
      />
      <SendRequestDialog isVisible={isRequestDialogVisible} onClose={onClose} />
    </Wrapper>
  );
};

export default React.memo(SearchForm);
