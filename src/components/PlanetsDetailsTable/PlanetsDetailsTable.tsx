import SortableTable, {ColumnHeader} from '../SortableTable/SortableTable';
import MobileTable from '../MobileTable';
import {Planet} from '../../types';
import InfoBox from '../InfoBox';
import Hidden from '../Hidden';
import React from 'react';

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
        <MobileTable
          headers={HEADERS}
          items={planets}
          extractKey={extractPlanetKey}
        />
      </Hidden>
      <Hidden on="mobile">
        <SortableTable
          headers={HEADERS}
          items={planets}
          extractKey={extractPlanetKey}
        />
      </Hidden>
      {!planets.length && <InfoBox>This movie has no planets</InfoBox>}
    </>
  );
};

const extractPlanetKey = (planet: Partial<Planet>) => planet.name || '';

export default PlanetsDetailsTable;
