import PlanetsDetailsTable from '../PlanetsDetailsTable';
import CollapsedBox from '../CollapsedBox';
import {Film, Planet} from '../../types';
import React, {useMemo} from 'react';

type CustomFilmStatisticsProps = {
  film: Film;
};

const CustomFilmStatistics: React.FC<CustomFilmStatisticsProps> = ({film}) => {
  const {planets} = film.planetConnection || {};
  const fetchedPlanets: Planet[] = useMemo(() => {
    if (!planets) return [];
    return planets.filter(Boolean) as Planet[];
  }, [planets]);

  return (
    <CollapsedBox title={film.title}>
      {!!planets?.length && <PlanetsDetailsTable planets={fetchedPlanets} />}
    </CollapsedBox>
  );
};

export default CustomFilmStatistics;
