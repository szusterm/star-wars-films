import {GET_PLANETS_FROM_FILM, PlanetsFromFilmData} from '../../api';
import PlanetsDetailsTable from '../PlanetsDetailsTable';
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

  const renderedContent = [
    arePlanetsLoading && <div>Loading</div>,
    (!planets || isLoadingError) && <div>Error</div>,
    planets && <PlanetsDetailsTable planets={fetchedPlanets} />
  ].find(Boolean);

  return (
    <CollapsedBox title={filmTitle} onOpen={fetchPlanets}>
      {renderedContent}
    </CollapsedBox>
  );
};

export default FilmStatistics;
