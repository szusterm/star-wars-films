import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px 10px 25px;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;

  &:nth-child(even) {
    background: rgba(229, 229, 229, 0.5);
  }
`;

export const HeadCell = styled.th`
  width: 50%;
  font-weight: normal;
  color: #474747;
  padding-right: 20px;
  text-wrap: normal;
`;

export const ValueCell = styled.td`
  width: 50%;
  color: #474747;
`;

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  height: 50px;

  &:first-child ${ValueCell.selector} {
    color: #00687f;
  }
`;
