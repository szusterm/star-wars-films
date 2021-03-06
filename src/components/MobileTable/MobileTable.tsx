import {Container, HeadCell, Table, TableRow, ValueCell} from './styled';
import React from 'react';

export type MobileTableProps = {
  headers: ColumnHeader[];
  items: ItemData[];
  extractKey: (item: ItemData) => string | number;
};

export type ColumnHeader = {
  label: string;
  fieldName: string;
};

export type ItemData = {
  [key: string]: any;
};

const MobileTable: React.FC<MobileTableProps> = ({
  headers,
  items,
  extractKey
}) => {
  return (
    <Container>
      {items.map(item => (
        <Table key={extractKey(item)}>
          <tbody>
            {headers.map(header => (
              <TableRow key={header.fieldName}>
                <HeadCell>{header.label}</HeadCell>
                <ValueCell>{item[header.fieldName] || 'unknown'}</ValueCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      ))}
    </Container>
  );
};

export default MobileTable;
