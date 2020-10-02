import SortableTable, {ColumnHeader} from '../SortableTable/SortableTable';
import {Planet} from '../../types';
import React from 'react';
import MobileTable from '../MobileTable';

type PlanetsDetailsTableProps = {
  planets: Planet[];
};

const HEADERS: ColumnHeader[] = [
  {
    label: 'Name',
    fieldName: 'name'
  },
  {
    label: 'Rotation period',
    fieldName: 'rotationPeriod'
  },
  {
    label: 'Orbital period',
    fieldName: 'orbitalPeriod'
  },
  {
    label: 'Diameter',
    fieldName: 'diameter'
  },
  {
    label: 'Climate',
    fieldName: 'climates'
  },
  {
    label: 'Surface water',
    fieldName: 'surfaceWater'
  },
  {
    label: 'Population',
    fieldName: 'population'
  }
];

const PlanetsDetailsTable: React.FC<PlanetsDetailsTableProps> = ({planets}) => {
  return <MobileTable headers={HEADERS} items={planets} />;
};

export default PlanetsDetailsTable;
