import SortableTable, {ColumnHeader} from '../SortableTable/SortableTable';
import {Planet} from '../../types';
import React from 'react';
import MobileTable from '../MobileTable';
import Hidden from '../Hidden';

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
  return (
    <>
      <Hidden on="desktop">
        <MobileTable headers={HEADERS} items={planets} />
      </Hidden>
      <Hidden on="mobile">
        <SortableTable headers={HEADERS} items={planets} />
      </Hidden>
    </>
  );
};

export default PlanetsDetailsTable;
