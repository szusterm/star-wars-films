import {GET_PLANETS_FROM_FILM, PlanetsFromFilmData} from '../../services/api';
import PlanetsDetailsTable from '../../components/PlanetsDetailsTable';
import CollapsedBox from '../../components/CollapsedBox';
import LoadingBox from '../../components/LoadingBox';
import InfoBox from '../../components/InfoBox';
import {useLazyQuery} from '@apollo/client';
import {Planet, Root} from '../../types';
import React, {useMemo} from 'react';

export type FilmStatisticsProps = {
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
      {isLoadingError && <InfoBox>Planet loading error</InfoBox>}
    </CollapsedBox>
  );
};

export default FilmStatistics;
