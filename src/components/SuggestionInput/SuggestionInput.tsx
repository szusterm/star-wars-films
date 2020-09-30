import {Container, SuggestionItem, SuggestionsContainer} from './styled';
import {neutralizeString} from '../../utils/string';
import Autosuggest from 'react-autosuggest';
import {InputProps} from '../Input/Input';
import React, {useState} from 'react';
import './autosuggest-override.css';
import Input from '../Input';

type SuggestionInput<T> = {
  value?: string;
  suggestions: T[];
  onValueChange?: (newValue: string) => void;
  onSelectSuggestion: (suggestion: T) => void;
  mapSuggestionValue: (suggestion: T) => string;
  inputProps?: InputProps;
};

const SuggestionInput = <T extends any>({
  value,
  suggestions,
  onValueChange,
  onSelectSuggestion,
  mapSuggestionValue,
  inputProps: customInputProps
}: SuggestionInput<T>) => {
  const [currentSuggestions, setCurrentSuggestions] = useState<T[]>([]);

  const getPassingSuggestions = (textValue: string): T[] => {
    const neutralizedData = suggestions.map(suggestion => ({
      normal: suggestion,
      neutralized: neutralizeString(mapSuggestionValue(suggestion))
    }));

    return neutralizedData
      .filter(data => data.neutralized.includes(neutralizeString(textValue)))
      .map(data => data.normal);
  };

  const onSuggestionsFetchRequested = ({value}: {value: string}) => {
    setCurrentSuggestions(getPassingSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setCurrentSuggestions([]);
  };

  const renderSuggestion = (
    suggestion: T,
    {isHighlighted}: {isHighlighted: boolean}
  ) => (
    <SuggestionItem isHighlighted={isHighlighted}>
      {mapSuggestionValue(suggestion)}
    </SuggestionItem>
  );

  return (
    <Container>
      <Autosuggest
        suggestions={currentSuggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={mapSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSuggestionsContainer={({containerProps, children}) => (
          <SuggestionsContainer {...containerProps}>
            {children}
          </SuggestionsContainer>
        )}
        inputProps={{
          value: value || '',
          onChange: (event, {newValue}) =>
            onValueChange && onValueChange(newValue)
        }}
        renderInputComponent={inputProps => (
          <Input {...customInputProps} {...inputProps} />
        )}
        onSuggestionSelected={(event, {suggestion}) => {
          onSelectSuggestion(suggestion);
          onValueChange && onValueChange('');
        }}
      />
    </Container>
  );
};

export default SuggestionInput;
