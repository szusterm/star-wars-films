import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid black;
`;

type CellProps = {
  marked?: boolean;
};
export const Cell = styled.td<CellProps>`
  padding: 17px 4px;
  text-align: right;
  color: #474747;

  &:first-child {
    text-align: left;
    color: #00687f;
  }
`;
