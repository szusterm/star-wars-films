import {Cell, TableHeader, Table} from './styled';
import {sortFunBuilder} from '../../utils/array';
import React, {useMemo, useState} from 'react';
import HeaderButton from './HeaderButton';

export type SuperTableProps = {
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

const SortableTable: React.FC<SuperTableProps> = ({
  headers,
  items,
  extractKey
}) => {
  const [fieldToSort, setFieldToSort] = useState(headers[0]?.fieldName);
  const [isAscending, setIsAscending] = useState(true);

  const sortedItems = useMemo(() => {
    if (!fieldToSort) return items;
    return [...items].sort(sortFunBuilder(fieldToSort, isAscending));
  }, [items, fieldToSort, isAscending]);

  return (
    <Table>
      <TableHeader>
        <tr>
          {headers.map((header, index) => (
            <Cell key={header.label}>
              <HeaderButton
                title={header.label}
                isSorted={fieldToSort === header.fieldName}
                isAscending={isAscending}
                onClick={() => {
                  setFieldToSort(header.fieldName);
                  setIsAscending(
                    fieldToSort === header.fieldName ? !isAscending : true
                  );
                }}
                isFirst={index === 0}
                isLast={index === headers.length - 1}
              />
            </Cell>
          ))}
        </tr>
      </TableHeader>
      <tbody>
        {sortedItems.map(item => (
          <tr key={extractKey(item)}>
            {headers.map(header => (
              <Cell key={item[header.fieldName]}>
                {item[header.fieldName] || 'unknown'}
              </Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SortableTable;
