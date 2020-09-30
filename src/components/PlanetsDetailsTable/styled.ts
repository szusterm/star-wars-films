import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;

export const HeadRow = styled.tr`
  border-bottom: 1px solid black;
`;

type CellProps = {
  marked?: boolean;
};
export const Cell = styled.td<CellProps>`
  padding: 17px 4px;
  text-align: right;
  color: ${({marked}) => (marked ? '#00687F' : '#474747')};
`;
