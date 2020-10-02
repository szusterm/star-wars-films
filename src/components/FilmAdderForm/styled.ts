import {DESKTOP_SIZE} from '../../constants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media (min-width: ${DESKTOP_SIZE}) {
    max-width: 80%;
  }
`;

export const SelectedPlanetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 4px 0;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 34px;
  border: 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: white;
  background: #1ba1be;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: #74acb8;
  }

  @media (min-width: ${DESKTOP_SIZE}) {
    width: 160px;
  }
`;
