import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  position: relative;
`;

export type LabelProps = {
  isError?: boolean;
};
export const Label = styled.label<LabelProps>`
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 5px;
  color: ${({isError}) => (isError ? '#FF1616' : 'unset')};
`;

export const StyledInput = styled.input`
  outline: none;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #999999;
  background: transparent;
  font-size: 1.33em;
  color: #474747;

  &::placeholder {
    color: #c4c4c4;
  }
`;

export const ErrorInfoBox = styled.div`
  z-index: 2;
  position: absolute;
  top: 100%;
  margin-top: 1px;
  background: white;
  width: 100%;
  padding: 8px;
  color: #ff1616;
  border: 1px solid #ff1616;
  box-shadow: 0 4px 4px rgba(196, 196, 196, 0.5);
`;
