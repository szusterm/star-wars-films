import PlanetsDetailsTable from '../../components/PlanetsDetailsTable';
import CollapsedBox from '../../components/CollapsedBox';
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
      <PlanetsDetailsTable planets={fetchedPlanets} />
    </CollapsedBox>
  );
};

export default CustomFilmStatistics;
