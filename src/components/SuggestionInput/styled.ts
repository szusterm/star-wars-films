import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: -6px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 4px rgba(196, 196, 196, 0.5);
  padding: 6px 0;
  max-height: 200px;
  overflow-y: auto;
`;

export type SuggestionItemProps = {
  isHighlighted?: boolean;
};
export const SuggestionItem = styled.div<SuggestionItemProps>`
  list-style-type: none !important;
  padding: 6px 11px;
  cursor: pointer;
  background: ${({isHighlighted}) =>
    isHighlighted ? '#f5f5f5' : 'transparent'};
`;
