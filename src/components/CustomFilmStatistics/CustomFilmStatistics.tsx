import PlanetsDetailsTable from '../PlanetsDetailsTable';
import CollapsedBox from '../CollapsedBox';
import {Film} from '../../types';
import React from 'react';

type CustomFilmStatisticsProps = {
  film: Film;
};

const CustomFilmStatistics: React.FC<CustomFilmStatisticsProps> = ({film}) => {
  const {planets} = film.planetConnection || {};

  return (
    <CollapsedBox title={film.title}>
      {!!planets?.length && <PlanetsDetailsTable planets={planets} />}
    </CollapsedBox>
  );
};

export default CustomFilmStatistics;
