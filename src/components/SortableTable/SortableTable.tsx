import {sortFunBuilder} from '../../utils/array';
import React, {useMemo, useState} from 'react';
import {Cell, HeadRow, Table} from './styled';
import HeaderButton from './HeaderButton';

export type SuperTableProps = {
  headers: ColumnHeader[];
  items: ItemData[];
};

export type ColumnHeader = {
  label: string;
  fieldName: string;
};

export type ItemData = {
  [key: string]: any;
};

const SortableTable: React.FC<SuperTableProps> = ({headers, items}) => {
  const [fieldToSort, setFieldToSort] = useState(headers[0]?.fieldName);
  const [isAscending, setIsAscending] = useState(true);

  const sortedItems = useMemo(() => {
    if (!fieldToSort) return items;
    return [...items].sort(sortFunBuilder(fieldToSort, isAscending));
  }, [items, fieldToSort, isAscending]);

  return (
    <Table>
      <thead>
        <HeadRow>
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
        </HeadRow>
      </thead>
      <tbody>
        {sortedItems.map((item, index) => {
          return (
            <tr key={index}>
              {headers.map(header => (
                <Cell key={item[header.fieldName]}>
                  {item[header.fieldName]}
                </Cell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SortableTable;
