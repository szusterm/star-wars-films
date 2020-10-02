import {Cell, HeadRow, Table} from './styled';
import {Maybe, Planet} from '../../types';
import React from 'react';

type PlanetsDetailsTableProps = {
  planets: Maybe<Planet>[];
};

const PlanetsDetailsTable: React.FC<PlanetsDetailsTableProps> = ({planets}) => {
  return (
    <Table>
      <thead>
        <HeadRow>
          <Cell marked>Name</Cell>
          <Cell>Rotation period</Cell>
          <Cell>Orbital period</Cell>
          <Cell>Diameter</Cell>
          <Cell>Climate</Cell>
          <Cell>Surface water</Cell>
          <Cell>Population</Cell>
        </HeadRow>
      </thead>
      <tbody>
        {planets.map(planet => {
          if (!planet) return;

          return (
            <tr key={planet.id}>
              <Cell marked>{planet.name}</Cell>
              <Cell>{planet.rotationPeriod}</Cell>
              <Cell>{planet.orbitalPeriod}</Cell>
              <Cell>{planet.diameter}</Cell>
              <Cell>{planet.climates}</Cell>
              <Cell>{planet.surfaceWater}</Cell>
              <Cell>{planet.population}</Cell>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PlanetsDetailsTable;
