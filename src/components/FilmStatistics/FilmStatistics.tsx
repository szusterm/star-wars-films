import {GET_PLANETS_FROM_FILM, PlanetsFromFilmData} from '../../api';
import PlanetsDetailsTable from '../PlanetsDetailsTable';
import LoadingBox from '../LoadingBox/LoadingBox';
import {useLazyQuery} from '@apollo/client';
import CollapsedBox from '../CollapsedBox';
import {Planet, Root} from '../../types';
import React, {useMemo} from 'react';

type FilmStatisticsProps = {
  filmId: string;
  filmTitle: string;
};

const FilmStatistics: React.FC<FilmStatisticsProps> = ({filmId, filmTitle}) => {
  const [
    fetchPlanets,
    {data: responseData, error: isLoadingError, loading: arePlanetsLoading}
  ] = useLazyQuery<Root, PlanetsFromFilmData>(GET_PLANETS_FROM_FILM, {
    variables: {filmId}
  });

  const {planets} = responseData?.film?.planetConnection || {};
  const fetchedPlanets: Planet[] = useMemo(() => {
    if (!planets) return [];
    return planets.filter(Boolean) as Planet[];
  }, [planets]);

  return (
    <CollapsedBox title={filmTitle} onOpen={fetchPlanets}>
      <PlanetsDetailsTable planets={fetchedPlanets} />
      {arePlanetsLoading && <LoadingBox />}
      {(!planets || isLoadingError) && <div>Error</div>}
    </CollapsedBox>
  );
};

export default FilmStatistics;
