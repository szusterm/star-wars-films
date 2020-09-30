import {GET_PLANETS_FROM_FILM, PlanetsFromFilmData} from '../../api';
import PlanetsDetailsTable from '../PlanetsDetailsTable';
import {useLazyQuery} from '@apollo/client';
import CollapsedBox from '../CollapsedBox';
import {Root} from '../../types';
import React from 'react';

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

  const renderedContent = [
    arePlanetsLoading && <div>Loading</div>,
    (!planets || isLoadingError) && <div>Error</div>,
    planets && <PlanetsDetailsTable planets={planets} />
  ].find(Boolean);

  return (
    <CollapsedBox title={filmTitle} onOpen={fetchPlanets}>
      {renderedContent}
    </CollapsedBox>
  );
};

export default FilmStatistics;
